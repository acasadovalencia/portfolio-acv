'use strict'

const header = document.querySelector('.Header')
const heroSection = document.querySelector('.Hero')
const projectsSection = document.querySelector('.Projects')
const aboutSection = document.querySelector('.About')
const heroLink = document.querySelectorAll('.Nav-link')[0]
const projectsLink = document.querySelectorAll('.Nav-link')[1]
const aboutLink = document.querySelectorAll('.Nav-link')[2]
const navLinks = document.querySelectorAll('.Nav-link')
const headerNav = document.querySelector('.Header-nav')
const navBtn = document.querySelector('.Nav-btn')
const closeBtn = document.querySelector('.Close-btn')

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()

        const linkClicked = link.getAttribute('href')
        const targetSection = document.querySelector(linkClicked)

        targetSection.scrollIntoView({ behavior: 'smooth' })
        headerNav.classList.remove('isActive')
    })
})

const handleScroll = ()=>{
    const heroPosition = heroSection.getBoundingClientRect()
    const projectsPosition = projectsSection.getBoundingClientRect()
    const aboutPosition = aboutSection.getBoundingClientRect()

    if (window.scrollY > 0){
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }

    if(heroPosition.top <= 100 && heroPosition.bottom >= 30){
        heroLink.classList.add('onView')
    } else {
        heroLink.classList.remove('onView')
    }

    if(projectsPosition.top <= 30 && projectsPosition.bottom > 30){
        projectsLink.classList.add('onView')
    } else {
        projectsLink.classList.remove('onView')
    }
    
    if(aboutPosition.top <= 30 && aboutPosition.bottom > 30){
        aboutLink.classList.add('onView')
    } else {
        aboutLink.classList.remove('onView')
    }
}

const openNav = ()=>{
    headerNav.classList.add('isActive')
}

const closeNav = ()=>{
    headerNav.classList.remove('isActive')
}

navBtn.addEventListener('click' , openNav)
closeBtn.addEventListener('click' , closeNav)

window.addEventListener('scroll', handleScroll);

