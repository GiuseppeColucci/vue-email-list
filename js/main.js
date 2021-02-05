new Vue({

    el:'#app',
    data:{
        random:[],
    },
    mounted() {
        for(let i=0; i<10; i++){
            const self=this
            axios.get(' https://flynn.boolean.careers/exercises/api/random/mail')
              .then(function(element) {
                self.random.push(element.data.response);
                
              });
            
        }
       
      }
})