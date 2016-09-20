let url = new Buffer('www.google.com', 'utf-8');
let name = new Buffer('Jason Bourne');

let printBuffer = (bf) => {
    console.log(bf.toString('utf-8', 0, 5));
};

let printAlphabet = () => {
    let buf = new Buffer(26);

    for (let i =0; i < 26; i++) {
        buf[i] = i + 97;
    }
    console.log( buf.toString('ascii') );
}

printBuffer(url);

printAlphabet();

console.log(name.toJSON());