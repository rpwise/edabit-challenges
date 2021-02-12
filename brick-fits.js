// (a,b,c) -- dimensions of the brick
// (w,h) -- dimensions of the hole
function doesBrickFit(a,b,c, w,h) {
    if (a == null || b == null || c == null|| w==null || h==null){
        throw "Parameter is null";
    }
	var fits = false;

    try {
        if (a <= w && b <= h || a <= h && b <= w){
            fits = true;
        }
        if (a <= w && c <= h || a <= h && c <= w){
            fits = true;
        }
        if (a <= w && c <= h || a <= w && c <= h){
            fits = true;
        }
    }
    catch {
        // log error
    }
	
	return fits;
}
module.exports = doesBrickFit;