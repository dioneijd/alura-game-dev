class Initial {
    constructor(){        
        this.startButton = createButton('Iniciar')
        this.startButton.mousePressed(() => this.startGame())
    }

    draw() {
        image(initialScreenImage, 0, 0, width, height)
        textFont(mainFont)

        const centerWidth = width / 2
        
        textSize(54)
        textAlign(CENTER)
        text('As aventuras de', centerWidth, 100)
        
        textSize(100)
        text('Hispta', centerWidth + 20 , 170)

        this.startButton.position( width / 2, height * 5 / 7)
        this.startButton.center('horizontal')
        this.startButton.addClass('button-start')

    }

    startGame(){
        this.startButton.remove()
        currentScene = 'game'
    }
}