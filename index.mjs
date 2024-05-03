/* eslint-disable no-console */

async function asyncFn() {
   const message = process.argv[2] ?? null;

   const obj = {
      foo: '',
   };

   obj.foo ||= 'Well... ';

   if (message) {
      obj.message = true;
   }

   if (obj?.message) {
      console.log(obj.foo + message);
   } else {
      console.log('No message received');
   }
}

await asyncFn();
