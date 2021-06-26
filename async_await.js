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
        async function foo(){
            let promise =  new Promise(function(resolve,reject){
                setTimeout(function(){
                    resolve(100)
                })
            })

            var result = await promise;
            console.log(result);
        }
        foo();
    </script>
</body>
</html>
