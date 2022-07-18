const productsCart = [
    {
        id: 1,
        name: "Blusa Regata Cropped em Linho",
        price: 79.90,
    },

    {
        id: 2,
        name: "Calça Reta em Linho",
        prince: 9.90,
    },

    {
        id: 3,
        name: "Camisa em Linho com Manga",
        price: 99.90,
    },

    {
        id: 4,
        name: "Vestido Midi com Bordados",
        price: 119.90,
    }
]

function soma(array){
    let resultado = 0;

    for(let i = 0; i < array.length; i++){
        resultado += array[i].price;
    }

    return resultado;
}


function addList(array){

    const main = document.querySelector('main');

    const ul = document.createElement('ul');

    main.appendChild(ul)
    
    for(let i = 0; i < array.length; i++){

        const li = document.createElement('li');
        const spanName = document.createElement('span');
        spanName.textContent = array[i].name;

        const spanPrice = document.createElement('span');
        spanPrice.textContent = `R$ ${array[i].price}`

        li.appendChild(spanName)
        li.appendChild(spanPrice)
        ul.appendChild(li)
    }

    //const total = document.createElement("p")
    const total = document.createElement('span')
    total.textContent = `Valor total da compra é R$ ${soma(productsCart)}`
    

    const button = document.createElement('button')
    button.textContent = 'Finalizar'

    const section = document.createElement('section')
    section.classList.add('section')
    section.appendChild(total)
    section.appendChild(button)
    main.appendChild(section)
    
}


addList(productsCart)