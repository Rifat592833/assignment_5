function changeBackgroundColor() {
    // Generate random RGB values
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    // Apply the random color to the background
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

let totalCount = 23; // Single counter for all buttons
let decreasingCount = 6;

function increaseCounter(button) {
    if (!button.classList.contains("clicked")) {  
        totalCount++; 
        document.getElementById("totalCounter").innerText = totalCount; 
        button.classList.add("clicked"); 
        button.style.backgroundColor = "rgba(55, 82, 253, 0.2)"; // 20% opacity
        button.classList.add("cursor-not-allowed"); 
        button.disabled = true;  
        if (decreasingCount > 0) {
            decreasingCount--;
            document.getElementById("decreasingCounter").innerText = decreasingCount;
        }
    }
}