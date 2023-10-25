const { EventEmitter } = require('events');
 
const myEmitter = new EventEmitter();
 
const birthday = (name) => {
    console.log(`Happy birthday ${name}!`);
}

const onbirthdayEventListener = ({name}) => {
    birthday(name);
  }

myEmitter.on('birthday', onbirthdayEventListener);
myEmitter.emit('birthday', { name: 'Erlangga'});
   
/*TODO 1: Buat atau impor variabel EventEmitter dari core module events.
TODO 2: Buat variabel myEmitter yang merupakan instance dari EventEmitter.
TODO 3: Tentukan birthdayEventListener sebagai aksi ketika event ‘birthday’ dibangkitkan pada myEmitter.
TODO 4: Bangkitkan event ‘birthday’ pada myEmitter dengan method emit() dan beri nilai argumen listener dengan nama Anda.

// TODO 1
 
const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
}
 
// TODO 2
 
// TODO 3
 
// TODO 4
*/