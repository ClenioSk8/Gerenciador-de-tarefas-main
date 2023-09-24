// Array para armazenar as postagens
const postagens = [];

// Função para adicionar uma nova postagem
function adicionarPostagem(event) {
    event.preventDefault();
    const titulo = document.getElementById('titulo').value;
    const conteudo = document.getElementById('conteudo').value;
    const data = document.getElementById('data').value;
    

    if (titulo && conteudo && data) {
        const novaPostagem = { titulo, conteudo, data };
        postagens.push(novaPostagem);
        exibirPostagens();
        limparFormulario();
    }
}




// Função para exibir as postagens na lista
function exibirPostagens() {
    const postList = document.getElementById('post-list');
    postList.innerHTML = '';

    // Ordene as postagens pelo campo 'data' antes de exibi-las
    postagens.sort((a, b) => new Date(a.data) - new Date(b.data));

    postagens.forEach((postagem, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<h3>${postagem.titulo}</h3><p>${postagem.conteudo}</p><p>${postagem.data}</p>
                        <button onclick="editarPostagem(${index})">Editar</button>
                        <button onclick="excluirPostagem(${index})">Excluir</button>`;
        postList.appendChild(li);
    });
}

// Função para editar uma postagem
function editarPostagem(index) {
    const novaTitulo = prompt('Editar Título:', postagens[index].titulo);
    const novoConteudo = prompt('Editar Conteúdo:', postagens[index].conteudo);
    const novaData = prompt('Editar Data:', postagens[index].data);

    if (novaTitulo && novoConteudo && data) {
        postagens[index].titulo = novaTitulo;
        postagens[index].conteudo = novoConteudo;
        postagens[index].data = novaData;
        exibirPostagens();
    }
}

// Função para excluir uma postagem
function excluirPostagem(index) {
    postagens.splice(index, 1);
    exibirPostagens();
}

// Função para limpar o formulário após a criação de uma postagem
function limparFormulario() {
    document.getElementById('titulo').value = '';
    document.getElementById('conteudo').value = '';
    document.getElementById('data').value = '';
}

// Vincular o formulário a função de criação de postagem
const postForm = document.getElementById('post-form');
postForm.addEventListener('submit', adicionarPostagem);

// Exibir as postagens iniciais (se houver)
exibirPostagens();
