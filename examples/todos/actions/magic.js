function makeType(func) {
    return [func._parent_name, func._name]
}

function makeStateType(d) {
    // Name everything!
    for (k in d) {
        d[k]._name = k;
        for (kk in d[k]) {
            d[k][kk]._parent_name = k;
            d[k][kk]._name = kk;
        }
    }
}
