import $ from "expose-loader?exposes=$,jQuery!jquery";

import 'bootstrap';
import 'bootstrap/less/bootstrap.less'
// import './my.scss'

$(document).ready(function () {
    let btn=document.createElement('button')
    btn.innerHTML="Hello"
    btn.classList.add("btn")
    btn.classList.add("btn-primary")
    btn.type="button"
    document.body.appendChild(btn)

    $(btn).on('click',function(){
        $('#exampleModal').modal()
    })
});