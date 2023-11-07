document.getElementById('command-line').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        handleCommand(this.value);
        this.value = '';
    }
});

function handleCommand(command) {
    var terminalBody = document.getElementById('terminal-body');
    var commandOutput = document.createElement('div');

    if (command.toLowerCase() === 'clear') {
        terminalBody.innerHTML = '';
        return;
    }

    var userCommand = document.createElement('div');
    userCommand.textContent = 'k.bonev1993@kali: ~$ ' + command;
    userCommand.style.color = '#4CAF50';
    terminalBody.appendChild(userCommand);

    switch(command.toLowerCase()) {
        case 'about':
            commandOutput.innerHTML = '<p>This is where you would put information about yourself.</p>';
            break;
        case 'certificates':
            commandOutput.innerHTML = '<p>Listing certificates...</p>';
            // Add more HTML to display your certificates
            break;
        case 'projects':
            commandOutput.innerHTML = '<p>Showing projects...</p>';
            // Add more HTML to display your projects
            break;
        default:
            commandOutput.innerHTML = '<p>Command not found.</p>';
    }

    terminalBody.appendChild(commandOutput);
    terminalBody.scrollTop = terminalBody.scrollHeight;
}

window.onload = function() {
    var terminalBody = document.getElementById
