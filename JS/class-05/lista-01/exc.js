var listaDeProdutos = [];

const adicionarProduto = produto =>{
    if(listaDeProdutos.some(produtos => produtos.id === produto.id)){
        console.log(`ID ${produto.id} já inserido previamente em outro produto`);
        return;
    }
    listaDeProdutos.push(produto);
}

const removerProduto = id => listaDeProdutos = listaDeProdutos.filter(produtos => produtos.id != id);

const encontrarProduto = id => console.log(listaDeProdutos.find(produtos => produtos.id == id));

const mostrarProdutos = () => listaDeProdutos.forEach(produto => console.log(produto));

const mostrarPatrimonio = () => {
    let somaPrecos = listaDeProdutos.reduce((somaTotal, produtoAtual) =>{
        return somaTotal += produtoAtual.valor;
    }, 0)
    console.log(`A soma do preço dos produtos até o momento é de R$${somaPrecos}`);
}


adicionarProduto({id: 1, descricao: 'Carrinho de brinquedo', valor: 20});
adicionarProduto({id: 2, descricao: 'Boneca de pano', valor: 40});
adicionarProduto({id: 3, descricao: 'Jogo de tabuleiro', valor: 80});
adicionarProduto({id: 4, descricao: 'Hotwheels', valor: 15}); //removido posteriormente
adicionarProduto({id: 5, descricao: 'Uno', valor: 45});
adicionarProduto({id: 2, descricao: 'Casinha de brinquedo', valor: 200}); //não vai inserir por ter id repetido
removerProduto(4); // produto id 4 removido
encontrarProduto(5); // mostrar o produto de id 5

mostrarProdutos(); //mostrar todos os produtos no console

mostrarPatrimonio(); //mostrar o patrimônio total
