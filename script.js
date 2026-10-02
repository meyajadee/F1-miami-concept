/* =========================================================
   F1 MIAMI CONCEPT
   INTRO SCRIPT
   ========================================================= */


/* =========================================================
   CAR DATA
   ========================================================= */

const cars = [
    {
        team: "Mercedes",
        image: "assets/cars/MERCEDES.png",
        color: "#00D2BE"
    },
    {
        team: "Ferrari",
        image: "assets/cars/FERRARI.png",
        color: "#E80000"
    },
    {
        team: "McLaren",
        image: "assets/cars/MCLAREN.png",
        color: "#FF8700"
    },
    {
        team: "Red Bull Racing",
        image: "assets/cars/REDBULL.png",
        color: "#3671C6"
    },
    {
        team: "Williams",
        image: "assets/cars/WILLIAMS.png",
        color: "#005AFF"
    },
    {
        team: "Haas",
        image: "assets/cars/HAAS.png",
        color: "#B6BABD"
    },
    {
        team: "Alpine",
        image: "assets/cars/ALPINE.png",
        color: "#2293D1"
    },
    {
        team: "Racing Bulls",
        image: "assets/cars/RACING BULS.png",
        color: "#6692FF"
    },
    {
        team: "Cadillac",
        image: "assets/cars/CADILLAC.png",
        color: "#FFFFFF"
    },
    {
        team: "Aston Martin",
        image: "assets/cars/ASTON MARTIN.png",
        color: "#006F62"
    },
    {
        team: "Audi",
        image: "assets/cars/AUDI.png",
        color: "#D0D0D0"
    }
];


/* =========================================================
   TIMING
   ========================================================= */

/*
   Each car travels for 2.75 seconds.

   Cars launch 70ms apart.

   10 gaps × 70ms = 700ms.

   Therefore:

   First car:
   0.00s → 2.75s

   Last car:
   0.70s → 3.45s

   Entire sequence:
   approximately 3.5 seconds.
*/

const CAR_DURATION = 2750;

const START_STAGGER = 70;


/* =========================================================
   VERTICAL POSITIONS
   ========================================================= */

const lanePositions = [
    11,
    19,
    27,
    35,
    43,
    51,
    59,
    67,
    75,
    83,
    91
];


/* =========================================================
   BUILD INTRO
   ========================================================= */

const intro = document.getElementById("intro");

if (intro) {

    cars.forEach((car, index) => {

        /* -----------------------------------------------
           MOVING GROUP
           ----------------------------------------------- */

        const lane = document.createElement("div");

        lane.className = "race-lane";

        lane.style.top =
            `${lanePositions[index]}%`;

        lane.style.setProperty(
            "--team-color",
            car.color
        );

        lane.style.animationDuration =
            `${CAR_DURATION}ms`;

        lane.style.animationDelay =
            `${index * START_STAGGER}ms`;


        /* -----------------------------------------------
           TRAIL
           ----------------------------------------------- */

        const trail = document.createElement("div");

        trail.className = "car-trail";

        trail.style.setProperty(
            "--team-color",
            car.color
        );

        trail.style.animationDuration =
            `${CAR_DURATION}ms`;

        trail.style.animationDelay =
            `${index * START_STAGGER}ms`;


        /* -----------------------------------------------
           CAR
           ----------------------------------------------- */

        const image = document.createElement("img");

        image.className = "f1-car";

        image.src = car.image;

        image.alt =
            `${car.team} Formula 1 car`;

        image.draggable = false;


        /* -----------------------------------------------
           LAYER ORDER
           ----------------------------------------------- */

        /*
           Trail is behind the car.
        */

        lane.appendChild(trail);

        lane.appendChild(image);

        intro.appendChild(lane);
    });
}


/* =========================================================
   CLICK PROMPT
   ========================================================= */

const clickPrompt =
    document.getElementById("click-prompt");

if (intro && clickPrompt) {

    intro.addEventListener(
        "click",
        () => {

            /*
               Stage 2 will be connected here later.
            */

            console.log(
                "Intro clicked — continue to Stage 2."
            );
        }
    );
}
