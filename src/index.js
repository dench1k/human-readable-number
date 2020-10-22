module.exports = function toReadable(number) {
    const digitNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tenDigitNames = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const isSecondZero = number.toString()[1] === '0';
    const isSecondOne = number.toString()[1] === '1';
    const isLastZero = number.toString().endsWith('0');
    const getTenDigit = tenDigitNames[number.toString()[0] - 2];
    const getTenDigitSecond = digitNames[number.toString()[1]];
    const getHundredDigit = digitNames[number.toString()[0]];
    const getHundredDigitTens = digitNames[number.toString()[1] + number.toString()[2]];
    const getHundredDigitTensRound = tenDigitNames[number.toString()[1] - 2];
    const getHundredDigitThird = digitNames[number.toString()[2]];
    if (number < 20) {
        return digitNames[number];
    } else if (number >= 20 && number < 100) {
        return isLastZero ? `${getTenDigit}` : `${getTenDigit} ${getTenDigitSecond}`;
    } else if (number >= 100 && number < 1000) {
        let word = `${getHundredDigit} hundred`;

        if (isSecondZero && isLastZero) {
            word += ``;
        } else if (isSecondZero) {
            word += ` ${getHundredDigitThird}`;
        } else if (isLastZero) {
            if (isSecondOne) {
                word += ` ${getHundredDigitTens}`;
            } else {
                word += ` ${getHundredDigitTensRound}`;
            }
        } else {
            if (isSecondOne) {
                word += ` ${getHundredDigitTens}`;
            } else {
                word += ` ${getHundredDigitTensRound} ${getHundredDigitThird}`;
            }
        }

        return word;
    }

}
