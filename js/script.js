// Module Definitions
const modules = [
    {
        id: 0,
        name: "Phishing Detection",
        description: "Learn to identify fraudulent emails and phishing attempts",
        difficulty: "Beginner",
        hasPasswordTester: false,
        questions: [
            {
                scenario: "You receive an email from 'noreply@applesupport.com' asking you to verify your Apple ID immediately. The email mentions suspicious activity on your account and includes a link to update your password. The email seems urgent but slightly off. What should you do?",
                options: [
                    "Click the link and update your password immediately",
                    "Go directly to the official Apple website and log in through your browser",
                    "Reply to the email asking for more information",
                    "Forward the email to another contact for verification"
                ],
                correct: 1,
                explanation: "This is a classic phishing attempt. Always navigate directly to the official website by typing the URL in your browser, never click links in emails requesting password changes or sensitive information.",
                tip: "Legitimate companies never ask you to verify credentials via email links. Always navigate directly to official websites."
            },
            {
                scenario: "You get an email from 'paypa1.com' (with number 1 instead of letter l) asking you to confirm your account details. What's the red flag?",
                options: [
                    "The sender has too many characters in their address",
                    "The domain uses a similar but slightly different spelling - this is a domain spoofing attack",
                    "It's asking for account details - this is normal for PayPal",
                    "The email was sent at an unusual time"
                ],
                correct: 1,
                explanation: "Domain spoofing uses similar-looking domains (paypa1.com vs paypal.com) to trick users. Always check email addresses carefully - legitimate companies won't ask you to verify credentials via email.",
                tip: "Hover over email addresses to see the real sender. Phishers often use look-alike domains."
            },
            {
                scenario: "An email claims your bank account will be closed unless you click a link to verify within 24 hours. What type of attack is this?",
                options: [
                    "Legitimate bank communication",
                    "Phishing using urgency and fear tactics",
                    "A helpful reminder from your bank",
                    "Social media spam"
                ],
                correct: 1,
                explanation: "Banks never create artificial urgency or threaten account closure via email. This is a classic phishing tactic using urgency and fear to bypass your critical thinking.",
                tip: "Be suspicious of emails with artificial urgency or threats. Banks always let you contact them directly."
            },
            {
                scenario: "You receive an email with a zipped attachment claiming to be your tax documents. The file is from an unknown sender with poor grammar in the email. Should you open it?",
                options: [
                    "Yes, it might be important documents",
                    "No, unexpected attachments from unknown senders can contain malware",
                    "Yes, but scan it with antivirus first",
                    "Maybe, it depends on the file extension"
                ],
                correct: 1,
                explanation: "Never open unexpected attachments from unknown senders. Phishing emails often contain malicious attachments. Poor grammar is another red flag that indicates a non-legitimate email.",
                tip: "Attachments from unknown senders are a major security risk. When in doubt, ask the sender directly."
            },
            {
                scenario: "An email from your company's 'HR Department' (sender: hr@companysecurity.net) asks you to update your direct deposit information by clicking a link. Your actual company domain is company.com. What do you do?",
                options: [
                    "Click the link - it's from HR",
                    "Call your HR department at their main number to verify before taking action",
                    "Email HR asking for confirmation",
                    "Ignore the email completely"
                ],
                correct: 1,
                explanation: "Notice the different domain (companysecurity.net vs company.com). Always verify unusual requests by contacting the sender directly through official channels. Never use contact info from the suspicious email.",
                tip: "Always verify suspicious emails by calling the company directly using the main phone number."
            },
            {
                scenario: "You receive an email saying you've won a prize you never entered to win. What should you suspect?",
                options: [
                    "You got lucky!",
                    "It's a phishing attack - you can't win what you didn't enter",
                    "It's probably a scam, but the risk is low",
                    "You should check the email to see if it's legitimate"
                ],
                correct: 1,
                explanation: "'You've won!' emails are classic phishing attempts. If you didn't enter a contest, you can't win. These emails trick you into clicking malicious links or downloading malware.",
                tip: "If you didn't enter, you didn't win. Delete unsolicited prize notifications immediately."
            },
            {
                scenario: "An email contains links with text like 'https://secure-paypal-verify.com' but the actual link destination (shown on hover) is 'http://phishingsite.ru'. What's happening?",
                options: [
                    "It's a legitimate site with a long URL",
                    "The email has a typo in the link",
                    "This is a phishing attack using link disguising",
                    "It's a temporary redirect, perfectly safe"
                ],
                correct: 2,
                explanation: "Link spoofing displays one URL as text while directing to a different malicious URL. Always hover over links to see the actual destination before clicking.",
                tip: "Before clicking any link, hover over it to see where it actually goes. Trust the destination, not the display text."
            },
            {
                scenario: "Your manager sends an email requesting your login credentials to troubleshoot an issue. What's the safest response?",
                options: [
                    "Send the credentials immediately",
                    "Verify by calling your manager directly - legitimate IT never asks for passwords via email",
                    "Send the password but ask them to change it afterward",
                    "Use the forgot password feature instead"
                ],
                correct: 1,
                explanation: "Legitimate IT/managers never ask for passwords via email. This is a major red flag. Always verify unusual requests through a secondary communication channel.",
                tip: "RULE: No legitimate IT person will ever ask for your password via email. Always verify first."
            },
            {
                scenario: "An email has professional formatting, correct company logo, and legitimate-looking signature, but still feels slightly off. What should you do?",
                options: [
                    "Trust it because it looks professional",
                    "Trust but verify - check sender address carefully and verify through another channel",
                    "Assume it's legitimate if the logo matches",
                    "Formatting doesn't matter, just check the content"
                ],
                correct: 1,
                explanation: "Modern phishing attacks use professional formatting and logos. Always verify the actual sender address and contact the company directly if something feels off.",
                tip: "Professional appearance is easy to fake. Always verify the sender address, not just the displayed name."
            },
            {
                scenario: "An email from 'Amazon' says your account is locked and includes a button to 'Unlock Account Immediately'. What's wrong?",
                options: [
                    "Amazon uses these urgent buttons in legitimate emails",
                    "Creating urgency and prominent action buttons are phishing tactics",
                    "Nothing, you should click it right away",
                    "It's fine as long as you check your account afterward"
                ],
                correct: 1,
                explanation: "Legitimate companies avoid artificial urgency and prominent action buttons in security emails. These tactics bypass critical thinking and encourage immediate action without thought.",
                tip: "Legitimate companies don't use urgent buttons for security issues. They direct you to navigate to their website yourself."
            }
        ]
    },
    {
        id: 1,
        name: "Social Engineering",
        description: "Recognize manipulation tactics and social engineering attacks",
        difficulty: "Intermediate",
        hasPasswordTester: false,
        questions: [
            {
                scenario: "Your manager sends a request via email asking you to urgently wire $50,000 to a vendor for a project. The email comes from your manager's account but you haven't discussed this payment before. What's the safest action?",
                options: [
                    "Process the payment immediately since it's from your manager",
                    "Call your manager directly at their known number to verify the request",
                    "Email back asking for more details",
                    "Check the vendor invoice in the email"
                ],
                correct: 1,
                explanation: "This is a Business Email Compromise (BEC) attack. Always verify large financial requests through a secondary communication channel by calling the person directly at a known number.",
                tip: "Large financial requests are red flags. Always call to verify before processing money transfers."
            },
            {
                scenario: "Someone calls claiming to be from IT support and says they need to fix a critical vulnerability on your computer. They ask you to download a tool and give them remote access. What do you do?",
                options: [
                    "Download the tool immediately - it's from IT",
                    "Hang up and call IT directly using your company's main phone number",
                    "Ask for their employee ID number",
                    "Download but run it in a virtual machine first"
                ],
                correct: 1,
                explanation: "Real IT support verifies identity through company systems, not by requesting remote access via unsolicited calls. Always call your IT department directly using official company numbers.",
                tip: "Unsolicited calls requesting remote access are always suspicious. Always call IT directly."
            },
            {
                scenario: "A friendly person sends you a LinkedIn request. They have mutual connections and seem to know people in your industry. They then ask for 'advice' on a project, specifically requesting sensitive company information. What's happening?",
                options: [
                    "It's a legitimate networking opportunity",
                    "This is social engineering - they're building rapport to extract information",
                    "You should share general company info to be helpful",
                    "It's fine as long as you don't share passwords"
                ],
                correct: 1,
                explanation: "Social engineers build relationships (rapport) before requesting sensitive information. The mutual connections are part of the manipulation. Never share confidential company info with unverified sources.",
                tip: "Be cautious of new contacts who quickly become friendly and request information. Verify their identity."
            },
            {
                scenario: "You receive a call from someone claiming to be from your bank. They reference your recent transactions and ask you to verify your account number and PIN 'to prevent fraud'. What do you do?",
                options: [
                    "Provide the information since they know about your transactions",
                    "Hang up and call your bank directly using the number on your card",
                    "Ask security questions to verify them",
                    "Provide your account number but not your PIN"
                ],
                correct: 1,
                explanation: "Banks know recent transactions and use this information to build trust in social engineering attacks. Never provide sensitive info to unsolicited callers. Always initiate contact using official numbers.",
                tip: "Banks never ask for PINs or full account numbers over the phone. Always call them back using your card number."
            },
            {
                scenario: "A vendor you work with sends an email saying there's an urgent 'accounting discrepancy' and requests you update payment information at a new bank account. What should you verify?",
                options: [
                    "Just update it - they're a known vendor",
                    "Call the vendor directly at their legitimate phone number before any changes",
                    "Ask the vendor to send an official letter",
                    "Update it but flag it for later review"
                ],
                correct: 1,
                explanation: "Vendor account takeover attacks use the legitimacy of known vendors to redirect payments. Always verify account changes through independent contact information, not reply-to email addresses.",
                tip: "Always call vendors directly to verify account changes. Don't use contact info from emails."
            },
            {
                scenario: "Someone at a conference approaches you, mentions they work at your company, and starts asking about your job and access levels. They seem very friendly and knowledgeable. What's the risk?",
                options: [
                    "No risk, you're just networking",
                    "This could be social engineering - verify they actually work at your company",
                    "It's fine since you're in a public setting",
                    "Only be concerned if they ask for a password"
                ],
                correct: 1,
                explanation: "Social engineers gather information in seemingly innocent conversations. Friendly rapport-building is a tactic to extract information about systems, access, and vulnerabilities.",
                tip: "Be wary of new people asking detailed questions about your work and access. Verify their identity."
            },
            {
                scenario: "An email claims to be from the CEO demanding immediate information about a 'confidential deal'. The tone is urgent and slightly hostile. What's suspicious?",
                options: [
                    "Nothing - it's from the CEO so it must be legitimate",
                    "The urgency and tone combined with unusual requests are red flags. Verify through proper channels",
                    "Just that it's in email rather than a call",
                    "CEOs always send hostile emails when urgent"
                ],
                correct: 1,
                explanation: "'CEO fraud' uses urgency, authority, and unusual requests to bypass normal procedures. Real leadership verifies sensitive requests through established channels, not emergency emails.",
                tip: "CEOs don't email for sensitive requests without proper channels. Always verify with the CEO directly."
            },
            {
                scenario: "You find a USB drive in the office parking lot labeled 'Executive_Bonuses.xlsx'. What should you do?",
                options: [
                    "Plug it into your computer to see what's on it",
                    "Give it to your manager immediately",
                    "Turn it in to security or IT without plugging it in",
                    "Leave it where you found it"
                ],
                correct: 2,
                explanation: "USB baiting (dropping malicious USB drives) is a social engineering tactic that exploits curiosity. Never plug in unknown devices. Report to security/IT for safe handling.",
                tip: "Never plug in unknown USB drives. They often contain malware. Always report to IT."
            },
            {
                scenario: "A coworker you don't know well asks to borrow your badge to access a restricted area because theirs is broken. What do you do?",
                options: [
                    "Lend it - they're a coworker",
                    "Escort them to security to get a temporary badge - never lend your physical access",
                    "Offer to go with them and hold the badge",
                    "Ask for ID first"
                ],
                correct: 1,
                explanation: "Physical access is a security control. Social engineers use pretexts (broken badges) to gain access. Always follow official procedures for access requests.",
                tip: "Never lend your badge or access cards. Always direct people to security for proper access."
            },
            {
                scenario: "Someone calls asking for your coworker's email address, claiming they have a gift for them. What's the risk?",
                options: [
                    "It's just an email address, no harm",
                    "This information gathering can lead to targeted phishing or social engineering",
                    "You should share it since it's public information",
                    "Only risky if they also ask for a phone number"
                ],
                correct: 1,
                explanation: "Information gathering (even seemingly innocent details) helps social engineers build targeted attacks. Verify requests and use company directories rather than providing information to callers.",
                tip: "Don't provide employee information to callers. Direct them to official company directories."
            }
        ]
    },
    {
        id: 2,
        name: "Password Security",
        description: "Create and manage strong passwords for account protection",
        difficulty: "Beginner",
        hasPasswordTester: true,
        questions: [
            {
                scenario: "You create a password for a new work account. Which of these passwords would be most secure?",
                options: [
                    "Password123",
                    "Your birthdate followed by your name",
                    "M@keSecurity2024#Strong!XyZ",
                    "admin12345"
                ],
                correct: 2,
                explanation: "Strong passwords use a mix of uppercase, lowercase, numbers, and special characters, and are 12+ characters long. Avoid common words, dates, and sequential patterns.",
                tip: "Use a mix of character types (upper, lower, numbers, special) and aim for 12+ characters."
            },
            {
                scenario: "Your company uses two-factor authentication (2FA). Someone calls claiming to be IT support and asks for your 2FA code to 'troubleshoot your account'. You don't recognize the caller. What do you do?",
                options: [
                    "Provide the code - they're from IT support",
                    "Never share your 2FA code with anyone, even IT support. Hang up and call IT directly",
                    "Ask them to email you first for verification",
                    "Provide the code but change your password afterward"
                ],
                correct: 1,
                explanation: "NEVER share your 2FA codes with anyone. Legitimate IT support will never ask for authentication codes. This is a social engineering attack.",
                tip: "Your 2FA codes are like keys to your account. Never share them, ever. Hang up immediately if asked."
            },
            {
                scenario: "You receive a password reset email for an account you don't remember signing up for. What should you do?",
                options: [
                    "Ignore it completely",
                    "Click the link to set a new password",
                    "Do not click the link; this could be someone trying to take over the account. Check if you have an account",
                    "Forward it to the company's email address"
                ],
                correct: 2,
                explanation: "Unsolicited password reset emails could indicate account takeover attempts. Don't click links from unexpected emails. Log in directly to check if you have an account.",
                tip: "Never click password reset links from unexpected emails. Go directly to the website instead."
            },
            {
                scenario: "How often should you change your passwords?",
                options: [
                    "Never, you should never change passwords",
                    "Only if you suspect a compromise",
                    "Every week",
                    "Every 3-6 months for sensitive accounts, and after any suspected breach"
                ],
                correct: 3,
                explanation: "Modern security recommends changing passwords after breaches rather than on fixed schedules. Use strong, unique passwords and enable 2FA to reduce the need for frequent changes.",
                tip: "Strong passwords + 2FA > frequent password changes. Change after breaches, not on schedule."
            },
            {
                scenario: "You're on public WiFi at a coffee shop. What's the safest approach to passwords?",
                options: [
                    "It's fine to log into any account on public WiFi",
                    "Avoid logging into sensitive accounts on public WiFi without a VPN",
                    "Use shorter passwords on public WiFi to type faster",
                    "Public WiFi is secure if the network is password-protected"
                ],
                correct: 1,
                explanation: "Public WiFi is unencrypted and attackers can intercept credentials. Use a VPN for sensitive logins or wait until you're on a trusted network.",
                tip: "Always use a VPN on public WiFi, or avoid logging into sensitive accounts."
            },
            {
                scenario: "Should you use the same password across multiple accounts?",
                options: [
                    "Yes, it's easier to remember",
                    "No, use unique passwords for each account - one breach compromises all accounts",
                    "Yes, as long as it's a strong password",
                    "Only for non-important accounts"
                ],
                correct: 1,
                explanation: "Reusing passwords means one compromised site gives attackers access to all your accounts. Use unique passwords for each account, especially email and financial accounts.",
                tip: "One password breach = all your accounts compromised. Always use unique passwords."
            },
            {
                scenario: "Your password manager is asking for your master password. What should you do?",
                options: [
                    "Never use a master password - it defeats the purpose",
                    "Use a simple master password so you remember it",
                    "Enter your master password - this is a legitimate security measure",
                    "Share it with someone in case you forget"
                ],
                correct: 2,
                explanation: "A master password is essential for password managers. It should be very strong since it protects all your passwords. Never share it with anyone.",
                tip: "Your master password is crucial. Make it VERY strong and never share it with anyone."
            },
            {
                scenario: "You notice someone trying to log into your email account (notification of unusual login location). What's the first step?",
                options: [
                    "Change your password immediately and enable 2FA if not active",
                    "Change your password",
                    "Wait and see if there are more attempts",
                    "Assume it's a false alarm"
                ],
                correct: 0,
                explanation: "Unusual login attempts indicate potential compromise. Immediately change your password and secure your account with 2FA. Review account activity for unauthorized access.",
                tip: "Suspicious login attempts? Change password immediately and enable 2FA right now."
            },
            {
                scenario: "A website asks if you want to save your password in the browser. Should you allow this?",
                options: [
                    "Yes, it's convenient and secure",
                    "Only for non-sensitive accounts if your computer is personally secured",
                    "Never, especially for sensitive accounts like email and banking",
                    "It doesn't matter - browsers are very secure"
                ],
                correct: 2,
                explanation: "Browser password storage is convenient but less secure than password managers. For sensitive accounts, use a dedicated password manager instead.",
                tip: "Don't let browsers save passwords for sensitive accounts. Use a password manager instead."
            },
            {
                scenario: "What's a good way to create a unique password you can remember?",
                options: [
                    "Use your name and birthday",
                    "Use a passphrase (4+ random words) and add numbers/symbols",
                    "Reuse the same password everywhere",
                    "Use dictionary words with numbers at the end"
                ],
                correct: 1,
                explanation: "Passphrases (like 'correct-horse-battery-staple') are easier to remember while being very secure. Add numbers and special characters for additional complexity.",
                tip: "Passphrase formula: 4 random words + numbers/symbols = strong, memorable passwords."
            }
        ]
    },
    {
        id: 3,
        name: "Malware & USB Threats",
        description: "Avoid infected files and malicious USB devices",
        difficulty: "Intermediate",
        hasPasswordTester: false,
        questions: [
            {
                scenario: "You find a USB drive in the office parking lot. It's labeled 'Executive_Bonuses.xlsx'. What should you do?",
                options: [
                    "Plug it into your computer to see what's on it",
                    "Give it to your manager immediately",
                    "Turn it in to security or IT without plugging it in",
                    "Leave it where you found it"
                ],
                correct: 2,
                explanation: "Unknown USB devices can contain malware. Never plug them into company devices. Report found devices to security/IT who can safely analyze them.",
                tip: "Found USB drive? Never plug it in. Report to IT immediately."
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
                explanation: "Malware often spreads through macro-enabled documents. Always disable macros by default unless you're 100% certain they're legitimate and necessary.",
                tip: "Macro requests from unknown senders = instant red flag. Disable macros always."
            },
            {
                scenario: "An executable file (.exe) arrives via email with an innocent-sounding name like 'Document.exe'. Should you open it?",
                options: [
                    "Yes, if it has a document-like name",
                    "No, executable files from email should never be opened",
                    "Only if it's from a known contact",
                    "Yes, but scan it with antivirus first"
                ],
                correct: 1,
                explanation: "Executable files are the most common malware delivery method. Never open .exe files from email, regardless of the name or apparent legitimacy.",
                tip: "EXE files from email = malware. Delete immediately without opening."
            },
            {
                scenario: "Your antivirus software detects and quarantines a file. What does this mean?",
                options: [
                    "The file is now safe to use",
                    "The file has been isolated and cannot harm your system",
                    "Your antivirus is overreacting",
                    "You should restore it immediately"
                ],
                correct: 1,
                explanation: "Quarantine means the file is isolated and cannot execute. Never restore quarantined files unless you're certain they're legitimate and the threat has been verified as a false positive.",
                tip: "Quarantined file = it can't hurt you anymore. Leave it there."
            },
            {
                scenario: "You're about to download a tool from a random website for work purposes. What's the safest approach?",
                options: [
                    "Download and run it immediately",
                    "Check if it's an official source; use only reputable software repositories or official vendor websites",
                    "Download and run it on a test machine first",
                    "Download if the website looks professional"
                ],
                correct: 1,
                explanation: "Only download software from official sources or verified repositories. Random websites, even if they look professional, are major malware distribution vectors.",
                tip: "Always download from official sources. Professional-looking = probably fake."
            },
            {
                scenario: "A USB drive you plugged in is showing files from different drives on your computer. What's happening?",
                options: [
                    "The USB is just reading your drives, no problem",
                    "This could be a USB malware exploit (BadUSB) attempting unauthorized access",
                    "It's a normal feature of USB drives",
                    "You should explore the drive to see what it's doing"
                ],
                correct: 1,
                explanation: "BadUSB malware can masquerade as different device types to access your system. If a USB behaves unexpectedly, disconnect it immediately and report to IT.",
                tip: "Unexpected USB behavior = BadUSB. Disconnect immediately and report to IT."
            },
            {
                scenario: "You receive a file named 'Presentation.pdf.exe' via email. What's the threat?",
                options: [
                    "It's safe because it has a .pdf extension",
                    "The .exe extension means it's an executable, despite the misleading .pdf name",
                    "Windows will treat this as a PDF file",
                    "It's just a naming convention"
                ],
                correct: 1,
                explanation: "Files with double extensions (.pdf.exe) hide the true file type. The .exe extension means it will execute as a program, not open as a PDF. Never open these files.",
                tip: "Double extension files are a malware trick. The LAST extension is what matters."
            },
            {
                scenario: "You notice your computer is running slowly and using high disk activity even when idle. What could be happening?",
                options: [
                    "It's probably just a Windows update",
                    "This could indicate malware, ransomware, or unauthorized mining activity",
                    "You should immediately restart the computer",
                    "It's normal for aging computers"
                ],
                correct: 1,
                explanation: "Unexpected high disk/CPU usage could indicate malware, cryptominers, or ransomware encrypting files. Run scans and contact IT if performance doesn't improve.",
                tip: "Slow computer + high disk usage = likely malware. Scan immediately."
            },
            {
                scenario: "You want to try a new free software tool. It requires admin access to install. What should you do?",
                options: [
                    "Grant admin access if it sounds legitimate",
                    "Avoid installing software that requires elevated privileges unless it's from an official source",
                    "Only grant admin access if a friend recommends it",
                    "Ask your manager if the tool looks useful"
                ],
                correct: 1,
                explanation: "Malware often requires admin access to install rootkits or system-level infections. Only install software from trusted sources, and be cautious of excessive privilege requests.",
                tip: "Admin access required for 'free' tools? Probably malware. Use official sources only."
            },
            {
                scenario: "Your browser keeps redirecting to ad pages even when you close them. What could this be?",
                options: [
                    "It's a website configuration issue",
                    "You likely have adware or a malicious browser extension installed",
                    "It's a browser bug",
                    "Clear your cookies and it will stop"
                ],
                correct: 1,
                explanation: "Persistent unwanted redirects indicate adware or malicious extensions. Remove suspicious extensions, run antimalware scans, and consider resetting your browser.",
                tip: "Constant redirects = adware or malicious extension. Remove suspicious extensions immediately."
            }
        ]
    },
    {
        id: 4,
        name: "Web Security",
        description: "Identify legitimate websites and secure online transactions",
        difficulty: "Beginner",
        hasPasswordTester: false,
        questions: [
            {
                scenario: "You're shopping online and need to enter payment information. Which signs indicate a legitimate, secure website?",
                options: [
                    "The site asks for your password",
                    "'https://' in the URL and a padlock icon",
                    "The site asks for all your personal information at once",
                    "Bright colors and flashy advertisements"
                ],
                correct: 1,
                explanation: "Always look for HTTPS (not HTTP) and a padlock icon in the address bar. These indicate the connection is encrypted. Avoid sites asking for unnecessary personal information.",
                tip: "Check for HTTPS and the padlock icon before entering payment info."
            },
            {
                scenario: "You notice a website's HTTPS padlock is showing a warning. What should you do?",
                options: [
                    "Proceed with caution - it's probably fine",
                    "Leave the site immediately - certificate warnings indicate security issues",
                    "Ignore the warning and continue",
                    "It just means the site is slightly less secure but still usable"
                ],
                correct: 1,
                explanation: "HTTPS certificate warnings indicate the site's security credentials are invalid or expired. Leave immediately - this is a major red flag for scam sites or man-in-the-middle attacks.",
                tip: "Certificate warning = Leave immediately. These are serious security issues."
            },
            {
                scenario: "You receive a text message with a link from your bank asking to verify your account. What should you do?",
                options: [
                    "Click the link to verify immediately",
                    "Call your bank directly using the number on your card before clicking any links",
                    "Reply to the text asking for verification",
                    "Check your online banking app first"
                ],
                correct: 1,
                explanation: "Banks don't verify accounts via text links. This is SMS phishing (smishing). Always initiate contact with your bank using official channels.",
                tip: "Bank text with verification link = smishing. Call the bank directly instead."
            },
            {
                scenario: "A website you're visiting has a URL that looks like: 'htp://secure-paypal-verify.com' instead of 'https://www.paypal.com'. What's wrong?",
                options: [
                    "It's just a typo, the site is probably fine",
                    "Multiple issues: 'htp' instead of 'https', wrong domain, not official PayPal",
                    "PayPal might be using a subdomain",
                    "It's a valid alternative PayPal URL"
                ],
                correct: 1,
                explanation: "Fake sites use misspelled URLs (htp vs https), wrong domains, and subdomains to fool users. Always type official URLs directly or use bookmarks.",
                tip: "Typo domains + unfamiliar URLs = phishing site. Type the official URL directly."
            },
            {
                scenario: "You're about to enter your credit card on a website. What should you verify first?",
                options: [
                    "That the site looks professional",
                    "HTTPS connection, correct domain URL, and padlock icon",
                    "That the website is not too slow",
                    "That you're not on a public WiFi"
                ],
                correct: 1,
                explanation: "Before entering payment info: verify HTTPS, check the URL matches the company exactly, look for the padlock, and review the site for signs of legitimacy.",
                tip: "Before payment: Check HTTPS, verify domain, look for padlock."
            },
            {
                scenario: "A website is asking for your Social Security Number to complete a purchase. Is this normal?",
                options: [
                    "Yes, all e-commerce sites require this",
                    "No, e-commerce sites shouldn't request SSN - this is a red flag",
                    "Only if you're buying from specific categories",
                    "It's fine if the site looks legitimate"
                ],
                correct: 1,
                explanation: "E-commerce sites never need your SSN for purchases. Only tax/financial entities require SSN. Requests for unnecessary personal info are major warning signs.",
                tip: "E-commerce asking for SSN? It's a scam. Leave immediately."
            },
            {
                scenario: "You notice a site is using 'HTTP' instead of 'HTTPS'. Should you enter personal information?",
                options: [
                    "Yes, if the site looks legitimate",
                    "No, HTTP connections are unencrypted - never enter sensitive data on HTTP sites",
                    "Yes, as long as you're the only one using the network",
                    "It doesn't matter for personal information, only for passwords"
                ],
                correct: 1,
                explanation: "HTTP traffic is unencrypted. Anyone on the network can intercept passwords, credit cards, and personal data. Always use HTTPS for any sensitive transactions.",
                tip: "HTTP without S = unencrypted. Never enter sensitive info on HTTP sites."
            },
            {
                scenario: "You're asked to download a PDF document from a company website. After downloading, the file won't open properly and has a strange file extension. What might this be?",
                options: [
                    "A corrupt file",
                    "Possibly malware disguised as a PDF",
                    "Your PDF reader needs updating",
                    "A problem with your computer"
                ],
                correct: 1,
                explanation: "Files with unexpected extensions or won't open could be malware in disguise. Only download files from official sources and verify the file type.",
                tip: "PDF won't open + strange extension = likely malware. Delete it."
            },
            {
                scenario: "You're on a shopping website and notice they're asking you to disable your browser's security warnings. What should you do?",
                options: [
                    "Disable warnings to proceed with shopping",
                    "Leave the site immediately - legitimate sites never ask this",
                    "Disable warnings only for this site",
                    "This is a normal optimization request"
                ],
                correct: 1,
                explanation: "Any request to disable security warnings is a major red flag. Legitimate companies never ask users to bypass security. Leave immediately.",
                tip: "Asked to disable security? Leave the site. It's definitely a scam."
            },
            {
                scenario: "You accidentally typed a website address wrong and were redirected to a different site. What should you do?",
                options: [
                    "Navigate around the new site since you're already there",
                    "Leave the site immediately and type the correct URL",
                    "This happens all the time, it's probably fine",
                    "Report the typo domain"
                ],
                correct: 1,
                explanation: "Typosquatting (buying misspelled domains) is used to redirect to malicious sites. Leave immediately and carefully type the correct URL or use a bookmark.",
                tip: "Typo'd the URL and got a different site? Leave immediately and type correctly."
            }
        ]
    }
];

let currentModule = null;
let currentQuestion = 0;
let score = 0;
let streak = 0;
let correctAnswers = 0;
let answered = false;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    setupPasswordInput();
});

// Select Module
function selectModule(moduleId) {
    currentModule = modules[moduleId];
    currentQuestion = 0;
    score = 0;
    streak = 0;
    correctAnswers = 0;
    answered = false;
    
    // Update active state
    document.querySelectorAll('.module-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-module="${moduleId}"]`).classList.add('active');
    
    // Hide welcome, show quiz
    document.getElementById('welcome-section').classList.add('hidden');
    document.getElementById('quiz-section').classList.remove('hidden');
    
    // Scroll to top
    document.querySelector('.quiz-main').scrollTop = 0;
    
    loadQuestion();
}

// Load Question
function loadQuestion() {
    if (!currentModule) return;
    
    const question = currentModule.questions[currentQuestion];
    document.getElementById('scenario').textContent = question.scenario;
    document.getElementById('module-title').textContent = currentModule.name;
    document.getElementById('question-counter').textContent = `${currentQuestion + 1} / ${currentModule.questions.length}`;
    
    // Update progress bar
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
    
    // Show password tester if applicable
    if (currentModule.hasPasswordTester) {
        document.getElementById('password-tester').classList.remove('hidden');
    } else {
        document.getElementById('password-tester').classList.add('hidden');
    }
    
    // Reset feedback
    document.getElementById('feedback-section').classList.add('hidden');
    
    answered = false;
    updateStats();
}

// Check Answer
function checkAnswer(selectedIndex) {
    if (answered || !currentModule) return;
    
    answered = true;
    const question = currentModule.questions[currentQuestion];
    const isCorrect = selectedIndex === question.correct;
    
    if (isCorrect) {
        score += 10;
        streak += 1;
        correctAnswers += 1;
    } else {
        streak = 0;
    }
    
    // Show feedback
    const feedbackSection = document.getElementById('feedback-section');
    const feedbackCard = document.getElementById('feedback-card');
    
    feedbackCard.className = `feedback-card ${isCorrect ? 'correct' : 'incorrect'}`;
    feedbackCard.innerHTML = `
        <h4>${isCorrect ? '✓ Correct!' : '✗ Incorrect'}</h4>
        <p class="feedback-explanation">${question.explanation}</p>
        <div class="feedback-tip">
            💡 <strong>Tip:</strong> ${question.tip}
        </div>
    `;
    
    feedbackSection.classList.remove('hidden');
    
    // Disable option buttons
    document.querySelectorAll('.option-btn').forEach((btn, idx) => {
        btn.classList.add('disabled');
        if (idx === selectedIndex) {
            btn.style.borderColor = isCorrect ? 'var(--success)' : 'var(--error)';
        }
    });
    
    updateStats();
}

// Next Question
function nextQuestion() {
    if (!currentModule || !answered) return;
    
    currentQuestion = (currentQuestion + 1) % currentModule.questions.length;
    
    if (currentQuestion === 0) {
        // Module completed
        alert(`🎉 Module Complete!\n\nScore: ${score}\nCorrect Answers: ${correctAnswers}/${currentModule.questions.length}\nAccuracy: ${Math.round((correctAnswers/currentModule.questions.length)*100)}%\n\nGreat job! You can select another module or reset this one.`);
    }
    
    loadQuestion();
}

// Reset Module
function resetModule() {
    if (!currentModule) return;
    currentQuestion = 0;
    score = 0;
    streak = 0;
    correctAnswers = 0;
    answered = false;
    loadQuestion();
}

// Update Stats
function updateStats() {
    document.getElementById('score').textContent = score;
    document.getElementById('streak').textContent = streak;
    document.getElementById('correct-count').textContent = `${correctAnswers}/${currentModule.questions.length}`;
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
        'At least 12 characters (Strong)': password.length >= 12,
        'Contains uppercase (A-Z)': /[A-Z]/.test(password),
        'Contains lowercase (a-z)': /[a-z]/.test(password),
        'Contains numbers (0-9)': /[0-9]/.test(password),
        'Contains special characters': /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
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
    
    // Calculate strength
    let strength = 0;
    let strengthText = 'Very Weak';
    let strengthColor = 'var(--error)';
    
    if (password.length === 0) {
        strengthText = 'Enter a password';
        strength = 0;
    } else if (metCount <= 2) {
        strengthText = 'Weak';
        strength = 25;
        strengthColor = 'var(--error)';
    } else if (metCount <= 3) {
        strengthText = 'Fair';
        strength = 50;
        strengthColor = 'var(--warning)';
    } else if (metCount <= 4) {
        strengthText = 'Good';
        strength = 75;
        strengthColor = 'var(--warning)';
    } else if (metCount >= 5) {
        strengthText = 'Strong';
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
    const type = input.type === 'password' ? 'text' : 'password';
    input.type = type;
}
