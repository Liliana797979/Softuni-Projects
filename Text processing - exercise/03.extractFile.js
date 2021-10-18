function extractFile(path) {
    // find last element of path(split by \\)
    let tokens = path.split("\\");
    let fileName = tokens.pop();
    // split last element in two at final period
    let index = fileName.lastIndexOf(".");
    let name = fileName.substring(0, index);
    let ext = fileName.substring(index + 1);

    console.log(`File name: ${name}`);
    console.log(`File extension: ${ext}`);
}