function task4(value, degree) {
    if (degree !== 0) {
        return value * task4(value, degree-1);
    } else {
        return 1;
    }
}

console.log(task4(3,3));