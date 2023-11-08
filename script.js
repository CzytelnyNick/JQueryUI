
$(function () {
    var skok = 10;
    var czas;
    // parametry ruchu
    var x=20;
    var y=20;
    var vx=10;
    var vy=0;
    var r=15;	

    var g=9.81;     //grawitacja
    var dt=0.1;     //skok czasu
    var opor=0.999; //opór powietrza
    var spr=0.8;   //sprężystość
    // rekurencyjna animacja
    var direction = "",
        oldx = 0
    let right = 0
    let left = 0
    console.log(Math.cos(12))
    function grawitacja() {
        
        x=x+vx*dt;
        y=y+vy*dt;
        vy=vy+g*dt;
        vx=vx*opor;
        vy=vy*opor;
        if (y>h-r-vy*dt){vy=-(vy-g*dt)*spr}
        $(this).animate({
            // transform: "translate(1000px, 50%)",
            top: y,
            left:`${x}px`,
            // position:"relative"
            
        }), 200, function () {
            // Animation complete.
        };
        clearTimeout(czas);
        czas = setTimeout(grawitacja, skok); 
      }
      grawitacja();
        // $(document).click(function(){
        //     $("#drag").animate({
        //         left:(Math.cos(right)*1000)

        //     }), 200, function () {
        //         // Animation complete.
        //     };
        //     console.log(Math.cos(right)*1000)
        //   });

        $("#drag").draggable({
            drag: function (e) {
        
                if (e.pageX < oldx) {
                    left+=1
                    right = 0
                } else if (e.pageX > oldx) {
                    right+=1
                    left = 0
                }
                console.log(left, right)
                oldx = e.pageX;

            },
            stop: function (e) {
                
                grawitacja()
                
            }
        })

    
})