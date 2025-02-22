let texts = "Frontend Developer";
let animatedtexts = document.querySelector('.nameJade');
let indexChar = 0
let isForward = true;

function animate(){
    if(isForward && indexChar < texts.length){
        animatedtexts.textContent = texts.slice(0, indexChar+1);
        indexChar++;
    }else if(!isForward && indexChar > 0){
        indexChar--;
        animatedtexts.textContent = animatedtexts.textContent.slice(0, indexChar);
        
    }else{
        isForward = !isForward;
    }

    if(indexChar === texts.length){
        isForward = false;
    }else if(indexChar === 0){
        isForward = true;
       
    }

    setTimeout(animate, 200);
   
}
animate();