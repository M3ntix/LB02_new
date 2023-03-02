function checkCredentials() {
    var benutzer = document.getElementById("benutzer").value;
    var passwort = document.getElementById("passwort").value;

    if (benutzer === "123" && passwort === "123") {
        alert("Wilkommen zur Seite! \n \n \n \n \n(*^▽^*)");
    } else {
        alert("ungültiger benutzer oder passwort. Bidde neu versuchen.");
    }
}

const WILKOMMEN = document.getElementById("WILKOMMEN");
const hour = new Date().getHours();
const wilkommensTyp = ["Guten Morgen, Wilkommen zu dieser Login Seite", "Guten Mittag, Wilkommen zu dieser Login Seite", "Guten Abend, Wilkommen zu dieser Login Seite"];
let WilkommentsText = "";

if (hour < 12) WilkommentsText = wilkommensTyp[0];
else if (hour < 18) WilkommentsText = wilkommensTyp[1];
else WilkommentsText = wilkommensTyp[2];

WILKOMMEN.innerHTML = WilkommentsText;