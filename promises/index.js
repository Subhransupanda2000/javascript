function walkdog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("You walk the dog");
            resolve("Dog walked");
        }, 1000);
    });
}

function cleankitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("You clean the kitchen");
            resolve("Kitchen cleaned");
        }, 1000);
    });
}

function takeoutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("You take out the trash");
            resolve("Trash taken out");
        }, 1000);
    });
}

walkdog()
    .then(value => {
        console.log(value);
        return cleankitchen();
    })
    .then(value => {
        console.log(value);
        return takeoutTrash();
    })
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.error(error);
    });
