//main display function
function drop() {
    document.getElementById("options").classList.toggle("display");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.drop')) {
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