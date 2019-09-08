//Fonction decrivant ce qui doit se passer lors d'un clic sur le bureau
function desk_click() {
    let value = prompt("Vous trouvez un placard caché.\nIl est fermé avec un code.\nUne gravure indique :\n'Entrez l'année de création du Web'");

    if (value == "1989") {
        alert("Le placard s'ouvre ... mais il est malheureusement vide !")
    } else {
        if (value != undefined) {
            alert("Faux ! Essaie encore");
        }
    }
}
//Lien avec l'evenement de cliquer sur le bureau et la fonction precedante
document.getElementById("desk").onclick = desk_click;

//clic sur le papier dechire
function torn_paper_click() {
    openImage("assets/torn_paper.jpg");
}
document.getElementById("torn_paper").onclick = torn_paper_click;

//clic sur le tableau
function dns_explain_click(){
    openImage("assets/dns_explain.png")
}
document.getElementById("dns_explain").onclick = dns_explain_click;

//clic sur la porte
function secret_door_click() {
    let value = prompt("Entrez le code correct");

    if (value == "ARDUINO") {
        window.location.href="room.html";
    } else {
        if (value != undefined) {
            alert("La porte résiste ! Ce n'est pas le bon code !");
        }
    }
}
document.getElementById("secret_door").onclick = secret_door_click;

//clic sur le coffre
function coffre_click() {
    let value = prompt("Entrez la bonne adresse IP\npour ouvrir le coffre");

    if (value == "192.168.88.5") {
        openImage("assets/coffre.png");
    } else {
        if (value != undefined) {
            alert("La serrure refuse de s'ouvrir. Essaie un autre code !");
        }
    }
}
document.getElementById("coffre").onclick = coffre_click;

//clic sur la carte
function map_click() {
    openImage("assets/map.png");
}
document.getElementById("map").onclick = map_click;

//clic sur le papier 2
function paper2_click() {
    openImage("assets/paper2.png");
}
document.getElementById("paper2").onclick = paper2_click;

//clic sur le papier 3
function paper3_click() {
    openImage("assets/paper3.png");
}
document.getElementById("paper3").onclick = paper3_click;

//clic sur le tableau 1
function picture1_click() {
    openImage("assets/picture1.png");
}
document.getElementById("picture1").onclick = picture1_click;

//clic sur le tableau 2
function picture2_click() {
    openImage("assets/picture2.png");
}
document.getElementById("picture2").onclick = picture2_click;

//fonctions de gestion de la fenetre modale
function openModal() {
    document.getElementById("modal").style.display = "block";
}
//place une image dans la fenetre modale
function openImage(link) {
    let img = document.createElement("img");
    img.setAttribute("id","myImg");
    img.setAttribute("src",link);
    document.getElementById("modal-content").appendChild(img);
    openModal();
}
function closeModal() {
    let img = document.getElementById("myImg");
    document.getElementById("modal-content").removeChild(img);
    document.getElementById("modal").style.display = "none";
}