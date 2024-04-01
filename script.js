// Function to register the Service Worker
async function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        try {
            // Register the Service Worker named 'serviceworker.js'
            const registration = await navigator.serviceWorker.register('serviceworker.js');
            console.log('Service Worker registered successfully:', registration);
        } catch (error) {
            console.error('Service worker registration failed:', error);
        }
    } else {
        console.log('Service workers are not supported in this browser.');
    }
}
if ('Notification' in window) {
    Notification.requestPermission().then(function(permission) {
        if (permission === "granted") {
            console.log("Notification permission granted.");
        } else {
            console.warn("Notification permission denied.");
        }
    });
}

// Add event listener to execute code when page loads
window.addEventListener('load', () => {
    // Call function to register Service Worker
    registerServiceWorker();

    // Rest of your existing script
    var menuBtn = document.getElementById('menuBtn');
    var sideNav = document.getElementById('sideNav');
    var menu = document.getElementById('menu');

    sideNav.style.right = "-250px";

    menuBtn.onclick = function(){
        if(sideNav.style.right == "-250px"){
            sideNav.style.right="0";
            menu.src = "images/close.png";
        }
        else{
            sideNav.style.right="-250px";
            menu.src = "images/menu.png";
        }
    }

    // All animations will take exactly 1000ms
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        speedAsDuration: true
    });
});
