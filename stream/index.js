const fs = require('fs');
 
const writableStream = fs.createWriteStream('./stream/output.txt');
 
writableStream.write('Lorem ipsum dol\n');
writableStream.write('or sit amet, co\n');
writableStream.write('nsectetur adipi\n');
writableStream.write('scing elit, sed\n');
writableStream.write('do eiusmod tem\n');
writableStream.write('ut labore et do\n');
writableStream.write('lore magna aliq\n');
writableStream.end('null');
