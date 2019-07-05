
function checkTypeOf(value, callback) {
    let type = 'не строка';
    if(typeof(value) == 'string'){
      type = 'строка';
    } 
    console.log(type);

    return callback(value);
  }

  function checkStrLength(label) {
      label = (label.toString()).trim();
    if(label.length > 30){
        return label.substr(0, 30) + '...';
    } else 
    return label;
  }
  console.log(checkTypeOf("   uhwu   ", checkStrLength));
