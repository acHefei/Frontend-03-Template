function match(string) {
    let state = start;
    for (let c of string){
        state = state(c);
    }
    return state === end;
}

function start(c) {
    if (c === 'a') {
        return foundB;
    } else {
        return start;
    }
}

function end(c) {
    return end;
}

function foundB(c) {
    if (c === 'b') {
        return foundA2;
    } else {
        return start(c);
    }
}

function foundA2(c) {
    if (c === 'a') {
        return foundB2;
    } else {
        return foundB(c);
    }
}
function foundB2(c) {
    if (c === 'b') {
        return foundA3;
    } else {
        return foundA2(c);
    }
}

function foundA3(c) {
    if (c === 'a') {
        return foundB3;
    } else {
        return foundB2(c);
    }
}

function foundB3(c) {
    if (c === 'b') {
        return foundX;
    } else {
        return foundA3(c);
    }
}

function foundX(c) {
    if (c === 'x') {
        return end;
    } else {
        return foundB3(c);
    }
}

console.log(match('ababaaccabababxabavbx'));