/*
	Created circa 2005 near the start of my Java career. 
	MIDIKeyboardGui.java contains MIDIKeyboardGUI and MusicPanel
	
	Summary: This 'applet' allows for keyboard input to be converted into musical notes.
	
	It is in a truly rough form when released. This class has been pieced together with very little knowledge
	of the MIDI driver or standard approaches to playing and stopping midi notes.
	
	Standard A-Z alphabet on a QWERTY-style keyboard will make musical notes in ascending pitch
	from Z, in the lower left, along each row to the highest note, P. 
	
	Special characters:
		Left and right arrow - Move scale by half-step
		Up and down arrow - Increase or decrease volume
		Left or right square bracket - Change instrument
		
	Bugs:
		Toggling shift mid-note causes the wrong note to get shut off and can leave 'live' notes.
		Speed has been mildly improved but still not impressive. Trying to play runs will demonstrate this.
*/
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.event.*;
//////////////////////////////////////////////////////////////// KeyDemoGUI
// MovingTextPanel.java - Demonstrates handling three kinds of keys:
import javax.sound.midi.*;
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
///////////////////////////////////////////////////////// class DrawingPanel

public class MIDIKeyboardGUI extends JFrame {
 
    MusicPanel drawing;
    //==========================================================constructor
    public MIDIKeyboardGUI() {
        drawing = new MusicPanel();
        this.getContentPane().add(drawing, BorderLayout.CENTER);
        
        this.setTitle("MIDIKeyboardGUI - rwberg.org/oss");
        this.pack();
        
        drawing.requestFocus();      // Give the panel focus.
    }
	
	public static void main(String[] args) {
        JFrame window = new MIDIKeyboardGUI();
        window.setDefaultCloseOperation(EXIT_ON_CLOSE);
        window.setVisible(true);
    }
}
 

class MusicPanel extends JPanel implements KeyListener {
 
	private final int staticModifier = 60;
	private final String[] keys = {"C","C#","D","Eb","E","F","F#","G","Ab","A","Bb","B"};
	private int[] notes = {12,7,4,16,31,17,19,//g
							  21,40,23,24,26,11,9,//n
								41,43,28,33,14,35,38,//u
								5,29,2,36,0};
	private boolean[] isActive = new boolean[123];

	private int velocity = 50;
	private int pitchBend = 8192; //default center of spectrum
	private int longModifier = 0;
	private int instrument = 1;
 
	//Midi Components
	Synthesizer synth = null;
	MidiChannel channels[];
	Instrument[] instrs;
 
	//UI Components
	JLabel keyLabel,instrumentLabel;
    
	public MusicPanel() {
		try
		{
			synth = MidiSystem.getSynthesizer();
			synth.open();
		} catch(Exception e) { e.printStackTrace();}

		channels = synth.getChannels();
		Soundbank bank = synth.getDefaultSoundbank();
		synth.loadAllInstruments(bank);
		instrs = synth.getLoadedInstruments();
  
		keyLabel = new JLabel();
		instrumentLabel = new JLabel();
		updateKey();
		updateInstrument();
		
		this.setLayout(new GridLayout(5,1));
        this.setBackground(Color.white);
		this.add(keyLabel);
		this.add(instrumentLabel);
        this.setPreferredSize(new Dimension(300, 200));
        this.addKeyListener(this);  // This class has its own key listeners.
		
        this.setFocusable(true);    // Allow panel to get focus
  
    }
	
    public void paintComponent(Graphics g) {
        super.paintComponent(g);
    }
	public void keyTyped(KeyEvent e){}
 
    /** This listener is called for both character and non-character keys. */
    public void keyPressed(KeyEvent e) {
		if(isNoteKey(e)) triggerNote(e, "start");
		else //-- Process arrow "virtual" keys
		{
			 switch (e.getKeyCode()) {
 				 case KeyEvent.VK_RIGHT: changeLongModifier(1) ; break; 
				 case KeyEvent.VK_LEFT : changeLongModifier(-1) ; break; //decrease scale
				 case KeyEvent.VK_UP   : changeVelocity(1);    break;  //increase volume
				 case KeyEvent.VK_DOWN : changeVelocity(-1); break;
				 case KeyEvent.VK_EQUALS : pitchBend= Math.min(pitchBend+500,32692); break;
				 case KeyEvent.VK_MINUS :  pitchBend= Math.max(pitchBend-500,192); break;
				 case KeyEvent.VK_CLOSE_BRACKET : changeInstrument(1);	break; 
				 case KeyEvent.VK_OPEN_BRACKET :  changeInstrument(-1); break; 
			 }           
			channels[1].setPitchBend(pitchBend);
			this.repaint();  // Display the changes
		}
    }

    public void keyReleased(KeyEvent e) 
	{
	  if(isNoteKey(e)) triggerNote(e, "kill");
	}
 
	public void triggerNote(KeyEvent e, String action) 
	{
		int starter = (int)e.getKeyChar();
		//if it's not hitting the right one then stop
		if( (isActive[starter] && action.equals("start")) || 
				(! isActive[starter] && action.equals("kill"))) return;
		  
		int shortModifier = 0;
		if (e.isShiftDown()) shortModifier += 1;
		if (e.isAltDown()) shortModifier -= 1;

		int myNoteValue = 0;
		if(starter <= 90) myNoteValue = starter % 65;
		else myNoteValue = starter % 97;

		if(action.equals("start")) 
		{
			isActive[starter] = true;
			channels[1].noteOn(notes[myNoteValue]+shortModifier+longModifier+staticModifier,velocity);
		}
		else
		{
			isActive[starter] = false;
			channels[1].noteOff(notes[myNoteValue] + shortModifier + longModifier + staticModifier);
		} 
	}
	
	public void changeInstrument(int i)
	{
		if(instrument + i < instrs.length && instrument + i >= 0)
		{
			Patch instrumentPatch = instrs[instrument+i].getPatch();
			channels[1].programChange(instrumentPatch.getBank(),
                instrumentPatch.getProgram());
			instrument += i;
			updateInstrument();
		}
	}
	
	public void changeLongModifier(int amount)
	{
		if(isPlaying()) return;
		longModifier += ((longModifier+staticModifier)+amount >= 0 && (longModifier+staticModifier)+amount <= 127)? amount:0;
		updateKey();
	}
	
	
	public void changeVelocity(int amount)
	{
		velocity += amount;		
	}

	public boolean isPlaying()
	{
		for(int i = 0; i < isActive.length; i++) if(isActive[i]) return true;
		return false;
	}
		
	public void updateInstrument()
	{ 
		instrumentLabel.setText("The instrument is a " + instrs[instrument].getName());

	}
	public void updateKey()
	{		
		keyLabel.setText("The key is "+ keys[(longModifier+staticModifier)%12]);
	}

	public boolean isNoteKey(KeyEvent e)
	{
		int val = (int)e.getKeyChar();
		return ((val >= 65 && val <= 90) || (val >= 97 && val <= 122));
	}
}