/*
*
*/

var PUZZLE_PACK = [
    "A man a plan a canal: panama","For score and seven years ago","Who's on first?",
    "Wallace and Gromit","Math is fun","Mount Olympus","The Cubs","The Bears",
    "Barack Obama","Michelle Obama", "John McCain", "Bruce Rauner", "Rahm Emmanuel",
    "Fifty States", "Thirteen colonies", "Chicago fire", "Three-hundred and sixty five days",
    "Gordon Ramsay","Futon Mattress","Rick and Morty"
];
var LETTER_OPTIONS = {
    "A": {
        "numeric_value": 1,
        "options": [
            {"difficulty" : 1,"prompt": "It's the square root of 1"},
            {"difficulty" : 1,"prompt": "It's the difference of six and five"},
            {"difficulty" : 1,"prompt": "It's thirty-seven divided by thirty-seven"},
            {"difficulty" : 1,"prompt": "It's negative four plus five"},
            {"difficulty" : 1,"prompt": "It's fifty minus forty-nine"}
        ]
    },
    "B": {
        "numeric_value": 2,
        "options": [
            {"difficulty" : 1,"prompt": "It's the square root of four"},
            {"difficulty" : 1,"prompt": "It's six plus negative four"},
            {"difficulty" : 1,"prompt": "It's twelve divided by six"},
            {"difficulty" : 1,"prompt": "It's four divided by two"},
            {"difficulty" : 1,"prompt": "It's twenty-four divided by twelve"},
            {"difficulty" : 1,"prompt": "It's thirty-six divided by eighteen"}
        ]
    },
    "C": {
        "numeric_value": 3,
        "options": [
            {"difficulty" : 1,"prompt": "It's the square root of nine"},
            {"difficulty" : 1,"prompt": "It's eight minus five"},
            {"difficulty" : 1,"prompt": "It's twelve minus nine"},
            {"difficulty" : 1,"prompt": "It's sixty divided by twenty"},
            {"difficulty" : 1,"prompt": "It's fifteen divided by five"}
        ]
    },
    "D": {
        "numeric_value": 4,
        "options": [
            {"difficulty" : 1,"prompt": "It's two squared"},
            {"difficulty" : 1,"prompt": "It's the square root of sixteen"},
            {"difficulty" : 1,"prompt": "It's eighty divided by twenty"},
            {"difficulty" : 1,"prompt": "It's sixty divided by fifteen"}
        ]
    },
    "E": {
        "numeric_value": 5,
        "options": [
            {"difficulty" : 1,"prompt": "It's thirty divided by six"},
            {"difficulty" : 1,"prompt": "It's the square root of twenty-five"},
            {"difficulty" : 1,"prompt": "It's ten plus negative five"},
            {"difficulty" : 1,"prompt": "It's twenty-five divided by five"},
            {"difficulty" : 1,"prompt": "It's forty-five divided by nine"},
        ]
    },
    "F": {
        "numeric_value": 6,
        "options": [
            {"difficulty" : 1,"prompt": "It's thirty divided by five"},
            {"difficulty" : 1,"prompt": "It's twelve divided by two"},
            {"difficulty" : 1,"prompt": "It's the square root of thirty-six"},
            {"difficulty" : 1,"prompt": "It's sixty divided by ten"},
            {"difficulty" : 1,"prompt": "It's three times two"},
        ]
    },
    "G": {
        "numeric_value": 7,
        "options": [
            {"difficulty" : 1,"prompt": "It's forty-nine divided by seven"},
            {"difficulty" : 1,"prompt": "It's the square-root of forty-nine"},
            {"difficulty" : 1,"prompt": "It's fourteen divided by two"},
            {"difficulty" : 1,"prompt": "It's thirty-five divided by five"}
        ]
    },
    "H": {
        "numeric_value": 8,
        "options": [
            {"difficulty" : 1,"prompt": "It's two cubed"},
            {"difficulty" : 1,"prompt": "It's four times two"},
            {"difficulty" : 1,"prompt": "It's the square root of sixty four"},
            {"difficulty" : 1,"prompt": "It's sixty-four divided by eight"},
            {"difficulty" : 1,"prompt": "It's twelve minus four"}
        ]
    },
    "I": {
        "numeric_value": 9,
        "options": [
            {"difficulty" : 1,"prompt": "It's three squared"},
            {"difficulty" : 1,"prompt": "It's three times three"},
            {"difficulty" : 1,"prompt": "It's twenty seven divided by three"},
            {"difficulty" : 1,"prompt": "It's ninety divided by ten"},
            {"difficulty" : 1,"prompt": "It's the square root of eighty-one"},
            {"difficulty" : 1,"prompt": "It's fourty-five divided by five"}
        ]
    },
    "J": {
        "numeric_value": 10,
        "options": [
            {"difficulty" : 1,"prompt": "It's two times five"},
            {"difficulty" : 1,"prompt": "It's one-hundred divided by ten"},
            {"difficulty" : 1,"prompt": "It's fifty divided by five"},
            {"difficulty" : 1,"prompt": "It's the square root of one-hundred"},
            {"difficulty" : 1,"prompt": "It's six hundred divided by sixty"},
            {"difficulty" : 1,"prompt": "It's two and a half times four"}
        ]
    },
    "K": {
        "numeric_value": 11,
        "options": [
            {"difficulty" : 1,"prompt": "It's sixty-six divided by six"},
            {"difficulty" : 1,"prompt": "It's fifteen minus four"},
            {"difficulty" : 1,"prompt": "It's five plus six"},
            {"difficulty" : 1,"prompt": "It's one dozen minus one"}
        ]
    },
    "L": {
        "numeric_value": 12,
        "options": [
            {"difficulty" : 1,"prompt": "It's three times four"},
            {"difficulty" : 1,"prompt": "It's twenty-four divided by two"},
            {"difficulty" : 1,"prompt": "It's sixteen minus four"},
            {"difficulty" : 1,"prompt": "It's six times two"}

        ]
    },
    "M": {
        "numeric_value": 13,
        "options": [
            {"difficulty" : 1,"prompt": "It's a bakers dozen"},
            {"difficulty" : 1,"prompt": "It's nine plus four"},
            {"difficulty" : 1,"prompt": "It's twenty-six divided by two"},
            {"difficulty" : 1,"prompt": "It's twenty-one minus eight"},
            {"difficulty" : 1,"prompt": "It's seven plus six"}
        ]
    },
    "N": {
        "numeric_value": 14,
        "options": [
            {"difficulty" : 1,"prompt": "It's seven times two"},
            {"difficulty" : 1,"prompt": "It's twenty-eight divided by two"},
            {"difficulty" : 1,"prompt": "It's fourty-two divided by three"},
            {"difficulty" : 1,"prompt": "It's nine plus five"}
        ]
    },
    "O": {
        "numeric_value": 15,
        "options": [
            {"difficulty" : 1,"prompt": "It's five times three"},
            {"difficulty" : 1,"prompt": "It's forty-five divided by three"},
            {"difficulty" : 1,"prompt": "It's one-hundred and fifty divided by fifteen"},
            {"difficulty" : 1,"prompt": "It's thirty divided by two"},
            {"difficulty" : 1,"prompt": "It's eight plus seen"}
        ]
    },
    "P": {
        "numeric_value": 16,
        "options": [
            {"difficulty" : 1,"prompt": "It's eight times two"},
            {"difficulty" : 1,"prompt": "It's thirty-two divided by two"},
            {"difficulty" : 1,"prompt": "It's sixty-four divided by four"},
            {"difficulty" : 1,"prompt": "It's four squared"}
        ]
    },
    "Q": {
        "numeric_value": 17,
        "options": [
            {"difficulty" : 1,"prompt": "It's twelve plus five"},
            {"difficulty" : 1,"prompt": "It's thirty-four divided by two"},
            {"difficulty" : 1,"prompt": "It's eight plus nine"}
        ]
    },
    "R": {
        "numeric_value": 18,
        "options": [
            {"difficulty" : 1, "prompt": "It's three times six"},
            {"difficulty" : 1, "prompt": "It's half of thirty-six"},
            {"difficulty" : 1, "prompt": "It's nine times two"},
            {"difficulty" : 1, "prompt": "It's seventy two divided by four"}
        ]
    },
    "S": {
        "numeric_value": 19,
        "options": [
            {"difficulty" : 1, "prompt": "It's twenty-five minus six"},
            {"difficulty" : 1, "prompt": "It's twelve plus seven"},
            {"difficulty" : 1, "prompt": "It's twenty-nine minus ten"},
            {"difficulty" : 1, "prompt": "It's four plus fifteen"},
            {"difficulty" : 1, "prompt": "It's twenty plus negative one"}
        ]
    },
    "T": {
        "numeric_value": 20,
        "options": [
            {"difficulty" : 1, "prompt": "It's fifty minus thirty"},
            {"difficulty" : 1, "prompt": "It's fifteen plus five"},
            {"difficulty" : 1, "prompt": "It's the number of toes"},
            {"difficulty" : 1, "prompt": "It's forty divided by two"},
            {"difficulty" : 1, "prompt": "It's ten times two"},
            {"difficulty" : 1, "prompt": "It's four times five"},
            {"difficulty" : 1, "prompt": "It's one-hundred divided by five"}
        ]
    },
    "U": {
        "numeric_value": 21,
        "options": [
            {"difficulty" : 1, "prompt": "It's seven times three"},
            {"difficulty" : 1, "prompt": "It's forty-two divided by two"},
            {"difficulty" : 1, "prompt": "It's thirty minus nine"},
            {"difficulty" : 1, "prompt": "It's sixty-three divided by three"},
            {"difficulty" : 1, "prompt": "It's nine plus twelve"}
        ]
    },
    "V": {
        "numeric_value": 22,
        "options": [
            {"difficulty" : 1, "prompt": "It's eleven times two"},
            {"difficulty" : 1, "prompt": "It's fourteen plus eight"},
            {"difficulty" : 1, "prompt": "It's ten plus twelve"},
            {"difficulty" : 1, "prompt": "It's forty-four divided by two"},
            {"difficulty" : 1, "prompt": "It's thirty-six minus fourteen"},
            {"difficulty" : 1, "prompt": "It's sixteen plus six"}

        ]
    },
    "W": {
        "numeric_value": 23,
        "options": [
            {"difficulty" : 1, "prompt": "It's forty-six divided by two"},
            {"difficulty" : 1, "prompt": "It's thirty minus seven"},
            {"difficulty" : 1, "prompt": "It's one less than two dozen"},
            {"difficulty" : 1, "prompt": "It's sixteen plus seven"}
        ]
    },
    "X": {
        "numeric_value": 24,
        "options": [
            {"difficulty" : 1, "prompt": "It's four times six"},
            {"difficulty" : 1, "prompt": "It's double twelve"},
            {"difficulty" : 1, "prompt": "It's six times four"},
            {"difficulty" : 1, "prompt": "It's half of forty-eight"},
            {"difficulty" : 1, "prompt": "It's seventy-two divided by three"},
            {"difficulty" : 1, "prompt": "It's thirty-six minus twelve"},
            {"difficulty" : 1, "prompt": "It's two dozen"}
        ]
    },
    "Y": {
        "numeric_value": 25,
        "options": [
            {"difficulty" : 1, "prompt": "It's five times five"},
            {"difficulty" : 1, "prompt": "It's five squared"},
            {"difficulty" : 1, "prompt": "It's two and a half times ten"},
            {"difficulty" : 1, "prompt": "It's seventy-five minus fifty"},
            {"difficulty" : 1, "prompt": "It's thirty minus five"},
            {"difficulty" : 1, "prompt": "It's one-hundred divided by four"}
        ]
    },
    "Z": {
        "numeric_value": 26,
        "options": [
            {"difficulty" : 1, "prompt": "It's thirteen times two"},
            {"difficulty" : 1, "prompt": "It's two dozen plus two"},
            {"difficulty" : 1, "prompt": "It's half of fourty-six"},
            {"difficulty" : 1, "prompt": "It's four squared and ten"},
            {"difficulty" : 1, "prompt": "It's 2.25 years in months"},
            {"difficulty" : 1, "prompt": "It's thirty minus four"}
        ]
    }
}

var PUZZLE_OFFSET_AMOUNT = 14;
var PUZZLE_SOLUTION="ABOMINABLE SNOWMAN";
if (parse_get_parameter("puzzle") != "Not found") {
    PUZZLE_SOLUTION = caesar_cipher(parse_get_parameter("puzzle",true), -1 * PUZZLE_OFFSET_AMOUNT);
}

function put_table() {
    var table_columns = 6;
    document.write("<table style='width:50%'><tr>");
    var column_index = 0;
    for (option in LETTER_OPTIONS){
        document.write(
            "<td style='border:1px solid black;text-align:center'>" + option + " - "
            + LETTER_OPTIONS[option]["numeric_value"] + "</td>");
        column_index = (column_index + 1) % table_columns;
        if(column_index == 0){
            document.write("</tr><tr>");
        }
    }
    document.write("</tr></table>")
}

function generate_letter_dropdown(id) {
    var identifier = "letter" + id;
    document.write("<select id='"+identifier+"' name='" + identifier + "' onchange='populate_solution()'>");
    document.write("<option></option>");
    for(letter in LETTER_OPTIONS){
        document.write("<option value='" + letter + "'>"
            + LETTER_OPTIONS[letter]["numeric_value"] + " - "
            + letter + "</option>");
    }
    document.write("</select>");
}

function put_expressions() {
    document.write("<table style='width:50%'>");
    var expression_count = 0;
    for (letter_index in PUZZLE_SOLUTION){
        letter = PUZZLE_SOLUTION[letter_index];
        if(LETTER_OPTIONS[letter] != undefined) {
            document.write("<tr><td>");
            document.write(random_choice(LETTER_OPTIONS[letter]["options"])["prompt"]);
            document.write("</td><td>");
            generate_letter_dropdown(expression_count);
            document.write("</td></tr>");
            expression_count += 1;
        }
    }
    document.write("</table>");
}

function populate_solution() {
    var revealed_solution = "";

    for(var i=0; i < PUZZLE_SOLUTION.length; i++) {
        var item = document.getElementById("letter" + i);
        if(item != undefined && item.selectedIndex != 0) {
            revealed_solution += " " + item[item.selectedIndex].value;
        } else {
            revealed_solution += " _";
        }
    }
    document.getElementById("revealed_solution").innerHTML = revealed_solution;
}

function redirect_to_new_puzzle(puzzle) {
    var puzzle_proposal = puzzle.replace(/[^a-z]/gi ,"");
    window.location = "./?puzzle=" + caesar_cipher(puzzle_proposal, PUZZLE_OFFSET_AMOUNT);
}

function submit_form() {
    var puzzle_proposal = document.getElementById("puzzle_field").value;
    redirect_to_new_puzzle(puzzle_proposal);
}

function goto_random_puzzle() {
    redirect_to_new_puzzle(random_choice(PUZZLE_PACK));
}

setInterval(populate_solution, 1000);
