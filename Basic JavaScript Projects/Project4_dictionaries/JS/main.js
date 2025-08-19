function dict_function() {
    var animal = {
        species: "dog",
        color: "black",
        breed: "labrador",
        age: 5
    };
    document.getElementById("Dictionary").innerHTML = animal.breed;
}