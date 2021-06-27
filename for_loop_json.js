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
       var contacts = [
           {"fisrtName": "theepan",
            "lastName": "Navaradnaraja",
            "number":"76275366",
            "likes":["Pizza","Gazkdslka","Kasamusha"]
        },
        {"fisrtName": "Thavanesh",
            "lastName": "Murugan",
            "number":"978548",
            "likes":["Hogwarts","Nagic","Hagrig"]
        },
        {"fisrtName": "Sivan",
            "lastName": "Noname",
            "number":"0047370",
            "likes":["kgaf","uzuiua","kcyjba"]
        },
        {"fisrtName": "Lagu",
            "lastName": "Mirah",
            "number":"87682",
            "likes":["dsgvnu","oshbzasz","haosu"]
        },
        {"fisrtName": "Malar",
            "lastName": "Venu",
            "number":" 979887",
            "likes":["jdhgj","iigoi","inah"]
        },
        
       ];

       function lookUpProfile(name, prop){
        for(var i= 0; i<contacts.length; i++) {
            if(contacts[i].fisrtName == name){
                return contacts[i][prop] || "No such a Property!"
            }
        }
        return "No such Contact";
       }
       var data = lookUpProfile("theepan","number");
       console.log(data);




    </script>
</body>
</html>
