const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

const mainEl = document.querySelector("main")
mainEl.style.backgroundColor = 'var(--main-bg)'
const topMenuEl = document.querySelector("#top-menu")
const topMenuLinks = document.querySelectorAll('#top-menu a');
let showingSubMenu = false;


mainEl.innerHTML = ('<h1>SEI Rocks</h1>');
mainEl.setAttribute('class', 'flex-ctr')
const navEl = document.querySelector('nav')

topMenuEl.style.height= "100%"
topMenuEl.style.backgroundColor = "var(--top-menu-bg)" 
topMenuEl.setAttribute("class" ,"flex-around")


const subMenuEl = document.querySelector("#sub-menu")
subMenuEl.style.height = "100%"
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)" 
subMenuEl.setAttribute("class" ,"flex-around")
subMenuEl.style.top = "0"

topMenuEl.addEventListener("click", function(e){
  e.preventDefault()
  const link = e.target;
  if(link.tagName !== "A"){
    return console.log(link.textContent)
  }

  if(link.classList.contains('active')){

    link.classList.remove('active')
    showingSubMenu = false
    subMenuEl.style.top = '0'
  }

})


menuLinks.forEach(function(link){

    const aEl = document.createElement("a")
    aEl.innerText = link.text
    aEl.setAttribute('href',link.href)
    navEl.appendChild(aEl)

})