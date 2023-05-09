window.addEventListener('load',()=>{

    let input= document.getElementById('url');
    let img =document.getElementById('img')
    input.addEventListener('input',(event)=>{
            console.log(event.target.value);
           
            img.setAttribute('src',event.target.value);
    })

    let blur = document.getElementById('blur')
    blur.addEventListener('input', (event)=>{
        let num= event.target.value;
        img.style.filter=`blur(${event.target.value}px)`
    })
    
})