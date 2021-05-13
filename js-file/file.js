let val = document.getElementById('search')
let action = document.getElementById('action')
let sifi = document.getElementById('sifi')
let drama = document.getElementById('drama')
let tv = document.getElementById('tv')
let all = document.getElementById('all')
let ul = document.getElementById('menu')
let li = ul.getElementsByTagName('li')

let searchFilter = ()=>{
    let search = document.getElementById('search')
    let searchValue = search.value
    let ul = document.getElementById('menu')
    let li = ul.getElementsByTagName('li')
    for(i=0;i< li.length;i++){
        let h3 = li[i].getElementsByTagName('h3')[0]
        if(h3.innerHTML.toLowerCase().indexOf(searchValue.toLowerCase()) > -1){
            li[i].style.display = ''
        }else{
            li[i].style.display = 'none'
        }
    }
}



val.addEventListener('keyup',()=>{
    searchFilter()
})

drama.addEventListener('click',()=>{
    for(i=0;i< li.length;i++){
        let h4 = li[i].getElementsByTagName('h4')[0]
        if(h4.innerHTML == 'DRAMA'){
            li[i].style.display = ''
        }else{
            li[i].style.display = 'none'
        }
    }
})

all.addEventListener('click',()=>{
    for(i=0;i< li.length;i++){
        li[i].style.display = 'inline'
    }
})

tv.addEventListener('click',()=>{
    for(i=0;i<li.length;i++){
        let h4 = li[i].getElementsByTagName('h4')[0]
        if(h4.innerHTML == "TV-SERIES"){
            li[i].style.display = ''
        }else{
            li[i].style.display = 'none'
        }
    }
})

sifi.addEventListener('click',()=>{
    for(i=0;i < li.length;i++){
        let h4 = li[i].getElementsByTagName('h4')[0]
        if(h4.innerHTML == 'SIFI'){
            li[i].style.display = ''
        }else{
            li[i].style.display = 'none'
        }
    }
})

action.addEventListener('click',()=>{
    for(i=0;i < li.length;i++){
        let h4 = li[i].getElementsByTagName('h4')[0]
        if(h4.innerHTML == 'ACTION'){
            li[i].style.display = ''
        }else{
            li[i].style.display = 'none'
        }
    }
})



let m = document.getElementById('mov-list')
m.addEventListener('change',()=>{
    let movList = document.getElementById('mov-list')
    let searchValue = movList.value
    for(i=0;i< li.length;i++){
        let h4 = li[i].getElementsByTagName('h4')[0]
        if(h4.innerHTML.toLowerCase().indexOf(searchValue.toLowerCase()) > -1){
            li[i].style.display = ''
        }else{
            li[i].style.display = 'none'
        }
        if(searchValue == 'all'){
            li[i].style.display = 'inline'
        }
    }
})







