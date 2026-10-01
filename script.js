const cars = [
    {
        name: "Mercedes",
        file: "MERCEDES.png",
        color: "#00D2BE",
        top: "17%",
        delay: 0.2,
        duration: 5.0
    },

    {
        name: "Ferrari",
        file: "FERRARI.png",
        color: "#E10600",
        top: "38%",
        delay: 0.85,
        duration: 4.7
    },

    {
        name: "McLaren",
        file: "MCLAREN.png",
        color: "#FF8700",
        top: "26%",
        delay: 1.45,
        duration: 4.5
    },

    {
        name: "Red Bull",
        file: "REDBULL.png",
        color: "#3671C6",
        top: "56%",
        delay: 2.05,
        duration: 4.9
    },

    {
        name: "Williams",
        file: "WILLIAMS.png",
        color: "#64C4FF",
        top: "69%",
        delay: 2.7,
        duration: 4.6
    },

    {
        name: "Haas",
        file: "HAAS.png",
        color: "#B6BABD",
        top: "46%",
        delay: 3.25,
        duration: 4.5
    },

    {
        name: "Alpine",
        file: "ALPINE.png",
        color: "#FF5FA2",
        top: "77%",
        delay: 3.85,
        duration: 4.8
    },

    {
        name: "Racing Bulls",
        file: "RACING BULS.png",
        color: "#6692FF",
        top: "31%",
        delay: 4.4,
        duration: 4.5
    },

    {
        name: "Cadillac",
        file: "CADILLAC.png",
        color: "#D7D7D7",
        top: "63%",
        delay: 4.95,
        duration: 4.7
    },

    {
        name: "Aston Martin",
        file: "ASTON MARTIN.png",
        color: "#229971",
        top: "11%",
        delay: 5.5,
        duration: 4.6
    },

    {
        name: "Audi",
        file: "AUDI.png",
        color: "#F5F5F5",
        top: "51%",
        delay: 6.05,
        duration: 4.5
    }
];

const carContainer = document.getElementById("cars");

cars.forEach((car) => {

    /*
     * CAR
     */

    const carImage = document.createElement("img");

    carImage.className = "f1-car";

    carImage.src =
        `assets/cars/${encodeURIComponent(car.file)}`;

    carImage.alt =
        `${car.name} Formula 1 car`;

    carImage.style.top = car.top;

    carImage.style.animationDuration =
        `${car.duration}s`;

    carImage.style.animationDelay =
        `${car.delay}s`;


    /*
     * TRAIL
     *
     * The trail is intentionally positioned
     * around the vertical center of the car,
     * rather than near a single wheel.
     */

    const trail = document.createElement("div");

    trail.className = "car-trail";

    trail.style.top =
        `calc(${car.top} + clamp(30px, 5vw, 75px))`;

    trail.style.color =
        car.color;

    trail.style.animationDuration =
        `${car.duration}s`;

    trail.style.animationDelay =
        `${car.delay + 0.04}s`;


    /*
     * Add both elements
     */

    carContainer.appendChild(trail);

    carContainer.appendChild(carImage);
});


/*
=========================================
   CLICK → STAGE 2 PREPARATION
=========================================

We are not building Stage 2 yet.

For now, clicking anywhere simply creates
a clean transition effect. Later we'll use
this to reveal the Miami circuit interface.
*/

document.getElementById("intro").addEventListener(
    "click",
    () => {

        document.getElementById("intro").style.transition =
            "opacity 1.2s ease";

        document.getElementById("intro").style.opacity = "0";

    }
);
