const header = () => {
    var elhome = document.getElementById("btn_home");
    elhome.addEventListener("click", homebtn);

    var elprofil = document.getElementById("btn_profil");
    elprofil.addEventListener("click", profilbtn);

    // var eldeco = document.getElementById("btn_deco");
    // eldeco.addEventListener("click", decobtn);

    var elco = document.getElementById("btn_co");
    elco.addEventListener("click", cobtn);

    var elde = document.getElementById("btn_de");
    elco.addEventListener("click", debtn);

    function homebtn() {
        document.location.href = "/HomePage"
    }

    function profilbtn() {
        document.location.href = "/Profil"
    }

    // function decobtn() {
    //     sessionStorage.clear();
    //     document.location.href = "/"
    // }
    function cobtn() {
        document.location.href = "/WelcomePage"
    }
    function debtn() {
        document.location.href = "/DetailPage"
    }
}

export default header;