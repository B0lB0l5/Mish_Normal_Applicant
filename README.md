# 🔒 Auto Email Sender for Cybersecurity Job Outreach

This repository contains a script that automates sending personalized job inquiry emails to cybersecurity companies listed in a Google Sheet.  
It’s designed for aspiring cybersecurity professionals who want to make impactful outreach efforts with minimal manual work.

---

## 📌 Features

- ✅ Automatically sends customized emails to companies listed in a Google Sheet
- ✅ Marks each row as "SENT" after successful delivery to prevent duplicates
- ✅ Simple and efficient: written entirely in **Google Apps Script**
- ✅ Easily customizable email templates
- ✅ Works natively with Gmail and Google Sheets

---

## 📁 Google Sheet Format

| Company Name       | Email Address         | Status |
|--------------------|-----------------------|--------|
| Example Security   | contact@security.com  |        |
| Cyber Solutions    | hr@cybersol.com       | SENT   |

> 📌 **Note:** Only rows with an empty "Status" cell will be emailed.

---

## 📨 Email Template Structure

Dear {{Company Name}} Team,

I hope this message finds you well.

My name is Ahmed Mohamed Nabil, a senior computer science student specializing in cybersecurity, with a strong focus on Red Teaming, penetration testing, and bug hunting. I’m reaching out to express my interest in any cybersecurity opportunities within your company.

Over the past few years, I’ve gained practical experience through internships at Petrojet, ENPPI, ITI, and Route Academy, covering cybersecurity operations, system administration, backend development, and IoT. I’ve worked with tools like Nmap, Burp Suite, Wireshark, and SIEM solutions, alongside building backend systems with Node.js, Express, MongoDB, and MySQL.

In the cybersecurity space, I’m an active CTF player and bug bounty hunter:
- Participated in the **EG-CERT National CTF**, where I successfully exploited a Server-Side Request Forgery (SSRF) vulnerability to access internal data.
- Discovered and reported multiple vulnerabilities on real-world platforms, with several marked as **duplicated** by security teams.
- My most recent report was an **Account Takeover** vulnerability on a production system.
- Ranked in the **top 6% on TryHackMe**, with regular participation in labs and practical challenges.

Beyond technical work, I play an active role in student communities:
- **Head of Cybersecurity Committee @ IEEE HTI-SB**
- **Chairman of CyberCrew HTI**
- **Webmaster @ ICPC HTI**

These roles have helped me grow both technically and in leadership, event planning, and mentorship.

I’ve attached my resume for your review. If there are any current or upcoming opportunities in cybersecurity at {{Company Name}}, I’d love to be considered. Please don’t hesitate to reach out if you need more details.

Best regards,  
Ahmed Mohamed Nabil   
ahmednabil707i@gmail.com  
LinkedIn: (https://linkedin.com/in/ahmed-nabil-b0lb0l)


---

## 🛠 Technologies Used

- **Google Apps Script** – for scripting logic inside Google Workspace
- **GmailApp / MailApp API** – for sending emails directly from your Gmail
- **Google Sheets API** – for interacting with spreadsheet data

---

## 🚀 How to Use

1. Create a Google Sheet with the format above.
2. Go to **Extensions > Apps Script** inside your Sheet.
3. Paste the script into the code editor.
4. Edit the message template if needed.
5. Click `Run > sendEmails()` and authorize permissions.
6. Watch the emails fly — and the status column update to `SENT`.

---

## 📚 Use Cases

- Sending CVs to multiple companies with custom messages
- Following up with cybersecurity firms or recruiters
- Automating internship or job application processes

---

## 💡 Why I Built This

I wanted to simplify the process of professional outreach while keeping it personal and relevant.  
This script reflects the hustle, the mindset, and the automation that cybersecurity professionals often need.

---

## 👨‍💻 Author

**Ahmed Mohamed Nabil Ali**  
Cybersecurity Enthusiast | Red Teamer | CTF Player  
🔗 [LinkedIn](https://linkedin.com/in/ahmed-nabil-b0lb0l)  
📧 ahmednabil707i@gmail.com  

