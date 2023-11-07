document.getElementById('command-line').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        handleCommand(this.value.trim());
        this.value = '';
    }
});

const welcomeMessage = `
    <p class="output">Welcome to My Terminal Portfolio</p>
    <p class="output">Type 'about' to learn more about me.</p>
    <p class="output">Type 'certificates' to view my certificates.</p>
    <p class="output">Type 'projects' to see my projects.</p>
    <p class="output">Type 'clear' to clear the terminal.</p>
    <p class="output">What would you like to do?</p>
`;

function handleCommand(command) {
    var terminalBody = document.getElementById('terminal-body');
    var commandOutput = document.createElement('div');
    commandOutput.classList.add('output');

    if (command.toLowerCase() === 'clear') {
        terminalBody.innerHTML = welcomeMessage;
        return;
    }

    var userCommand = document.createElement('div');
    userCommand.innerHTML = `<span class="prompt">k.bonev1993@kali: </span> <span class="command">${command}</span>`;
    terminalBody.appendChild(userCommand);

    switch(command.toLowerCase()) {
        case 'about':
            commandOutput.innerHTML = '<p>About me: [Your bio here]</p>';
            break;
        case 'certificates':
            commandOutput.innerHTML = '<p>Certificates: [Your certificates here]</p>';
            break;
        case 'projects':
            commandOutput.innerHTML = '<p>Projects: [Your projects here]</p>';
            break;
        default:
            commandOutput.textContent = 'Invalid input!';
    }

    terminalBody.appendChild(commandOutput);
    terminalBody.scrollTop = terminalBody.scrollHeight; // Scroll to the bottom
}

window.onload = function() {
    var terminalBody = document.getElementById('terminal-body');
    terminalBody.innerHTML = welcomeMessage;
};
