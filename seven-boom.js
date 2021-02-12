function sevenBoom(arr) {
    try{
        if (arr.includes(7)){
            return "Boom!";
        }
        else {
            return "there is no 7 in the array";
        }
    }
    catch {
        return "there is no 7 in the array";
    }
	
}
module.exports = sevenBoom;