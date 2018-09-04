// Cryptography setup
const crypto = require("crypto");
const algorithm = process.env.CRYPTO_ALGO;
const password = process.env.CRYPTO_PASSWORD;

function encrypt(text) {
  let cipher = crypto.createCipher(algorithm, password);
  let crypted = cipher.update(text, "utf8", "hex");
  crypted += cipher.final("hex");
  return crypted;
}

function decrypt(text) {
  if (text === null) {
    return null;
  }
  let decipher = crypto.createDecipher(algorithm, password);
  let dec = decipher.update(text, "hex", "utf8");
  dec += decipher.final("utf8");
  return dec;
}

module.exports = {
  decrypt: decrypt,
  encrypt: encrypt,
};
