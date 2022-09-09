const FeaturesButton = document.getElementById('FeaturesButton')
const CompanyButton = document.getElementById('CompanyButton')
const Features = document.getElementById('Features')
const Company = document.getElementById('Company')
const FeaturesArrowDown = document.getElementById('FeaturesArrowDown')
const FeaturesArrowUp = document.getElementById('FeaturesArrowUp')
const CompanyArrowDown = document.getElementById('CompanyArrowDown')
const CompanyArrowUp = document.getElementById('CompanyArrowUp')

Features.style.display = 'none'
Company.style.display = 'none'

const DropFeatures = () => {
    if(Features.style.display === 'none'){
        Features.style.display = 'block'
        FeaturesArrowUp.style.display = 'block'
        FeaturesArrowDown.style.display = 'none'
    }else{
        Features.style.display = 'none'
        FeaturesArrowUp.style.display = 'none'
        FeaturesArrowDown.style.display = 'block'
    }
}

const DropCompany = () => {
    if(Company.style.display === 'none'){
        Company.style.display = 'block'
        CompanyArrowUp.style.display = 'block'
        CompanyArrowDown.style.display = 'none'
    }else{
        Company.style.display = 'none'
        CompanyArrowUp.style.display = 'none'
        CompanyArrowDown.style.display = 'block'
    }
}


FeaturesButton.onclick = DropFeatures
CompanyButton.onclick = DropCompany



const sideBar = document.getElementById('sideBar')
const menu = document.getElementById('menu')
const closeMenu = document.getElementById('closeMenu')


const dropSideBar = () => {
    if(sideBar.style.display === 'none'){
        sideBar.style.display = 'block'
    }else{
        sideBar.style.display = 'none'
    }
}


menu.onclick = dropSideBar
closeMenu.onclick = dropSideBar