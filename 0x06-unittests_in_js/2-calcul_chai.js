function calculateNumber(type, a, b) {
    var result;
    if (type === 'SUM') {
        result = Math.round(a) + Math.round(b);
    }else if ( type === "SUBTRACT") {
        result = Math.round(a) - Math.round(b);
    }else {
        result = (Math.round(b) === 0)
        if (Math.round(b) === 0){
            return "Error"
        }
        result = result = Math.round(a) / Math.round(b);
    }

    return result;
}
module.exports = calculateNumber;
