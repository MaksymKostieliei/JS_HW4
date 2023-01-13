class CustomString {
    constructor() { }

    reverse(string) {
        let splitString = string.split("");
        let reverseArray = splitString.reverse();
        let joinArray = reverseArray.join("");

        return joinArray;
    }

    ucFirst(string) {
        let firstUpperCase = string.charAt(0).toUpperCase() + string.slice(1);

        return firstUpperCase;
    }

    ucWords(string) {
        let splitStringArr = string.split(" ");
        let upperCaseArr = [];
        for (let item of splitStringArr) {
            const ucElement = item.charAt(0).toUpperCase() + item.slice(1);
            upperCaseArr.push(ucElement);
        }

        return upperCaseArr.join(" ");
    }
}

const myString = new CustomString();
console.log(myString.reverse('qwerty'));
console.log(myString.ucFirst('qwerty'));
console.log(myString.ucWords('qwerty qwerty qwerty'));