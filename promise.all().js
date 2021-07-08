//Promise .all(); method
let FetchandDecode = async  (url,type) =>{
    let response = await  fetch (url);
    let content;
    if(response.status == 404){

    throw new Error (`HTTP ERROR  ! Status :${response.status} `);
    }else {
        if( type ==`blob`){
            content = await response.blob();
        }else if(type == 'text'){
            content = await response.text();
        }
    }return content;

};
let displaycontent = async ()=> {
    let trucka = FetchandDecode(`trucka.jpg`,`blob`);
    let truckb = FetchandDecode(`trucka.jpg`,`blob`);
    let keyspec = FetchandDecode(`keyspecifcations.txt`, `text`);


    let values = await Promise.all([trucka,truckb,keyspec]);
    let url1 = URL.createObjectURL(values[0]);
    let url2 = URL.createObjectURL(values[2]);
    let text = values[2];  
    let.image = document.createElement('img');
    imga.scr =url1;
    let imgb = document.createElement(`img`);
    img.scr = url2;
    document.body.appendChild(imga);
    document.body.appendChild(imgb);
    let pare = document.createElement('p');
    pare.innerHTML= text;
    document.body.appendChild(pare);

}
displaycontent().catch(e=>{
    let h2 = document.createElement (`h2`);
    h2.style= `color :red;`;
    h2.innerHTML = e.message;
    document.body.appendChild(h2);
});
