var CryptoJS = require("crypto-js");

export function EncryptText(plaintext) {
  return CryptoJS.AES.encrypt(plaintext, 'Test@001Best@001').toString();
}
export function DecryptJSON(encrypt) {
  if (encrypt !== "Exception" && encrypt !== "") {
    return JSON.parse(CryptoJS.enc.Base64.parse(encrypt).toString(CryptoJS.enc.Utf8));
  }
  return { txnStatus: "internal", orderId: "----" };
}

export function DecryptText(encrypt) {
  return CryptoJS.enc.Base64.parse(encrypt).toString(CryptoJS.enc.Utf8);
}
