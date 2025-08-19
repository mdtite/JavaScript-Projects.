function dict_function() {
    var animal = {
        species: "dog",
        color: "black",
        breed: "labrador",
        age: 5
    };
    delete animal.breed;
    document.getElementById("Dictionary").innerHTML = animal.breed;
}