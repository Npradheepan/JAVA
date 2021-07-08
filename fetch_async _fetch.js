
//fetch function loading a  image.
// type one
fetch(`Image.jpg`).then(respons=>{
    if(respons.status == 200){
        return respons.blob();
    }else{
        throw new Error(`HTTP Error ! Status : ${response.stutes}`);

    }
}).then(myblob=> {
let image = document.createElement(`img`);
image.scr = URL.createObjectURL(myblob);
image.height =`200px`;
image.width =`100px`;
document.body.appendChild(image);
}).catch(e=>{
    let h2 = document.createElement (`h2`);
    h2.style= `color :red;`;
    h2.innerHTML = e.message;
    document.body.appendChild(h2);

})

// aync fetch function
// type two
let myfetch = async() =>{
    let response = await  fetch( image.jpg);
    if(!response.ok){
        throw new Error (`HTTP ERROR ! Status: ${response.status}`);
    }else{
        return await response.blob();
    }
}
myfetch().then(myblob=>{
    let image = document.createElement(`img`);
    image.scr = URL.createObjectURL(myblob);
    image.height =`200px`;
    image.width =`100px`;
    document.body.appendChild(image);
}).catchs(e=>{
    let h2 = document.createElement (`h2`);
    h2.style= `color :red;`;
    h2.innerHTML = e.message;
    document.body.appendChild(h2);
})
