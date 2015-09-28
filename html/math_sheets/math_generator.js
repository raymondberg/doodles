
var PHRASE="ABOMINABLE SNOWMAN";

var LETTER_OPTIONS = {
    "A": {
        "numeric_value": 1,
        "options": [
            {"difficulty" : 1,"prompt": "It's the square root of 1"}
        ]
    },
    "B": {
        "numeric_value": 2,
        "options": [
            {"difficulty" : 1,"prompt": "It's the square root of 4"}
        ]
    },
    "C": {
        "numeric_value": 3,
        "options": [
            {"difficulty" : 1,"prompt": "It's the square root of 9"}
        ]
    },
    "D": {
        "numeric_value": 4,
        "options": [
            {"difficulty" : 1,"prompt": "It's 2 squared"}
        ]
    },
    "E": {
        "numeric_value": 5,
        "options": [
            {"difficulty" : 1,"prompt": "It's 30 divided by 6"}
        ]
    },
    "F": {
        "numeric_value": 6,
        "options": [
            {"difficulty" : 1,"prompt": "It's 30 divided by 5"}
        ]
    },
    "G": {
        "numeric_value": 7,
        "options": [
            {"difficulty" : 1,"prompt": "It's 49 divided by 7"}
        ]
    },
    "H": {
        "numeric_value": 8,
        "options": [
            {"difficulty" : 1,"prompt": "It's 2 cubed"}
        ]
    },
    "I": {
        "numeric_value": 9,
        "options": [
            {"difficulty" : 1,"prompt": "It's 3 squared"}
        ]
    },
    "J": {
        "numeric_value": 10,
        "options": [
            {"difficulty" : 1,"prompt": "It's 2 times 5"}
        ]
    },
    "K": {
        "numeric_value": 11,
        "options": [
            {"difficulty" : 1,"prompt": "It's 66 divided by 6"}
        ]
    },
    "L": {
        "numeric_value": 12,
        "options": [
            {"difficulty" : 1,"prompt": "It's 3 times 4"}
        ]
    },
    "M": {
        "numeric_value": 13,
        "options": [
            {"difficulty" : 1,"prompt": "It's 52 divided by 4"}
        ]
    },
    "N": {
        "numeric_value": 14,
        "options": [
            {"difficulty" : 1,"prompt": "It's 7 times 2"}
        ]
    },
    "O": {
        "numeric_value": 15,
        "options": [
            {"difficulty" : 1,"prompt": "It's 5 times 3"}
        ]
    },
    "P": {
        "numeric_value": 16,
        "options": [
            {"difficulty" : 1,"prompt": "It's 8 times 2"}
        ]
    },
    "Q": {
        "numeric_value": 17,
        "options": [
            {"difficulty" : 1,"prompt": "It's 12 plus 5"}
        ]
    },
    "R": {
        "numeric_value": 18,
        "options": [
            {"difficulty" : 1, "prompt": "It's 3 times 6"}
        ]
    },
    "S": {
        "numeric_value": 19,
        "options": [
            {"difficulty" : 1, "prompt": "It's 25 minus 6"}
        ]
    },
    "T": {
        "numeric_value": 20,
        "options": [
            {"difficulty" : 1, "prompt": "It's 4 times 5"}
        ]
    },
    "U": {
        "numeric_value": 21,
        "options": [
            {"difficulty" : 1, "prompt": "It's 7 times 3"}
        ]
    },
    "V": {
        "numeric_value": 22,
        "options": [
            {"difficulty" : 1, "prompt": "It's 11 times 2 "}
        ]
    },
    "W": {
        "numeric_value": 23,
        "options": [
            {"difficulty" : 1, "prompt": "It's 46 divided by 2"}
        ]
    },
    "X": {
        "numeric_value": 24,
        "options": [
            {"difficulty" : 1, "prompt": "4 times 6"}
        ]
    },
    "Y": {
        "numeric_value": 25,
        "options": [
            {"difficulty" : 1, "prompt": "It's 5 times 5"}
        ]
    },
    "Z": {
        "numeric_value": 26,
        "options": [
            {"difficulty" : 1, "prompt": "It's 13 times 2"}
        ]
    }
}

function put_table(){
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

function generate_letter_dropdown(id){
    document.write("<select name='letter" + id + "'>");
    for(letter in LETTER_OPTIONS){
        console.log(letter);
        document.write("<option value='" + letter + "'>"
            + LETTER_OPTIONS[letter]["numeric_value"] + " - "
            + letter + "</option>");
    }
    document.write("</select>");
}

function put_expression(expression) {
    document.write("<table style='width:50%'>");
    var expression_count = 0;
    for (letter_index in expression){
        letter = expression[letter_index];
        if(LETTER_OPTIONS[letter] != undefined) {
            document.write("<tr><td>");
            document.write(LETTER_OPTIONS[letter]["options"][0]["prompt"]);
            document.write("</td><td>");
            generate_letter_dropdown(expression_count);
            document.write("</td></tr>");
            expression_count += 1;
        }
    }
    document.write("</table>");
}
