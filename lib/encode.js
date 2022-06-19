/**
 * It executes encoding process from `plain text` to `cipher text`.
 *
 * ```js
 * import vigenereX from 'vigenere-x';
 * cipher = vigenereX.encode(plainText, keyText);
 * ```
 * @param {string} plainText
 * @param {string} keyText
 * @return {string} cipherText.
 */
function encode(plainText, keyText) {
  const Crypt = new (require("./core/crypt.js"))();

  let cipherText = Crypt.crypt(plainText, keyText, encode.name);

  return cipherText;
}

module.exports = encode;
