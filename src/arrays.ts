/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 1) {
        return [...numbers, ...numbers];
    } else {
        return [numbers[0], numbers[numbers.length - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((number: number): number => number * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    // nums is the NUMBER version of string array numbers
    let nums = numbers.map(Number);
    // looping through nums (NUMBER array); checking if n isNaN and changing it to 0 if true
    nums = nums.map((n: number): number => (isNaN(n) ? (n = 0) : n));
    return nums;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const characters: string[] = amounts.map((character: string): string =>
        character[0] === "$" ? character.substring(1) : character
    );
    let numbers = characters.map(Number);
    numbers = numbers.map((n: number): number => (isNaN(n) ? (n = 0) : n));
    return numbers;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const removeQuestion: string[] = messages.filter(
        (message: string): boolean => !message.endsWith("?")
    );
    return removeQuestion.map((message: string): string =>
        message.endsWith("!") ? message.toUpperCase() : message
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.filter((word: string): boolean => word.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const remove = colors.filter(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    if (colors.length === 0) {
        return true;
    } else if (remove.length === colors.length) {
        return true;
    } else {
        return false;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum: number = addends.reduce(
        (accum: number, elt: number) => accum + elt,
        0
    );
    const printSum = sum.toString();
    const eql = "=";
    const characters = addends.map((num: number): string => num.toString());
    const plusSign = characters.join("+");
    const merge = printSum + eql + plusSign;
    if (addends.length === 0) {
        return "0=0";
    } else {
        return merge;
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const negative = values.filter((value: number): boolean => value < 0);
    if (negative.length === 0) {
        const sum = values.reduce(
            (accum: number, elt: number) => accum + elt,
            0
        );
        return [...values, sum];
    } else {
        const firstNegativeIndex = values.findIndex(
            (value: number): boolean => value < 0
        );
        const previousNumbers = values.slice(0, firstNegativeIndex);
        const sum = previousNumbers.reduce(
            (accum: number, elt: number): number => accum + elt,
            0
        );
        const valuesInside = [...values];
        valuesInside.splice(firstNegativeIndex + 1, 0, sum);
        return valuesInside;
    }
}
