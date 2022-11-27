function Task1(arr) {
    return arr.reduce((newArr, current) => {
        if (typeof current === 'object') {
            newArr.push(...Task1(current));
        } else {
            newArr.push(current);
        }

        return newArr;
    }, []);
}

console.log(Task1([1, [2, 3, 4, [5, 6, 7]], 8, 9]));