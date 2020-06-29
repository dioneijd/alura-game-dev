class Animation {
    constructor( sprite, size, xPosition, yVar ){
        this.sprite = sprite
        this.size = size
        this.height = sprite.height * size
        this.width = sprite.width * size
        
        this.xPosition = xPosition
        this.yPosition = height - this.height - yVar

        this.currentFrame = 0
    }

    show() {
        // noFill()
        // rect(this.xPosition, this.yPosition, this.width, this.height)

        const sx = this.sprite.matriz[this.currentFrame][0]
        const sy = this.sprite.matriz[this.currentFrame][1]
        
        image(this.sprite.image, this.xPosition, this.yPosition, this.width, this.height, sx, sy, this.sprite.width, this.sprite.height )

        this.animate()
    }

    animate() {
        this.currentFrame ++

        if (this.currentFrame >= this.sprite.matriz.length) {
            this.currentFrame = 0
        }
    }

}