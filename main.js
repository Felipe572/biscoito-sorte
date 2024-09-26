const screenOne = document.querySelector('.screenOne')
const screenTwo = document.querySelector('.screenTwo') 

const openCookie = document.querySelector('#btnCookie')
const btnNewCookie = document.querySelector('#btnNewCookie')

    const phrases = [
        'A solidão é a sorte de todos os espíritos excepcionais.',
        'Não ser amado é falta de sorte, mas não amar é a própria infelicidade.',
        'Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar.',
        'Eu acredito demais na sorte. E tenho constatado que, quanto mais duro eu trabalho, mais sorte eu tenho.',
        'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
        'Dê toda a atenção à formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.',
        'Siga os bons e aprenda com eles.',
        'Não importa o tamanho da montanha, ela não pode tapar o sol.',
        'O bom-senso vale mais do que muito conhecimento.',
        'Quem quer colher rosas tem de estar preparado para suportar os espinhos.',
        'São os nossos amigos que nos ensinam as mais valiosas lições.',
        'O riso é a menor distância entre duas pessoas.',
        'Os defeitos são mais fortes quando o amor é fraco.',
        'Amizade e Amor são coisas que se unem num piscar de olhos.',
        'Surpreender e ser surpreendido é o segredo do amor.',
        'Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.',
        'A paciência na adversidade é sinal de um coração sensível.',
        'A sorte favorece a mente bem preparada.',
        'A sua visão se tornará mais clara apenas quando conseguir olhar para dentro do seu coração.',
        'Quem olha para fora sonha, quem olha para dentro acorda.',
        'A vida trará coisas boas se tiver paciência.',
        'A maior de todas as torres começa no solo.',
        'A juventude não é uma época da vida, é um estado de espírito.',
        'Não importa o tamanho da montanha, ela não pode tapar o sol.',
        'O bom-senso vale mais do que muito conhecimento.',
        'Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.',
        'A paciência na adversidade é sinal de um coração sensível.',
        'A sorte favorece a mente bem preparada.',
        'Quem olha para fora sonha; quem olha para dentro acorda.'
    ];

const randomPhrase = document.querySelector('#randomPhrase')
let phraseGenerator

openCookie.addEventListener('click', randomPhraseGenerator)
document.addEventListener('keydown', pressEnterKey)

function randomPhraseGenerator() {
    toggleScreen()

    phraseGenerator = Math.floor(Math.random() * (phrases.length))

    randomPhrase.innerText = phrases[phraseGenerator]
}

function buttonTry(event) {
    event.prevenrDefault()
    toggleScreen()
}

function toggleScreen() {
    screenOne.classList.toggle('hide')
    screenTwo.classList.toggle('hide')
}


function pressEnterKey(e){
    if(e.key == 'Enter' && screenOne.classList.contains('hide')){
        toggleScreen()
    }
}