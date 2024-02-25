function calculateArea(shape, dim1, dim2, constant) {
  const value1 = parseFloat(document.getElementById(dim1).value);
  const value2 = parseFloat(document.getElementById(dim2).value);
  const resultArea = constant * value1 * value2;

  const areaElement = document.getElementById(`${shape}FinalArea`);
  areaElement.classList.remove("hidden");

  if (isNaN(value1) || isNaN(value2)) {
    areaElement.classList.add("italic", "text-red-200");
    areaElement.innerHTML = "Please enter valid values";
  } else {
    areaElement.classList.remove("italic");
    areaElement.classList.add("font-bold", "text-red-200");
    areaElement.innerHTML = `The area of the ${shape} is ${resultArea.toFixed(2)} cm<sup>2</sup>`;
  }
}


// Triangle
function calculatedTriangleArea() {
  calculateArea("triangle", "triangle-base", "triangle-height", 0.5);
}

// Rhombus
function calculatedRhombusArea() {
  calculateArea("rhombus", "d1", "d2", 0.5);
}

// Pentagon
function calculatedPentagonArea() {
  calculateArea("pentagon", "pentagon-p", "pentagon-b", 0.5);
}

// Ellipse
function calculatedEllipseArea() {
  const pi = Math.PI;
  calculateArea("ellipse", "ellipse-a", "ellipse-b", pi);
}

// Rectangle
function calculatedRectangleArea() {
  calculateArea("rectangle", "rectangle-width", "rectangle-length", 1);
}

// Parallelogram
function calculatedParallelogramArea() {
  calculateArea("parallelogram", "parallelogram-base", "parallelogram-height", 1);
}
