function change1(){
    window.open("https://apstudents.collegeboard.org/courses/ap-computer-science-principles", "_blank");
}
function change2(){
    window.open("https://apstudents.collegeboard.org/courses/ap-computer-science-a", "_blank");
}

const carousel =["https://i.ytimg.com/vi/CxGSnA-RTsA/hqdefault.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC419YNLNoMlVD9UEzQbpVPLFnxwy7xSdbrMFJ4holrAcQeIO_OUa7HCfD&s=10", "https://wp-media.petersons.com/blog/wp-content/uploads/2018/01/26100309/blur-close-up-code-computer-546819.jpg"];
let imgVar = document.querySelector("#imgC");

function changeImg(){
    i = 0
    imgVar.src = carousel[1];
}
function changeImg2(){
        imgVar.src = carousel[2];
}
