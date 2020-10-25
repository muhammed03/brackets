module.exports = function check(str, bracketsConfig) {

  if (str.split('').length%2!=0){
    console.log("false")
    return false;
  }
  let Config = {};

  for (let i=0; i<bracketsConfig.length;i++){
    Config[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }

  let array = str.split('');
  let stack = [];
  let n = 0;
  for (let i = 0; i<=array.length;i++){

    if (i===array.length){
      if (stack.length!=0){
          return false;
      }
      else {
          return true;
      }
    }
    if (array[i]===stack[0]){
      stack.shift();
    }
    else if (array[i] in Config){
        stack.unshift(Config[array[i]]);
    }
  }
  return true;
}