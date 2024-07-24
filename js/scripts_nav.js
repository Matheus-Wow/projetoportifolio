const navLinks = document.querySelector('#navLinks')
const menuIcon = document.querySelector('.menu-icon')

navLinks.style.maxHeight = '0px'

menuIcon.addEventListener('click', () =>{
    if(navLinks.style.maxHeight === '0px'){
        navLinks.style.maxHeight = '380px'
    }else{
        navLinks.style.maxHeight = '0px'
    }
})

