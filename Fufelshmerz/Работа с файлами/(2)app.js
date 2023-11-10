const fs = require('fs');

fs.appendFileSync('hello.txt', 'MMM hello my dear friend');

fs.appendFile('hello.txt', ' CC mid!', function (error) {
    if (error) throw error;

    console.log(
        'Запись файла завершена. Содержимое файла:'
    );
    let data = fs.readFileSync('hello.txt', 'utf8');
    console.log(data);
});