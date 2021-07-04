function cubix(pt1, pt2, pt3, pt4, t) {
    point = {};
    point.x = Math.pow(1 - t, 3) * pt1.x + 
               Math.pow(1 - t, 2) * 3 * t * pt2.x + 
               (1 - t) * 3 * t * t * pt3.x + 
               t * t * t * pt4.x;
    point.y = Math.pow(1 - t, 3) * pt1.y + 
               Math.pow(1 - t, 2) * 3 * t * pt2.y + 
               (1 - t) * 3 * t * t * pt3.y + 
               t * t * t * pt4.y;
    return point;
}


module.exports = { cubix };
