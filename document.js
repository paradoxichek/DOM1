// 1
let element = document.getElementById('element1');
element.innerText = Math.floor(Math.random() * 100); // изменяем текст на рандомное число

// 2
let names = ['Alex', 'John', 'Constantine', 'Tyler', 'Kabachok', 'Smith'];

let nahodim = document.getElementsByTagName('p');

names.sort(() => Math.random() - 0.5);

for (let i = 0; i < nahodim.length; i++) {
  nahodim[i].innerText = names[i];
}



