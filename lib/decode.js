/**
 * It executes decoding process from `cipher text` to `plain text`.
 * ```js
 * import vigenereX from 'vigenere-x';
 * plain = vigenereX.encode(cipherText, keyText);
 * ```
 * @param {string} cipherText
 * @param {string} keyText
 * @return {string} plainText.
 */
function decode(cipherText, keyText) {
  const Crypt = new (require("./core/crypt.js"))();

  let plainText = Crypt.crypt(cipherText, keyText, decode.name);

  return plainText;
}

module.exports = decode;
