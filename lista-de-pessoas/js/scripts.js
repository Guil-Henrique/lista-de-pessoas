// elementos
const listForm = document.querySelector ("#form-pessoas");
const InputName = document.querySelector ("#nome");
const InputIdade = document.querySelector ("#idade");
const InputCpf = document.querySelector ("#cpf");
const Inputadd = document.querySelector ("#add");
//funções
const saveLista = (text) => {
    const lista = document.createElement ("div");
    lista.classList.add("lista");

    const listName = document.createElement("h3");
    listName.innerText = text;
    //lista.appendChild(listName);

    const listIdade = document.createElement("h3");
    listIdade.innerText = text;
    //lista.appendChild(listIdade);

    const listCpf = document.createElement("h3");
    listCpf.innerText = text;
    //lista.appendChild(listCpf);
    lista.appendChild(listName, listIdade, listCpf);
    console.log(lista); // <--teste
}
//eventos
listForm.addEventListener("submit", (e) =>{
    e.preventDefault()
    //console.log ("enviou form"); //<--teste
    const inputvalueName = InputName.value
    const inputvalueIdade = InputIdade.value
    const inputvalueCpf = InputCpf.value
    
    if(inputvalueName){
        saveLista(inputvalueName);
    //    console.log(inputvalueName);
    }
    if(inputvalueIdade){
        saveLista(inputvalueIdade);
    //    console.log(inputvalueIdade);
    }
    if(inputvalueCpf){
        saveLista(inputvalueCpf);
    //    console.log(inputvalueCpf);
    }


})