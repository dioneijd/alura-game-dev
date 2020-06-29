class Character extends Animation {
    constructor( sprite, size, xPosition, yVar, maxJumps){
        super( sprite, size, xPosition, yVar )
        this.maxJumps = maxJumps

        this.gravityValue = 5
        this.yPositionInit = this.yPosition
        this.jumpSpeed = 0
        this.jumpTogether = 0
        this.jumpHeight = 40
    }

    jump(){
        if (this.jumpTogether < this.maxJumps){
            this.jumpTogether++
            this.jumpSpeed = this.jumpHeight
            
            return true
        }
        return false
    }

    gravity(){
        this.yPosition -= this.jumpSpeed
        this.jumpSpeed -= this.gravityValue

        if(this.yPosition > this.yPositionInit){
            this.yPosition = this.yPositionInit
            this.jumpTogether = 0
        }
    }

    checkCollision(enemy){
        
        const accuracy = 0.7
        // const neutral = (1 - accuracy) / 2

        // fill('red')
        // rect(this.xPosition + this.width * neutral, this.yPosition + this.height * neutral, this.width * accuracy, this.height * accuracy)
        // rect(enemy.xPosition + enemy.width * neutral, enemy.yPosition, enemy.width * accuracy, enemy.height * 0.7)

        return collideRectRect(
            this.xPosition, this.yPosition, this.width * accuracy, this.height * accuracy, 
            enemy.xPosition, enemy.yPosition, enemy.width * accuracy, enemy.height * accuracy
        )
    }

}