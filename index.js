function change1(){
    window.open("https://apstudents.collegeboard.org/courses/ap-computer-science-principles", "_blank");
}
function change2(){
    window.open("https://apstudents.collegeboard.org/courses/ap-computer-science-a", "_blank");
}

const carousel =["https://i.ytimg.com/vi/CxGSnA-RTsA/hqdefault.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC419YNLNoMlVD9UEzQbpVPLFnxwy7xSdbrMFJ4holrAcQeIO_OUa7HCfD&s=10", "https://wp-media.petersons.com/blog/wp-content/uploads/2018/01/26100309/blur-close-up-code-computer-546819.jpg"];



function changeImg(){
    let imgVar = document.querySelector("#imgC");
    if(imgVar.src === carousel[0]){
        imgVar.src = carousel[1];
    } else if(imgVar.src === carousel[1]){
        imgVar.src = carousel[2];
    }else if(imgVar.src === carousel[2]){
        imgVar.src = carousel[0];
    }

}
function changeImg2(){
    let imgVar = document.querySelector("#imgC");
    if(imgVar.src === carousel[0]){
        imgVar.src = carousel[2];
    } else if(imgVar.src === carousel[1]){
        imgVar.src = carousel[0];
    }else if(imgVar.src === carousel[2]){
        imgVar.src = carousel[1];
    }
}

function changeBColor(){
    let sideNames = document.getElementsByClassName(".sideBar");

}

function hideBar(){
    let barH = document.querySelector(".sideBar");
    if(barH.style.display === "block"){
        barH.style.display = "none";
        barH.style.borderColor = "white";
        barH.style.color = "white";
    }
    else{
        barH.style.display = "block";
        barH.style.borderColor = "black";
        barH.style.color = "black";
    }
}

