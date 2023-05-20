var countLetters = function(letters){
    var noSpaces = letters.replace(/ /g,'');
  
    var obj = {};
    for(i of noSpaces){
  
        if(obj[i]){
          obj[i] += 1;
        }
        else obj[i] = 1;
  var unique = Object.keys(obj).length;
  }
    console.log(unique);
  return  obj;
  
  }
  console.log(countLetters('asas sdfg hy'));