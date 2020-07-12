document.addEventListener("DOMContentLoaded", (evt) => {

   const inputStudent = document.getElementById('etudiant');

   // esto es una funcion que anade los esduiantes a mi lista
   addStudent = () => {
      const ulListe = document.getElementById('students');
      const itemStudent = document.createElement('li');
      itemStudent.innerHTML = inputStudent.value;
      itemStudent.classList.add('etudiant');
      itemStudent.classList.add('noArayer');

      ulListe.appendChild(itemStudent);

   }
   // esto es una funcion que anade los sujetos
   addVeille = () => {
      const ulVeille = document.getElementById('subjects');
      const itemVeille = document.createElement('li');
      const inputVeille = document.getElementById('veille');
      itemVeille.innerHTML = inputVeille.value + ' ' + random();
      ulVeille.appendChild(itemVeille);
      //random()

   }
   //esto es para apretar el boton enter en el input de estudiantes
   inputStudent.addEventListener("keyup", function (event) {
      event.preventDefault();
      if (event.keyCode === 13) {
         addStudent();

      }

   });

   const btn = document.querySelector('button')

   function random() {
      let thomas = document.querySelectorAll('.noArayer')

      // la funcion random que me envia un nombre al azar
      // poner los elementos de la lista en una tabla(array)
      let random = Math.round(Math.random() * (thomas.length - 1))
      thomas[random].classList.add('aRayer')
      thomas[random].classList.remove('noArayer')

      console.log(thomas[random])
      return thomas[random].innerHTML

   }
   const clear = document.querySelector(".clear");

   clear.addEventListener("click", function () {
      localStorage.clear();
      location.reload();
   });

});



