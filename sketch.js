function  keyPressed() {
    game.keyPressed(key)
}


function setup() {
    createCanvas(windowWidth * 0.8, windowHeight * 0.8)
    frameRate(40)
    game = new Game()
    game.setup() 
    
    initial = new Initial()
}

function draw() {
    if (currentScene == 'initial'){
        initial.draw()
    }

    if (currentScene == 'game') {
        game.draw()
    }
}