/**
 * The cover/main class named as "Crypt".
 */
class Crypt {

  /**
   * Alphabets array
   * 
   */
  alphabets = [
    "A",  "B",  "C",  "D",  "E",  "F",  "G",   
    "H",  "I",  "J",  "K",  "L",  "M",  "N",
    "O",  "P",  "Q",  "R",  "S",  "T",  "U",
    "V",  "W",  "X",  "Y",  "Z",
    ];
  /**
   * Checks if given character is Lower case or not
   *
   * @param {string} char
   * @returns {boolean} isLowerCase
   */
  isLowerCase(char) {
    return char == char.toLowerCase() && char != char.toUpperCase();
  }
  /**
   * Make the given Character lower case if trigger is passed true
   * @param {string } char
   * @param {boolean} trigger
   * @returns {string} char
   */
  setLowerCase(char, trigger) {
    return trigger ? char.toLowerCase() : char;
  }
  /**
   * Performs basic encoding/decoding
   *
   * @param {string } inputText
   * @param {string } keyText
   * @param {string} func
   * @returns {string} outputText
   */
  crypt(inputText, keyText, func) {
    console.time("Validating Speed:");
    let { validatedText, excludedTextArray } =
      this.validateInputText(inputText);
    console.timeEnd("Validating Speed:");

    inputText = validatedText;
    keyText = this.validateKeyText(keyText);
    let isKeyOk = this.isKeyOk(inputText, keyText);
    keyText = isKeyOk ? keyText : this.equateKey(inputText, keyText);
    let outputText = "";

    for (let index = 0; index < inputText.length; index++) {
      let isLowerChar = this.isLowerCase(inputText[index]);
      let inputIndex = this.getAlphaIndex(inputText[index]);
      let keyIndex = this.getAlphaIndex(keyText[index]);

      if (inputIndex !== undefined && keyIndex !== undefined) {
        let outputChar = this.getVigenerValue(func, inputIndex, keyIndex);
        if (outputChar !== undefined) {
          outputText = outputText + this.setLowerCase(outputChar, isLowerChar);
        }
      }
    }

    outputText = this.undoRegex(excludedTextArray, outputText);
    return outputText;
  }

  /**
   * Return index of given alphabet
   *
   * @param {string} alphabet
   * @returns {number | undefined} position of letter in alphabet[]
   */
  getAlphaIndex(alphabet) {
    var foundOn = undefined;
    for (let index = 0; index <= this.alphabets.length - 1; index++) {
      const char = this.alphabets[index];

      if (char === alphabet || char.toLowerCase() === alphabet) {
        foundOn = index;
        break;
      } else {
        foundOn = undefined;
      }
    }
    return foundOn;
  }

  /**
   * Returns encoded/decoded character
   *
   * @param {string} func
   * @param {number } inputIndex
   * @param {number } keyIndex
   * @returns {string|undefined} outputChar
   */
  getVigenerValue(func, inputIndex, keyIndex) {
    let modBy = 26;
    let outputIndex = undefined;

    if (func === "encode") {
      outputIndex = inputIndex + keyIndex;
      outputIndex = outputIndex % modBy;
    } else if (func === "decode") {
      outputIndex = Math.abs(inputIndex - keyIndex);
      outputIndex = outputIndex % modBy;
      modBy = inputIndex >= keyIndex ? 0 : 26;
      outputIndex = Math.abs(modBy - outputIndex);
    } else {
    }

    return outputIndex !== undefined ? this.alphabets[outputIndex] : undefined;
  }

  /**
   * Checks whether inputText and keyText both are of same length
   *
   * @param {string } inputText
   * @param {string } keyText
   * @returns {boolean} key is ok ?
   */
  isKeyOk(inputText, keyText) {
    if (inputText.length === keyText.length) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Validates key
   * @param {string} text
   * @returns {string} text-only
   */
  validateKeyText(text) {
    text = text.trim();
    let mainRegex = /^[A-Za-z]+$/g;
    let textArray = text.split(/(?!$)/u);

    let filterText = "";
    textArray.map((char) => {
      if (char.replace(mainRegex, "")) {
      } else {
        filterText = filterText + char;
      }
      return "";
    });

    filterText = filterText.toUpperCase();
    return filterText;
  }

  /**
   * Validates input
   *
   * @param {string} text
   * @returns {{validatedText: string, excludedTextArray:string[]}} validated text-only
   */
  validateInputText(text) {
    text = text.trim();
    // let mainRegex = /^[A-Za-z0-9\s-]+$/g;
    let mainRegex = /^[A-Za-z]+$/g;
    // let minusRegex = /--+/g;
    // let spec = /.,;!+/g;

    let textArray = text.split(/(?!$)/u);

    let excludedTextArray = [];
    let cleanText = "";

    let filterText = "";
    textArray.map((char, index) => {
      if (char.replace(mainRegex, "")) {
        excludedTextArray.push([index, char]);
      } else {
        filterText = filterText + char;
      }
      return "";
    });

    cleanText = filterText;
    return { validatedText: filterText, excludedTextArray: excludedTextArray };
  }

  equateKey = (inputText, key) => {
    let isKeyOk = this.isKeyOk(inputText, key);
    let equatedKey = "";

    if (isKeyOk) {
      return key;
    } else if (!isKeyOk) {
      let inputCount = inputText.length;
      let keyCount = key.length;

      let keyText = key;
      let inputLen = inputText.length;
      let equaKey = keyText;

      let equaLen = keyText.length;
      if (keyCount < inputCount) {
        let i = 0;
        while (equaLen !== inputLen) {
          equaKey = equaKey + keyText[i];

          // -Method 1
          if (i === keyText.length - 1) {
            i = 0;
          } else {
            i = i + 1;
          }
          equaLen = equaLen + 1;
        }
      } else if (keyCount > inputCount) {
        console.log("not eq, but greator");
        equaKey = keyText.split("");

        while (equaLen !== inputLen) {
          equaKey.pop();
          equaLen = equaLen - 1;
        }
        equaKey = equaKey.join("");
      }
      equatedKey = equaKey.toString();
    }

    return equatedKey;
  };

  undoRegex(excludedTextArray, outputText) {
    outputText = outputText.split("");
    excludedTextArray.map((char) => {
      return outputText.splice(char[0], 0, char[1]);
    });

    return outputText.join("");
  }
}

module.exports = Crypt;
