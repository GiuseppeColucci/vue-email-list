new Vue({
    el:'#app',
    data:{
        random:[],
    },
    memailrandom() {
        for(const i=0; i<10; i++){
            const ax=this
            axios.get(' https://flynn.boolean.careers/exercises/api/random/mail')
              .then(function(element) {
                ax.random.push(element.data.response);
                
              });
            
        }
       
      }
})