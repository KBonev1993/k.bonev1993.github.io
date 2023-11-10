document.getElementById('command-line').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        handleCommand(this.value.trim());
        this.value = '';
    }
});

const welcomeMessage = `
    <p class="output">Welcome to My Terminal Portfolio</p>
    <p class="output">Type 'about' to learn more about me.</p>
    <p class="output">Type 'skills' to list my skills.</p>
    <p class="output">Type 'certificates' to view my certificates.</p>
    <p class="output">Type 'projects' to see my projects.</p>
    <p class="output">Type 'contact' to get in touch with me.</p>
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
            commandOutput.innerHTML = `
                <p>Hello World, my name is Kristiyan Bonev.</p>
                <p>I'm a dynamic professional with a strong background in software support, cybersecurity, penetration testing, and finance.<br>
                My career journey has equipped me with a versatile skill set,<br>
                enabling me to bridge the gap between technical intricacies and practical solutions.</p>
                <p>With experience in software support, I swiftly resolve issues while effectively communicating complex technical concepts to clients.<br>
                In cybersecurity,I identify vulnerabilities and collaborate with experts to enhance security protocols.<br> 
                My finance background adds a strong analytical perspective to my problem-solving approach.</p>
                <p>Adaptable and eager to learn, I'm driven to contribute to innovative projects that leverage my diverse expertise.</p>
                <p><span class="highlight">CURRENT POSITION</span><br>
                <span class="highlight">SW/APP/Cloud Tech Support Analyst [Nov 2022 – Current]</span><br>
                Accenture</p>
                <p>Provide technical support for software, applications, and cloud services, resolving issues promptly.<br>
                Collaborate with customers to troubleshoot and diagnose technical problems, ensuring client satisfaction.<br>
                Communicate complex technical concepts in a clear and understandable manner.</p>
                <p><span class="highlight">EDUCATION AND TRAINING</span><br>
                <span class="highlight">Jr. Penetration Tester [Sep 2023]</span><br>
                TryHackMe</p>
                <p>Participate in penetration testing exercises, identifying vulnerabilities and suggesting remediation strategies.<br>
                Collaborate with senior penetration testers to enhance security protocols and conduct risk assessments.</p>
                <p><span class="highlight">Google Cybersecurity Professional Certificate [Aug 2023]</span><br>
                Coursera</p>
                <p>Successfully completed an intensive cybersecurity program, mastering skills in Python programming, intrusion detection, and SIEM tools.<br>
                Acquired the proficiency needed for cybersecurity analyst and Security Operations Center (SOC) roles,<br> 
                poised to make impactful contributions in today's dynamic digital security environment.</p>
                <p><span class="highlight">Software Engineer [Apr 2021 – Sep 2022]</span><br>
                SoftUni</p>
                <p>Developed software solutions using Python,JavaScript,HTML & CSS contributing to the successful completion of projects.<br>
                Collaborated with a diverse team to design, implement, and maintain software applications.</p>
                <p><span class="highlight">Bachelor of Finance [Sep 2012 – May 2016]</span><br>
                Dimitar A. Tsenov Academy of Economics</p>
                <p>Relevant Courses: Financial Management, Investment Analysis, Accounting Principles.<br>
                Developed strong analytical and problem-solving skills in a finance-focused curriculum.</p>

            `;
            break;
        case 'skills':
            commandOutput.innerHTML = `
                <p><span class="highlight">Languages and Tools:</span></p>
                <div class="skills-icons">
                    <a href="https://skillicons.dev" target="_blank">
                        <img src="https://skillicons.dev/icons?i=python,js,vscode,html,css,bash,linux,mysql,mongodb,aws,azure,postman,raspberrypi" alt="Languages and Tools" />
                    </a>
                </div>
            `;
            break;
        case 'certificates':
             commandOutput.innerHTML = `
				<p>My Certificates:</p>
				<div class="certificates">
					<a href="images/PenTest.jpg" target="_blank">
						<img src="images/PenTest.jpg" alt="Penetration Testing Certificate" class="certificate-thumbnail" />
					</a>
					<a href="images/Google.jpeg" target="_blank">
						<img src="images/Google.jpeg" alt="Google Certificate" class="certificate-thumbnail" />
					</a>
					<a href="images/JS.jpg" target="_blank">
						<img src="images/JS.jpg" alt="JavaScript Certificate" class="certificate-thumbnail" />
					</a>
					<a href="images/PythonOOP.jpg" target="_blank">
						<img src="images/PythonOOP.jpg" alt="Python OOP Certificate" class="certificate-thumbnail" />
					</a>
					<a href="images/Python.jpg" target="_blank">
						<img src="images/Python.jpg" alt="Python Certificate" class="certificate-thumbnail" />
					</a>
				</div>
			`;
            break;
        case 'projects':
            commandOutput.innerHTML = `
                <p>Here are some of my projects:</p>
                <ul>
                    <li><a href="https://github.com/KBonev1993/Information-Security-FreeCodeCamp-/tree/main/Stock%20Price%20Checker" target="_blank" class="project-link">Stock Price Checker</a></li>
                </ul>
                <ul>
                    <li><a href="https://github.com/KBonev1993/BTC-Whale-Tracker-AHAB" target="_blank" class="project-link">BitCoin Whale Tracker</a></li>
                </ul>
                <ul>
                    <li><a href="https://github.com/KBonev1993/Spotify-Song-Scrapper" target="_blank" class="project-link">Spotify Song Scrapper</a></li>
                </ul>
            `;
            break;
        case 'contact':
            commandOutput.innerHTML = `
        <p><span class="highlight">Contact Information:</span></p>
        <p>Email: k.bonev1993@gmail.com</p>
        <div class="social-icons">
            <a href="https://www.linkedin.com/in/kristiyan-bonev-53b374231/" target="_blank"><img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" /></a>
            <a href="https://github.com/kbonev1993" target="_blank"><img src="https://skillicons.dev/icons?i=github" alt="GitHub" /></a>
            <a href="https://twitter.com/TheCoinHustlers" target="_blank"><img src="https://skillicons.dev/icons?i=twitter" alt="Twitter" /></a>
            <a href="https://discord.gg/USQV5F2sY9" target="_blank"><img src="https://skillicons.dev/icons?i=discord" alt="Discord" /></a>
        </div>
    `;
            break;
        default:
            commandOutput.innerHTML = 'Invalid Command!';
            break;
    }

    terminalBody.appendChild(commandOutput);
    terminalBody.scrollTop = terminalBody.scrollHeight; // Scroll to the bottom
}

window.onload = function() {
    var terminalBody = document.getElementById('terminal-body');
    terminalBody.innerHTML = welcomeMessage;
};
