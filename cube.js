function cube(x){
    
    if (x == null){
        throw "Parameter is null";
    }
    try{
        return x * x * x;
    }
    catch{
        return 0;
    }
    
}
module.exports = cube;