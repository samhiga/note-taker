const fs = require('fs');
const util = require('util');
const path = require('path');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile)

function readNotes() {
    return readFileAsync(path.join(process.cwd(), '/db/db.json'), "utf8")
}

function writeNotes(data) {
    return writeFileAsync(path.join(process.cwd(), '/db/db.json'), JSON.stringify(data))
}

module.exports = {readNotes, writeNotes}