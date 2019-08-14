var app = new Vue ({
  el: '#app',
  data: {
    titulo: 'Lista de Tareas',
    tasks: [
      {
        texto: 'Aprender Vue.js',
        finished: false
      },
      {
        texto: 'Aprender Angular',
        finished: false
      },
      {
        texto: 'Aprender React',
        finished: false
      }
    ],
    newTask: ''
  },
  methods: {
    addTask: function () {
      var texto =  this.newTask.trim();
      if(texto) {
        this.tasks.push({
          texto: texto,
          finished: false
        })
      }
      this.newTask = '';
    },
    removeTask: function (index) {
      this.tasks.splice(index,1)
    }
  }
})