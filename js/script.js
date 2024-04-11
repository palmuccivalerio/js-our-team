
// CREAZIONE ARRAY OBJECT

const workers = [
    // NOME PROFESSIONE E FOTO DI OGNI ELEMENTO 
    {
      name: "Angela Caroll",
      profession: "Chief Editor",
      photo: "../img/wayne-barnett-founder-ceo.jpg"

    },
    {
      name: "Walter Gordon",
      profession: "Office Manager",
      photo:"../img/angela-caroll-chief-editor.jpg"
    },

    {
        name: "Angela Lopez",
          profession: "Office Manager",
          photo:"../img/walter-gordon-office-manager.jpg"
      },
      {
        name: "Scott Estrada",
        profession: "Developer",
        photo:"../img/angela-lopez-social-media-manager.jpg"
      },
      {
        name: "Barbara Ramos",
       profession: "Graphic Designer",
       photo:"../img/scott-estrada-developer.jpg"
      },
  ];



// STAMPA DI OGNI ELEMENTO PRESENTE NELL'ARRAY
// FACENDOLO SCORRERE CON CICLO FOR
for (let i = 0; i < workers.length; i++) {
    const curWorkers = workers[i]
    console.log(curWorkers)
}



// STAMPA CON LO STESSO CICLO FOR MA QUESTA VOLTA IN PAGINA
// NOTA BENE AVREMMO POTUTO METTERE I CONSOLE LOG PRECEDENTI IN QUESTO CICLO 
// ED ELIMINARE QUELLO PRECEDENTE
const classesRow = document.getElementById("workers");
for (let i = 0; i < workers.length; i++) {
  const curWorkers = workers[i]; // object;
  // Stapo la classe in pagina
  classesRow.innerHTML += `
  <div class="col">
    <div class="card">
      <div class="card-body">
        <img src="${curWorkers.photo}" alt="">
        <h5 class="card-title">${curWorkers.name}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">
          Professione: ${curWorkers.profession}
        </h6>
      </div>
    </div>
  </div>
  `;
}