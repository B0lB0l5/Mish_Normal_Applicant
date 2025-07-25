function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
    "Cybersecurity_Email_List_with_Companies"
  );
  var startRow = 2;
  var numRows = sheet.getLastRow() - 1;
  var dataRange = sheet.getRange(startRow, 1, numRows, 3);
  var data = dataRange.getValues();

  data.forEach(function (row, i) {
    var companyName = row[0];
    var emailAddress = row[1];
    var sentStatus = row[2];

    if (sentStatus !== "SENT") {
      var subject = "Cybersecurity Job Inquiry – " + companyName;
      var message = `
      Subject: Cybersecurity Job Inquiry – {{Company Name}}

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
+2010-9971-1431  
ahmednabil707i@gmail.com  
LinkedIn: (https://linkedin.com/in/ahmed-nabil-b0lb0l)


            `;

      MailApp.sendEmail({
        to: emailAddress,
        subject: subject,
        body: message,
      });

      sheet.getRange(startRow + i, 3).setValue("SENT");
      SpreadsheetApp.flush();
    }
  });
}
