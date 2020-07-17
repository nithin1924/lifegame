var x = 3;// size of matrix

var iarr = new Array();
for (var i = 0; i < x; i++) {
    iarr[i] = [];
}
var temarr = new Array();
for (var i = 0; i < (x + 2); i++) {
    temarr[i] = [];
}
var lifearr = new Array();
for (var i = 0; i < x; i++) {
    lifearr[i] = [];
}

iarr[0] = ['-', 'x', '-'];
iarr[1] = ['-', '-', 'x'];
iarr[2] = ['-', 'x', '-'];


for (var i = 0; i < (x + 2); i++) {
    for (var j = 0; j < (x + 2); j++) {

        if (i == 0) temarr[i][j] = 0;

        else if (j == 0) temarr[i][j] = 0;
        else if (i == x + 1) { temarr[i][j] = 0; }
        else if (j == x + 1) { temarr[i][j] = 0; }

        else {
            if (iarr[i - 1][j - 1] == 'x') temarr[i][j] = 1;
            else temarr[i][j] = 0;
        }

    }
}



for (var i = 0; i < x; i++) {
    for (var j = 0; j < x; j++) {
        lifearr[i][j] = temarr[i][j] + temarr[i][j + 1] + temarr[i][j + 2] + temarr[i + 1][j] + temarr[i + 1][j + 2] + temarr[i + 2][j] + temarr[i + 2][j + 1] + temarr[i + 2][j + 2];

    }
}




for (var i = 0; i < x; i++) {
    for (var j = 0; j < x; j++) {
        if (lifearr[i][j] == 2 && iarr[i][j] == 'x') lifearr[i][j] = 'x';
        else if (lifearr[i][j] == 3) lifearr[i][j] = 'x';
        else lifearr[i][j] = '-';
    }
}

for (var i = 0; i < x; i++) {
    console.log(lifearr[i]);
}
