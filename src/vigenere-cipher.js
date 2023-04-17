const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(status = true) {
    this.status = status;
  }
  
  encrypt(message, key) {
    if  (!message || !key) throw new Error("Incorrect arguments!");

    message = message.toUpperCase();
    key = key.toUpperCase();
    let encryptMess = '';
    let keyRepeat = '';
    let i = 0;
    let j = 0;
    
    while (message.split(' ').join('').length !== keyRepeat.length) {
      if (i >= key.length) i = 0;
      keyRepeat += key[i];
      i++;
    }
   
    i = 0;
   
    while (message.length !== encryptMess.length) {
      if (`${message[i]}`.codePointAt() > 64 && `${message[i]}`.codePointAt() < 91) {
        encryptMess += String.fromCodePoint(((`${message[i]}`.codePointAt() + `${keyRepeat[j]}`.codePointAt()) % 26) + 65); 
        j++;
      } 
      else encryptMess += message[i];
      i++;
    }
    return this.status ? encryptMess : encryptMess.split('').reverse().join('');
  }

  decrypt(encryptMess, key) {
    if (!encryptMess || !key) throw new Error("Incorrect arguments!");
    
    key = key.toUpperCase();
    let decryptMess = '';
    let keyRepeat = '';
    let i = 0;
    let j = 0;
    
    while (encryptMess.split(' ').join('').length !== keyRepeat.length) {
      if (i >= key.length) i = 0;
      keyRepeat += key[i];
      i++;
    }
   
    i = 0;
   
    while (encryptMess.length !== decryptMess.length) {
      if (`${encryptMess[i]}`.codePointAt() > 64 && `${encryptMess[i]}`.codePointAt() < 91) {
        if ((`${encryptMess[i]}`.codePointAt() - `${keyRepeat[j]}`.codePointAt()) < 0) {
          decryptMess += String.fromCodePoint(((`${encryptMess[i]}`.codePointAt() - `${keyRepeat[j]}`.codePointAt() + 26) % 26) + 65); 
          j++;
        }
        else {
          decryptMess += String.fromCodePoint(((`${encryptMess[i]}`.codePointAt() - `${keyRepeat[j]}`.codePointAt()) % 26) + 65); 
          j++;
        }
      } 
      else decryptMess += encryptMess[i];
      i++;
    }
    return this.status ? decryptMess : decryptMess.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
