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
    //Basic of async fuction and await keywordy
   async  function Greeting (){
        return await Promise.resolve("This method is Resolving!");
    }
    Greeting().then((value)=>{
        console.log(value);
    }).catch((value)=>{
        console.log(value);
    })

    
</script>
</body>
</html>
