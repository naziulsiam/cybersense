// Cybersecurity awareness quiz questions and scenarios
const quizData = [
    {
        scenario: "You receive an email from 'noreply@applesupport.com' asking you to verify your Apple ID immediately. The email mentions suspicious activity on your account and includes a link to update your password. The email seems urgent but slightly off. What should you do?",
        options: [
            "Click the link and update your password immediately",
            "Go directly to the official Apple website and log in through your browser",
            "Reply to the email asking for more information",
            "Forward the email to another contact for verification"
        ],
        correct: 1,
        explanation: "This is a classic phishing attempt. Always navigate directly to the official website by typing the URL in your browser, never click links in emails requesting password changes or sensitive information."
    },
    {
        scenario: "Your manager sends you a request via email asking you to urgently wire $50,000 to a vendor for a project. The email comes from your manager's account but you haven't discussed this payment before. What's the safest action?",
        options: [
            "Process the payment immediately since it's from your manager",
            "Call your manager directly at their known number to verify the request",
            "Email back asking for more details",
            "Check the vendor invoice in the email"
        ],
        correct: 1,
        explanation: "This is a Business Email Compromise (BEC) attack. Always verify large financial requests through a secondary communication channel by calling the person directly at a known number."
    },
    {
        scenario: "You're at a coffee shop and notice someone looking over your shoulder while you type your password. You notice your laptop screen is visible to nearby people. What should you do?",
        options: [
            "Continue working as you have nothing to hide",
            "Move to a more private location and use a privacy screen in public",
            "Work faster so people can't see much",
            "Only visit public websites to minimize risk"
        ],
        correct: 1,
        explanation: "Physical security is crucial. Use privacy screens in public, position your screen away from others, and be aware of your surroundings when handling sensitive information."
    },
    {
        scenario: "You download a document from an email attachment labeled 'January_Report.xlsx'. When you open it, Microsoft Office asks if you want to enable macros. You don't recognize the sender very well. What's the safest choice?",
        options: [
            "Enable macros - it's just a spreadsheet",
            "Disable macros unless you're absolutely certain they're needed",
            "Open it in a different program that doesn't support macros",
            "Check the file size to verify it's safe"
        ],
        correct: 1,
        explanation: "Malware often spreads through macro-enabled documents. Always disable macros by default unless you're 100% certain they're legitimate and necessary."
    },
    {
        scenario: "You create a password for a new work account. Which of these passwords would be most secure?",
        options: [
            "Password123",
            "Your birthdate followed by your name",
            "M@keSecurity2024#Strong!XyZ",
            "admin12345"
        ],
        correct: 2,
        explanation: "Strong passwords use a mix of uppercase, lowercase, numbers, and special characters, and are 12+ characters long. Avoid common words, dates, and sequential patterns."
    },
    {
        scenario: "Your company uses two-factor authentication (2FA). Someone calls claiming to be IT support and asks for your 2FA code to 'troubleshoot your account'. What do you do?",
        options: [
            "Provide the code - they're from IT support",
            "Never share your 2FA code with anyone, even IT support",
            "Ask them to email you first for verification",
            "Provide the code but change your password afterward"
        ],
        correct: 1,
        explanation: "NEVER share your 2FA codes with anyone. Legitimate IT support will never ask for authentication codes. This is a social engineering attack."
    },
    {
        scenario: "You find a USB drive in the office parking lot. It's labeled 'Executive_Bonuses.xlsx'. What should you do?",
        options: [
            "Plug it into your computer to see what's on it",
            "Give it to your manager immediately",
            "Turn it in to security or IT without plugging it in",
            "Leave it where you found it"
        ],
        correct: 2,
        explanation: "Unknown USB devices can contain malware. Never plug them into company devices. Report found devices to security/IT who can safely analyze them."
    },
    {
        scenario: "You're shopping online and need to enter payment information. Which signs indicate a legitimate, secure website?",
        options: [
            "The site asks for your password",
            "'https://' in the URL and a padlock icon",
            "The site asks for all your personal information at once",
            "Bright colors and flashy advertisements"
        ],
        correct: 1,
        explanation: "Always look for HTTPS (not HTTP) and a padlock icon in the address bar. These indicate the connection is encrypted. Avoid sites asking for unnecessary personal information."
    },
    {
        scenario: "Someone sends you a LinkedIn connection request with a profile showing common interests and connections. But something feels off. What's the safest approach?",
        options: [
            "Accept it - they have mutual connections",
            "Click on their profile link to learn more",
            "Verify you actually know this person before accepting",
            "Message them asking who they are"
        ],
        correct: 2,
        explanation: "Fake profiles often mimic real people or use social engineering. Verify you genuinely know someone before accepting connection requests."
    },
    {
        scenario: "Your company announces a new internal policy change via email with a link to 'important_security_update'. But you notice the sender's email is slightly different from normal IT emails (@companysecurity.net vs @company.com). What do you do?",
        options: [
            "Click the link - it's about company security",
            "Contact your IT department directly to verify the announcement",
            "Forward it to colleagues to get their input",
            "Check the website link preview before clicking"
        ],
        correct: 1,
        explanation: "Email spoofing can make emails look legitimate. When in doubt, contact the sender directly through official channels. Small differences in email addresses are major red flags."
    }
];

let currentQuestion = 0;
let score = 0;
let streak = 0;
let level = 1;
let answered = false;

// Initialize quiz
function initQuiz() {
    loadQuestion();
    updateStats();
}

// Load current question
function loadQuestion() {
    const question = quizData[currentQuestion];
    document.getElementById('scenario').textContent = question.scenario;
    
    question.options.forEach((option, index) => {
        document.getElementById(`option-${index}`).textContent = option;
    });
    
    // Reset feedback
    const feedback = document.getElementById('feedback');
    feedback.classList.remove('show', 'correct', 'incorrect');
    feedback.textContent = '';
    
    // Reset button states
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.style.opacity = '1';
        btn.style.pointerEvents = 'auto';
    });
    
    answered = false;
}

// Check answer
function checkAnswer(selectedIndex) {
    if (answered) return;
    
    answered = true;
    const question = quizData[currentQuestion];
    const feedback = document.getElementById('feedback');
    const isCorrect = selectedIndex === question.correct;
    
    // Update score and streak
    if (isCorrect) {
        score += 10;
        streak += 1;
    } else {
        streak = 0;
    }
    
    // Update level based on streak
    if (streak >= 3) level = Math.min(5, Math.floor(streak / 3) + 1);
    
    // Show feedback
    feedback.classList.add('show', isCorrect ? 'correct' : 'incorrect');
    feedback.textContent = (isCorrect ? '✓ Correct! ' : '✗ Incorrect. ') + question.explanation;
    
    // Disable other options
    document.querySelectorAll('.option-btn').forEach((btn, index) => {
        if (index !== selectedIndex) {
            btn.style.opacity = '0.5';
        }
    });
    
    updateStats();
}

// Next question
function nextQuestion() {
    currentQuestion = (currentQuestion + 1) % quizData.length;
    loadQuestion();
}

// Reset quiz
function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    streak = 0;
    level = 1;
    answered = false;
    loadQuestion();
    updateStats();
}

// Update stats display
function updateStats() {
    document.getElementById('score').textContent = score;
    document.getElementById('streak').textContent = streak;
    document.getElementById('level').textContent = level;
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initQuiz);
} else {
    initQuiz();
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!answered) {
        const key = parseInt(e.key);
        if (key >= 1 && key <= 4) {
            checkAnswer(key - 1);
        }
    }
});
