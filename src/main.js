import './main.less'
import './main.css'
import Vue from '../vue.js'
import App from './App.js'
// import {num1,num2,add} from './App.js'
// import * as obj from './App.js'


// console.log(obj.num1,obj.num2)
// obj.add(3,8)
// console.log(num1,num2)
// add(3,8)

new Vue({
    el:'#app',
    components:{
        App
        // App:obj.default

    },
    template:'<App/>'
})
