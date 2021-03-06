const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr =[],
        res2 = [];
    arr = expr.split('**********');

    for (let i = 0; i < arr.length; i++ ) {
        let el = arr[i];
        let str2 = '';
        for (let j = 0; j < el.length ; j+=10) {
            let el2 = el.slice(j, j+10);
            let str = '';
            for (let k = 0; k < el2.length; k += 2) {
                let compare = (el2[k] + '' + el2[k+1]);
                if (compare === '10') {
                    str += '.';
                } else if (compare === '11') {
                    str += '-';
                }
            }
            str2 += MORSE_TABLE[str];
        }
        res2.push(str2);
    }
    return res2.join(' ');
}

module.exports = {
    decode
}



