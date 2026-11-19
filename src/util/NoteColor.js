const color = [
    "rgba(200,0,0,0.2)",
    "rgba(0,200,0,0.2)",
    "rgba(0,0,200,0.2)",
    "rgba(200,200,0,0.2)",
    "rgba(0,200,200,0.2)",
    "rgba(200,0,200,0.2)"
];

function getColor() {
    return color[Math.floor(Math.random() * color.length)];
}

export default getColor;