# HTTP & Being a Web Server

**Protocol** = A set of rules that two sides agree on when communicating. Both client and server are programmed to understand and use that particular set of rules. Similar to people from different countries agreeing on a language to use in conversation.

## How Does Client / Server Communication Occur?

Most people are familiar with IP address strings. It’s an agreed upon naming structure for identifying each party. Once the connection is made, your OS can make a socket and connect to the other computer.

Once connected, there are many protocols for us to choose from – HTTP, FTP, SMTP, etc. – however, we still need a protocol to govern how we *send* that information, not just the structure of the data. To do this, we use **TCP (Transmission Control Protocol)** which takes the information, splits it into chunks of data – *packets* – and sends it along the wire.
