class Score {
    constructor(){
        this.score = 0
    }

    show() {
        textAlign(RIGHT)
        fill('white')
        textSize(50)
        text(parseInt(this.score), width - 30, 50)
    }

    addScore(scoreValue){
        this.score = this.score + scoreValue || 0
    }


}