function random_choice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

var CAESAR_CIPHER_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function caesar_cipher(original, rotation_amount, incremented) {
    if (original == undefined) { return original; }
    if (rotation_amount == undefined) { rotation_amount = 14; }
    if (incremented == undefined) { incremented = true; }
    var from_string = original.toUpperCase();
    var return_string = "";
    for(var i = 0; i < from_string.length; i++){
        var character = from_string.charAt(i);
        var old_position = CAESAR_CIPHER_ALPHABET.indexOf(from_string.charAt(i));
        var incrementing_offset = incremented ? i : 0;
        if(rotation_amount < 0) { incrementing_offset = -1 * incrementing_offset; }
        var new_position = (old_position + rotation_amount + incrementing_offset ) % CAESAR_CIPHER_ALPHABET.length;
        if (new_position < 0) new_position += CAESAR_CIPHER_ALPHABET.length;
        return_string += CAESAR_CIPHER_ALPHABET.charAt(new_position);
    }
    return return_string;
}

function parse_get_parameter(val) {
    var result = "Not found",
        tmp = [];
    location.search
    //.replace ( "?", "" )
    // this is better, there might be a question mark inside
    .substr(1)
        .split("&")
        .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === val) result = decodeURIComponent(tmp[1]);
    });
    return result;
}
