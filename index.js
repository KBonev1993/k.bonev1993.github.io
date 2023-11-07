document.getElementById('command-line').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        handleCommand(this.value);
        this.value = '';
    }
});

function handleCommand(command) {
    // You can define commands here and display the corresponding content
    var terminalBody = document.getElementById('terminal-body');
    switch(command) {
        case 'about':
            terminalBody.innerHTML = '<p>This is about me...</p>';
            break;
        case 'projects':
            terminalBody.innerHTML = '<p>These are my projects...</p>';
            break;
        // Add more cases for other commands
        default:
            terminalBody.innerHTML = '<p>Command not found</p>';
    }
}
