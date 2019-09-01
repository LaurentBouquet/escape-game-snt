//clic sur l'interrupteur
function switch_click() {
    document.getElementById("cover").style.display = "none";
}
document.getElementById("switch").onclick = switch_click;

//clic sur la feuille de papier 1
function paper_click() {
    openImage("assets/feuille.png");
}
document.getElementById("feuille").onclick = paper_click;

//clic sur la feuille de parchemin
function parchemin_click() {
    openImage("assets/parchemin.jpg");
}
document.getElementById("parchemin").onclick = parchemin_click;

//clic sur la feuille de papier 2
function papier_click() {
    openImage("assets/coordonnees_gps.jpg");
}
document.getElementById("papier").onclick = papier_click;

//clic sur le tableau
function painting_click() {
    openImage("assets/renard_exif.jpg");
}
document.getElementById("painting").onclick = painting_click;

//clic sur le coffre
function trappe_click() {
    let value = prompt("Pour sortir par la trappe cachée,\nentrez le nom de la ville géolocalisée dans la photo");

    if (value == "Vancouver" || value == "VANCOUVER") {
        window.location.href = "sortie.html"
    } else {
        if (value != undefined) {
            alert("Ce n'est pas la bonne ville !\nRéessaie !");
        }
    }
}
document.getElementById("trappe").onclick = trappe_click;

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