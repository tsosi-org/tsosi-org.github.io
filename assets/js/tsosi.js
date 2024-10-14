function addClickLikeEventListener(selector, callback) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(element => {
        // Mouse click event
        element.addEventListener('click', callback);

        // Keydown event for "Enter" and "Spacebar"
        element.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault(); // Prevent default scrolling for Spacebar
                callback(event);
            }
        });
    });
}

function updateFrameTheme(theme) {
    Array.from(document.getElementsByTagName("iframe")).forEach(frame => {
        if (frame.contentWindow) {
            frame.contentWindow.postMessage({ theme: theme }, "*")
        }
    })
}

function switchTheme(_) {
    var currentTheme = document.documentElement.getAttribute('data-theme');
    var newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // Set the new theme
    document.documentElement.setAttribute('data-theme', newTheme);

    // Store the theme preference in localStorage
    localStorage.setItem('theme', newTheme);

    updateFrameTheme(newTheme)    
}

/**
 * Handle clicks on a full-screen button.
 * Toggle full-screen according to the referenced ID.
 * @param {Event} event
 */
function iframeFullScreenHandler(event) {
    let buttonElement = event.currentTarget
    let elementToToggle = document.getElementById(buttonElement.dataset.targetId)
    if (!elementToToggle) {
        console.log("No referenced element to toggle full-screen on.")
        return
    }
    if (elementToToggle.dataset.fullScreen == "active") {
        elementToToggle.dataset.fullScreen = null
        return
    }
    elementToToggle.dataset.fullScreen = "active"
}

document.addEventListener("DOMContentLoaded", (_) => {
    addClickLikeEventListener(
        "#theme-switch",
        switchTheme
    )
    addClickLikeEventListener(
        ".iframe-container .full-screen-switch",
        iframeFullScreenHandler
    )
})
