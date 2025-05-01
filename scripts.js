let list = document.querySelectorAll('.item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

// count = 3 (numero de itens)
// 0, 1, 2
// active = 0 (item ativo)

let count = list.length
let active = 0

//Escrever a função next
next.onclick = () => {
    let activeOld = document.querySelector('.active') /* pegar o item ativo */
    activeOld.classList.remove('active') /* remover a classe active do item ativo */

    active = active >= count -1 ? 0 : active + 1 /* se o item ativo for o último, volta para o primeiro, senão, vai para o próximo */
    list[active].classList.add('active') /* adicionar a classe active ao novo item ativo */ 
}
    
    
prev.onclick = () => {
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')

    active = active <= 0 ? count - 1 : active - 1 /* se o item ativo for o primeiro, vai para o último, senão, volta para o anterior */ 
    list[active].classList.add('active') /* adicionar a classe active ao novo item ativo */ 
}

