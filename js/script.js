// Esercizio di oggi: **Vue Hello**
// nome repo: vue-hello

// **Descrizione:**
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

// **Bonus:**
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue ({

  el: '#app',

  data: {
    messaggio: 'Hello VueJs!',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'

  }

});