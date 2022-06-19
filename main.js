var encode = require("./lib/encode.js");
var decode = require("./lib/decode.js");

let _Utils = new (require("./lib/utils"))();

/**
 * Its base object of package vigenere-x.
 *
 * It contains `encode()`,`decode()` and `Utils` Object .
 *
 *
 * ```js
 * import VigenereX from 'vigenere-x';
 * ```
 * @author Sadam Umer (`X`)
 * @date June 2022
 */
module.exports = {
  /**
   * It executes encoding process from `plain text` to `cipher text`.
   *
   * ```js
   * import vigenereX from 'vigenere-x';
   * cipher = vigenereX.encode(plainText, keyText);
   * ```
   *
   */
  encode: encode,
  /**
   * It executes decoding process from `cipher text` to `plain text`.
   * ```js
   * import vigenereX from 'vigenere-x';
   * plain = vigenereX.encode(cipherText, keyText);
   * ```
   *
   */
  decode: decode,
  /**
   *
   * This Object contains methods used in encoding/decoding process.
   *
   * @object Utils
   */
  Utils: _Utils,
};
