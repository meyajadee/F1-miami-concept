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

const TOTAL_TIME = 3500;

const STAGGER = 70;


/* =========================================================
   VERTICAL POSITIONS
   ========================================================= */

const lanePositions = [

    0,
    9.1,
    18.2,
    27.3,
    36.4,
    45.5,
    54.6,
    63.7,
    72.8,
    81.9,
    91

];


/* =========================================================
   CREATE RACING GROUPS
   ========================================================= */

const intro =
    document.getElementById("intro");


if (intro) {

    cars.forEach((car, index) => {

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


        const startDelay =
            index * STAGGER;


        const duration =
            TOTAL_TIME - startDelay;


        lane.style.animationDuration =
            `${duration}ms`;


        lane.style.animationDelay =
            `${startDelay}ms`;


        /*
           TRAIL
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
           CAR
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
           Trail stays behind the car.
           Both move together as one group.
        */

        lane.appendChild(trail);

        lane.appendChild(image);

        intro.appendChild(lane);

    });

}


/* =========================================================
   CLICK TO CONTINUE TO STAGE 2
   ========================================================= */

if (intro) {

    intro.addEventListener(
        "click",
        () => {

            const raceExperience =
                document.getElementById("race-experience");


            /*
               Make sure Stage 2 exists.
            */

            if (!raceExperience) {
                return;
            }


            /*
               Fade Stage 1 out.
            */

            intro.style.transition =
                "opacity 0.6s ease";

            intro.style.opacity =
                "0";


            /*
               Reveal Stage 2 after the fade.
            */

            setTimeout(() => {

                intro.style.visibility =
                    "hidden";


                raceExperience.style.visibility =
                    "visible";


                raceExperience.style.opacity =
                    "1";

            }, 600);

        }
    );

}
