import cryptoJS from 'crypto-js';

export const decryptStringAES = (
  valueToDecrypt: string,
  key: string,
  initializationVector: string,
): string => {
  try {
    const keyBase64 = cryptoJS.enc.Base64.parse(key);

    const ivBase64 = cryptoJS.enc.Base64.parse(initializationVector);

    return cryptoJS.AES.decrypt(valueToDecrypt, keyBase64, {
      iv: ivBase64,
    }).toString(cryptoJS.enc.Utf8);
  } catch (error) {
    return '';
  }
};
