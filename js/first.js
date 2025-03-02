function changeBackgroundColor() {
    // Generate random RGB values
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    // Apply the random color to the background
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
