

function getLetter(s) {
    let letter;
    let k=s[0];
    let a1="aeiou";
    let a2="bcdfg";
    let a3="hjklm";
    let a4="npqrstvwxyz";
    for (let i = 0; i< 5; i++){
        if (k==a1[i]){
            letter='A';
        }
    }
    for (let i = 0; i< 5; i++){
        if (k==a2[i]){
            letter='B';
        }
    }
    for (let i = 0; i< 5; i++){
        if (k==a3[i]){
            letter='C';
        }
    }
    for (let i = 0; i< 11; i++){
        if (k==a4[i]){
            letter='D';
        }
    }
    return letter;
}

