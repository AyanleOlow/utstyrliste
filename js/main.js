alert("sorter og finn det du trenger")

document.getElementById("leggTil").addEventListener("click", function () {
    let nyttElement = document.getElementById("nyttElement").value;
    if (nyttElement.trim() !== "") {
        let liste = document.getElementById("liste");
        let li = document.createElement("li");
        li.textContent = nyttElement;
        liste.appendChild(li);
        document.getElementById("nyttElement").value = "";
    } else {
        alert("Skriv inn noe for å legge til i listen!");
    }
});
