const cars = [
    {
        name: "Mercedes",
        file: "MERCEDES.png",
        color: "#00D2BE",
        top: "17%",
        delay: 0.15,
        duration: 3.0
    },

    {
        name: "Ferrari",
        file: "FERRARI.png",
        color: "#E10600",
        top: "38%",
        delay: 0.55,
        duration: 2.8
    },

    {
        name: "McLaren",
        file: "MCLAREN.png",
        color: "#FF8700",
        top: "26%",
        delay: 0.95,
        duration: 2.7
    },

    {
        name: "Red Bull",
        file: "REDBULL.png",
        color: "#3671C6",
        top: "56%",
        delay: 1.35,
        duration: 2.9
    },

    {
        name: "Williams",
        file: "WILLIAMS.png",
        color: "#64C4FF",
        top: "69%",
        delay: 1.75,
        duration: 2.7
    },

    {
        name: "Haas",
        file: "HAAS.png",
        color: "#B6BABD",
        top: "46%",
        delay: 2.15,
        duration: 2.7
    },

    {
        name: "Alpine",
        file: "ALPINE.png",
        color: "#FF5FA2",
        top: "77%",
        delay: 2.55,
        duration: 2.8
    },

    {
        name: "Racing Bulls",
        file: "RACING BULS.png",
        color: "#6692FF",
        top: "31%",
        delay: 2.95,
        duration: 2.7
    },

    {
        name: "Cadillac",
        file: "CADILLAC.png",
        color: "#D7D7D7",
        top: "63%",
        delay: 3.35,
        duration: 2.8
    },

    {
        name: "Aston Martin",
        file: "ASTON MARTIN.png",
        color: "#229971",
        top: "11%",
        delay: 3.75,
        duration: 2.7
    },

    {
        name: "Audi",
        file: "AUDI.png",
        color: "#F5F5F5",
        top: "51%",
        delay: 4.15,
        duration: 2.7
    }
];


const carContainer =
    document.getElementById("cars");


/* =========================================
   CREATE CARS AND TRAILS
========================================= */

cars.forEach((car) => {

    /*
     * CAR
     */

    const carImage =
        document.createElement("img");

    carImage.className =
        "f1-car";

    carImage.src =
        `assets/cars/${encodeURIComponent(
            car.file
        )}`;

    carImage.alt =
        `${car.name} Formula 1 car`;

    carImage.style.top =
        car.top;

    carImage.style.animationDuration =
        `${car.duration}s`;

    carImage.style.animationDelay =
        `${car.delay}s`;


    /*
     * TRAIL
     */

    const trail =
        document.createElement("div");

    trail.className =
        "car-trail";

    /*
     * Keep the trail vertically centered
     * with the rear/center of the car.
     */

    trail.style.top =
        `calc(
            ${car.top}
            + clamp(
                18px,
                3.2vw,
                52px
            )
        )`;

    trail.style.color =
        car.color;

    trail.style.animationDuration =
        `${car.duration}s`;

    trail.style.animationDelay =
        `${car.delay}s`;


    /*
     * Trail first, car second,
     * so the car remains visually
     * above the trail.
     */

    carContainer.appendChild(trail);

    carContainer.appendChild(carImage);
});


/* =========================================
   CLICK → STAGE 2
========================================= */

document
    .getElementById("intro")
    .addEventListener(
        "click",
        () => {

            const intro =
                document.getElementById("intro");

            intro.style.transition =
                "opacity 1.2s ease";

            intro.style.opacity =
                "0";
        }
    );
