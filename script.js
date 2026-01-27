const gameState = {
    soundEnabled: true,
    playerName: 'Player',
    playerAvatar: '🥸',
    totalScore: 0,
    coins: 0,
    level: 1,
    xp: 0,
    gamesPlayed: {
        quiz: 0,
        phishing: 0,
        password: 0,
        scenario: 0,
        memory: 0
    },
    achievements: [],
    lastPlayed: null,
    timers: {
        quizTimeLeft: 0,
        quizStartTime: 0,
        memoryStartTime: 0,
        phishingTimeLeft: 0
    }
};

const quizQuestions = [
    { q: "What is phishing?", a: "Sending fake emails pretending to be from trusted sources", opts: ["Fishing in the ocean", "Sending fake emails pretending to be from trusted sources", "A type of fish", "Internet speed"] },
    { q: "Which is a strong password?", a: "Blue$Car7-Moon2024!", opts: ["password123", "Blue$Car7-Moon2024!", "12345678", "abcdefgh"] },
    { q: "What does VPN stand for?", a: "Virtual Private Network", opts: ["Very Popular Nickname", "Virtual Private Network", "Video Protocol Number", "Viral Private Network"] },
    { q: "What is malware?", a: "Malicious software designed to harm your computer", opts: ["A type of hair gel", "Malicious software designed to harm your computer", "A brand of clothing", "A social media platform"] },
    { q: "What should you do if you see a suspicious link?", a: "Don't click it and report it", opts: ["Click it to see what it is", "Don't click it and report it", "Forward it to your friends", "Download the file"] },
    { q: "Which is a phishing red flag?", a: "Asking for passwords via email", opts: ["Professional signature", "Asking for passwords via email", "Recent date", "Company logo"] },
    { q: "What is two-factor authentication?", a: "Using two ways to verify your identity", opts: ["Using two passwords", "Using two ways to verify your identity", "Logging in twice", "Two internet connections"] },
    { q: "What is ransomware?", a: "Software that locks your files and demands payment", opts: ["A type of RAM", "Software that locks your files and demands payment", "Random software", "A gaming application"] },
    { q: "How often should you update passwords?", a: "Regularly, especially after suspicious activity", opts: ["Never", "Once a year", "Regularly, especially after suspicious activity", "Only on Fridays"] },
    { q: "What is social engineering?", a: "Manipulating people into revealing confidential info", opts: ["Building social networks", "Manipulating people into revealing confidential info", "Social media engineering", "Group psychology"] },
    { q: "What does HTTPS mean?", a: "A secure version of HTTP with encryption", opts: ["Hyper Text Transfer Process", "A secure version of HTTP with encryption", "High Speed Internet", "Home Transfer Service"] },
    { q: "Which is NOT a common phishing method?", a: "Using quantum computers", opts: ["Fake email addresses", "SMS messages", "Using quantum computers", "Fake websites"] },
    { q: "What is a firewall?", a: "Software/hardware that blocks unauthorized access", opts: ["A wall made of fire", "Software/hardware that blocks unauthorized access", "A type of antivirus", "A backup system"] },
    { q: "Should you share your password with anyone?", a: "Never, not even your best friend", opts: ["Yes, with best friends", "Yes, with family", "Never, not even your best friend", "Yes, if they ask nicely"] },
    { q: "What is cryptography?", a: "The practice of secure communication using codes", opts: ["A type of currency", "The practice of secure communication using codes", "Breaking codes", "A programming language"] },
    { q: "What is a data breach?", a: "Unauthorized access to confidential information", opts: ["Breaking your computer", "Unauthorized access to confidential information", "Fast internet breach", "Security update"] },
    { q: "Which password is strongest?", a: "Tr0p!c@lSunset-42", opts: ["abc123456", "Tr0p!c@lSunset-42", "letmein", "welcome"] },
    { q: "What is antivirus software?", a: "Software that detects and removes malicious programs", opts: ["A virus made of ants", "Software that detects and removes malicious programs", "A type of firewall", "Internet speed booster"] },
    { q: "Why is public WiFi dangerous?", a: "Hackers can intercept unencrypted data", opts: ["It's slow", "Hackers can intercept unencrypted data", "It has bad weather", "It's for public use only"] },
    { q: "What should you do with old devices?", a: "Securely wipe data before disposing", opts: ["Throw them in the trash", "Securely wipe data before disposing", "Leave them on the porch", "Give them away without erasing"] }
];

const phishingMessages = [
    {
        type: "Email",
        msg: "Subject: Your Account Has Been Compromised!\\nDear Valued Customer,\\nWe detected unusual activity on your account. Click here immediately to verify your password.\\nClick Link: secure-verify.com/reset\\n- PayPal Security Team",
        answer: "Fake",
        explain: "Urgency, asking for your password, and a suspicious domain are strong red flags."
    },
    {
        type: "SMS",
        msg: "🎉 Congratulations! You've won a FREE iPhone 15! Click: free-iphone.link/claim to claim your prize!",
        answer: "Fake",
        explain: "Unsolicited prizes and strange links are typical phishing tricks."
    },
    {
        type: "Email",
        msg: "Hi,\\nYour invoice #12345 is ready. Please review the attached PDF.\\nBest regards,\\nAcme Company Billing",
        answer: "Real",
        explain: "Professional tone, specific reference, and a normal business context."
    },
    {
        type: "WhatsApp",
        msg: "Hi! It's me, your bank. Your card was declined. Reply with your card number and CVV to reactivate it.",
        answer: "Fake",
        explain: "Banks do not ask for card details or CVV over chat or SMS."
    },
    {
        type: "Email",
        msg: "Microsoft Account Security Alert\\nWe detected a sign-in from a new location. Confirm it was you: https://account.microsoft.com/security\\n(This email was sent from Microsoft Security team)",
        answer: "Real",
        explain: "Official domain and a normal security notification without asking for your password."
    },
    {
        type: "Email",
        msg: "ACTION REQUIRED: Your Google Account needs verification. Your account will be suspended in 24 hours unless you verify: click-here-now.org/google",
        answer: "Fake",
        explain: "Threats, countdowns, and wrong domains are all phishing signs."
    },
    {
        type: "Email",
        msg: "Dear Valued Employee,\\nPlease submit your Q4 expenses report by Friday using this form.\\nThanks,\\nHR Department",
        answer: "Real",
        explain: "Internal company message with a clear and normal request."
    },
    {
        type: "SMS",
        msg: "ALERT: Unusual activity detected on your Netflix account. Verify your account now: netflix-security.net/verify",
        answer: "Fake",
        explain: "Uses a fake domain and urgent wording to push you to click."
    },
    {
        type: "Email",
        msg: "Thank you for your Amazon purchase! Your order has been dispatched. Track it here: amazon.com/orders/track",
        answer: "Real",
        explain: "Expected order confirmation from the correct amazon.com domain."
    },
    {
        type: "Email",
        msg: "URGENT: Your Roblox account has been locked due to suspicious activity. Confirm your login immediately or lose your account: roblox-verify.ru/login",
        answer: "Fake",
        explain: "Scary language plus a non‑official domain make this clear phishing."
    }
];

const scenarios = [
    {
        title: "The Mysterious Pop-up",
        story: "You're browsing the web and a pop-up appears: 'CLAIM YOUR FREE ROBUX! You've been chosen as our lucky winner! Click here to claim your prize!'",
        choices: [
            { text: "Click on the pop-up to claim your Robux", outcome: "bad", result: "❌ Oh no! The pop-up installed malware. Free offers like this are usually scams." },
            { text: "Close the pop-up and ignore it", outcome: "good", result: "✓ Great decision! Closing suspicious pop-ups keeps your device safer." },
            { text: "Tell a trusted adult about the suspicious pop-up", outcome: "good", result: "✓ Excellent! Asking for help is a strong cyber safety habit." }
        ]
    },
    {
        title: "The Friend Request Mystery",
        story: "Someone claiming to be your friend sends you a message: 'Hey! Check out this video link, it's hilarious!' but the link looks strange.",
        choices: [
            { text: "Click the link to see what it is", outcome: "bad", result: "❌ Uh oh! It was a phishing link that could steal your details." },
            { text: "Ask your friend directly if they sent the message", outcome: "good", result: "✓ Smart! Double-checking with your friend helps you avoid scams." },
            { text: "Report and block the account", outcome: "good", result: "✓ Perfect! Reporting suspicious accounts protects you and others." }
        ]
    },
    {
        title: "The Urgent Email",
        story: "You receive an email from 'your bank' saying: 'Your account has been compromised! Click here IMMEDIATELY to verify your password.'",
        choices: [
            { text: "Click the link and enter your password", outcome: "bad", result: "❌ This was a phishing email. Real banks never ask for passwords by email." },
            { text: "Call your bank's official number to verify", outcome: "good", result: "✓ Excellent! Using an official phone number is the safest way to check." },
            { text: "Ignore the email and go to the bank website directly", outcome: "good", result: "✓ Great thinking! Type the bank's address yourself, never trust random links." }
        ]
    }
];

const memoryCards = [
    { emoji: "🎣", name: "Phishing" },
    { emoji: "🦠", name: "Malware" },
    { emoji: "🔐", name: "Password" },
    { emoji: "🛡️", name: "Firewall" },
    { emoji: "🔒", name: "Encryption" },
    { emoji: "🌐", name: "VPN" },
    { emoji: "🔑", name: "Access Key" },
    { emoji: "⚠️", name: "Warning" }
];

const cyberTerms = [
    { title: "Phishing", desc: "Tricking people into giving away information, often using fake emails, messages, or websites." },
    { title: "Malware", desc: "Software that is created to damage devices, steal data, or spy on users." },
    { title: "Ransomware", desc: "Malware that locks your files and demands money to unlock them." },
    { title: "VPN", desc: "Virtual Private Network – it hides your real location and protects your connection on public WiFi." },
    { title: "Firewall", desc: "A digital gatekeeper that helps block unwanted or unsafe network traffic." },
    { title: "Encryption", desc: "Turning readable information into secret code so only people with the key can read it." },
    { title: "Two-Factor Authentication", desc: "Using two checks, like a password plus a code from your phone, to log in securely." },
    { title: "Password Manager", desc: "A safe place that stores and fills in strong passwords for all your accounts." }
];

function init() {
    loadLeaderboard();
    setupEventListeners();
    setupQuiz();
    setupPhishing();
    setupMemory();
    setupScenarios();
    setupLearnMore();
}

function setupEventListeners() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function () {
            const section = this.dataset.section;
            showSection(section);
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    document.querySelectorAll('.game-card').forEach(card => {
        card.addEventListener('click', function () {
            const game = this.dataset.game;
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            document.querySelector(`[data-section="${game}"]`).classList.add('active');
            showSection(game);
        });
    });

    document.querySelectorAll('.avatar-option').forEach(option => {
        option.addEventListener('click', function () {
            document.querySelectorAll('.avatar-option').forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');
            gameState.playerAvatar = this.dataset.avatar;
            updatePlayerDisplay();
            saveGameState();
        });
    });

    document.getElementById('soundToggle').addEventListener('click', function () {
        gameState.soundEnabled = !gameState.soundEnabled;
        this.textContent = gameState.soundEnabled ? '🔊 Sound ON' : '🔇 Sound OFF';
        saveGameState();
    });

    // Player name input
    const nameInput = document.getElementById('playerNameInput');
    nameInput.addEventListener('input', function () {
        gameState.playerName = this.value || 'Player';
        updatePlayerDisplay();
        saveGameState();
    });

    // Load saved game state
    loadGameState();
}

function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    window.scrollTo(0, 0);
}

function goToDashboard() {
    showSection('dashboard');
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    document.querySelector('[data-section="dashboard"]').classList.add('active');
}

// Quiz
let currentQuestion = 0;
let quizScore = 0;
let quizAnswered = false;
let quizTimerInterval = null;

function setupQuiz() {
    gameState.timers.quizStartTime = Date.now();
    startQuizTimer();
    showQuizQuestion();
}

function resetQuiz() {
    currentQuestion = 0;
    quizScore = 0;
    quizAnswered = false;
    clearInterval(quizTimerInterval);
    gameState.timers.quizStartTime = Date.now();
    document.getElementById('quizScreen').style.display = 'block';
    document.getElementById('quizSummary').style.display = 'none';
    startQuizTimer();
    showQuizQuestion();
}

function showQuizQuestion() {
    const q = quizQuestions[currentQuestion];
    const shuffled = [...q.opts].sort(() => Math.random() - 0.5);
    const optionsHTML = shuffled.map(opt =>
        `<button class="option-btn" onclick="selectAnswer('${opt.replace(/'/g, "\\'")}', '${q.a.replace(/'/g, "\\'")}')">${opt}</button>`
    ).join('');

    document.getElementById('quizContainer').innerHTML = `
        <div class="question-text">Question ${currentQuestion + 1} / ${quizQuestions.length}</div>
        <div style="font-size: 17px; margin-bottom: 18px;">${q.q}</div>
        ${optionsHTML}
    `;

    const progress = (currentQuestion / quizQuestions.length) * 100;
    document.getElementById('quizProgress').style.width = progress + '%';
    const btn = document.getElementById('nextQuizBtn');
    btn.disabled = true;
    btn.style.opacity = '0.5';
    quizAnswered = false;
}

function selectAnswer(selected, correct) {
    if (quizAnswered) return;
    quizAnswered = true;

    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
        if (btn.textContent === correct) {
            btn.classList.add('correct');
        }
        if (btn.textContent === selected && selected !== correct) {
            btn.classList.add('incorrect');
        }
        btn.style.pointerEvents = 'none';
    });

    if (selected === correct) {
        quizScore++;
        playSound('correct');
    } else {
        playSound('incorrect');
    }

    const btn = document.getElementById('nextQuizBtn');
    btn.disabled = false;
    btn.style.opacity = '1';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
        showQuizQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(quizTimerInterval);
    document.getElementById('quizScreen').style.display = 'none';
    document.getElementById('quizSummary').style.display = 'block';

    const score = quizScore;
    const accuracy = Math.round((score / quizQuestions.length) * 100);

    // Calculate time
    const totalTime = Math.floor((Date.now() - gameState.timers.quizStartTime) / 1000);
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    // Speed bonus calculation (faster = more bonus)
    let speedBonus = 0;
    if (totalTime < 120) speedBonus = 50; // Under 2 minutes
    else if (totalTime < 180) speedBonus = 30; // Under 3 minutes
    else if (totalTime < 240) speedBonus = 15; // Under 4 minutes
    else if (totalTime < 300) speedBonus = 5; // Under 5 minutes

    document.getElementById('quizFinalScore').textContent = `${score}/${quizQuestions.length}`;
    document.getElementById('quizAccuracy').textContent = accuracy + '%';
    document.getElementById('quizTime').textContent = timeString;
    document.getElementById('quizSpeedBonus').textContent = `+${speedBonus} 🪙`;

    // New reward system: 2 points, 5 coins, 10 XP per correct answer + speed bonus
    const points = score * 2;
    const coins = (score * 5) + speedBonus;
    const xp = score * 10;
    addReward(points, coins, xp);

    gameState.gamesPlayed.quiz++;
    saveToLeaderboard();
    playSound('complete');
    createConfetti();
}

// Phishing
let currentPhish = 0;
let phishScore = 0;
let phishAnswered = false;

function setupPhishing() {
    showPhishingMessage();
}

function resetPhishing() {
    currentPhish = 0;
    phishScore = 0;
    phishAnswered = false;
    document.getElementById('phishingContainer').innerHTML = '';
    document.getElementById('phishingSummary').style.display = 'none';
    showPhishingMessage();
}

function showPhishingMessage() {
    const msg = phishingMessages[currentPhish];
    document.getElementById('phishCount').textContent = currentPhish + 1;
    document.getElementById('phishProgress').style.width = ((currentPhish + 1) / phishingMessages.length) * 100 + '%';

    document.getElementById('phishingContainer').innerHTML = `
        <div class="message-card">
            <div class="message-type">${msg.type}</div>
            <div class="message-content">${msg.msg.replace(/\\n/g, '<br>')}</div>
            <div class="phish-buttons">
                <button class="phish-btn real" onclick="answerPhish('Real', '${msg.answer}', '${msg.explain.replace(/'/g, "\\'")}')">✓ Real</button>
                <button class="phish-btn fake" onclick="answerPhish('Fake', '${msg.answer}', '${msg.explain.replace(/'/g, "\\'")}')">✗ Fake</button>
            </div>
        </div>
    `;
    phishAnswered = false;
}

function answerPhish(answer, correct, explain) {
    if (phishAnswered) return;
    phishAnswered = true;

    const container = document.getElementById('phishingContainer');
    const isCorrect = answer === correct;
    if (isCorrect) phishScore++;

    const feedbackClass = isCorrect ? 'correct' : 'incorrect';
    const feedbackTitle = isCorrect ? 'Correct!' : 'Not quite.';
    const feedback = `
        <div class="feedback-box ${feedbackClass}">
            <div class="feedback-title">${feedbackTitle}</div>
            <div class="feedback-text"><strong>Why:</strong> ${explain}</div>
        </div>
        <button class="btn btn-primary" style="width: 100%; margin-top: 16px;" onclick="nextPhishing()">Next Message →</button>
    `;

    container.innerHTML += feedback;

    if (isCorrect) playSound('correct');
    else playSound('incorrect');
}

function nextPhishing() {
    currentPhish++;
    if (currentPhish < phishingMessages.length) {
        document.getElementById('phishingContainer').innerHTML = '';
        showPhishingMessage();
    } else {
        endPhishing();
    }
}

function endPhishing() {
    document.getElementById('phishingContainer').innerHTML = '';
    document.getElementById('phishingSummary').style.display = 'block';

    const accuracy = Math.round((phishScore / phishingMessages.length) * 100);
    document.getElementById('phishScore').textContent = `${phishScore}/${phishingMessages.length}`;
    document.getElementById('phishAccuracy').textContent = accuracy + '%';

    // New reward system: 3 points, 8 coins, 15 XP per correct answer
    const points = phishScore * 3;
    const coins = phishScore * 8;
    const xp = phishScore * 15;
    addReward(points, coins, xp);

    gameState.gamesPlayed.phishing++;
    saveToLeaderboard();
    playSound('complete');
    createConfetti();
}

// Password
function checkPasswordStrength() {
    const password = document.getElementById('passwordInput').value;
    let strength = 0;
    const met = [false, false, false, false];

    if (password.length >= 8) { strength += 25; met[0] = true; }
    if (/[A-Z]/.test(password)) { strength += 25; met[1] = true; }
    if (/[0-9]/.test(password)) { strength += 25; met[2] = true; }
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) { strength += 25; met[3] = true; }

    const bar = document.getElementById('strengthBar');
    const text = document.getElementById('strengthText');
    bar.className = 'strength-bar';

    if (password === '') {
        text.textContent = 'Enter a password';
    } else if (strength <= 25) {
        text.textContent = 'Weak - add more length and variety.';
        bar.classList.add('weak');
    } else if (strength <= 50) {
        text.textContent = 'Fair - getting better, keep going.';
        bar.classList.add('fair');
    } else if (strength <= 75) {
        text.textContent = 'Good - strong for most accounts.';
        bar.classList.add('good');
    } else {
        text.textContent = 'Strong - excellent password!';
        bar.classList.add('strong');
    }

    ['crit1', 'crit2', 'crit3', 'crit4'].forEach((id, i) => {
        const el = document.getElementById(id);
        if (met[i]) el.classList.add('met');
        else el.classList.remove('met');
    });
}

// Scenarios
let currentScenario = 0;

function setupScenarios() {
    showScenario();
}

function showScenario() {
    const scenario = scenarios[currentScenario];
    const choicesHTML = scenario.choices.map((choice, i) =>
        `<button class="choice-btn" onclick="selectChoice('${choice.outcome}','${choice.result.replace(/'/g, "\\'")}')">${choice.text}</button>`
    ).join('');

    document.getElementById('scenarioContainer').innerHTML = `
        <div class="scenario-content">
            <div class="scenario-text">${scenario.story}</div>
            ${choicesHTML}
            <div id="scenarioOutcome"></div>
        </div>
    `;
}

function selectChoice(outcome, result) {
    const buttons = document.querySelectorAll('.choice-btn');
    buttons.forEach(btn => btn.style.pointerEvents = 'none');

    const outcomeBox = document.getElementById('scenarioOutcome');
    const firstSpace = result.indexOf(' ');
    const title = firstSpace > 0 ? result.substring(0, firstSpace) : '';
    const text = firstSpace > 0 ? result.substring(firstSpace + 1) : result;

    outcomeBox.innerHTML = `
        <div class="outcome-box ${outcome === 'good' ? 'good' : 'bad'}">
            <div class="outcome-title">${title}</div>
            <div class="outcome-text">${text}</div>
        </div>
        <button class="btn btn-primary" style="width: 100%; margin-top: 16px;" onclick="nextScenario()">
            ${currentScenario < scenarios.length - 1 ? 'Next Story →' : 'Finish →'}
        </button>
    `;

    playSound(outcome === 'good' ? 'correct' : 'incorrect');

    // New reward system: 2 points, 5 coins, 8 XP per choice
    addReward(2, 5, 8);
    gameState.gamesPlayed.scenario++;
}

function nextScenario() {
    currentScenario++;
    if (currentScenario < scenarios.length) {
        showScenario();
    } else {
        saveToLeaderboard();
        playSound('complete');
        createConfetti();
        goToDashboard();
        currentScenario = 0;
    }
}

// Memory
let memoryShuffled = [];
let selectedCards = [];
let matchedPairs = 0;
let memoryMoves = 0;

function setupMemory() {
    resetMemory();
}

function resetMemory() {
    matchedPairs = 0;
    memoryMoves = 0;
    selectedCards = [];
    clearInterval(memoryTimerInterval);
    document.getElementById('memoryBoard').innerHTML = '';
    document.getElementById('memorySummary').style.display = 'none';
    document.getElementById('memoryMatches').textContent = '0';
    document.getElementById('memoryMoves').textContent = '0';
    document.getElementById('memoryTime').textContent = '0:00';
    document.getElementById('memoryBoard').style.pointerEvents = 'auto';

    memoryShuffled = [...memoryCards, ...memoryCards]
        .sort(() => Math.random() - 0.5)
        .map((item, i) => ({ ...item, id: i }));

    const board = document.getElementById('memoryBoard');
    memoryShuffled.forEach((item, i) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.dataset.index = i;
        card.textContent = '?';
        card.addEventListener('click', () => flipMemoryCard(i));
        board.appendChild(card);
    });

    // Start timer
    startMemoryTimer();
}

function flipMemoryCard(index) {
    const card = document.querySelector(`[data-index="${index}"]`);
    if (!card || card.classList.contains('flipped') || card.classList.contains('matched') || selectedCards.length >= 2) return;

    card.classList.add('flipped');
    card.textContent = memoryShuffled[index].emoji;
    selectedCards.push(index);

    if (selectedCards.length === 2) {
        memoryMoves++;
        document.getElementById('memoryMoves').textContent = memoryMoves;
        checkMemoryMatch();
    }
}

function checkMemoryMatch() {
    const [i1, i2] = selectedCards;
    const card1 = memoryShuffled[i1];
    const card2 = memoryShuffled[i2];

    setTimeout(() => {
        const el1 = document.querySelector(`[data-index="${i1}"]`);
        const el2 = document.querySelector(`[data-index="${i2}"]`);
        if (!el1 || !el2) return;

        if (card1.emoji === card2.emoji && card1.id !== card2.id) {
            el1.classList.add('matched');
            el2.classList.add('matched');
            matchedPairs++;
            document.getElementById('memoryMatches').textContent = matchedPairs.toString();
            playSound('correct');

            if (matchedPairs === memoryCards.length) {
                endMemory();
            }
        } else {
            el1.classList.remove('flipped');
            el2.classList.remove('flipped');
            el1.textContent = '?';
            el2.textContent = '?';
            playSound('incorrect');
        }
        selectedCards = [];
    }, 900);
}

function endMemory() {
    clearInterval(memoryTimerInterval);
    document.getElementById('memoryBoard').style.pointerEvents = 'none';
    document.getElementById('memorySummary').style.display = 'block';

    // Calculate time
    const totalTime = Math.floor((Date.now() - gameState.timers.memoryStartTime) / 1000);
    const timeString = formatTime(totalTime);

    // Speed bonus calculation (faster = more bonus)
    let speedBonus = 0;
    if (totalTime < 30) speedBonus = 40; // Under 30 seconds
    else if (totalTime < 45) speedBonus = 25; // Under 45 seconds
    else if (totalTime < 60) speedBonus = 15; // Under 1 minute
    else if (totalTime < 90) speedBonus = 5; // Under 1.5 minutes

    document.getElementById('memoryFinalMoves').textContent = memoryMoves.toString();
    document.getElementById('memoryFinalTime').textContent = timeString;
    document.getElementById('memorySpeedBonus').textContent = `+${speedBonus} 🪙`;

    // New reward system: Performance-based rewards + speed bonus
    let points, coins, xp;
    if (memoryMoves <= 10) {
        points = 30; coins = 40; xp = 50; // Excellent
    } else if (memoryMoves <= 15) {
        points = 20; coins = 25; xp = 35; // Great
    } else {
        points = 10; coins = 15; xp = 20; // Good
    }
    coins += speedBonus; // Add speed bonus to coins
    addReward(points, coins, xp);

    gameState.gamesPlayed.memory++;
    saveToLeaderboard();
    playSound('complete');
    createConfetti();
}

// Learn More
function setupLearnMore() {
    const grid = document.getElementById('termsGrid');
    cyberTerms.forEach(term => {
        const card = document.createElement('div');
        card.className = 'term-card';
        card.innerHTML = `
            <div class="term-title">${term.title}</div>
            <div class="term-text">${term.desc}</div>
        `;
        grid.appendChild(card);
    });
}

// Leaderboard
function loadLeaderboard() {
    const saved = localStorage.getItem('leaderboard');
    const leaderboard = saved ? JSON.parse(saved) : [];
    displayLeaderboard(leaderboard);
}

function saveToLeaderboard() {
    let leaderboard = JSON.parse(localStorage.getItem('leaderboard') || '[]');
    const existing = leaderboard.findIndex(p => p.name === gameState.playerName);
    const newEntry = {
        name: gameState.playerName,
        avatar: gameState.playerAvatar,
        score: gameState.totalScore,
        date: new Date().toLocaleDateString()
    };

    if (existing >= 0) {
        if (gameState.totalScore > leaderboard[existing].score) {
            leaderboard[existing] = newEntry;
        }
    } else {
        leaderboard.push(newEntry);
    }

    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 10);
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    displayLeaderboard(leaderboard);
}

function displayLeaderboard(leaderboard) {
    const body = document.getElementById('leaderboardBody');
    body.innerHTML = leaderboard.map((player, i) => {
        let medal = '';
        if (i === 0) medal = '<span class="rank-badge gold">🥇</span>';
        else if (i === 1) medal = '<span class="rank-badge silver">🥈</span>';
        else if (i === 2) medal = '<span class="rank-badge bronze">🥉</span>';

        return `
            <tr>
                <td>${medal || `<span style="color: var(--color-text-secondary);">#${i + 1}</span>`}</td>
                <td>${player.avatar} ${player.name}</td>
                <td>${player.score}</td>
                <td>${player.date}</td>
            </tr>
        `;
    }).join('');
}

function updateScore() {
    updatePlayerDisplay();
}

// Sound & Confetti
function playSound(type) {
    if (!gameState.soundEnabled) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    if (type === 'correct') {
        oscillator.frequency.value = 800;
        gainNode.gain.setValueAtTime(0.06, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.18);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.18);
    } else if (type === 'incorrect') {
        oscillator.frequency.value = 320;
        gainNode.gain.setValueAtTime(0.06, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
    } else if (type === 'complete') {
        const freqs = [620, 820, 1020];
        freqs.forEach((freq, i) => {
            const osc = audioContext.createOscillator();
            const gain = audioContext.createGain();
            osc.frequency.value = freq;
            osc.connect(gain);
            gain.connect(audioContext.destination);
            const t = audioContext.currentTime + i * 0.12;
            gain.gain.setValueAtTime(0.06, t);
            gain.gain.exponentialRampToValueAtTime(0.01, t + 0.22);
            osc.start(t);
            osc.stop(t + 0.22);
        });
    }
}

function createConfetti() {
    for (let i = 0; i < 26; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.background = Math.random() > 0.5 ? 'var(--color-primary)' : 'var(--color-accent)';
        confetti.style.animationDelay = (Math.random() * 0.4) + 's';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3200);
    }
}

// Timer Functions
function startQuizTimer() {
    updateQuizTimer();
    quizTimerInterval = setInterval(updateQuizTimer, 1000);
}

function updateQuizTimer() {
    const elapsed = Math.floor((Date.now() - gameState.timers.quizStartTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    document.getElementById('quizTimeDisplay').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

let memoryTimerInterval = null;

function startMemoryTimer() {
    gameState.timers.memoryStartTime = Date.now();
    updateMemoryTimer();
    memoryTimerInterval = setInterval(updateMemoryTimer, 1000);
}

function updateMemoryTimer() {
    const elapsed = Math.floor((Date.now() - gameState.timers.memoryStartTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    document.getElementById('memoryTime').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Player Profile & Reward System
function updatePlayerDisplay() {
    document.getElementById('playerName').textContent = gameState.playerName;
    document.getElementById('totalScore').textContent = gameState.totalScore;
    document.getElementById('headerCoins').textContent = gameState.coins;
    document.getElementById('playerCoins').textContent = gameState.coins;
    document.getElementById('playerScore').textContent = gameState.totalScore;
    document.getElementById('playerLevel').textContent = gameState.level;
    document.getElementById('playerXP').textContent = gameState.xp;
    document.getElementById('playerNameInput').value = gameState.playerName === 'Player' ? '' : gameState.playerName;
}

function addReward(points, coins, xp) {
    gameState.totalScore += points;
    gameState.coins += coins;
    gameState.xp += xp;

    // Level up system (every 100 XP = 1 level)
    const newLevel = Math.floor(gameState.xp / 100) + 1;
    if (newLevel > gameState.level) {
        gameState.level = newLevel;
        gameState.coins += 50; // Bonus coins for leveling up
        playSound('complete');
        showLevelUpNotification(newLevel);
    }

    updatePlayerDisplay();
    saveGameState();
}

function showLevelUpNotification(level) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
        color: #05161a;
        padding: 30px 50px;
        border-radius: 16px;
        font-size: 28px;
        font-weight: 800;
        z-index: 1000;
        box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        animation: fadeIn 0.3s ease;
    `;
    notification.textContent = `🎉 Level ${level} Unlocked! +50 Coins!`;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

function saveGameState() {
    localStorage.setItem('cyberSenseGameState', JSON.stringify(gameState));
}

function loadGameState() {
    const saved = localStorage.getItem('cyberSenseGameState');
    if (saved) {
        const savedState = JSON.parse(saved);
        Object.assign(gameState, savedState);
    }
    updatePlayerDisplay();
}

window.addEventListener('load', init);
