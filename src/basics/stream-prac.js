let fs = require('fs');
let zlib = require('zlib');

let readerStream = fs.createReadStream('input.json');

let writerStream = fs.createWriteStream('output.txt');

let readToData = (reader) =>{

    let data = '';

    reader.setEncoding('UTF8');

    reader.on('data', (chunk) => {
        console.log(`Received ${chunk.length} bytes of data.`);
        data += chunk;
    });

    reader.on('end', () => {
        console.log('read completed.');
    });

};

let pipeSteam = (reader, writer) => {
    reader.pipe(writer);
};

let compressToGZ = (reader, output_name) => {
    reader.pipe(zlib.createGzip())
        .pipe(fs.createWriteStream(output_name));
}

readToData(readerStream);

pipeSteam(readerStream,writerStream);

compressToGZ(readerStream, 'input.json.gz');
