
function draw() {

  for(let i=0; i<=4; i++) {
    
    let line = [];

    for(let j=0; j<=5; j++) {
    
      // i<5 ? line.push("*") : console.log(line);
      j<5 ? line.push("*") : console.log(line.toString().replaceAll(","," "));
  
    }
  }
}

draw();

