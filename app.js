console.log("Hello");

const app = Vue.createApp({
    //data, function will be here
    data(){
        return {
            name: "Mohan Bera",
            names: ["mohan", "Bera", "Sourav", "Bera"]
        }
    }
});

app.mount('#app');
