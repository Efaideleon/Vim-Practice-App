const editor = document.getElementById('editor');
const commandDescription = document.getElementById('command-description');
const startButton = document.getElementById('start-practice');

// Array of available commands
const commands = [
    {
        name: 'movement',
        description: 'Move around the text using h, j, k, l, 0, $, gg, G.'
    },
    // Add more commands here with descriptions
];

// Randomly choose a command
let currentCommand = commands[Math.floor(Math.random() * commands.length)];

// Update command description
commandDescription.textContent = currentCommand.description;

startButton.addEventListener('click', () => {
    // Start timer
    let startTime = Date.now();

    // Focus on editor
    editor.focus();

    // Add event listeners for key presses
    editor.addEventListener('keydown', handleKeyDown);

    // Start practice session
    setTimeout(() => {
        editor.removeEventListener('keydown', handleKeyDown);
        alert(`Practice session for ${currentCommand.name} finished!`);
    }, 60000); // 60000 milliseconds = 1 minute
});

function handleKeyDown(event) {
    // Validate key press based on the current command
    // ...
}
