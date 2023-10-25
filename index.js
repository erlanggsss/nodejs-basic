// const user = {
//     firstName: "Erlangga",
//     lastName: "Er",
//     age: 21,
//     address: "Bogor"
//   };
  
//   console.log(`Halo, nama saya ${user.firstName}, kalian dapat memanggil saya ${user.lastName}`);
//   console.log(`Umur saya ${user.age} tahun`);
//   console.log(`Saya berasal dari ${user.address}`);

  const moment = require('moment');
 
  const date = moment().format("MMM Do YY");
  console.log(date);
   
  /**
   * output:
   * Jan 11th 21
   */