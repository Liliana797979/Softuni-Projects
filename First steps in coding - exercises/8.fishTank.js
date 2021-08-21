function aquarium(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let aquariumVolume = length * width * height;
    let totalLitres = aquariumVolume * 0.001;  
    let totalPercent = percent * 0.01; 
    let litres = totalLitres * (1 - totalPercent)
    

    console.log(litres);

}