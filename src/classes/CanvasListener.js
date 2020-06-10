class CanvasListener {

    constructor(id){
        this.id = id

        document.getElementById(id).addEventListener('click', (e) => {
            let boundingRect = e.target.getBoundingClientRect()
            console.log(e.clientX)
            console.log(e.clientY)
            console.log(boundingRect.width)
            console.log(boundingRect.height)

            console.log(boundingRect)
        })
    }



    



}

module.exports = CanvasListener