const fs = require("fs");
const path = require('path'); // Import modul path

//jika file txt tidak terbaca gunakan modul path untuk menentukan alamat berkas 
const filePath = path.resolve(__dirname, 'notes.txt') 

const fileReadCallback = (error, data) => {
  if (error) {
    console.log("Gagal membaca berkas");
    return;
  }
  console.log(data);
};

fs.readFile(filePath, "UTF-8", fileReadCallback); 

