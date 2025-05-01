function e(n) {
    let denom = 1;  //Denominator; this is the n! portion of the summation
    let e = 1;      //The current approximation of e
    for (let i = 1; i <= n; i++){
        denom = denom * i;
        e += 1/denom;
    }
    return e;
}
