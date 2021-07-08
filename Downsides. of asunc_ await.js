//Downsides of asunc/ await
let timeoutpromise =(interva)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("Done"),interval)
    });
}
let  timetest = async()=>{
    await timeoutpromise(3000);
    await timeoutpromise(3000);
    await timeoutpromise(3000);
};
let starttime = Date.now();
timetest().then(()=>{
    let finishtime = Date.now();
    let timetakem = finishtime - starttime;
    alert (`Time Take in Milliseconds :${timetaken}`)
})
