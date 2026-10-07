


function a() {
  let cats = 5;
}

function b() {
  console.log("There are " + cats + "."); 
}

b()  // Error because cats isn't founc in the global scope

function c() {
  let cats = 5;
  return function() {
    console.log("There are " + cats + "."); 
  }
}


const getCats = c()
getCats();  // This works