const cars = [
    {
        name: "Mercedes",
        file: "MERCEDES.png",
        color: "#00d2be",
        top: "18%",
        delay: 0.2,
        duration: 4.8
    },

    {
        name: "Ferrari",
        file: "FERRARI.png",
        color: "#ff2800",
        top: "38%",
        delay: 0.8,
        duration: 4.5
    },

    {
        name: "McLaren",
        file: "MCLAREN.png",
        color: "#ff8700",
        top: "26%",
        delay: 1.4,
        duration: 4.2
    },

    {
        name: "Red Bull",
        file: "REDBULL.png",
        color: "#3671c6",
        top: "56%",
        delay: 1.9,
        duration: 4.7
    },

    {
        name: "Williams",
        file: "WILLIAMS.png",
        color: "#00a3e0",
        top: "68%",
        delay: 2.5,
        duration: 4.4
    },

    {
        name: "Haas",
        file: "HAAS.png",
        color: "#ffffff",
        top: "45%",
        delay: 3.0,
        duration: 4.3
    },

    {
        name: "Alpine",
        file: "ALPINE.png",
        color: "#ff5fa2",
        top: "76%",
        delay: 3.5,
        duration: 4.6
    },

    {
        name: "Racing Bulls",
        file: "RACING BULS.png",
        color: "#6692ff",
        top: "31%",
        delay: 4.0,
        duration: 4.2
    },

    {
        name: "Cadillac",
        file: "CADILLAC.png",
        color: "#c9c9c9",
        top: "62%",
        delay: 4.5,
        duration: 4.5
    },

    {
        name: "Aston Martin",
        file: "ASTON MARTIN.png",
        color: "#229971",
        top: "12%",
        delay: 5.0,
        duration: 4.4
    },

    {
        name: "Audi",
        file: "AUDI.png",
        color: "#ffffff",
        top: "51%",
        delay: 5.5,
        duration: 4.3
    }
];

const carContainer = document.getElementById("cars");

cars.forEach((car) => {

    // Create the car image
    const carImage = document.createElement("img");

    carImage.className = "f1-car";

    carImage.src = `assets/cars/${car.file}`;

    carImage.alt = `${car.name} Formula 1 car`;

    carImage.style.top = car.top;

    carImage.style.animationDuration = `${car.duration}s`;

    carImage.style.animationDelay = `${car.delay}s`;

    // Create the colored trail
    const trail = document.createElement("div");

    trail.className = "car-trail";

    trail.style.top = `calc(${car.top} + 7%)`;

    trail.style.background = car.color;

    trail.style.boxShadow = `
        0 0 8px ${car.color},
        0 0 20px ${car.color},
        0 0 40px ${car.color}
    `;

    trail.style.animationDuration = `${car.duration}s`;

    trail.style.animationDelay = `${car.delay + 0.05}s`;

    carContainer.appendChild(trail);
    carContainer.appendChild(carImage);
});
