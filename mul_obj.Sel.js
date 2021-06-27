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

        var myStorage = {
            "car":{
                "inside":{
                    "glove box":"Maps",
                    "Passenger Seat":"crumbs"
                },
                "outside":{
                    "trunk":"jack"
                }
            }
        };
        var gloveBoxContants = myStorage.car.inside["glove box"];
        console.log(gloveBoxContants);

    </script>
</body>
</html>
