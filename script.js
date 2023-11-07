document.getElementById('command-line').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        handleCommand(this.value.trim());
        this.value = '';
    }
});

const welcomeMessage = `
    <p>Welcome to k.bonev1993's Kali Linux Terminal Portfolio</p>
    <p>Type 'about' to learn more about me.</p>
    <p>Type 'certificates' to view my certificates.</p>
    <p>Type 'projects' to see my projects.</p>
    <p>Type 'clear' to clear the terminal.</p>
    <p>What would you like to do?</p>
`;

function handleCommand(command) {
    var terminalBody = document.getElementById('terminal-body');
    var commandOutput = document.createElement('div');

    if (command.toLowerCase() === 'clear') {
        terminalBody.innerHTML = welcomeMessage;
        return;
    }

    var userCommand = document.createElement('div');
    userCommand.textContent = 'k.bonev1993@kali: ~$ ' + command;
    userCommand.style.color = '#FF0000'; // Red text for commands
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
            commandOutput.style.color = '#FF0000'; // Red text for invalid input
    }

    terminalBody.appendChild(commandOutput);
    terminalBody.scrollTop = terminalBody.scrollHeight; // Scroll to the bottom
}

window.onload = function() {
    var terminalBody = document.getElementById('terminal-body');
    terminalBody.innerHTML = welcomeMessage;
};
