function solve(arr){

    let heros = []

    arr.map(x => x.split(' / '))

    .map(x => heros.push({name: x[0], level: +x[1], items: x[2].split(', ').sort((a, b) => a.localeCompare(b)).join(', ')}))

 

    heros.sort((a, b) => a.level - b.level)

    .map(x => console.log(`Hero: ${x.name}\nlevel => ${x.level}\nitems => ${x.items}`))

}