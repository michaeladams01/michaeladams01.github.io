// Array of messages to show
var messages = [
    "You're the best, darling!",
    "I'm so lucky to have you!",
    "You make me smile every day!",
    "You're my sunshine!",
    // ... add as many messages as you like ...
];

// Keep track of which message to show next
var nextMessage = 0;

// Function to launch the fireworks and show a message
function launchFireworks() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 300
            },
            "color": {
                "value": ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"]
            },
            "shape": {
                "type": "circle"
            },
            "size": {
                "value": 3,
                "random": true
            },
            "move": {
                "random": true,
                "speed": 10,
                "direction": "none",
                "out_mode": "out"
            },
            "line_linked": {
                "enable": false
            },
            "opacity": {
                "value": 1,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0,
                    "sync": false
                }
            }
        },
        "interactivity": {
            "events": {
                "onclick": {
                    "enable": false
                }
            }
        },
        "retina_detect": true
    });

    var message = document.getElementById('message');
    message.textContent = messages[nextMessage];
    message.style.display = 'block';

    var button = document.getElementById('launch');
    button.style.display = 'none';

    setTimeout(function() {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 0
                }
            }
        });
        message.style.display = 'none';
        button.style.display = 'block';

        // Update which message to show next
        nextMessage = (nextMessage + 1) % messages.length;
    }, 60000); // display for 60 seconds (1 minute)
}

// Launch the fireworks and show a message as soon as the page loads
window.onload = launchFireworks;