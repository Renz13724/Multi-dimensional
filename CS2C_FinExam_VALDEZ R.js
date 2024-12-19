function restructureArray() {
  let namesStr = prompt("Enter names separated by commas:");
  let agesStr = prompt("Enter ages separated by commas:");

  let names = namesStr.split(",");
  let ages = agesStr.split(",").map(Number);


  if (names.length !== ages.length) {
    console.error("Error: The number of names and ages must be equal.");
    return;
  }

  let restructuredArray = [];
  for (let i = 0; i < names.length; i++) {
    restructuredArray.push([names[i], ages[i]]);
  }

  console.log("Restructured array:", restructuredArray);
}

restructureArray();
