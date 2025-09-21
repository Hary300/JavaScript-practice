let str = 'w3resource';
console.log(str);
for (let i = str.length - 1; i >= 0; i--) {
  let lastcharacter = str[str.length - 1];
  let rest = str.slice(0, -1);
  str = lastcharacter + rest;
  console.log(str);
}
