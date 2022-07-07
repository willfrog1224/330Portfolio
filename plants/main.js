const fs = require("fs");



function jsonReader(filePath, cb) {
  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      return cb && cb(err);
    }
    try {
      const object = JSON.parse(fileData);
      return cb && cb(null, object);
    } catch (err) {
      return cb && cb(err);
    }
  });
}
jsonReader("./plants.json", (err, customer) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(customer.address);
});

function drop() {
  document.getElementById("options").classList.toggle("display");
}

window.onclick = function(event) {
  if (!event.target.matches('.display')) {
    var drops = document.getElementsByClassName("drop_select");
    var i;
    for (i = 0; i < drops.length; i++) {
      var open = drops[i];
      if (open.classList.contains('display')) {
        open.classList.remove('display');
      }
    }
  }
}