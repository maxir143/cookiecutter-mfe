import cryptoJS from 'crypto-js';

export const encryptStringAES = (
  valueToEncrypt: string,
  key: string,
  initializationVector: string,
): string => {
  try {
    const keyBase64 = cryptoJS.enc.Base64.parse(key);

    const ivBase64 = cryptoJS.enc.Base64.parse(initializationVector);

    return cryptoJS.AES.encrypt(valueToEncrypt, keyBase64, {
      iv: ivBase64,
    }).toString();
  } catch (error) {
    return '';
  }
};
