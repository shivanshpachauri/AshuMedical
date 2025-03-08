// const colorName = require("color-name");
import colorName from "color-namer";

export default function rgbToColorName(r, g, b) {
  // Create an RGB string in the format expected by color-name
  const rgbString = `rgb(${r}, ${g}, ${b})`;

  // Try to get the color name
  const name = colorName(rgbString).ntc[0].name;

  if (name) {
    return name;
  } else {
    //If the color is not found, you can return a default value or try a different approach
    return "Color name not found.";
  }
}

// // Example usage:
// Output: red
// console.log(rgbToColorName(0, 255, 0)); // Output: lime
// console.log(rgbToColorName(0, 0, 255)); // Output: blue
// console.log(rgbToColorName(1, 0, 0)); //Output: Color name not found.
