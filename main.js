const cormac = {
    name: "Cormac",
    species: "Dog",
    nickname: ["Big Mac", "Corm", "Goofy"],
    age: 10,
    favoriteToys: [],
    bark: function () {
        window.alert("WOOF!")
    },
    grumble: function () {
        window.alert("grumble grumble...")
    },
    sigh: function () {
        window.alert("siiiiiiiiigh")
    },
    play: function (toy) {
        if (toy.includes("squeaky")) {
            this.favoriteToys.push(toy);
            window.alert(`Cormac played with ${toy}!`)
        } else {
            window.alert("Cormac wasn't interested...")
        }
}
}
