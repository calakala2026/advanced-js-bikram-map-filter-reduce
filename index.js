//RESUELVE LOS EJERCICIOS AQUI
//1
const numbers = [4, 5, 6, 7, 8, 9, 10];
const elevados = () => numbers.map(num => num ** num);


//2
const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];
const plantillas = [
    (p) => `Como soy de Italia, amo comer Pizza`,
    (p) => `Como soy de Japón, amo comer Ramen`,
    (p) => `Como soy de Valencia, amo comer Paella`,
    (p) => `Aunque no como carne, el Entrecot es sabroso`,
];

const sentenceFood = foodList.map((foodList, index) => {
    return plantillas[index](foodList);
});

//3
const staff = [
  {
    name: 'Pepe',
    role: 'The Boss',
    hobbies: ['leer', 'ver pelis']
  },
  {
    name: 'Ana',
    role: 'becaria',
    hobbies: ['nadar', 'bailar']
  },
  {
    name: 'Luis',
    role: 'programador',
    hobbies: ['dormir', 'comprar']
  },
  {
    name: 'Carlos',
    role: 'secretario',
    hobbies: ['futbol', 'queso']
  }
];