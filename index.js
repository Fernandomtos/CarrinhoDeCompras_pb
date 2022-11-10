const productsCart = [
    {
        id: 1,
        name: "Uva Crimson",
        price: 44.99
    },
    {
        id: 2,
        name: "Vinho Canção",
        price: 17.98
    },
    {
        id: 3,
        name: "Água de coco",
        price: 8.99
    },
    {
        id: 4,
        name: "Mamão",
        price: 9.98
    },
    {
        id: 5,
        name: "Água Tônica",
        price: 17.98
    }
];

let body = document.querySelector('body');

let tagMain = document.createElement('main');

let divContainer = document.createElement('div');
divContainer.classList.add("container");

// Título
let h1 = document.createElement('h1');
h1.innerHTML = 'Virtual Market';

body.appendChild(tagMain);
tagMain.appendChild(divContainer);
divContainer.appendChild(h1);

// criando o cabeçalho

let divCabecalho = document.createElement('div');
divCabecalho.classList.add("cabecalho");
divContainer.appendChild(divCabecalho);

let pItem = document.createElement('p');
pItem.innerHTML = 'Item';
let pValor = document.createElement('p');
pValor.innerHTML = 'Valor';

divCabecalho.appendChild(pItem);
divCabecalho.appendChild(pValor);

// criando a ul

let ul = document.createElement('ul');
ul.classList.add("productsList");
divContainer.appendChild(ul);

// criando as li

let somaProdutos = 0;

for (let i=0; productsCart.length > i; i++) {
    let li = document.createElement('li');
    let pProduto = document.createElement('p');
    let pValor = document.createElement('p');
    
    li.classList.add("productDetails");
    ul.appendChild(li);
    li.appendChild(pProduto);
    li.appendChild(pValor);

    pProduto.innerHTML = `${productsCart[i].name}`;
    pValor.innerHTML = `R$ ${productsCart[i].price}`;

    somaProdutos += productsCart[i].price;
}

//console.log(somaProdutos);

// criando a section

let section = document.createElement('section');
divContainer.appendChild(section);

let divSoma = document.createElement('div');
divSoma.classList.add("soma");
section.appendChild(divSoma);

let pTotalSoma = document.createElement('p');
let pValorSoma = document.createElement('p');

divSoma.appendChild(pTotalSoma);
divSoma.appendChild(pValorSoma);

pTotalSoma.innerHTML = "Total";
pValorSoma.innerHTML = `R$ ${(somaProdutos).toFixed(2)}`;

// criando o botão

let btnFinalizar = document.createElement('button');
section.appendChild(btnFinalizar);

btnFinalizar.innerHTML = "Finalizar compra";
btnFinalizar.setAttribute('type','submit');

btnFinalizar.addEventListener('click', function(e) {
    alert `Compra Finalizada com Sucesso!`
});
