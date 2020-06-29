class Sprite {
    constructor(image, numColumns, totalImages) {
        this.image = image
        this.numColumns = numColumns
        this.totalImages = totalImages

        this.width = image.width / this.numColumns
        
        this.numRows = Math.ceil( totalImages / numColumns )
        this.height = image.height / this.numRows 

        this.matriz = []

        for ( var r=0 ; r<=this.numRows -1 ; r++){
            for ( var c=0 ; c<=this.numColumns -1 ; c++){
                if (this.matriz.length != this.totalImages){
                    this.matriz.push([ c * this.width , r * this.height ])
                }
            }
        }
    }
}