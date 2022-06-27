function GameOver(knight) {
    end = 0;
    knight.forEach(function(item) {
        if (item.health < 1) {
            ++end;
        }
    })
    return end > 4 ? true : false;
}
knight = [{
    name: 'k1',
    health: 100
}, {
    name: 'k2',
    health: 100
}, {
    name: 'k3',
    health: 100
}, {
    name: 'k4',
    health: 100
}, {
    name: 'k5',
    health: 100
}, {
    name: 'k6',
    health: 100
}];

while (true) {
    if (GameOver(knight)) {

        break;
    }
    disorder = [
        [1, 2, 3, 4, 5],
        [2, 3, 4, 5, 0],
        [3, 4, 5, 0, 1],
        [4, 5, 0, 1, 2],
        [5, 0, 1, 2, 3],
        [0, 1, 2, 3, 4]
    ]
    for (j = 0; j < 6; j++) {
        for (i = 0; i < 6; i++) {
            struc = disorder[j];
            if (knight[j].health > 0 && knight[struc[i]].health > 0) {
                irand = Math.floor(Math.random() * 6) + 1;
                knight[struc[i]].health = knight[struc[i]].health - irand;
                break;
            }

        }

    }
}
console.log(knight);
let winner= knight.find(winner=>winner.health>0);
console.log("winner is" +" " + winner.name);
