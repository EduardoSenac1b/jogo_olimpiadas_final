let vida = 3;
let energia = 100;
var quantidadeElementos_amor = 5;
var quantidadeElementos_amizade = 2;
let dia = 1;
let habilidade = 400;
let descansouHoje = false;
let game_state = 0; // Controle de fases do jogo

function verStatus() {
    alert(`----------------MENU----------------
    Vida: ${vida}
    Energia: ${energia}
    Descançou hoje: ${descansouHoje}
    Inventário: amor: ${quantidadeElementos_amor}x, amizade: ${quantidadeElementos_amizade}x
    Dia: ${dia}
    Habilidade: ${habilidade.toFixed(1)} 
    Fase: ${game_state === 0 ? "1" : game_state === 1 ? "2" : "final"}
    `);
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
            energia = Math.min(energia + 30, 100); // Garante que a energia não ultrapasse 100
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
                habilidade += 10 * (0.2 * quantidadeElementos_amor); // Corrige o cálculo da habilidade
                energia -= 40; // Reduz a energia após a luta
                alert(`Você lutou e ganhou experiência em luta, mas perdeu energia.\n\nHabilidade: ${habilidade.toFixed(1)};\nEnergia: ${energia}`); 
            }
            break;
        case "2":
            alert("Você não quis lutar, então você vai para casa."); 
            break;
        case "3":
            enfrentarOponente(); // Chama a função para enfrentar o oponente
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

function enfrentarOponenteItalia() {
    if (habilidade >= 690) { // Verifica se a habilidade é suficiente para vencer o oponente na Itália
        alert("Você venceu seu oponente na Itália! Agora é hora de ir para as Olimpíadas!");
        game_state = 2; // Avança para a fase das Olimpíadas
    } else {
        alert("Você perdeu contra o oponente na Itália. Continue treinando.");
        energia = 10;
    }
}

function faseItalia() {
    let opcao = prompt("Bem-vindo à Itália! O que deseja fazer?\n[0]-Enfrentar oponente\n[1]-Treinar\n[2]-Socializar\n[3]-Ver inventário\n[4]-Dormir na pousada\n[5]-História da Itália");

    switch (opcao) {
        case "0":
            enfrentarOponenteItalia(); // Chama a função de luta contra o oponente na Itália
            break;
        case "1":
            habilidade += 20 + (0.5 * quantidadeElementos_amizade); // Treina e aumenta a habilidade
            energia -= 50; // Reduz energia após o treino
            alert(`Você treinou e melhorou suas habilidades.\nHabilidade: ${habilidade.toFixed(1)};\nEnergia: ${energia}`);
            break;
        case "2":
            alert("Você conheceu um novo amigo. Sua motivação aumentou!");
            quantidadeElementos_amizade += 1; // Aumenta a amizade
            energia -= 40; // Reduz energia após socializar
            break;
        case "3":
            verStatus(); // Exibe o status
            break;
        case "4":
            pousadaOpcao(); // Função da pousada
            break;
        case "5":
            alert("Na Itália, você vê paisagens e encontra novas oportunidades, mas o desafio ainda está por vir.");
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
    if (game_state === 0) {
        let inicio = prompt("Você está em casa. O que deseja fazer?\n[1]-Ir para o quarto\n[2]-Falar com pai/mãe\n[3]-Ir ao clube da luta\n[4]-Ver inventário\n[5]-Reiniciar jogo");

        switch (inicio) {
            case "1":
                quartoOpcao(); // Menu do quarto
                break;
            case "2":
                alert("Você conversou com seus pais e ganhou motivação.");
                quantidadeElementos_amor += 1;
                energia -= 40;
                break;
            case "3":
                lutarNoClube(); // Clube de luta
                break;
            case "4":
                verStatus(); // Exibe o status
                break;
            case "5":
                continuar = false; // Encerra o loop
                reiniciarJogo();
                break;
            default:
                alert("Opção inválida."); 
                break;
        }
    } else if (game_state === 1) {
        faseItalia(); // Inicia a fase Itália
    } else if (game_state === 2) {
        fase_olimpiadas(); // Fase final das Olimpíadas
        continuar = false; // Finaliza o jogo
    }

    if (vida <= 0) {
        alert("Você perdeu toda sua vida. Fim de jogo.");
        continuar = false;
    }
}
