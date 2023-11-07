document.getElementById('command-line').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        handleCommand(this.value);
        this.value = '';
    }
});

function handleCommand(command) {
    var terminalBody = document.getElementById('terminal-body');
    var aboutMe = document.getElementById('about-me');
    var myCertificates = document.getElementById('my-certificates');
    var myProjects = document.getElementById('my-projects');

    aboutMe.style.display = 'none';
    myCertificates.style.display = 'none';
    myProjects.style.display = 'none';

    switch(command) {
        case 'about':
            aboutMe.style.display = 'block';
            break;
        case 'certificates':
            myCertificates.style.display = 'block';
            break;
        case 'projects':
            myProjects.style.display = 'block';
            break;
        default:
            terminalBody.innerHTML = '<p>Command not found</p>';
    }
}

window.onload = function() {
    var terminalBody = document.getElementById('terminal-body');
    terminalBody.innerHTML = `
        <
