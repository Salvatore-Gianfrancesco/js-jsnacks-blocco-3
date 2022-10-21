const automobili = [
    {
        marca: "Ford",
        modello: "Puma",
        alimentazione: "Diesel"
    },
    {
        marca: "Audi",
        modello: "A3 Sportback",
        alimentazione: "Metano"
    },
    {
        marca: "Alfa Romeo",
        modello: "Giulietta 1.6",
        alimentazione: "Diesel"
    },
    {
        marca: "Seat",
        modello: "Leon",
        alimentazione: "Metano"
    },
    {
        marca: "Ford",
        modello: "Kuga",
        alimentazione: "Diesel"
    },
    {
        marca: "Citroen",
        modello: "C1",
        alimentazione: "Benzina"
    },
    {
        marca: "Citroen",
        modello: "C3",
        alimentazione: "Benzina"
    },
    {
        marca: "Nissan",
        modello: "Leaf",
        alimentazione: "Elettrico"
    },
    {
        marca: "Peugeot",
        modello: "e-208",
        alimentazione: "Benzina"
    },
    {
        marca: "Lotus",
        modello: "boh",
        alimentazione: "Elettrico"
    }
];
// console.log(automobili);

const autoBenzina = automobili.filter(auto => auto.alimentazione === "Benzina");
console.log(autoBenzina);

const autoDiesel = automobili.filter(auto => auto.alimentazione === "Diesel");
console.log(autoDiesel);

const autoAltro = automobili.filter(auto => auto.alimentazione !== "Benzina" && auto.alimentazione !== "Diesel");
console.log(autoAltro);

const ulEl = document.getElementsByClassName("auto");
console.log(ulEl);

let currentUl = ulEl[0];
autoBenzina.forEach(function (auto) {
    const liEl = document.createElement("li");

    const currentAuto = auto.marca + " " + auto.modello;
    liEl.innerText = currentAuto;
    // console.log(liEl);

    currentUl.insertAdjacentElement("beforeend", liEl);
})

currentUl = ulEl[1];
autoDiesel.forEach(function (auto) {
    const liEl = document.createElement("li");

    const currentAuto = auto.marca + " " + auto.modello;
    liEl.innerText = currentAuto;
    // console.log(liEl);

    currentUl.insertAdjacentElement("beforeend", liEl);
})

currentUl = ulEl[2];
autoAltro.forEach(function (auto) {
    const liEl = document.createElement("li");

    const currentAuto = auto.marca + " " + auto.modello;
    liEl.innerText = currentAuto;
    // console.log(liEl);

    currentUl.insertAdjacentElement("beforeend", liEl);
})