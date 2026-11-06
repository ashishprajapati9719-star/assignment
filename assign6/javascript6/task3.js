
let jsonText = '{name: Rohan}';

try {
    let obj = JSON.parse(jsonText);
    console.log(obj);
} catch (error) {
    console.log("Invalid JSON");
}
