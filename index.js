new Vue({
    el: '#app',   // el tells vue.js which element in your dom (id="app" in the HTML) you want to control through vue.js. This will become the template of this 'new' Vue instance which is then rendered by vue.js
    data: {      // in the data object we store all the data we want to work with in this view instance
        title: 'hello world!'
    }
});