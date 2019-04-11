new Vue({
    el: '#app1',   // el tells vue.js which element in your dom (id="app" in the HTML) you want to control through vue.js. This will become the template of this 'new' Vue instance which is then rendered by vue.js
    data: {      // in the data object we store all the data we want to work with in this view instance
        title: 'hello world!'
    },
    methods: {  // any js / js functions you want to use within the "app" component must be in the methods object. For ex, the JS to run when an event occurs.
        changeTitle() {
             this.title = 'this is the new title'; // 'this' gives you access to all data within the instance of the Vue object
        }
    }
});

new Vue({
    el: '#app2',  
    data: {      
        cssClass: 'no class...'
    }
});

new Vue({
    el: '#app3',  
    data: {      
        clicks: 0
    },
    methods: {  
        increment() {
            this.clicks++;
        }
    },
    computed: {  // here set up all computed properties which is actually just a like writing a method. You access it on the html template in the same way as methods/data
        counter() {
            return this.clicks * 2;
        }
    }
});

new Vue({
    el: '#app4',  
    data: {      
        show: true,
        persons: [
            {name: 'Max', age: 27},
            {name: 'Chris', age: 30},
            {name: 'Nora', age: 25}
        ]
    }
});