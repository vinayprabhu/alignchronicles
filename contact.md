---
layout: page
title: Contact Protocols  
permalink: /contact/
---

# Establish Neural Connection

Ready to test jack into the network? Multiple communication protocols are available for establishing a direct neural link with the Align Chronicles terminal.

<div class="terminal-prompt">
    <span class="terminal-user">user@alignchronicles</span>
    <span class="terminal-separator">:</span>
    <span class="terminal-path">~/contact</span>
    <span class="terminal-symbol">$</span>
    <span class="terminal-command">netstat -tuln | grep LISTEN</span>
</div>

## Available Communication Channels

```bash
Proto Recv-Q Send-Q Local Address           Foreign Address         State    
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN   (SSH - Secure Shell)
tcp        0      0 0.0.0.0:80              0.0.0.0:*               LISTEN   (HTTP - Web Interface) 
tcp        0      0 0.0.0.0:443             0.0.0.0:*               LISTEN   (HTTPS - Encrypted Web)
tcp        0      0 0.0.0.0:8080            0.0.0.0:*               LISTEN   (Neural Link Protocol)
```

### Primary Communication Vectors

**Email Interface:**  
`vinaypra @ alumni. <3 lettered Carnegie Mellon University abbreviation>.edu`  
*Encrypted transmission preferred. PGP key available upon request.*

**GitHub Code Slop:**  
`https://github.com/vinayprabhu`  
*For code collaboration, bug reports, and pull requests to reality.*

**Twitter/X :**  
`@vinayprabhu`  
*Rarely use the platform.*

**Professional Network Matrix:**  
`https://www.linkedin.com/in/vinay-prabhu-84619785/`  
*For formal business-oriented neural handshakes.*

### Specialized Communication Protocols

**Research Collaboration:**  
Interested in AI alignment research, consciousness studies, or cyberpunk philosophy? Do reach out!

**Guest Post Submissions:**  
Open to collaborative blogs exploring AI, technology, or digital culture

**Media & Press Inquiries:**  
*lulwhut?*


## Secure Communication

For sensitive transmissions requiring enhanced privacy:

```bash
$ gpg --generate-key
# Generate your own key pair for encrypted communications

$ curl -s https://alignchronicles.dev/pgp-key.asc | gpg --import  
# Import the Align Chronicles public key

$ echo "Your secret message" | gpg --armor --encrypt -r contact@alignchronicles.dev
# Encrypt your message before transmission
```

## Response Protocol

```bash
$ cat /etc/response_times.conf
# Expected response times by communication channel:
#
# Email: 24-48 hours (standard)
# Twitter: 2-6 hours (burst mode) 
# GitHub: 1-7 days (code review dependent)
# Research collaboration: 48-72 hours (deep thought required)
# Media inquiries: 24 hours (priority queue)
# Technical issues: 12-24 hours (bug severity dependent)
```

**Status Codes:**

- `200 OK` - Message received and processed
- `202 Accepted` - Message queued for processing  
- `429 Rate Limited` - Too many requests, please wait
- `503 Offline` - Neural interface temporarily unavailable

---

```bash
$ ping alignchronicles.dev
PING alignchronicles.dev (192.168.1.42): 56 data bytes
64 bytes from 192.168.1.42: icmp_seq=0 ttl=64 time=0.042ms
64 bytes from 192.168.1.42: icmp_seq=1 ttl=64 time=0.037ms
64 bytes from 192.168.1.42: icmp_seq=2 ttl=64 time=0.039ms

--- alignchronicles.dev ping statistics ---
3 packets transmitted, 3 received, 0% packet loss
round-trip min/avg/max/stddev = 0.037/0.039/0.042/0.002 ms

Connection established. Neural link ready for incoming transmissions.
```

*Remember: In a world of artificial minds, authentic human connection remains the most valuable protocol.*

---

<style>
.terminal-contact-methods {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    margin: 2rem 0;
}

.terminal-contact-item {
    background-color: rgba(26, 26, 26, 0.5);
    border: 1px solid rgba(0, 255, 255, 0.2);
    border-radius: 8px;
    padding: 1rem;
    transition: all 0.3s ease;
}

.terminal-contact-item:hover {
    border-color: #00ffff;
    background-color: rgba(26, 26, 26, 0.8);
}

.terminal-contact-title {
    color: #00ffff;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.terminal-contact-info {
    color: #ffffff;
    font-family: monospace;
    word-break: break-all;
}

.terminal-contact-desc {
    color: #808080;
    font-size: 0.9rem;
    font-style: italic;
    margin-top: 0.5rem;
}

pre code {
    font-size: 0.85rem;
    line-height: 1.4;
}
</style>
