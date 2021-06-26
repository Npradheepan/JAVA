<script>
 async function foo(){
            let response = await fetch("https://SECRET.mockapi.io/api/users");
            let result = await response.json();
            console.log(result);
        }
        foo();
    </script>
