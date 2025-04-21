# Notes 

## Email Workflow
From : sender@gmail.com <br>
To : receiver@domain.com

### Sender's SMTP Server
- First a DNS Query is made to find the MX record for the domain of the recipient's email address.

**MX Record**: Mail Exchange Record <br>
- The MX record contains the name of the mail server that is responsible for receiving email for that domain. <br>
- The DNS server returns the MX record to the sender's email server. <br>
- The MX Record may look like this: <br>
```
    MX 10 mail.example.com
```
- Now, another DNS query is made to find the A record for the mail server. <br>
- The A record contains the IP address of the mail server. <br>

**A Record**: Address Record <br>
- The DNS server returns the A record to the sender's email server. <br>

### Receiver's SMTP Server
**SPF Record**: Sender Policy Framework Record <br>
- The recepient's email server checks the SPF record of the sender's domain to verify if the sender is allowed to send email on behalf of that domain. <br>
- The SPF record is a TXT record that contains a list of IP addresses or hostnames that are allowed to send email on behalf of the domain. <br>

**DKIM Record**: DomainKeys Identified Mail Record <br>
- The recepient's email server adds a DKIM signature to the email. <br>
- The DKIM signature is a hash of the email body and headers that is encrypted with the sender's private key. <br>
- The recipient's email server can verify the DKIM signature by looking up the sender's public key in the DNS. <br>

- The DKIM record is a TXT record that contains the public key. <br>

**DMARC Record**: Domain-based Message Authentication, Reporting & Conformance Record <br>
- The DMARC record is a TXT record that contains the policy for how to handle email that fails SPF or DKIM checks. <br>
- The DMARC record can hold three policies: <br>
    - **none**: No action is taken on email that fails SPF or DKIM checks. <br>
    - **quarantine**: Email that fails SPF or DKIM checks is marked as spam. <br>
    - **reject**: Email that fails SPF or DKIM checks is rejected. <br>

## SMTP Server
- SMTP (Simple Mail Transfer Protocol) is a protocol used to send email. <br>
- SMTP is a text-based protocol that uses TCP (Transmission Control Protocol) to send email. <br>
- SMTP uses port 25 for sending email. <br>
- SMTP uses port 465 for secure email (SMTPS). <br>
- SMTP uses port 587 for secure email (STARTTLS). <br>