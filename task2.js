function Task2(str, arr) {
    str = str.split('').sort().join('');

    return arr.filter((el) => el.split('').sort().join('') === str);
}

console.log(Task2('abba', ['aabb', 'abcd', 'bbaa', 'dada']));