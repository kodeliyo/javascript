
function draw(num) {

  for(let i=0; i<=num; i++) {
    
    let line = [];

    for(let j=0; j<=num; j++) {
    
      if( (j<=num && (i===0 || i===num)) || ((i>0 && i<num) && (j===0 || j===num)) ) {
        line.push("*");
      }

      if((i>0 && i<num) && (j>0 && j<num)) {
        line.push(" ");
      }

      if(j===num) {
        // console.log(line);
        console.log(line.toString().replaceAll(","," "));
      }

    }
  }
}

draw(8);

