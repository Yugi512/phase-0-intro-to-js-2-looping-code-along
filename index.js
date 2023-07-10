const names = [];
function writeCards(nameS,name){
    for (let i = 0;i < nameS.length;i++){
        const samething = `Thank you, ${nameS[i]}, for the wonderful ${name} gift!`;
        names.push(samething);
    }
   return names;
}
writeCards(names);

function countDown(i){
    let x = i;
    while( x >= 0){
        console.log(x);
        x--;
    }
    return x;
}
countdown();