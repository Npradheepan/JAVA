 
 <!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
 </head>
 <body>
     
     <script>
    function excution(a,b,cd) {
    var result = a+b;
    setTimeout(function(){
        cd(result);
    },200);
}

    excution(5,10,function(result){
    console.log(result/2)
    });

     </script>
   
 </body>
 </html>
 

