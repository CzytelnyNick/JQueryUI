$(function () {
    let oldx = 0;
    let left = 0;
    let right = 0;

    $("#drag").draggable({
      drag: function (e) {
        
            $(document).keydown(function (elem) { 
                if(elem.keyCode == 32){
                    console.log("a")
                } 
            })
        
      },
      stop: function () {
        grawitacja();
      }
    });
  });