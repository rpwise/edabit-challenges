function countTrue(array){
    
    var count = 0;

    array.forEach(element => {
        if (element == true) { 
            count++;
        }
    });

    return count;
}
module.exports = countTrue;