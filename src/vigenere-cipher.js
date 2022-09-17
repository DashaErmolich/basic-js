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
  constructor(type) {
    this.isReverse = false;
    if (type === false) {
      this.isReverse = true;
    }
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 
    'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U',
    'V', 'W', 'X', 'Y', 'Z'];
  }

  encrypt(message, password) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!message || !password) {
      throw new Error ('Incorrect arguments!')
    }
    message = message.toUpperCase();
    password = password.toUpperCase();

    message = message.split('');
    password = password.split('');

    let messageLetterNumbers = [];
    let passwordLetterNumbers = [];
    let noLettersIndexesAndValues = [];

    message.forEach((letter, index) => {
      if (this.alphabet.indexOf(letter) !== -1) {
        messageLetterNumbers.push(this.alphabet.indexOf(letter));
      } else {
        noLettersIndexesAndValues.push([index, letter])
      }
    });

    password.forEach(letter => {
      if (this.alphabet.indexOf(letter) !== -1) {
        passwordLetterNumbers.push(this.alphabet.indexOf(letter))
      }
    });

    const delta = messageLetterNumbers.length - passwordLetterNumbers.length;

    if (delta > 0) {


      if (delta < passwordLetterNumbers.length) {
        let tmp = [...passwordLetterNumbers];
        const addition = tmp.splice(0, delta);
        addition.forEach(letter => {
        passwordLetterNumbers.push(letter)
      }) 
      } else {
        let repeat = Math.floor(delta / passwordLetterNumbers.length);
        let add = delta - repeat * passwordLetterNumbers.length;
        let i = repeat;
        let tmp = [...passwordLetterNumbers];

        while (i > 0 ) {
          passwordLetterNumbers.push(...tmp);
          i--;
        }
        
        let addition = [];
        addition.push(...tmp.splice(0, add));
        addition.forEach(element => {
          passwordLetterNumbers.push(element);
        })
      }
      
    } else {
      passwordLetterNumbers.splice(0, delta);
    }

    let cryptMessageLetterNumbers = [];

    const lengthOfCryptoMessage = messageLetterNumbers.length;

    {
      let i = 0;
      while (i < lengthOfCryptoMessage) {
        cryptMessageLetterNumbers.push(messageLetterNumbers[i] + passwordLetterNumbers[i]);
        i++;
      }
    }

    let encryptNMessage = [];

    cryptMessageLetterNumbers.forEach(number => {
      if (number <= this.alphabet.length - 1) {
        encryptNMessage.push(this.alphabet[number])
      } else {
        number -= this.alphabet.length;
        encryptNMessage.push(this.alphabet[number])
      }
    })

    Array.prototype.insert = function(index, ...args) {
      this.splice(index, 0, ...args);
    } 

    for (let i = 0; i < noLettersIndexesAndValues.length; i++) {
      encryptNMessage.insert(noLettersIndexesAndValues[i][0], noLettersIndexesAndValues[i][1])
    }

    if (this.isReverse === true) {
      return encryptNMessage.reverse().join('');
    } else {
      return encryptNMessage.join('');
    }

  }
  decrypt(message, password) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!message || !password) {
      throw new Error ('Incorrect arguments!')
    }

    message = message.toUpperCase();
    password = password.toUpperCase();

    message = message.split('');
    password = password.split('');

    let messageLetterNumbers = [];
    let passwordLetterNumbers = [];
    let noLettersIndexesAndValues = [];

    message.forEach((letter, index) => {
      if (this.alphabet.indexOf(letter) !== -1) {
        messageLetterNumbers.push(this.alphabet.indexOf(letter));
      } else {
        noLettersIndexesAndValues.push([index, letter])
      }
    });

    password.forEach(letter => {
      if (this.alphabet.indexOf(letter) !== -1) {
        passwordLetterNumbers.push(this.alphabet.indexOf(letter))
      }
    });

    const delta = messageLetterNumbers.length - passwordLetterNumbers.length;

    if (delta > 0) {


      if (delta < passwordLetterNumbers.length) {
        let tmp = [...passwordLetterNumbers];
        const addition = tmp.splice(0, delta);
        addition.forEach(letter => {
        passwordLetterNumbers.push(letter)
      }) 
      } else {
        let repeat = Math.floor(delta / passwordLetterNumbers.length);
        let add = delta - repeat * passwordLetterNumbers.length;
        let i = repeat;
        let tmp = [...passwordLetterNumbers];

        while (i > 0 ) {
          passwordLetterNumbers.push(...tmp);
          i--;
        }
        
        let addition = [];
        addition.push(...tmp.splice(0, add));
        addition.forEach(element => {
          passwordLetterNumbers.push(element);
        })
      }
      
    } else {
      passwordLetterNumbers.splice(0, delta);
    }

    

    let cryptMessageLetterNumbers = [];

    const lengthOfCryptoMessage = messageLetterNumbers.length;

    {
      let i = 0;
      while (i < lengthOfCryptoMessage) {
        let idx = messageLetterNumbers[i] - passwordLetterNumbers[i];
        if (idx < 0) {
          idx += this.alphabet.length;
        }
        cryptMessageLetterNumbers.push(idx);
        i++;
      }
    }

    let decryptNMessage = [];

    cryptMessageLetterNumbers.forEach(number => {
      if (number <= this.alphabet.length - 1) {
        decryptNMessage.push(this.alphabet[number])
      } else {
        number -= this.alphabet.length;
        decryptNMessage.push(this.alphabet[number])
      }
    })

    Array.prototype.insert = function(index, ...args) {
      this.splice(index, 0, ...args);
    } 

    for (let i = 0; i < noLettersIndexesAndValues.length; i++) {
      decryptNMessage.insert(noLettersIndexesAndValues[i][0], noLettersIndexesAndValues[i][1])
    }

    if (this.isReverse === true) {
      return decryptNMessage.reverse().join('');
    } else {
      return decryptNMessage.join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
