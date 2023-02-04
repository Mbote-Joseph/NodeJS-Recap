const fs = require("fs");

// Reading a file
fs.readFile("./sample.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

const name = "Names \nJoseph Mbote Mbogo";

fs.writeFile("./sample1.txt", name, () => {
  console.log("File written successfully");
});
