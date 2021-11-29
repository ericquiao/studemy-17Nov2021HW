const participants = [
    {name: 'Abu', idNumber: 'S7282395H', gender: 'female'},
    {name: 'Mary', idNumber: 'T4689018Z', gender: 'male'},
    {name: 'Suzi', idNumber: 'G5512873T', gender: 'male'},
    {name: 'T Chakra', idNumber: 'T8198514B', gender: 'female'}];

const idRet = participants.map(function(idFunc) {
    return idFunc.idNumber;
})

const nameRet = participants.map(function(nameFunc){
    return nameFunc.name;
})
const genderRet = participants.map(function(genderFunc){
    return genderFunc.name

})

console.log(idRet);
console.log(nameRet);
console.log(genderRet);