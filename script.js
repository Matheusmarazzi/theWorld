const HTML = `<video autoPlay>
<source src="video/zaworld.mp4" type="video/mp4" />
</video>
<img id="dio"   class='dio' src="./video/dio.png"/>
`;
const display = window.document.getElementById('zawarudo');

function theWorld(){

    display.innerHTML = HTML;
    const dio =  document.getElementById('dio');
    setTimeout(()=>{
        dio.classList.add('visible');
    },500)
    setTimeout(()=>{
        freeze()
    }, 4000)
    




}
function freeze(){
    let i
    do{
        i++
        console.log('Made In Heaven')
    }while(i!=100);

    if(i==100){
        Location.reload()
    }
}