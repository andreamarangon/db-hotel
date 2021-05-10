Vue.config.devtools = true;

var app = new Vue({
  el: '#root',
  data: {
    stanze: [],
    stanza: null
  },
  mounted(){
      axios.get('http://localhost/db-hotel/api/stanze.php')
       .then((result) => {
         this.stanze = result.data.response;
      });
  },
  methods:{
    getById: function (id) {
      axios.get(`http://localhost/db-hotel/api/stanze.php?id=${id}`)
       .then((result) => {
         this.stanza = result.data.response[0];
         console.log(this.stanza);
      });
    }
  }
});
