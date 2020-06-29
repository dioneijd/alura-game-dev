function preload () {
    mainFont = loadFont('assets/fonts/fonteTelaInicial.otf')

    initialScreenImage = loadImage('assets/images/telaInicial.png')
    scenaryImage = loadImage('assets/images/floresta.png')
    mainCharacterImage = loadImage('assets/images/bruxa.png')
    groundDropImage = loadImage('assets/images/gotinha.png')
    airDropImage = loadImage('assets/images/gotinha-voadora.png')
    trollImage = loadImage('assets/images/troll.png')
    gameoverImage = loadImage('assets/images/gameover.png')

    gameSound = loadSound('assets/sounds/gameSound.mp3')
    jumpSound = loadSound('assets/sounds/jumpSound.mp3')
}