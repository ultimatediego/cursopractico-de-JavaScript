// h1 {color: red}
// .parrafo { ... }
// #pid { ... }

const h1= document.querySelector('h1');
const p= document.querySelector('p');
const parrafo= document.querySelector('.parrafo');
const pid= document.getElementById('pid');
const input= document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafo,
    pid,
    input,
});

h1.innerHTML = 'Patito <br> Feo';
h1.innerText = 'Patito <br> Feo';
h1.getAttribute('class');
console.log(h1.getAttribute('pantalla'));
h1.setAttribute('class','rojo');



h1.classList.add('rojo');
h1.classList.remove('verde');
h1.classList.toggle('verde')
h1.classList.contains('verde')

input.value = 456

const img = document.createElement('img');
img.setAttribute('src','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/toyota-tacoma-trd-pro-1622745476.jpg?crop=1.00xw:0.892xh;0,0.108xh&resize=980:*')
console.log(img);

pid.innerHTML= "";
pid.append(img);
