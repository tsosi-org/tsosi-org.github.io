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

document.addEventListener("DOMContentLoaded", (_) => {
    addClickLikeEventListener(
        "#theme-switch",
        switchTheme
    )
})
