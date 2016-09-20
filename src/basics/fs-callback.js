// read file in asynchronous way

let fs = require('fs');

// asyn function receives callback as its last parameter;
// callback receives err as its first parameter;
let data = fs.readFile('input.json', (err, data) => {
    if (err)
    {
        console.error(err.stack);
        return;
    }

    console.log('readFile');
    console.log(data.toString());

});

let readFileByBytes = () => {
    let buf = new Buffer(100);
    console.log('ready to open file');
    fs.open('input.json', 'r+', (err, fd) => {
        if (err) {
            return console.error(err);
        }
        console.log('open successfully!');

        console.log('ready to read file: ');

        fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
            if (err) {  
                console.error(err);
            }
            console.log(bytes + " bytes read.");

            if(bytes > 0) {
                console.log(buf.slice(0, bytes).toString());
            }

        })
    }


    )
}

readFileByBytes();

console.log('fs-callback: the end..........');

module.exports.fs_read = data;
