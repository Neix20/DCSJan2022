const fs = require('fs');
const util = require('util');

const readdir = util.promisify(fs.readdir);

const main = async function() {
    let fileName_arr = await readdir("img\\input1");
    console.log(fileName_arr);
};

main();