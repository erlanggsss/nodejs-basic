const _ = require('lodash');// 
 
const myOddEvenArray = _.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);
 
console.log(myOddEvenArray);

/* cara instalasi modul lodash (npm install n_)
    untuk running menggunnakan node ./node-package-manager/index.js

    const _ = // TODO
 
    const myOddEvenArray = _.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);
 
    console.log(myOddEvenArray);
*/
