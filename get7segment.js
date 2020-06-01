function get7segment(ascii) {
    return ascii.
        split('\n').
        reduce(function (r, a, i) {
            a.match(/.../g).forEach(function (b, j) {
                r[j] = r[j] || [];
                r[j][i] = b;
            });
            return r;
        }, []).
        map(function (a) {
            return a.join('');
        }).
        map(function (a) {
            var bits = { 63: 0, 6: 1, 91: 2, 79: 3, 102: 4, 109: 5, 125: 6, 7: 7, 127: 8, 111: 9, 0: ' ' },
                v = '909561432'.split('').reduce(function (r, v, i) {
                    return r + ((a[i] !== ' ') << v);
                }, 0);
            return v in bits ? bits[v] : '*'; // * is an illegal character
        }).
        join('');
}

console.log(get7segment(' _     _  _     _  _  _  _  _ \n| |  | _| _||_||_ |_   ||_||_| \n|_|  ||_  _|  | _||_|  ||_| _|'));
//print('    _  _  _    ...\n  | _| _|  |   ...\n  | _| _|  |   ...');
//print('    _  _  _  _  _ \n|_||_|| ||_||_   |\n  | _||_||_||_|  |');