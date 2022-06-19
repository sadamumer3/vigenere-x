# Vigenere X

A package to encrypt and decrypt messages using the Vigenere cipher with some extra features.

Its Centered on [Vigenère cipher](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher).

<!-- # Example -->

<!-- _Basic Usage_ -->

# Example

## Main Functions

### Main functions are encode and decode to perform basic encryption / decryption.

```js
var VigenereX = require("vigenere-x");

// for encoding
var cipher = VigenereX.encode("Hi, Its test/input text.", "MYKEY");
// returns => 'Tg, Sxq fccx/gznex rqvd.'

// for decoding
var plain = VigenereX.decode("Tg, Sxq fccx/gznex rqvd.", "MYKEY");
// returns  => 'Hi, Its test/input text.'
```

<hr>

## Other Functions

### Other functions contains methods used under the hood like length of a string after beign validated or auto-repeating a key.

<br>

#### For auto repeating a key to same length as input string

```js
var repeatedKey = VigenereX.Utils.equateKey(
  "lorem unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa",
  "autorepeat"
);
// returns => 'autorepeatautorepeat...autorepeatau'
```

<br>

#### For finding length of a given string after being validated, incase we want to use custom key

```js
var textLength = VigenereX.Utils.textLength("Hi, Its test/input text.");
// returns  => 18
```
