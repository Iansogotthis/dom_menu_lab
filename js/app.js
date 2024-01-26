const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

const mainEl = document.querySelector("main")
mainEl.style.backgroundColor = 'var(--main-bg)'

mainEl.innerHTML = ('<h1>SEI Rocks</h1>');
mainEl.setAttribute('class', 'flex-ctr')

const topMenuEl = document.querySelector("#top-menu")
topMenuEl.style.height= "100%"
topMenuEl.style.backgroundColor = "var(--top-menu-bg)" 
topMenuEl.setAttribute("class" ,"flex-around")

const navEl = document.querySelector('nav')

menuLinks.forEach(function(link){

    const aEl = document.createElement("a")
    aEl.innerText = link.text
    aEl.setAttribute('href',link.href)
    navEl.appendChild(aEl)

})