window.addEventListener('load', function(){

    let indiceImage = 0;
    let timer;

    function afficheImage(){
        image.src = tabImages[indiceImage];
        numero.value = `${indiceImage} / ${tabImages.length-1}`;
    }

    function imageSuivante(){
        
        indiceImage++;
        if(indiceImage >= tabImages.length){
            indiceImage = 0;
        }
        afficheImage();
        
    }

    function imagePrecedente(){
        
        indiceImage--;
        if (indiceImage < 0){
            indiceImage = tabImages.length-1;
        }
        afficheImage();
    }
   

    let image = document.getElementById('diapo');
    let btnSuiv = document.querySelector('.suivant');
    btnSuiv.addEventListener('click', imageSuivante);
    let btnPrec = document.querySelector('.precedent');
    btnPrec.addEventListener('click', imagePrecedente);
    let btnLect = document.querySelector('.lecture');
    let btnStop = document.querySelector('.stop');

    btnLect.addEventListener('click', ()=>{
        timer = window.setInterval(imageSuivante, 2000);
    });

    btnStop.addEventListener('click', ()=>{
        window.clearInterval(timer);
    });

    let numero = document.querySelector('.num');
    numero.value = `${indiceImage} / ${tabImages.length-1}`;
    
})

