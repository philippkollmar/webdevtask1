var selectionObj = {
    K: calcCircle,
    R: calcRect,
    Q: calcSquare
}
var input= prompt('Welche Fläche?')

if (input){
    selectionObj[input]()
}