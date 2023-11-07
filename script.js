document.getElementById('command-line').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        handleCommand(this.value.trim());
        this.value = '';
    }
});

const welcomeMessage = `
    <p class="output">Welcome to k.bonev1993's Kali Linux Terminal Portfolio</p>
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
    userCommand.innerHTML = `<span class="prompt">k.bonev1993@kali: ~$</span> <span class="command">${command}</span>`;
    terminalBody.appendChild(userCommand);

    switch(command.toLowerCase()) {
        case 'about':
            commandOutput.innerHTML = `
                <p>Hello World, my name is Kristiyan Bonev.</p>
                <p>I'm a dynamic professional with a strong background in software support, cybersecurity, penetration testing, and finance. My career journey has equipped me with a versatile skill set, enabling me to bridge the gap between technical intricacies and practical solutions.</p>
                <p>With experience in software support, I swiftly resolve issues while effectively communicating complex technical concepts to clients. In cybersecurity, I identify vulnerabilities and collaborate with experts to enhance security protocols. My finance background adds a strong analytical perspective to my problem-solving approach.</p>
                <p>Adaptable and eager to learn, I'm driven to contribute to innovative projects that leverage my diverse expertise.</p>
                <p><strong>CURRENT POSITION</strong><br>
                SW/APP/Cloud Tech Support Analyst [Nov 2022 – Current]<br>
                Accenture</p>
                <p>Provide technical support for software, applications, and cloud services, resolving issues promptly.<br>
                Collaborate with customers to troubleshoot and diagnose technical problems, ensuring client satisfaction.<br>
                Communicate complex technical concepts in a clear and understandable manner.</p>
                <p><strong>EDUCATION AND TRAINING</strong><br>
                Jr. Penetration Tester [Sep 2023]<br>
                TryHackMe</p>
                <p>Participate in penetration testing exercises, identifying vulnerabilities and suggesting remediation strategies.<br>
                Collaborate with senior penetration testers to enhance security protocols and conduct risk assessments.</p>
                <p>Google Cybersecurity Professional Certificate [Aug 2023]<br>
                Coursera</p>
                <p>Successfully completed an intensive cybersecurity program, mastering skills in Python programming, intrusion detection, and SIEM tools.<br>
                Acquired the proficiency needed for cybersecurity analyst and Security Operations Center (SOC) roles, poised to make impactful contributions in today's dynamic digital security environment.</p>
                <p>Software Engineer [Apr 2021 – Sep 2022]<br>
                SoftUni</p>
                <p>Developed software solutions using Python, contributing to the successful completion of projects.<br>
                Collaborated with a diverse team to design, implement, and maintain software applications.</p>
                <p>Bachelor of Finance [Sep 2012 – May 2016]<br>
                Dimitar A. Tsenov Academy of Economics</p>
                <p>Relevant Courses: Financial Management, Investment Analysis, Accounting Principles.<br>
                Developed strong analytical and problem-solving skills in a finance-focused curriculum.</p>
            `;
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
