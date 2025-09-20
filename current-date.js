let time = new Date();

let date = time.getDate();
date = date < 10 ? '0' + date : date;

let month = time.getMonth();
month = month < 10 ? '0' + month : month;
let year = time.getFullYear();

console.log(`mm-dd-yyyy: ${month}-${date}-${year}`);
console.log(`mm/dd/yyyy: ${month}/${date}/${year}`);
console.log('');
console.log(`dd-mm-yyyy: ${date}-${month}-${year}`);
console.log(`dd/mm/yyyy: ${date}/${month}/${year}`);
