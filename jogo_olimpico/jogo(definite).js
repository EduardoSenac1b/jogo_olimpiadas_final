let vida = 3;
let energia = 100;
var quantidadeElementos_amor = 5;
var quantidadeElementos_amizade = 2;
let dia = 1;
let habilidade = 0;
let descansouHoje = false;
let game_state = 0; // Controle de fases do jogo

console.log(quantidadeElementos_amizade); 
console.log(quantidadeElementos_amor); 

function verStatus() {
    alert(`
    Vida: ${vida}
    Energia: ${energia}
    Descançou hoje: ${descansouHoje}
    Inventário: amor: ${quantidadeElementos_amor}x, amizade: ${quantidadeElementos_amizade}x
    Dia: ${dia}
    Habilidade: ${habilidade.toFixed(1)} 
    Fase: ${game_state}
    `);
}

function quartoOpcao() {
    let quarto = prompt("Você está em seu quarto, o que deseja fazer?\n[1]-Dormir\n[2]-Descansar\n[3]-Voltar\n[4]-Ver inventário\n[5]-introdução de sua jornada");

    switch (quarto) {
        case "1":
            dormir(); // Função dormir definida corretamente
            break;
        case "2":
            descansar(); // Função descansar definida corretamente
            break;
        case "3":
            alert("Voltando para a sala."); // Mensagem válida
            break;
        case "4":
            verStatus(); // Mostra status atual
            break;
        case "5":
            alert("Seu nome é Iman Mahdavi, seu sonho é entrar para as Olimpíadas de Paris 2024,");
            alert("mas para isso, é preciso muito treinamento,");
            alert("com a ajuda de sua família, você precisará derrotar seus oponentes para se provar viável para entrar no time de luta livre da república islâmica.");
            alert("Será que você conseguirá?");
            break;
        default:
            alert("Opção inválida."); // Validação de entradas inválidas
            break;
    }
}

function dormir() {
    energia = 100; // Restaura a energia
    dia += 1; // Avança um dia
    descansouHoje = false; // Reseta o descanso
    alert("Você dormiu e restaurou sua energia."); 
}

function descansar() {
    if (!descansouHoje) { // Verifica se já descansou no dia
        if (energia < 100) {
            energia = Math.max(energia + 30, 100); // Corrige para garantir que a energia não ultrapasse 100
            alert("Você descansou e recuperou energia."); 
        } else {
            alert("Você já está com a energia cheia e não precisa descansar."); 
        }
        descansouHoje = true; // Marca que já descansou
    } else {
        alert("Você já descansou hoje. Espere até o dia seguinte."); 
    }
}

function lutarNoClube() {
    let luta = prompt("Você chegou ao clube da luta. Deseja lutar?\n[1]-Sim\n[2]-Não\n[3]-Enfrentar oponente");

    if (energia <= 0) { // Verifica se tem energia para lutar
        alert("Você não tem energia para lutar. Vá descansar."); 
        return;
    }

    switch (luta) {
        case "1":
            if (energia < 40) { // Verifica se a energia é suficiente para treinar
                alert("Energia muito baixa para treinar, vá descansar ou dormir para treinar.");
            } else {
                habilidade += 10 * (0.2 * quantidadeElementos_amor); // Corrigido o uso do ponto decimal
                energia -= 40; // Reduz a energia após a luta
                alert(`Você lutou e ganhou experiência em luta, mas perdeu energia.\n\nHabilidade: ${habilidade.toFixed(1)};\nEnergia: ${energia}`); 
            }
            break;
        case "2":
            alert("Você não quis lutar, então você vai para casa."); 
            break;
        case "3":
            enfrentarOponente(); // Função chamada corretamente
            break;
        default:
            alert("Opção inválida."); 
            break;
    }
}

function enfrentarOponente() {
    if (habilidade >= 400) { // Verifica se a habilidade é suficiente para vencer o oponente
        alert("Você lutou contra seu oponente, venceu graças ao seu treinamento, mas um terremoto atingiu a região. Agora, você terá que se mudar para a Itália, enfrentando inimigos mais fortes, mas com um buff em sua progressão."); 
        game_state = 1; // Muda para a próxima fase
    } else {
        alert("Você lutou e perdeu a oportunidade de evoluir seu ranque."); 
        energia = 10
    }
}

function enfrentarOponenteItalia(){
    if (habilidade >= 690) { // Verifica se a habilidade é suficiente para vencer o oponente
        alert("você lutou contra seu oponente")
        game_state = 2;
    } else {
        alert("você lutou e perdeu contra seu oponente e não conseguiu vencer, treine mais para vence-lo")
        energia = 10
    }
}

function reiniciarJogo() {
    alert("Saindo do jogo."); 
    verStatus(); // Mostra o status ao reiniciar
}

function faseItalia() {
    let opcao = prompt("Bem-vindo à Itália! O que deseja fazer?\n[0]-enfrentar oponente\n[1]-Treinar\n[2]-Socializar\n[3]-Ver inventário\n[4]-Dormir em sua pousada local\n[5]-Sua jornada pt.2");

    switch (opcao) {
        case "0":
            enfrentarOponenteItalia();
        break
        case "1":
            habilidade += 20 + (0.5 * quantidadeElementos_amizade); // Calcula a habilidade ao treinar
            energia -= 50; // Reduz a energia
            alert(`Você treinou e melhorou suas habilidades.\nHabilidade: ${habilidade.toFixed(1)};\nEnergia: ${energia}`);
            break;
        case "2":
            alert("Você conheceu um novo amigo, agora você tem um incentivo a mais para seu treinamento.");
            quantidadeElementos_amizade += 1; // Aumenta o número de amizades
            energia = energia - 40
            break;
        case "3":
            verStatus(); // Exibe o status
            break;
        case "4":
            pousadaOpcao(); // Chama a função de opções da pousada
            break;
        case "5":
            alert("Chegando na Itália, você vê uma linda paisagem com várias pessoas junto com suas famílias. Infelizmente, você não conseguiu trazer a sua junto, mas fará novos amigos pela região.");
            alert("Agora é hora de usar sua tristeza como motivação para seus treinos e realizar seu sonho.");
            break;
        default:
            alert("Opção inválida."); 
            break;
    }
}

function pousadaOpcao() {
    let pousada = prompt("Você está em sua pousada, o que deseja fazer?\n[1]-Dormir\n[2]-Descansar\n[3]-Voltar\n[4]-Ver inventário");

    switch (pousada) {
        case "1":
            dormir(); // Chama a função dormir
            break;
        case "2":
            descansar(); // Chama a função descansar
            break;
        case "3":
                // Volta ao menu anterior
            break; 
        case "4":
            verStatus(); // Exibe o status
            break;
        default:
            alert("Opção inválida."); 
            break;
    }
}

function fase_olimpiadas() {
    alert("Parabéns, você realizou seu sonho de entrar nas Olimpíadas de Paris 2024. Porém, como você se refugiou na Itália, você irá entrar na equipe de refugiados, representando a Itália na luta livre...");
    alert("Agora, para decidir se ganhou ou não alguma medalha, apenas na TV para saber.");
    alert(`Estatísticas finais: Amor: ${quantidadeElementos_amor}, Amizade: ${quantidadeElementos_amizade}`); // Corrigido o uso da função inventario
}

let continuar = true;

while (continuar) {
    let inicio = prompt("Você está em casa, o que deseja fazer?\n[1]-Ir para o quarto\n[2]-Falar com pai/mãe\n[3]-Ir ao clube da luta\n[4]-Ver inventário\n[5]-Reiniciar jogo");

    switch (inicio) {
        case "1":
            quartoOpcao(); // Função do quarto
            break;
        case "2":
            alert("Você conversou com seus pais. Eles te deram conselhos sábios.");
            quantidadeElementos_amor += 1; // Incrementa a amor
            console.log("adcionado mais um a amor", quantidadeElementos_amizade) 
            energia = energia - 40
            break;
        case "3":
            lutarNoClube(); // Chama a função de luta no clube
            break;
        case "4":
            verStatus(); // Exibe o status
            break;
        case "5":
            continuar = false; // Termina o loop
            reiniciarJogo(); // Chama a função de reiniciar
            break;
        default:
            alert("Opção inválida, por favor, tente novamente."); 
            break;
    }

    if (vida <= 0) { // Verifica se a vida chegou a zero
        alert("Você perdeu toda sua vida. Fim de jogo."); 
        continuar = false; // Termina o loop se a vida acabar
    }

    if (game_state === 1) {
        faseItalia(); // Muda para a fase Itália
    }

    if (game_state === 2) {
        fase_olimpiadas(); // Muda para a fase Olimpíadas
    }
}
