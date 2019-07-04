let arr = ["123", "143", "231", "432", "4653", "83", "223"];
for (i=0; i<arr.length; i++){
  if(arr[i][0] == 2 || arr[i][0] == 4){
    console.log(arr[i]);
  }
}

for (var i=1;  i<=100; i++) {
    var count = 0;
    for (var j=2; j<=i; j++) {
      if (i%j) {continue;}
      count += 1;
    }
    if (count == 1) console.log(i + " - Делители этого числа: 1 и " + i);
  }
  