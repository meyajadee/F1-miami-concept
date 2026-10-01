const cars = [
    {
        name: "Mercedes",
        file: "MERCEDES.png",
        color: "#00D2BE",
        top: "11%",
        delay: 0.0,
        duration: 2.8
    },

    {
        name: "Ferrari",
        file: "FERRARI.png",
        color: "#E10600",
        top: "19%",
        delay: 2.8,
        duration: 2.8
    },

    {
        name: "McLaren",
        file: "MCLAREN.png",
        color: "#FF8700",
        top: "27%",
        delay: 5.6,
        duration: 2.8
    },

    {
        name: "Red Bull",
        file: "REDBULL.png",
        color: "#3671C6",
        top: "35%",
        delay: 8.4,
        duration: 2.8
    },

    {
        name: "Williams",
        file: "WILLIAMS.png",
        color: "#64C4FF",
        top: "43%",
        delay: 11.2,
        duration: 2.8
    },

    {
        name: "Haas",
        file: "HAAS.png",
        color: "#B6BABD",
        top: "51%",
        delay: 14.0,
        duration: 2.8
    },

    {
        name: "Alpine",
        file: "ALPINE.png",
        color: "#FF5FA2",
        top: "59%",
        delay: 16.8,
        duration: 2.8
    },

    {
        name: "Racing Bulls",
        file: "RACING BULS.png",
        color: "#6692FF",
        top: "67%",
        delay: 19.6,
        duration: 2.8
    },

    {
        name: "Cadillac",
        file: "CADILLAC.png",
        color: "#D7D7D7",
        top: "75%",
        delay: 22.4,
        duration: 2.8
    },

    {
        name: "Aston Martin",
        file: "ASTON MARTIN.png",
        color: "#229971",
        top: "83%",
        delay: 25.2,
        duration: 2.8
    },

    {
        name: "Audi",
        file: "AUDI.png",
        color: "#F5F5F5",
        top: "91%",
        delay: 28.0,
        duration: 2.8
    }
];


const carContainer =
    document.getElementById("cars");


/* =========================================
   CREATE EACH CAR
========================================= */

cars.forEach((car) => {

    /*
     * GROUP
     *
     * The group controls the car's movement.
     */

    const group =
        document.createElement("div");

    group.className =
        "car-group";

    group.style.top =
        car.top;

    group.style.animationDuration =
        `${car.duration}s`;

    group.style.animationDelay =
        `${car.delay}s`;


    /*
     * TRAIL
     *
     * Solid rectangle.
     */

    const trail =
        document.createElement("div");

    trail.className =
        "car-trail";

    trail.style.top =
        car.top;

    trail.style.background =
        car.color;

    trail.style.animationDuration =
        `${car.duration}s`;

    /*
       The trail begins at the same moment
       as its car.
    */

    trail.style.animationDelay =
        `${car.delay}s`;


    /*
     * CAR IMAGE
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


    /*
     * Put the trail behind the car.
     */

    group.appendChild(trail);

    group.appendChild(carImage);

    carContainer.appendChild(group);
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
