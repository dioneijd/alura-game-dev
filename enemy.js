class Enemy extends Animation {
    constructor( sprite, size, yVar ){
        const x = width - sprite.width
        
        super(sprite, size, x, yVar)

        this.speed = 7
    }

    move() {
        this.xPosition -= this.speed
        if (this.xPosition <= -this.sprite.width) {
            this.xPosition = width
        }
    }
}