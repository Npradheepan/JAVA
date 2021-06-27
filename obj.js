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

var myObj = {
    gift:"pony",
    pet:"Kitten",
    bed:"sleigh"
};
function checkobj(checkProp){
    if(myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp]
    }else{
        return "Not found"
    }
}
console.log(checkobj("gift"));

    </script>
</body>
</html>
