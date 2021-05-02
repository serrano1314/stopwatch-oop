let countDisplay = document.getElementsByTagName('h1');
function Stopwatch(){
    let duration = 0;
    let timeId = 0;

    this.start = ()=>{
        if(timeId) throw new Error('STAPWATS ALREADY RUNNING')
        else {
            timeId = setInterval(()=>{
                duration++;
                countDisplay[0].innerText = duration;
            },1000);
        }
    };
    this.stop = ()=>{
        if(timeId===0) throw new Error('STAPWATS IS ALREADY STAPPED');
        else {
            clearInterval(timeId);
            timeId=0;
        }
    };
    this.reset = ()=>{
        duration=0;
        countDisplay[0].innerText = duration;
    };
    Object.defineProperty(this,'duration',{
        get: ()=> duration
    });
}
let sw = new Stopwatch();
