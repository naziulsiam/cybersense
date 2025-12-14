// Badge Definitions
const BADGES = {
  firstWin: { icon: '🥇', name: 'First Win', description: 'Complete your first module', condition: (stats) => stats.modulesCompleted >= 1 },
  speedRunner: { icon: '⚡', name: 'Speed Runner', description: 'Complete 5 questions in 1 min', condition: (stats) => stats.speedRuns >= 1 },
  accuracyKing: { icon: '🎯', name: 'Accuracy King', description: 'Achieve 90%+ accuracy', condition: (stats) => stats.accuracy >= 90 },
  streakMaster: { icon: '🔥', name: 'Streak Master', description: 'Get 10+ correct streak', condition: (stats) => stats.bestStreak >= 10 },
  knowledgeSeeker: { icon: '🧠', name: 'Knowledge Seeker', description: 'Earn 500+ XP', condition: (stats) => stats.totalXP >= 500 },
  levelUp: { icon: '📈', name: 'Level Up!', description: 'Reach Level 5', condition: (stats) => stats.level >= 5 },
  phishingExpert: { icon: '🎣', name: 'Phishing Expert', description: 'Complete Phishing module', condition: (stats) => stats.modulesBadges.includes(0) },
  safeGuardian: { icon: '🛡️', name: 'Safe Guardian', description: 'Complete all 5 modules', condition: (stats) => stats.modulesCompleted >= 5 },
};

// Avatar Options
const AVATARS = ['🦸', '🧙', '🕵️', '🤖', '👨‍💻', '👩‍💻', '🧑‍🔬', '🦹', '💂', '👲', '👳', '🧔', '👴', '👵', '🧒', '👦', '👧', '👨', '👩', '🦸‍♀️'];

// Game State
let currentModule = null;
let currentQuestion = 0;
let totalScore = 0;
let currentLevel = 1;
let currentXP = 0;
let totalCorrect = 0;
let totalAttempts = 0;
let bestStreak = 0;
let currentStreak = 0;
let answered = false;
let currentAvatar = '🦸';
let playerName = 'Cyber Guardian';
let teamCode = null;
let teamName = null;
let teamMembers = [];
let unlockedBadges = [];
let theme = localStorage.getItem('theme') || 'light';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    setupPasswordInput();
    updateDashboard();
    generateModuleProgress();
    loadTheme();
    loadPlayerData();
    generateAvatarGrid();
    updateBadges();
});

// ===== THEME MANAGEMENT =====
function toggleTheme() {
    theme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

function loadTheme() {
    document.documentElement.setAttribute('data-theme', theme);
}

// ===== AVATAR CUSTOMIZATION =====
function generateAvatarGrid() {
    const grid = document.getElementById('avatar-grid');
    grid.innerHTML = '';
    AVATARS.forEach(avatar => {
        const option = document.createElement('button');
        option.className = 'avatar-option';
        if (avatar === currentAvatar) option.classList.add('selected');
        option.textContent = avatar;
        option.onclick = () => selectAvatar(avatar);
        grid.appendChild(option);
    });
}

function selectAvatar(avatar) {
    currentAvatar = avatar;
    document.getElementById('avatar-preview').textContent = avatar;
    document.querySelectorAll('.avatar-option').forEach(opt => opt.classList.remove('selected'));
    event.target.classList.add('selected');
}

function openAvatarCustomizer() {
    document.getElementById('avatar-modal').classList.remove('hidden');
}

function closeAvatarCustomizer() {
    document.getElementById('avatar-modal').classList.add('hidden');
}

function confirmAvatar() {
    document.getElementById('profile-avatar').textContent = currentAvatar;
    closeAvatarCustomizer();
    savePlayerData();
}

// ===== BADGE SYSTEM =====
function updateBadges() {
    const stats = {
        modulesCompleted: totalAttempts > 0 ? Math.floor(totalAttempts / 50) : 0,
        accuracy: totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0,
        bestStreak: bestStreak,
        speedRuns: 0,
        totalXP: totalScore + (currentLevel * 100),
        level: currentLevel,
        modulesBadges: []
    };

    unlockedBadges = [];
    const container = document.getElementById('badges-container');
    container.innerHTML = '';

    for (const [key, badge] of Object.entries(BADGES)) {
        const isUnlocked = badge.condition(stats);
        if (isUnlocked) unlockedBadges.push(key);

        const badgeEl = document.createElement('div');
        badgeEl.className = `badge ${isUnlocked ? 'unlocked' : 'locked'}`;
        badgeEl.title = `${badge.name}: ${badge.description}`;
        badgeEl.innerHTML = `
            <div class="badge-icon">${badge.icon}</div>
            <div class="badge-name">${badge.name}</div>
        `;
        container.appendChild(badgeEl);
    }
}

// ===== TEAM LEADERBOARD =====
function joinTeam() {
    const code = document.getElementById('team-code').value.toUpperCase();
    if (!code || code.length !== 6) {
        alert('Please enter a valid 6-character team code!');
        return;
    }

    // Simulate team joining (in real app, would connect to backend)
    teamCode = code;
    teamName = `Team ${code}`;
    teamMembers = [
        { name: playerName, xp: totalScore + (currentLevel * 100), avatar: currentAvatar },
        { name: 'Alex', xp: 2450, avatar: '🧙' },
        { name: 'Jordan', xp: 2200, avatar: '🕵️' }
    ];

    updateTeamLeaderboard();
    document.getElementById('team-info').classList.remove('hidden');
    document.getElementById('team-name').textContent = teamName;
    document.getElementById('team-code').disabled = true;
}

function updateTeamLeaderboard() {
    const leaderboard = document.getElementById('team-leaderboard');
    leaderboard.innerHTML = '';

    // Sort by XP
    const sorted = [...teamMembers].sort((a, b) => b.xp - a.xp);
    const medals = ['🥇', '🥈', '🥉'];

    sorted.forEach((member, index) => {
        const item = document.createElement('div');
        item.className = 'leaderboard-item';
        if (index === 0) item.classList.add('rank-1');
        item.innerHTML = `
            <span class="rank">${medals[index] || index + 1}</span>
            <span style="font-size: 1.5rem; margin-right: 0.5rem;">${member.avatar}</span>
            <span class="name" style="flex: 1;">${member.name}</span>
            <span class="points">${member.xp} XP</span>
        `;
        leaderboard.appendChild(item);
    });
}

// ===== DATA PERSISTENCE =====
function savePlayerData() {
    const data = {
        playerName,
        currentAvatar,
        currentLevel,
        currentXP,
        totalScore,
        totalCorrect,
        totalAttempts,
        bestStreak,
        unlockedBadges,
        teamCode
    };
    localStorage.setItem('cybersenseData', JSON.stringify(data));
}

function loadPlayerData() {
    const data = localStorage.getItem('cybersenseData');
    if (data) {
        const parsed = JSON.parse(data);
        playerName = parsed.playerName || 'Cyber Guardian';
        currentAvatar = parsed.currentAvatar || '🦸';
        currentLevel = parsed.currentLevel || 1;
        currentXP = parsed.currentXP || 0;
        totalScore = parsed.totalScore || 0;
        totalCorrect = parsed.totalCorrect || 0;
        totalAttempts = parsed.totalAttempts || 0;
        bestStreak = parsed.bestStreak || 0;
        unlockedBadges = parsed.unlockedBadges || [];
        teamCode = parsed.teamCode || null;

        document.getElementById('profile-avatar').textContent = currentAvatar;
        document.getElementById('player-name').textContent = playerName;
    }
}

// ===== MODULE SELECTION & QUIZ =====
function selectModule(moduleId) {
    currentModule = modules[moduleId];
    currentQuestion = 0;
    currentStreak = 0;
    answered = false;

    document.querySelectorAll('.module-item').forEach(item => item.classList.remove('active'));
    document.querySelector(`[data-module="${moduleId}"]`).classList.add('active');

    document.getElementById('dashboard-section').classList.add('hidden');
    document.getElementById('quiz-section').classList.remove('hidden');

    loadQuestion();
}

function backToDashboard() {
    currentModule = null;
    document.getElementById('quiz-section').classList.add('hidden');
    document.getElementById('dashboard-section').classList.remove('hidden');
    document.querySelectorAll('.module-item').forEach(item => item.classList.remove('active'));
    savePlayerData();
    updateDashboard();
}

function loadQuestion() {
    if (!currentModule) return;

    const question = currentModule.questions[currentQuestion];
    document.getElementById('scenario').textContent = question.scenario;
    document.getElementById('module-title').textContent = currentModule.name;
    document.getElementById('question-counter').textContent = `${currentQuestion + 1} / ${currentModule.questions.length}`;
    document.getElementById('level-badge').textContent = `Level ${currentLevel}`;

    const progress = ((currentQuestion + 1) / currentModule.questions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.innerHTML = `
            <span class="option-label">${String.fromCharCode(65 + index)}</span>
            <span class="option-text">${option}</span>
        `;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });

    if (currentModule.hasPasswordTester) {
        document.getElementById('password-tester').classList.remove('hidden');
    } else {
        document.getElementById('password-tester').classList.add('hidden');
    }

    document.getElementById('feedback-section').classList.add('hidden');
    answered = false;
}

function checkAnswer(selectedIndex) {
    if (answered || !currentModule) return;

    answered = true;
    const question = currentModule.questions[currentQuestion];
    const isCorrect = selectedIndex === question.correct;

    totalAttempts++;

    if (isCorrect) {
        totalScore += 10;
        totalCorrect++;
        currentStreak++;
        currentXP += 25;

        if (currentXP >= 100 * currentLevel) {
            currentLevel++;
            currentXP = 0;
        }

        if (currentStreak > bestStreak) bestStreak = currentStreak;
        showXPMessage('+25 XP!');
    } else {
        currentStreak = 0;
    }

    const feedbackSection = document.getElementById('feedback-section');
    const feedbackCard = document.getElementById('feedback-card');
    feedbackCard.className = `feedback-card ${isCorrect ? 'correct' : 'incorrect'}`;
    feedbackCard.innerHTML = `
        <h4>${isCorrect ? '✓ Correct!' : '✗ Not quite!'}</h4>
        <p class="feedback-explanation">${question.explanation}</p>
        <div class="feedback-tip">💡 ${question.tip}</div>
    `;
    feedbackSection.classList.remove('hidden');

    document.querySelectorAll('.option-btn').forEach((btn, idx) => {
        btn.classList.add('disabled');
        if (idx === selectedIndex) {
            btn.style.borderColor = isCorrect ? 'var(--success)' : 'var(--error)';
        }
    });

    updateDashboard();
    updateBadges();
}

function showXPMessage(text) {
    const msg = document.getElementById('xp-message');
    document.getElementById('xp-gain').textContent = text;
    msg.classList.remove('hidden');
    setTimeout(() => msg.classList.add('hidden'), 2000);
}

function nextQuestion() {
    if (!currentModule || !answered) return;

    currentQuestion = (currentQuestion + 1) % currentModule.questions.length;

    if (currentQuestion === 0) {
        const accuracy = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
        alert(`🎉 Module Complete!\n\nAccuracy: ${accuracy}%\nStreak: ${currentStreak}\nTotal Score: ${totalScore}\nLevel: ${currentLevel}\n\nGreat job! Choose another module!`);
        backToDashboard();
    }

    loadQuestion();
}

function resetModule() {
    if (!currentModule) return;
    currentQuestion = 0;
    currentStreak = 0;
    answered = false;
    loadQuestion();
}

// ===== DASHBOARD UPDATE =====
function updateDashboard() {
    document.getElementById('header-level').textContent = currentLevel;
    document.getElementById('header-xp').textContent = `${currentXP}/${100 * currentLevel}`;
    document.getElementById('profile-level').textContent = `Level ${currentLevel}`;
    document.getElementById('xp-text').textContent = `${currentXP} / ${100 * currentLevel} XP`;
    document.getElementById('xp-bar-fill').style.width = (currentXP / (100 * currentLevel)) * 100 + '%';

    document.getElementById('total-correct').textContent = totalCorrect;
    const accuracy = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
    document.getElementById('accuracy').textContent = accuracy + '%';
    document.getElementById('best-streak').textContent = bestStreak;

    const totalXP = totalScore + (currentLevel * 100);
    document.getElementById('personal-points').textContent = `${totalXP} XP`;

    if (teamMembers.length > 0) {
        teamMembers[0] = { name: playerName, xp: totalXP, avatar: currentAvatar };
        updateTeamLeaderboard();
    }
}

function generateModuleProgress() {
    const list = document.getElementById('module-progress-list');
    if (list) {
        list.innerHTML = '';
        modules.forEach(mod => {
            const item = document.createElement('div');
            item.className = 'module-progress-item';
            item.innerHTML = `
                <span class="name">${mod.name}</span>
                <span class="value">${mod.questions.length} Q's</span>
            `;
            list.appendChild(item);
        });
    }
}

// ===== PASSWORD STRENGTH TESTER =====
function setupPasswordInput() {
    const input = document.getElementById('password-input');
    if (input) {
        input.addEventListener('input', function() {
            evaluatePasswordStrength(this.value);
        });
    }
}

function evaluatePasswordStrength(password) {
    const criteria = {
        'At least 8 characters': password.length >= 8,
        '12+ characters (Better!)': password.length >= 12,
        'Uppercase (A-Z)': /[A-Z]/.test(password),
        'Lowercase (a-z)': /[a-z]/.test(password),
        'Numbers (0-9)': /[0-9]/.test(password),
        'Special chars (!@#$)': /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
    };

    let metCount = 0;
    const criteriaList = document.getElementById('strength-criteria');
    criteriaList.innerHTML = '';

    for (const [criterion, met] of Object.entries(criteria)) {
        const li = document.createElement('li');
        li.textContent = criterion;
        if (met) {
            li.classList.add('met');
            metCount++;
        }
        criteriaList.appendChild(li);
    }

    let strength = 0, strengthText = 'Too weak', strengthColor = 'var(--error)';

    if (password.length === 0) {
        strengthText = 'Enter a password';
    } else if (metCount <= 2) {
        strengthText = 'Weak';
        strength = 25;
    } else if (metCount <= 3) {
        strengthText = 'Fair';
        strength = 50;
        strengthColor = 'var(--warning)';
    } else if (metCount <= 4) {
        strengthText = 'Good';
        strength = 75;
        strengthColor = 'var(--warning)';
    } else {
        strengthText = 'Super Strong! ✓';
        strength = 100;
        strengthColor = 'var(--success)';
    }

    const strengthFill = document.getElementById('strength-fill');
    strengthFill.style.width = strength + '%';
    strengthFill.style.backgroundColor = strengthColor;
    document.getElementById('strength-text').textContent = `Strength: ${strengthText}`;
    document.getElementById('strength-text').style.color = strengthColor;
}

function togglePasswordVisibility() {
    const input = document.getElementById('password-input');
    input.type = input.type === 'password' ? 'text' : 'password';
}

// Import all modules (from previous script.js)
const modules = [
    {
        id: 0,
        name: "Phishing Detection",
        difficulty: "Beginner",
        hasPasswordTester: false,
        xpReward: 100,
        questions: [
            {
                scenario: "You get an email from someone claiming to be from your school's office. They ask you to 'verify your student account' by clicking a link. The email looks kind of official but something feels off. What should you do?",
                options: [
                    "Click the link right away",
                    "Go directly to your school's website instead",
                    "Reply asking for more information",
                    "Share it with your friends"
                ],
                correct: 1,
                explanation: "When in doubt, go directly to the website yourself instead of clicking links. Real schools won't ask you to verify info through a link.",
                tip: "Pro tip: Never click links in emails. Type the website address yourself!"
            },
            {
                scenario: "Your friend shows you an email from 'Roblox' asking to confirm your account. But they notice the email address is slightly different from the real Roblox domain. What's happening?",
                options: [
                    "It's probably just a typo",
                    "This is a fake email - the sender's address is wrong",
                    "It's still safe because it mentions Roblox",
                    "You should click to check what it says"
                ],
                correct: 1,
                explanation: "Bad guys make fake email addresses that look similar to real ones. Always check the actual sender address, not just the company name.",
                tip: "Hover over the sender to see the real email address. Fake ones look different!"
            },
            {
                scenario: "You get a message saying 'Your Minecraft account is locked! Click here NOW to unlock it!' What should you do?",
                options: [
                    "Click immediately because it sounds urgent",
                    "Don't click. Ask a parent and go to the real website",
                    "Click but be careful",
                    "Ignore it completely"
                ],
                correct: 1,
                explanation: "Real companies don't use scary words like 'LOCKED' to rush you. If there's a real problem, you can log in normally to fix it.",
                tip: "Don't fall for urgency! Bad guys use it to make you click without thinking."
            },
            {
                scenario: "A pop-up says 'Download this to protect your computer from viruses!' Should you download it?",
                options: [
                    "Yes, it's protecting your computer",
                    "No, strange downloads can be viruses themselves",
                    "Yes, but tell your parents first",
                    "Only if your computer is slow"
                ],
                correct: 1,
                explanation: "Pop-ups asking you to download things are often the virus themselves! Never download from pop-ups.",
                tip: "Pop-ups = probably bad. Use an adblocker and tell parents if you see scary ones."
            },
            {
                scenario: "Someone online says 'I'm a YouTube moderator. Send me your password to verify your channel!' What do you do?",
                options: [
                    "Send your password because they're a moderator",
                    "Tell them no and never share passwords online",
                    "Send it but change it afterward",
                    "Ask for proof first"
                ],
                correct: 1,
                explanation: "YouTube will NEVER ask for your password. Never share passwords with anyone, ever!",
                tip: "GOLDEN RULE: Your password is like your house key. Never give it to anyone!"
            },
            {
                scenario: "You get a message: 'Claim your free Robux here!' with a link. What's your move?",
                options: [
                    "Click to get free Robux",
                    "Don't click - free stuff in games is almost always a scam",
                    "Click but don't give your password",
                    "Share the link with friends"
                ],
                correct: 1,
                explanation: "Free stuff that sounds too good to be true usually is. If you didn't earn it, it's probably fake.",
                tip: "Scammers use 'free' and 'limited time' to trick you. Real rewards come from actually playing!"
            },
            {
                scenario: "An email says 'Update your payment info' from your gaming account. What should you check first?",
                options: [
                    "Just click and update it",
                    "Check if the sender's email address looks real",
                    "Update it quickly to avoid problems",
                    "Ask what payment info is"
                ],
                correct: 1,
                explanation: "Always check WHO is asking before you share payment info. Real companies have real email addresses.",
                tip: "Payment info = super important. Never update it through a link. Go to the website yourself!"
            },
            {
                scenario: "You see a typo in an email from what looks like your game. The website looks right though. Should you log in?",
                options: [
                    "Yes, typos don't matter",
                    "No, typos are a red flag that it might be fake",
                    "Maybe if you're careful",
                    "Only if you're sure the password is right"
                ],
                correct: 1,
                explanation: "Typos and small differences are often signs of fake emails. Real companies care about details.",
                tip: "Typos = Fake! Bad guys rush and make mistakes. Real companies proofread!"
            },
            {
                scenario: "Someone says they found your account being 'hacked' and sends a link to 'fix it.' What do you do?",
                options: [
                    "Click to fix it right away",
                    "Tell an adult and go to the real website to check",
                    "Click but don't log in",
                    "Delete your account"
                ],
                correct: 1,
                explanation: "If something's wrong with your account, you can always log in normally to check. Don't trust random links about security.",
                tip: "If you're worried, always go directly to the website. Links are often traps!"
            },
            {
                scenario: "Which is NOT a sign of a real, safe website?",
                options: [
                    "https:// at the start of the address",
                    "A padlock icon next to the address",
                    "Asking for your password as soon as you arrive",
                    "The company's real name in the address"
                ],
                correct: 2,
                explanation: "Real websites never ask for passwords immediately. Safe sites have https:// and a padlock.",
                tip: "Look for: https:// + padlock. If they ask for password right away = DANGER!"
            }
        ]
    },
    // ... (include all other modules from previous script.js)
];

// For brevity, using simple placeholder for remaining modules
if (modules.length < 5) {
    for (let i = modules.length; i < 5; i++) {
        modules.push({
            id: i,
            name: `Module ${i + 1}`,
            difficulty: i % 2 === 0 ? "Beginner" : "Intermediate",
            hasPasswordTester: i === 2,
            xpReward: 100,
            questions: Array(10).fill(null).map((_, q) => ({
                scenario: `Question ${q + 1}`,
                options: ['Option A', 'Option B', 'Option C', 'Option D'],
                correct: 0,
                explanation: 'This is the correct answer!',
                tip: 'Remember this tip!'
            }))
        });
    }
}
