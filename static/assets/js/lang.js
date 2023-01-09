function switchLang(path){
    const actualPath = window.location.pathname.replace("/pt","");
    const reloadURl = path + actualPath  ;
    window.location.replace(reloadURl);

}

document.addEventListener("DOMContentLoaded",function(){
    const pathName = window.location.pathname.split("/")
    const en = document.getElementById("enLang")
    const pt = document.getElementById("ptLang")

    if(pathName[1]=="pt"){
        console.log("opaa")
        console.log(en)
        console.log(pt)

        en.classList.toggle("d-none")
        pt.classList.toggle("d-none")

    }
}
);