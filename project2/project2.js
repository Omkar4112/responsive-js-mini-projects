const buttons=document.querySelectorAll('.button');
const body=document.querySelector("main")

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(ev){
        console.log(ev)
        console.log(ev.target)
        if(ev.target.id==="grey"){
            body.style.backgroundColor=ev.target.id;
            
        }
        if(ev.target.id==="yellow"){
            body.style.backgroundColor=ev.target.id;
        }
        if(ev.target.id==="white"){
            body.style.backgroundColor=ev.target.id;
        }
        if(ev.target.id==="blue"){
            body.style.backgroundColor=ev.target.id;
        }            
    })
});