let users = [
    {
        name: 'Emma Watson',
        image: 'img/emma.jpg'
},
{
    name: 'Anjelina Jolie',
    image: 'img/anjelina jolie.jpg'
},
{
    name: 'Natalie Portman ',
    image: 'img/natalie portman.jpg'
},
{
    name: 'Chris Hemsworth ',
    image: 'img/ chris-hemsworth.jpg'
},
]

const pictures = document.getElementById('picture')
const names = document.getElementById('name')


// setTimeout(function(){
//     pictures.src = users[0].image;
//     names.innerText = users[0].name
// },1000)

// setTimeout(function(){
//     pictures.src = users[1].image;
//     names.innerText = users[1].name
// },2000)

// setTimeout(function(){
//     pictures.src = users[2].image;
//     names.innerText = users[2].name
// },3000)


let i = 0
setInterval(() => {
    if (i == users.length){
        i = 0
    }
    pictures.src = users[i].image;
    names.innerText = users[i].name;
    i++
}, 1500);