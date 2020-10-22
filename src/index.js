module.exports = function toReadable(number) {
    const digitNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tenDigitNames = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 20) {
        return digitNames[number];
    } else if (number >= 20 && number < 100) {
        return number.toString().endsWith('0') ? `${tenDigitNames[number.toString()[0] - 2]}` : `${tenDigitNames[number.toString()[0] - 2]} ${digitNames[number.toString()[1]]}`;
    } else if (number >= 100 && number < 1000) {
        let word = `${digitNames[number.toString()[0]]} hundred`;

        if (number.toString()[1] === '0' && number.toString().endsWith('0')) {
            word += ``;
        } else if (number.toString()[1] === '0') {
            word += ` ${digitNames[number.toString()[2]]}`;
        } else if (number.toString().endsWith('0')) {
            if (number.toString()[1] === '1') {
                word += ` ${digitNames[number.toString()[1] + number.toString()[2]]}`;
            } else {
                word += ` ${tenDigitNames[number.toString()[1] - 2]}`;
            }
        } else {
            if (number.toString()[1] === '1') {
                word += ` ${digitNames[number.toString()[1] + number.toString()[2]]}`;
            } else {
                word += ` ${tenDigitNames[number.toString()[1] - 2]} ${digitNames[number.toString()[2]]}`;
            }
        }

        return word;
    }

}
