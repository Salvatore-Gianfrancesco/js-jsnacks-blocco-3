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
    },
];
// console.log(automobili);

const autoBenzina = automobili.filter(auto => auto.alimentazione === "Benzina");
console.log(autoBenzina);

const autoDiesel = automobili.filter(auto => auto.alimentazione === "Diesel");
console.log(autoDiesel);

const autoAltro = automobili.filter(auto => auto.alimentazione !== "Benzina" && auto.alimentazione !== "Diesel");
console.log(autoAltro);