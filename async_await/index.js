function walkdog() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("You walk the dog");
            resolve("Dog walked");
        }, 1000);
    });
}

function cleankitchen() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("You clean the kitchen");
            resolve("Kitchen cleaned");
        }, 1000);
    });
}

function takeoutTrash() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("You take out the trash");
            resolve("Trash taken out");
        }, 1000);
    });
}

async function dochores() {
    const walkdogResult = await walkdog();
    console.log(walkdogResult);
    const cleankitchenResult = await cleankitchen();
    console.log(cleankitchenResult);
    const takeoutTrashResult = await takeoutTrash();
    console.log(takeoutTrashResult);
}

// Call the dochores function to execute the tasks sequentially
dochores();
