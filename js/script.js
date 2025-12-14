// Age-Appropriate Module Definitions
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
    {
        id: 1,
        name: "Social Engineering Tricks",
        difficulty: "Intermediate",
        hasPasswordTester: false,
        xpReward: 150,
        questions: [
            {
                scenario: "Someone on Discord says 'I'm hosting a free gaming tournament! Send me your username and password to join.' Should you do it?",
                options: [
                    "Yes, to enter the tournament",
                    "No way! Never share passwords, ever",
                    "Only if they seem nice",
                    "Send username but not password"
                ],
                correct: 1,
                explanation: "Real tournaments never need passwords. Passwords are ONLY between you and the game company.",
                tip: "Remember: Your password is like your house key. Only you have it!"
            },
            {
                scenario: "A 'Nintendo support' account messages you saying your Switch account is 'locked' and asks for info. What's suspicious?",
                options: [
                    "Nothing, they're official",
                    "Nintendo never asks for info in messages",
                    "It's okay because they said locked",
                    "Only if they ask for a phone number"
                ],
                correct: 1,
                explanation: "Real companies never randomly message asking for your info. That's how scammers work.",
                tip: "Real companies contact you through your account, not through chat apps!"
            },
            {
                scenario: "Someone at school says 'I hacked into the test answers! Give me money and I'll share.' What do you do?",
                options: [
                    "Give them money",
                    "Tell an adult immediately",
                    "Ask for the answers first",
                    "Ignore them"
                ],
                correct: 1,
                explanation: "This is both scamming AND cheating. Tell a trusted adult. You won't get answers and you'll lose money.",
                tip: "If something sounds illegal or wrong, tell an adult. Your instinct is probably right!"
            },
            {
                scenario: "A 'friend' on your game asks to 'borrow' valuable items for a day, promising to return them. They seem really nice. What should you do?",
                options: [
                    "Lend them - they said they'd return it",
                    "Don't lend items to anyone, even nice people",
                    "Lend just one item to test",
                    "Ask for something valuable in return"
                ],
                correct: 1,
                explanation: "Even friendly-seeming people online might disappear. In games, if you can't afford to lose it, don't lend it.",
                tip: "Golden Rule of gaming: Don't lend items you care about. You might never see them again!"
            },
            {
                scenario: "Someone says they're a 'YouTube engineer' and needs you to click a link for a 'secret feature.' What should you think?",
                options: [
                    "Wow, a secret feature!",
                    "This is probably a scam",
                    "It might be real",
                    "I should ask my friends"
                ],
                correct: 1,
                explanation: "YouTube engineers don't contact random players for secret features. This is definitely a scam.",
                tip: "'Secret features' from strangers = SCAM. Real updates come through the app!"
            },
            {
                scenario: "A nice person in chat builds friendly rapport with you, then asks 'which school do you go to?' Why is this concerning?",
                options: [
                    "It's just a friendly question",
                    "They're gathering information about you",
                    "It's fine because they're nice",
                    "I should answer if they seem real"
                ],
                correct: 1,
                explanation: "Bad people build trust first, then ask personal questions. Never share where you live, go to school, or personal details.",
                tip: "Don't share: Your real name, school, where you live, or where you play. Ever!"
            },
            {
                scenario: "Someone says 'I can get your account unbanned' if you give them admin access. This is...",
                options: [
                    "Helpful",
                    "A scam - no one can unban accounts for money",
                    "Worth trying",
                    "Probably real"
                ],
                correct: 1,
                explanation: "Real support doesn't need 'admin access' from you. This is a scammer trying to take your account.",
                tip: "Real help never needs your passwords or special access. That's how you know it's fake!"
            },
            {
                scenario: "A parent says 'I forgot my password. Can you give me yours so I can check your account?' Should you?",
                options: [
                    "Yes, they're your parent",
                    "No, never share passwords, even with parents",
                    "Only if they ask nicely",
                    "Yes but change it later"
                ],
                correct: 1,
                explanation: "Even parents should have their own login. If parents need to check something, game companies have parental controls.",
                tip: "Passwords are for you only. Talk to parents about privacy instead!"
            },
            {
                scenario: "Someone sends you a 'friend request' from a famous YouTuber you watch. What should you know?",
                options: [
                    "They want to be my friend!",
                    "Probably a fake account pretending to be them",
                    "I should accept it",
                    "This is cool!"
                ],
                correct: 1,
                explanation: "Famous people get impersonated all the time. Fake accounts use their names and pictures to scam people.",
                tip: "If a 'celebrity' messages you suddenly, it's fake. Real famous people won't randomly befriend you!"
            },
            {
                scenario: "What's the biggest clue that someone online might be trying to trick you?",
                options: [
                    "They're being very nice and helpful",
                    "They ask for personal info or passwords",
                    "They play the same games as you",
                    "They have a lot of followers"
                ],
                correct: 1,
                explanation: "If anyone asks for passwords, personal info, or money = RED FLAG. That's the main sign of a scammer.",
                tip: "Any request for passwords, personal info, or money = SCAM. Trust your gut!"
            }
        ]
    },
    {
        id: 2,
        name: "Password Security",
        difficulty: "Beginner",
        hasPasswordTester: true,
        xpReward: 100,
        questions: [
            {
                scenario: "You're making a new gaming account. Which password is BEST?",
                options: [
                    "Password123",
                    "Your birthdate",
                    "MyPur9le*Cat2024!",
                    "admin"
                ],
                correct: 2,
                explanation: "Strong passwords mix upper and lowercase letters, numbers, and special characters. Avoid birthdays and common words!",
                tip: "Strong password = Mix EVERYTHING! Upper, lower, numbers, symbols. Make it weird!"
            },
            {
                scenario: "Should you use the SAME password for all your accounts?",
                options: [
                    "Yes, it's easier to remember",
                    "No way! Each account needs a different password",
                    "Yes, as long as it's strong",
                    "Only for unimportant accounts"
                ],
                correct: 1,
                explanation: "If one account gets hacked, they can access ALL your accounts if passwords are the same. Use different ones!",
                tip: "Different passwords = different keys to different locks. Way safer!"
            },
            {
                scenario: "A 'help' pop-up asks if you want to save your password in the browser. Should you say yes?",
                options: [
                    "Yes, that's what it's for",
                    "No, this makes it less safe",
                    "Only for fun games",
                    "Yes, it's convenient"
                ],
                correct: 1,
                explanation: "Saving passwords in browsers is risky. Anyone using your computer could access your accounts.",
                tip: "Browser remembers = anyone on your computer can log in. Use a password manager instead!"
            },
            {
                scenario: "You get a 'verify your account' email from a game you play. What's the safest way to check?",
                options: [
                    "Click the link in the email",
                    "Type the website address yourself and log in",
                    "Reply to the email",
                    "Call customer service"
                ],
                correct: 1,
                explanation: "Never click links in emails. Always go directly by typing the address to stay safe.",
                tip: "Suspicious email? Type the address yourself. Don't click links!"
            },
            {
                scenario: "Should you ever tell your password to...",
                options: [
                    "Your parents",
                    "Your best friend",
                    "Customer support",
                    "Nobody - ever!"
                ],
                correct: 3,
                explanation: "Your password is YOURS only. Real support won't ask for it. Parents have parental controls instead.",
                tip: "GOLDEN RULE: Never tell ANYONE your password. Not even best friends or parents!"
            },
            {
                scenario: "What should you do if you think your password got hacked?",
                options: [
                    "Do nothing and hope they don't use it",
                    "Change it immediately and tell an adult",
                    "Use it one more time to check",
                    "Tell your friends"
                ],
                correct: 1,
                explanation: "If hacked, change it right away! Also tell a parent so they can help if something's wrong.",
                tip: "Hacked password? Change it NOW and tell an adult. Don't wait!"
            },
            {
                scenario: "What makes a good password?",
                options: [
                    "Long and just lowercase letters",
                    "Your favorite game character name",
                    "Long with mixed uppercase, lowercase, numbers, and symbols",
                    "Easy to remember"
                ],
                correct: 2,
                explanation: "Good passwords are long AND complicated. Mix everything and make them unique!",
                tip: "Think: LONG + MIXED + WEIRD = Safe! The weirder, the safer!"
            },
            {
                scenario: "Where should you write down your passwords?",
                options: [
                    "On a sticky note on your monitor",
                    "In a notebook in your backpack",
                    "Memorize them or use a password manager app",
                    "Text them to yourself"
                ],
                correct: 2,
                explanation: "Write them nowhere! Memorize important ones or use a secure password manager app your parents approve.",
                tip: "Password manager = safer than writing them down. Ask parents about it!"
            },
            {
                scenario: "How often should you change your passwords?",
                options: [
                    "Every day",
                    "Every week",
                    "Only if you think they're hacked",
                    "Never"
                ],
                correct: 2,
                explanation: "You only need to change passwords if something feels wrong. Keep them strong and unique instead!",
                tip: "Strong + unique passwords = safe. Change them only if something seems wrong!"
            },
            {
                scenario: "What's a 'passphrase' and is it better than a regular password?",
                options: [
                    "A phrase instead of a word - yes it's better!",
                    "The same as a password",
                    "Only for adults",
                    "Not safe"
                ],
                correct: 0,
                explanation: "A passphrase is multiple words mixed with numbers/symbols like 'Pizza42*BlueDragon!'. They're actually really safe and easier to remember!",
                tip: "Try a passphrase: 'PizzaDog42*Magic!' - weird, long, and you remember it!"
            }
        ]
    },
    {
        id: 3,
        name: "Malware & Safe Downloads",
        difficulty: "Intermediate",
        hasPasswordTester: false,
        xpReward: 150,
        questions: [
            {
                scenario: "You find a cool new game download on a random website. What should you do?",
                options: [
                    "Download it right away",
                    "Ask a parent and only use official stores like Steam",
                    "Download but scan with antivirus first",
                    "Download and run it"
                ],
                correct: 1,
                explanation: "Random websites often have viruses. Use official game stores like Steam, Epic Games, or your console's store.",
                tip: "Unknown website = Risky! Only download from official stores. Ask parents first!"
            },
            {
                scenario: "You get a pop-up saying 'Your computer has 237 viruses! Click here to clean!' Should you click?",
                options: [
                    "Yes, fix the viruses!",
                    "No! That pop-up IS the virus",
                    "Click but don't download",
                    "Maybe if you're worried"
                ],
                correct: 1,
                explanation: "Those scary pop-ups are scams. The click itself or the download would give you malware!",
                tip: "Scary pop-up? That's the SCAM. Close it immediately. Don't click!"
            },
            {
                scenario: "A website says 'Download this mod for free V-bucks!' What's wrong?",
                options: [
                    "Nothing, free stuff is great",
                    "Mods and free in-game money are usually malware",
                    "It might be real if the website looks professional",
                    "I should try it"
                ],
                correct: 1,
                explanation: "Promises of free in-game money, cheats, or hacks are almost always viruses or scams.",
                tip: "Free V-bucks/Robux from strangers = MALWARE. Don't download!"
            },
            {
                scenario: "Your computer suddenly becomes very slow. What COULD be happening?",
                options: [
                    "It needs to be replaced",
                    "It might have malware or too many programs",
                    "Windows is updating",
                    "Normal computer stuff"
                ],
                correct: 1,
                explanation: "Slow computers can mean malware, too many programs, or viruses. Tell an adult if it happens!",
                tip: "Super slow = Might have a virus! Tell an adult and don't ignore it!"
            },
            {
                scenario: "Your friend sends you a file named 'Game.exe' saying 'Cool game!' Should you run it?",
                options: [
                    "Yes, trust your friend",
                    "No, never run .exe files from friends online",
                    "Run it in a special mode",
                    "Check the file size first"
                ],
                correct: 1,
                explanation: ".exe files can contain anything. Even friends' accounts can be hacked. Never run random .exe files.",
                tip: "Unknown .exe = DANGER. Even if your friend sent it, their account might be hacked!"
            },
            {
                scenario: "What's a safe way to get games and programs?",
                options: [
                    "Download from anywhere",
                    "Only from official stores and trusted sources",
                    "Download from YouTube",
                    "Download from any gaming website"
                ],
                correct: 1,
                explanation: "Stick to official sources: Steam, Epic Games Store, Console Stores, Microsoft Store, official company websites.",
                tip: "Safe sources: Official game stores only! Ask parents for Steam or Epic Games if unsure!"
            },
            {
                scenario: "A website claims to 'mod' your game to add features. Is this safe?",
                options: [
                    "Yes, mods are free enhancements",
                    "No, third-party mods often have malware",
                    "Only if they have good reviews",
                    "Yes, if they're popular"
                ],
                correct: 1,
                explanation: "While some mods are real, many have viruses. Stick to official games unless you're older and know what you're doing.",
                tip: "Mods = risky! Most games don't need mods. Official games are safest!"
            },
            {
                scenario: "You see a message saying 'Open this .zip file to claim your prize!' What should you do?",
                options: [
                    "Open it to see what's inside",
                    "Don't open it - it's probably malware",
                    "Open it but don't extract it",
                    "Ask a friend"
                ],
                correct: 1,
                explanation: "Unknown .zip files can contain viruses. Prize claims from strangers are always scams.",
                tip: "Unknown .zip file? DELETE IT. Especially with prizes - those are always scams!"
            },
            {
                scenario: "What should you do if you accidentally downloaded something suspicious?",
                options: [
                    "Run it to see what it is",
                    "Delete it and tell an adult immediately",
                    "Keep it but don't open it",
                    "Upload it somewhere else"
                ],
                correct: 1,
                explanation: "Delete suspicious downloads and tell your parents right away. They can help make sure everything's okay.",
                tip: "Suspicious download? DELETE and TELL AN ADULT. Better safe than sorry!"
            },
            {
                scenario: "What's the BEST protection against malware?",
                options: [
                    "Download from official sources only",
                    "Antivirus software",
                    "Both - official sources AND antivirus",
                    "Nothing works"
                ],
                correct: 2,
                explanation: "Best protection: Download from official sources AND have antivirus software. Two protections are better than one!",
                tip: "Double protection = Super safe! Official sources + antivirus = Your best defense!"
            }
        ]
    },
    {
        id: 4,
        name: "Safe Websites & Online",
        difficulty: "Beginner",
        hasPasswordTester: false,
        xpReward: 100,
        questions: [
            {
                scenario: "Before you enter your password on a website, what should you check?",
                options: [
                    "Nothing, just log in",
                    "'https://' at the start and a padlock icon",
                    "The website looks nice",
                    "How many people use it"
                ],
                correct: 1,
                explanation: "Always look for 'https://' and a padlock. This means the website is secure and safe.",
                tip: "Check for: https:// + 🔒 padlock. If missing = DON'T LOG IN!"
            },
            {
                scenario: "What does 'https' mean and why does it matter?",
                options: [
                    "It's just a longer 'http'",
                    "It means the website is secure and encrypted",
                    "It's not important",
                    "It makes things faster"
                ],
                correct: 1,
                explanation: "'https' means your info is encrypted and safe. 'http' means it's not protected. Always use https!",
                tip: "https = Safe. http (no s) = UNSAFE. Always check for the 's'!"
            },
            {
                scenario: "You're on a website shopping for gaming gear. What's a RED FLAG?",
                options: [
                    "The site looks a little old",
                    "Asking for your social security number for a toy purchase",
                    "Only taking one type of payment",
                    "No customer reviews"
                ],
                correct: 1,
                explanation: "Real stores never ask for social security numbers for regular purchases. That's a MAJOR red flag!",
                tip: "Shopping site asking for SSN? SCAM! Real stores only need: Name, address, payment."
            },
            {
                scenario: "A website is asking for your mom's maiden name and birth date for 'verification.' What should you do?",
                options: [
                    "Give it - they asked for it",
                    "Tell an adult immediately",
                    "Only give the date",
                    "Make something up"
                ],
                correct: 1,
                explanation: "Real companies don't ask questions they should know. These are 'security questions' and should NEVER be shared randomly.",
                tip: "Questions about your parents/family = Red flag! Tell an adult!"
            },
            {
                scenario: "You see a typo in a website address. Example: 'Rblox.com' instead of 'Roblox.com.' What does this mean?",
                options: [
                    "Just a typo, it's fine",
                    "Probably a FAKE website copying the real one",
                    "They changed their name",
                    "It's still safe"
                ],
                correct: 1,
                explanation: "Fake websites use similar-looking addresses to trick you. Always type carefully or use bookmarks!",
                tip: "Wrong spelling = Fake site! Check the address carefully or use bookmarks!"
            },
            {
                scenario: "A website is showing you a certificate warning. What should you do?",
                options: [
                    "Click 'continue anyway'",
                    "Leave the website immediately",
                    "It's probably fine",
                    "Check the site later"
                ],
                correct: 1,
                explanation: "Certificate warnings mean something is seriously wrong with the website's security. Leave immediately!",
                tip: "Certificate warning = GET OUT! That's a security problem. Don't click through!"
            },
            {
                scenario: "Before using a website with your personal info, what should you check?",
                options: [
                    "If your friends use it",
                    "If it has a privacy policy you can read",
                    "How pretty it looks",
                    "Nothing, just use it"
                ],
                correct: 1,
                explanation: "Real websites tell you how they use your info. Look for a 'Privacy Policy' at the bottom of the page.",
                tip: "Real sites have a Privacy Policy showing how they use your info. Check it!"
            },
            {
                scenario: "What should you NEVER enter on a website unless it's SUPER secure?",
                options: [
                    "Your username",
                    "Your favorite color",
                    "Your social security number or full credit card",
                    "Your age"
                ],
                correct: 2,
                explanation: "Never enter SSN or full credit card numbers on normal websites. Only use secure sites for important purchases.",
                tip: "SSN + full credit card = NEVER share online. Parents need to do this stuff!"
            },
            {
                scenario: "What does a 'phishing' website do?",
                options: [
                    "It's about fishing",
                    "It looks real but tricks you into sharing info",
                    "It's just slow",
                    "It has ads"
                ],
                correct: 1,
                explanation: "Phishing websites copy real ones to trick you into sharing passwords or personal info.",
                tip: "Phishing = Fake site that looks real. They want your info!"
            },
            {
                scenario: "What's the safest shopping option when buying something online?",
                options: [
                    "Any website that looks official",
                    "Shops in official app stores or verified websites",
                    "Anywhere that has a discount",
                    "Websites your friends recommend"
                ],
                correct: 1,
                explanation: "Stick to official stores, verified websites, and apps in official app stores. They have real protection!",
                tip: "Safest shopping: Official stores + App stores + verified sites. Ask parents to help!"
            }
        ]
    }
];

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

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    setupPasswordInput();
    updateDashboard();
    generateModuleProgress();
});

// Select Module
function selectModule(moduleId) {
    currentModule = modules[moduleId];
    currentQuestion = 0;
    currentStreak = 0;
    answered = false;
    
    // Update active state
    document.querySelectorAll('.module-item').forEach(item => item.classList.remove('active'));
    document.querySelector(`[data-module="${moduleId}"]`).classList.add('active');
    
    // Show quiz
    document.getElementById('dashboard-section').classList.add('hidden');
    document.getElementById('quiz-section').classList.remove('hidden');
    
    loadQuestion();
}

// Back to Dashboard
function backToDashboard() {
    currentModule = null;
    document.getElementById('quiz-section').classList.add('hidden');
    document.getElementById('dashboard-section').classList.remove('hidden');
    document.querySelectorAll('.module-item').forEach(item => item.classList.remove('active'));
    updateDashboard();
}

// Load Question
function loadQuestion() {
    if (!currentModule) return;
    
    const question = currentModule.questions[currentQuestion];
    document.getElementById('scenario').textContent = question.scenario;
    document.getElementById('module-title').textContent = currentModule.name;
    document.getElementById('question-counter').textContent = `${currentQuestion + 1} / ${currentModule.questions.length}`;
    document.getElementById('level-badge').textContent = `Level ${currentLevel}`;
    
    const progress = ((currentQuestion + 1) / currentModule.questions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    
    // Generate options
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
    
    // Show password tester if needed
    if (currentModule.hasPasswordTester) {
        document.getElementById('password-tester').classList.remove('hidden');
    } else {
        document.getElementById('password-tester').classList.add('hidden');
    }
    
    document.getElementById('feedback-section').classList.add('hidden');
    answered = false;
}

// Check Answer
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
        
        // Level up
        if (currentXP >= 100 * currentLevel) {
            currentLevel++;
            currentXP = 0;
        }
        
        if (currentStreak > bestStreak) bestStreak = currentStreak;
        
        // Show XP message
        showXPMessage('+25 XP!');
    } else {
        currentStreak = 0;
    }
    
    // Show feedback
    const feedbackSection = document.getElementById('feedback-section');
    const feedbackCard = document.getElementById('feedback-card');
    feedbackCard.className = `feedback-card ${isCorrect ? 'correct' : 'incorrect'}`;
    feedbackCard.innerHTML = `
        <h4>${isCorrect ? '✓ Correct!' : '✗ Not quite!'}</h4>
        <p class="feedback-explanation">${question.explanation}</p>
        <div class="feedback-tip">💡 ${question.tip}</div>
    `;
    feedbackSection.classList.remove('hidden');
    
    // Disable buttons
    document.querySelectorAll('.option-btn').forEach((btn, idx) => {
        btn.classList.add('disabled');
        if (idx === selectedIndex) {
            btn.style.borderColor = isCorrect ? 'var(--success)' : 'var(--error)';
        }
    });
    
    updateDashboard();
}

// Show XP Message
function showXPMessage(text) {
    const msg = document.getElementById('xp-message');
    document.getElementById('xp-gain').textContent = text;
    msg.classList.remove('hidden');
    setTimeout(() => msg.classList.add('hidden'), 2000);
}

// Next Question
function nextQuestion() {
    if (!currentModule || !answered) return;
    
    currentQuestion = (currentQuestion + 1) % currentModule.questions.length;
    
    if (currentQuestion === 0) {
        const accuracy = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
        const xpEarned = currentModule.xpReward;
        currentXP += xpEarned;
        
        // Level up
        while (currentXP >= 100 * currentLevel) {
            currentLevel++;
            currentXP -= 100 * (currentLevel - 1);
        }
        
        alert(`🎉 Module Complete!\n\nAccuracy: ${accuracy}%\nStreak: ${currentStreak}\nTotal Score: ${totalScore}\nLevel: ${currentLevel}\n\nGreat job! Choose another module!`);
        backToDashboard();
    }
    
    loadQuestion();
}

// Reset Module
function resetModule() {
    if (!currentModule) return;
    currentQuestion = 0;
    currentStreak = 0;
    answered = false;
    loadQuestion();
}

// Update Dashboard
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
    
    document.getElementById('leaderboard-points').textContent = `${totalScore + (currentLevel * 100)} XP`;
}

// Generate Module Progress
function generateModuleProgress() {
    const list = document.getElementById('module-progress-list');
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

// Password Strength Tester
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
