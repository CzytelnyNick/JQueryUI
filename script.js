score = 0
$(function(){
  $("#draggable").draggable();
  $("#droppable").droppable({
    tolerance:"fit",
    
      over: function () {

          $(document).keypress(function (e) {
              if (e.keyCode == 32) {
                  $("#droppable").remove()
                  score+=10
                  $("#score").text("Points: " + score)
              }
              
              
          });

      },
      out: function() {
        console.log("aa")
      }
  });
})
        