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

    //
    //async  on  arrrow function
    let Greeting = async(val) => {
        return Promise.resolve(val);
    }
    Greeting("Hello").then(console.log).catch(console.log);

    //
//Async Arrow function.
    //
let f = async()=>{
    let promise = new promise((res,rej)=>{
        setTimeout(()=>res("Done"),3000)
    });
    let result = await promise;
    alert(result);
}
f();    
