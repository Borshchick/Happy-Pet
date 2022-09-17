'use strict'

document.addEventListener('DOMContentLoaded', function(){
        const burger = document.querySelector('.header__line-block')
        let menu = document.querySelector('.header__menu')
        burger.addEventListener('click', function(){
            this.classList.toggle('header__line-block-active')
            menu.classList.toggle('header__active')
        })

})