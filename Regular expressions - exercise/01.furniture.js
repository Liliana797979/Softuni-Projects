function furniture(input = []) {
    const pattern = />>([a-zA-Z]+)<<(\d+\.?\d+)!(\d+)/gm;
    let lines = input
        .slice(0, input.indexOf('Purchase'))
        .join('\n');

    let resultArr = Array.from(lines.matchAll(pattern));
    let final = `Bought furniture:`
    let cost = 0;

    resultArr.forEach(match => {
        final += '\n' + match[1];
        cost += Number(match[2]) * Number(match[3])
    })

    console.log(`${final}\nTotal money spend: ${cost.toFixed(2)}`);
}