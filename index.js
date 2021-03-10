const challengeFunction = function(cell){
    return countAvailableMoviments(cell);
}

function countAvailableMoviments(cell){
    let letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
    let count = 0
    let position = cell.split('');

    let column = letters.indexOf(position[0]);
    let row = parseInt(position[1]);

    if(column + 1 <8) {
        if(row + 2 <=8)
            count++
        if(row - 2 >=1)
            count++
    }

    if(column + 2 <8) {
        if(row + 1 <=8)
            count++
        if(row - 1 >=1)
            count++
    }

    if(column - 1 >= 0) {
        if(row + 2 <=8)
            count++
        if(row - 2 >=1)
            count++
    }
    
    if(column - 2 >= 0) {
        if(row + 1 <=8)
            count++
        if(row - 1 >=1)
            count++
    }

    return count;
}

module.exports = challengeFunction
