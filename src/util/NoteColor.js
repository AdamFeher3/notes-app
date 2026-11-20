// NOTE BACKGROUND COLORS
const color = [
    "rgba(200,0,0,0.2)",
    "rgba(0,200,0,0.2)",
    "rgba(0,0,200,0.2)",
    "rgba(200,200,0,0.2)",
    "rgba(0,200,200,0.2)",
    "rgba(200,0,200,0.2)"
];

// GET RANDOM NOTE BACKGROUND COLOR
const getColor = () =>
    color[Math.floor(Math.random() * color.length)];

export default getColor;