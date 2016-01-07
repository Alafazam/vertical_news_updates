 (function () {

        var updateHovered = 0;   

        if(document.getElementById("facts")){
            var margin =0;

            var news = document.getElementById("facts");
            var n_ul = document.getElementById("facts_ul");
            
            var t = n_ul.children.length; 
            console.log(t);
            news.style.height = '' +  (69*t) + 'px';

            var n_height = n_ul.offsetHeight;
            



            var nod = document.createElement("ul");
            
            nod.innerHTML = n_ul.innerHTML;
            news.appendChild(nod);
            

            window.setInterval(function(){
                
                if(!updateHovered){
                    n_ul.style.marginTop = --margin+"px";            
                    if(margin+15 <= n_height*-1)
                        margin=0;
                }

            },50);
                

            window.onresize = function () {
                var n_height= n_ul.offsetHeight;
            }
            
            
            news.onmouseover = function(){
                updateHovered =1;
            }

            news.onmouseout = function(){
                updateHovered=0;
            }

        }
    })();
