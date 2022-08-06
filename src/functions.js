function backgroundPosition(){

    const body = document.querySelector("body");
    
    let proporcion = (body.offsetHeight-window.innerHeight)/(window.innerHeight*.7)

    proporcion>0 ? body.style["backgroundPositionY"] = `${body.getBoundingClientRect().top/proporcion}px` : body.style["backgroundPositionY"] = 0;
}
function backgroundResize(){

    if(1280/804 < window.innerWidth/(window.innerHeight*1.7)){

        document.getElementsByTagName("body")[0].style["background-size"] = "100vw auto";
    }else{

        document.getElementsByTagName("body")[0].style["background-size"] = "auto 170vh";
    }
    backgroundPosition();
}
function backgroundColor(){

    const sobreMi = document.getElementById("sobre-mi");
    const contacto = document.getElementById("contacto");
    if(sobreMi && contacto){


        let opacity = 1-(sobreMi.getBoundingClientRect().top/window.innerHeight);
        if(opacity>=1){
            
            let contOpacity = 1-(contacto.getBoundingClientRect().top/window.innerHeight);
            opacity = (sobreMi.getBoundingClientRect().bottom/window.innerHeight)*2;
            if(opacity>0){if(contOpacity>0)opacity+=contOpacity;}
            else opacity = contOpacity;
        }
        if(opacity>1)opacity=1;
        document.getElementsByClassName("main")[0].style["background-color"] = `rgba(21,21,21,${opacity})`;
    }else{

        document.getElementsByClassName("main")[0].style["background-color"] = `rgba(21,21,21,0)`;
    }
}

export {backgroundPosition,backgroundResize,backgroundColor};