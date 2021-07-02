<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="row">
<button id="btn" onclick="on">click me</button>

    </div>
    <!-- <script> // closure function 

        var add = (function(){
            var counter = 0;
            return function (){
                counter += 1;
                return counter;
            }
        })();
        function on(){
            document.getElementById("btn").innerHTML=add();
        }

    </script> -->
    
    <!-- <script>//double function property

        function myfun(){
            var counter = 0;
            function plus(){
                counter += 1  
            }
            plus();
            return counter;
        }

        function on(){
            document.getElementById("btn").innerHTML=myfun();
        }

    </script> -->

    <!-- 
        var p = ["p1","p2"];
        var age;
        var dis = new Array();
        for(var i=0; i<p.length; i++){
            age = parseInt(prompt()+""+p[i]);
            dis[i] = age;
        }
        for(shw in dis){
            console.log(dis[shw]);
        }     </script>
-->
</body>
</html>
