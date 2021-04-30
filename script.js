function Stopwatch(){

    let duration = 0;
    let timeId = 0;

    this.start = ()=>{
        timeId = setInterval(()=>{
            duration++;
            console.log(duration);
        },1000);
    }
    this.stop = ()=>{
        clearInterval(timeId);
    }
    this.reset = ()=>{
        duration=0;
    }
    Object.defineProperty(this,'duration',{
        get: ()=> duration
    })
}
let sw = new Stopwatch();
