function displaySync(callback) {
    callback();
}

console.log('Начало работы программы');

setTimeout(function () {
    console.log('timeout 666');
}, 500);

setTimeout(function () {
    console.log('timeout 333');
}, 100);

displaySync(function () {
    console.log('without timeout');
});
console.log('Завершение работы программы');