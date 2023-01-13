class Validator {
    constructor() { }
    checkIsEmail(string) {
        let splitString = string.split("");

        for (let item of splitString) {
            if (item === '@') return true;      
        }

        return false;
    }
    checkIsDomain(string) {
        let splitString = string.split(".");
        for (let item of splitString) {
            if (item === 'com') return true;      
        }

        return false;
    }
    checkIsDate(string) {
        let splitString = string.split(".");
        for (let item of splitString) {
            if (item === '2019' ) return true;      
        }

        return false;
    }
    checkIsPhone(string) {
        let splitString = string.split(" ");
        for (let item of splitString) {
            if (item === '+38') return true;      
        }

        return false;
    }
}

var validator = new Validator();
console.log(validator.checkIsEmail('vasya.pupkin@gmail.com'));
console.log(validator.checkIsDomain('google.com'));
console.log(validator.checkIsDate('30.11.2019'));
console.log(validator.checkIsPhone('+38 (066) 937-99-92'));