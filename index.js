// =========================
// PRACTICE #1  -  DATA & METHOD PROPERTIES
// =========================
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

// =========================
// PRACTICE #2  -  HTML ATTRIBUTES
// =========================
new Vue({
    el: '#app2',  
    data: {      
        cssClass: 'no class...'
    }
});

// =========================
// PRACTICE #3  -  COMPUTED PROPERTIES
// =========================
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
    computed: {  
        // here set up all computed properties which is actually just a like writing a method. 
        // You access it on the html template in the same way as methods/data
        counter() {
            return this.clicks * 2;
        }
    }
});

// =========================
// PRACTICE #4  -  CONDITIONALS & LISTS
// =========================
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

// =========================
// PRACTICE #5  -  FILTERS
// =========================
// This is a global filter that can be across your code in all vue instances. 
// Filters take a name (you define) and a function (you define) with the 
// argument 'value' (must be value)
Vue.filter('uppercase', function(value){ 
    return value.toUpperCase();
}); 

new Vue({
    el: '#app5',  
    data: {      
        title: "Hello world!",
        message: "Something Something"
    },
    // this is one way to get the title to uppercase using a computed property. 
    // But if you wanted to make the message (and several other things) uppercase, 
    // you'd have to make a property for each thing. Not ideal. However, computed
    // properties offer better performance, so should make an effort to use 
    // those over a filter where possible
    computed: {
        theTitle: function() {
            return this.title.toUpperCase();
        }
    },
    filters: {  // This is a local filter only accessible in this vue instance
        lowercase: function(value) {
            return value.toLowerCase();
        }
    }
    
});

// =========================
// PRACTICE #6  -  COMPONENTS
// =========================
new Vue({
    el: '#app6',  
    data: {      
        title: 'Hello world!',
        username: 'Max'
    }
});
