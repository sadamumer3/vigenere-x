class Utils {
  static Crypt = new (require("./core/crypt"))();

  /**
   * Returns string length after validating by same regex rules used in vigenere.encode() and .decode().
   *
   * Incase you want to know input length so that you can put custom key of same length as input .
   *
   * ```js
   * import vigenereX from 'vigenere-x';
   *
   * // in Utils object
   * vigenereX.Utils.textLength(text);
   *
   * ```
   * @param {string} text input string
   * 
   * @return {number} Length of given string.

   * @date June 2022
   */
  textLength(text) {
    let { validatedText } = Utils.Crypt.validateInputText(text);

    let len = validatedText.length;
    return len;
  }

  /**
   * Returns equated key means an automatic repeating `key` untill it becomes same in-length as `input` .
   *
   * It means suppose you have `input` as `"plain text"` and you don't want to repeat `key` manualy like `"itskeyi"` .
   *
   * ```js
   * import vigenereX from 'vigenere-x';
   *
   * // in Utils object
   * vigenereX.Utils.equateKey(inputText, keyText);
   *
   * ```
   * @param {string} inputText input string
   * @param {string} keyText key string
   *
   * @return {string} Equated key
   * @date June 2022
   */
  equateKey(inputText, keyText) {
    let equatedKey = Utils.Crypt.equateKey(inputText, keyText);

    return equatedKey;
  }
}

module.exports = Utils;
