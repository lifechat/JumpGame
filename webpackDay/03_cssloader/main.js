import './main.css';
import Vue from './vue.js';
import App from './App.js';


new Vue({
    el: "#app",
    render: c => c(App)
})