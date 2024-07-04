function novaTarefa(){
    overlay.classList.add("active");
    criarTarefa.classList.add("active");
}
function fecharModal(){
    overlay.classList.remove("active");
    criarTarefa.classList.remove("active");
}
function buscarTarefas(){
    fetch("http://localhost:3000/tarefas")
    .then(res => res.json())
    .then(res => {
        inserirTarefas(res);
    })
} buscarTarefas();

function inserirTarefas(listadeTarefas){
    if(listadeTarefas.length > 0){
        lista.innerHTML = ""
        listadeTarefas.map(tarefa => {
            lista.innerHTML += `
             <li>
                <h5>${tarefa.titulo}</h5>
                <p>${tarefa.descricao}</p>
                <div class="actions">
                    <i class='bx bxs-trash' size="sm"></i>
                </div>
                </li>
                    `;
        })
    }
}
function inserirTarefa(){
    event.preventDefault();
    event.stopImmediatePropagation();
    let tarefa = {        
        titulo: titulo.value,
        descricao: descricao.value
    }
    console.log(tarefa)
    fetch("http://localhost:3000/tarefas",{
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
        body: JSON.stringify(tarefa)
    })
    .then(res => res.json())
    .then(res => {
        fecharModal();
        buscarTarefas();
    })
}