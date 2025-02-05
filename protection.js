document.addEventListener("contextmenu", function(event) {
    event.preventDefault(); // Bloqueia o clique direito
});

document.addEventListener("keydown", function(event) {
    if (event.key === "F12" || 
        (event.ctrlKey && event.shiftKey && event.key === "I") || 
        (event.ctrlKey && event.shiftKey && event.key === "J") || 
        (event.ctrlKey && event.key === "U")) {
        event.preventDefault(); // Bloqueia F12, Ctrl+Shift+I, Ctrl+Shift+J e Ctrl+U
    }
});
