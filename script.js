document.addEventListener('DOMContentLoaded', function () {
    var botao = document.getElementById('botao');
    var nome = document.getElementById('nome');
    var quantidade = document.getElementById('quantidade');
    var sabores = document.getElementById('sabores');
    var pedidoNome = document.getElementById('pedidoNome');
    var pedidoQuantia = document.getElementById('pedidoQuantia');
    var pedidoSabor = document.getElementById('pedidoSabor');

    botao.addEventListener('click', function () {
        var nomeCliente = nome.value;
        var quantiaSorvetes = quantidade.value;
        var saborSorvete = sabores.options[sabores.selectedIndex].text;

        pedidoNome.innerHTML = "Nome: " + nomeCliente;
        pedidoQuantia.innerHTML = "Quantidade: " + quantiaSorvetes;
        pedidoSabor.innerHTML = "Sabor: " + saborSorvete;
    });
});
