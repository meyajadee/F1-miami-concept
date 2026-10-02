/* ================================
   F1 MIAMI CONCEPT — INTRO SCRIPT
   ================================ */

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


/* ================================
   TIMING
   ================================ */

/*
   Every car gets the same travel duration.

   The starts are staggered only slightly,
   so the entire sequence feels like one
   rapid wave instead of 11 separate events.
*/

const CAR_DURATION = 2750;

/*
   Last car begins roughly 0.7 seconds
   after the first car.

   10 intervals × 70ms = 700ms.
*/
const START_STAGGER = 70;


/* ================================
   LANE POSITIONS
   ================================ */

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


/* ================================
   CREATE THE RACE
   ================================ */

const intro = document.getElementById("intro");

if (intro) {

    cars.forEach((car, index) => {

        /* ----------------------------
           Create moving group
           ---------------------------- */

        const lane = document.createElement("div");

        lane.className = "race-lane";

        lane.style.top = `${lanePositions[index]}%`;

        lane.style.setProperty(
            "--team-color",
            car.color
        );

        /*
           Every car has the same movement
           duration.
        */
        lane.style.animationDuration =
            `${CAR_DURATION}ms`;


        /*
           Slightly stagger each launch.
        */
        lane.style.animationDelay =
            `${index * START_STAGGER}ms`;


        /* ----------------------------
           Create trail
           ---------------------------- */

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


        /* ----------------------------
           Create car
           ---------------------------- */

        const image = document.createElement("img");

        image.className = "f1-car";

        image.src = car.image;

        image.alt = `${car.team} Formula 1 car`;

        image.draggable = false;


        /* ----------------------------
           IMPORTANT ORDER
           ---------------------------- */

        /*
           Trail goes FIRST in the DOM,
           car goes SECOND.

           Because both live inside the
           SAME moving group, the trail
           physically travels with the car.
        */

        lane.appendChild(trail);

        lane.appendChild(image);

        intro.appendChild(lane);
    });
}


/* ================================
   CLICK TO CONTINUE
   ================================ */

const clickPrompt =
    document.getElementById("click-prompt");

if (intro && clickPrompt) {

    intro.addEventListener("click", () => {

        /*
           You can connect this later to
           Stage 2 / the circuit experience.
        */

        console.log("Intro clicked — continue to Stage 2.");
    });
}
