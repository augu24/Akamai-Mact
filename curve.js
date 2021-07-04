function curve(p0v2, p1v2, p2v2, t) {
    point = {};
    point.x = Math.pow(1 - t, 2) * p0v2.x + 
            (1 - t) * 2 * t * p1v2.x + 
            t * t * p2v2.x;
    point.y = Math.pow(1 - t, 2) * p0v2.y + 
            (1 - t) * 2 * t * p1v2.y + 
            t * t * p2v2.y;
    return point;
}


module.exports = { curve };
