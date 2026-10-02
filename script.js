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
   Everything ends at EXACTLY 3.5 seconds.

   Cars begin only 70ms apart.

   First:
   0.00s

   Last:
   0.70s

   Final synchronized fade:
   3.50s
*/

const TOTAL_TIME = 3500;

const STAGGER = 70;


/* =========================================================
   VERTICAL POSITIONS
   ========================================================= */

const lanePositions = [

    2.5,
    11.6,
    20.7,
    29.8,
    38.9,
    48,
    57.1,
    66.2,
    75.3,
    84.4,
    93.5

];


/* =========================================================
   CREATE RACING GROUPS
   ========================================================= */

const intro =
    document.getElementById("intro");


if (intro) {

    cars.forEach((car, index) => {

        /*
           ----------------------------------------------
           RACING GROUP
           ----------------------------------------------
        */

        const lane =
            document.createElement("div");

        lane.className =
            "race-lane";


        lane.style.top =
            `${lanePositions[index]}%`;


        lane.style.setProperty(
            "--team-color",
            car.color
        );


        /*
           ----------------------------------------------
           START TIME
           ----------------------------------------------
        */

        const startDelay =
            index * STAGGER;


        /*
           Every animation receives a duration
           calculated so that it finishes at
           exactly 3.5 seconds.
        */

        const duration =
            TOTAL_TIME - startDelay;


        lane.style.animationDuration =
            `${duration}ms`;


        lane.style.animationDelay =
            `${startDelay}ms`;


        /*
           ----------------------------------------------
           TRAIL
           ----------------------------------------------
        */

        const trail =
            document.createElement("div");

        trail.className =
            "car-trail";


        trail.style.setProperty(
            "--team-color",
            car.color
        );


        /*
           ----------------------------------------------
           CAR
           ----------------------------------------------
        */

        const image =
            document.createElement("img");


        image.className =
            "f1-car";


        image.src =
            car.image;


        image.alt =
            `${car.team} Formula 1 car`;


        image.draggable = false;


        /*
           ----------------------------------------------
           CRITICAL ORDER
           ----------------------------------------------

           Trail is BEHIND.
           Car is IN FRONT.

           Both are children of the SAME
           race-lane.

           Therefore they physically move
           together from LEFT → RIGHT.
        */

        lane.appendChild(trail);

        lane.appendChild(image);

        intro.appendChild(lane);

    });

}


/* =========================================================
   CLICK TO CONTINUE
   ========================================================= */

if (intro) {

    intro.addEventListener(
        "click",
        () => {

            /*
               Stage 2 will eventually be
               connected here.
            */

            console.log(
                "Continue to Stage 2"
            );

        }
    );

}
