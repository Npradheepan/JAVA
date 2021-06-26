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
        var promise = new Promise(function(resoleve,reject){
            var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         resoleve(xhttp.responseText);
    }

    if (this.readyState == 4 && this.status !== 200) {
        reject("Error");
    }
    };

        xhttp.open("GET", "https://SECRET.mockapi.io/api/users", true);
        xhttp.send();
    });

        promise.then(function(date){
            console.log(Json.parse(date));
        }).catch(function(err){
            console.log(err);
        })
    </script>
</body>
</html> 
