function Task3(arr) {
    const strings = [...new Set(arr)];
    
    return strings.map((el, i) => ({str: el, count: arr.filter((str) => str === el).length}))
        .sort((a, b) => a.count - b.count)
        .map((obj) => obj.str);
}


const arr = ['banana', 'apple', 'melon', 'apple', 'banana', 'banana'];

console.log(Task3(arr));