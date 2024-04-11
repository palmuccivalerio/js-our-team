
// CREAZIONE ARRAY OBJECT

const workers = [
    // NOME PROFESSIONE E FOTO DI OGNI ELEMENTO 
    {
      name: "Angela Caroll",
      profession: "Chief Editor",

    },
    {
      name: "Walter Gordon",
      profession: "Office Manager",
    },
    {
        name: "Angela Lopez",
          profession: "Office Manager",
      },
      {
        name: "Scott Estrada",
        profession: "Developer",
      },
      {
        name: "Barbara Ramos",
       profession: "Graphic Designer",
      },
  ];



// STAMPA DI OGNI ELEMENTO PRESENTE NELL'ARRAY
// FACENDOLO SCORRERE CON CICLO FOR
for (let i = 0; i < workers.length; i++) {
    const curWorkers = workers[i]
    console.log(curWorkers)
}