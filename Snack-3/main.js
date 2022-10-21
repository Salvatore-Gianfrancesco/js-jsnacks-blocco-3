const animals = [
    {
        nome: "Leone",
        famiglia: "Felidi",
        classe: "Mammiferi"
    },
    {
        nome: "Topo",
        famiglia: "Roditori",
        classe: "Mammiferi"
    },
    {
        nome: "Balena",
        famiglia: "Cetacei",
        classe: "Mammiferi"
    },
    {
        nome: "Cane",
        famiglia: "Canidi",
        classe: "Mammiferi"
    },
    {
        nome: "Gallina",
        famiglia: "Fasianidi",
        classe: "Uccelli"
    },
    {
        nome: "Pitone",
        famiglia: "Serpenti",
        classe: "Rettili"
    },
];
// console.log(animals);

const listaMammiferi = animals.filter(animal => animal.classe === "Mammiferi");
console.log(listaMammiferi);