const protocols = [
 {
  name:"HTTP / HTTPS",
  layer:"APPLICATION LAYER",
  port:"PORT 80 / 443",
  symbol:"↗",
  summary:"HTTP allows browsers and servers to exchange requests and responses. HTTPS adds encryption using TLS.",
  explain:"Your browser sends a request for a resource. The server responds with a status code and content. HTTPS protects the connection using encryption.",
  example:"When you open a shopping website, your browser uses HTTPS to request the page securely."
 },
 {
  name:"DNS",
  layer:"APPLICATION LAYER",
  port:"PORT 53",
  symbol:"⌕",
  summary:"The Domain Name System translates domain names into IP addresses.",
  explain:"A device asks a DNS resolver for a domain's address. The resolver checks its cache or queries other DNS servers and returns an IP address.",
  example:"DNS helps your browser find the server for example.com."
 },
 {
  name:"FTP",
  layer:"APPLICATION LAYER",
  port:"PORT 20 / 21",
  symbol:"⇧",
  summary:"File Transfer Protocol transfers files between computers.",
  explain:"An FTP client connects to an FTP server and can upload, download and manage files. Traditional FTP does not encrypt traffic.",
  example:"A website administrator may use file-transfer software to upload website files."
 },
 {
  name:"SMTP",
  layer:"APPLICATION LAYER",
  port:"PORT 25 / 587 / 465",
  symbol:"✉",
  summary:"Simple Mail Transfer Protocol is used to send email messages.",
  explain:"An email application uses SMTP to submit outgoing messages to a mail server, which helps deliver them to the recipient's mail system.",
  example:"When you send an email, SMTP helps transfer it toward the recipient."
 },
 {
  name:"IMAP",
  layer:"APPLICATION LAYER",
  port:"PORT 143 / 993",
  symbol:"▤",
  summary:"Internet Message Access Protocol lets email applications access and synchronise messages stored on a mail server.",
  explain:"IMAP keeps messages on the mail server and synchronises actions such as reading, deleting and organising emails across devices.",
  example:"Reading the same email on your phone and laptop using IMAP."
 },
 {
  name:"POP3",
  layer:"APPLICATION LAYER",
  port:"PORT 110 / 995",
  symbol:"↓",
  summary:"Post Office Protocol version 3 retrieves email messages from a mail server.",
  explain:"An email application connects to a mail server and downloads messages. Its behaviour depends on the application's settings.",
  example:"An email client downloads messages from your mailbox using POP3."
 },
 {
  name:"SSH",
  layer:"APPLICATION LAYER",
  port:"PORT 22",
  symbol:"⌘",
  summary:"Secure Shell provides encrypted remote access to another computer.",
  explain:"SSH establishes an encrypted connection between a client and a remote machine, allowing secure remote administration.",
  example:"A system administrator securely connects to a remote server using SSH."
 },
 {
  name:"TLS",
  layer:"APPLICATION LAYER",
  port:"NO FIXED PORT",
  symbol:"◇",
  summary:"Transport Layer Security protects data exchanged between applications through encryption and authentication.",
  explain:"TLS helps two endpoints establish secure communication. It can authenticate the server and protect information while it travels across a network.",
  example:"HTTPS uses TLS to protect communication between your browser and a website."
 },
 {
  name:"DHCP",
  layer:"APPLICATION LAYER",
  port:"PORT 67 / 68",
  symbol:"⊕",
  summary:"Dynamic Host Configuration Protocol automatically provides network settings to devices.",
  explain:"A DHCP server can assign a device an IP address and provide other settings such as the default gateway and DNS server.",
  example:"When your phone joins Wi-Fi, DHCP can automatically assign its network address."
 },
 {
  name:"TCP",
  layer:"TRANSPORT LAYER",
  port:"NO FIXED PORT",
  symbol:"⇄",
  summary:"Transmission Control Protocol provides a reliable, ordered stream of data between applications.",
  explain:"TCP establishes a connection, numbers data segments, checks delivery and retransmits missing data.",
  example:"A file download commonly uses TCP so missing data can be retransmitted."
 },
 {
  name:"UDP",
  layer:"TRANSPORT LAYER",
  port:"NO FIXED PORT",
  symbol:"⚡",
  summary:"User Datagram Protocol sends data with low overhead and no built-in delivery guarantee.",
  explain:"UDP sends independent datagrams without establishing a connection or automatically retransmitting lost data.",
  example:"Some live voice, video and online game traffic uses UDP."
 },
 {
  name:"IP",
  layer:"INTERNET LAYER",
  port:"NO PORT",
  symbol:"◎",
  summary:"Internet Protocol provides addressing and routing so packets can travel between networks.",
  explain:"IP packets carry source and destination addresses. Routers use the destination address to forward packets toward their destination.",
  example:"IP addressing helps routers move data between your device and a server."
 },
 {
  name:"ICMP",
  layer:"INTERNET LAYER",
  port:"NO PORT",
  symbol:"⌁",
  summary:"Internet Control Message Protocol carries network diagnostic and error information.",
  explain:"ICMP messages help devices and network equipment report conditions such as unreachable destinations.",
  example:"The ping command commonly uses ICMP to test network reachability."
 },
 {
  name:"ARP",
  layer:"INTERNET LAYER",
  port:"NO PORT",
  symbol:"⌖",
  summary:"Address Resolution Protocol helps find the MAC address associated with an IPv4 address on a local network.",
  explain:"A device can broadcast an ARP request asking which device owns a particular local IPv4 address. The matching device can reply with its MAC address.",
  example:"Your computer uses ARP to help deliver local network traffic to another device."
 },
 {
  name:"NTP",
  layer:"APPLICATION LAYER",
  port:"PORT 123",
  symbol:"◷",
  summary:"Network Time Protocol synchronises clocks between computers and time servers.",
  explain:"A device contacts an NTP server to estimate the correct time and adjust its local clock.",
  example:"Your computer can use NTP to keep its clock accurate."
 }
 ];
const protocolExtras = {
  "HTTP / HTTPS": {
    security: "HTTP is unencrypted. HTTPS uses TLS to protect data exchanged with the website.",
    related: "DNS, TCP, TLS"
  },
  "DNS": {
    security: "Traditional DNS queries are often unencrypted. DNS over HTTPS and DNS over TLS offer encrypted alternatives.",
    related: "IP, UDP, TCP"
  },
  "FTP": {
    security: "Traditional FTP does not encrypt usernames, passwords or transferred files. Secure alternatives include SFTP.",
    related: "TCP, SSH"
  },
  "SMTP": {
    security: "SMTP should use authentication and encryption such as TLS when supported.",
    related: "IMAP, POP3, TLS"
  },
  "IMAP": {
    security: "Use IMAP over TLS to protect email access and synchronisation.",
    related: "SMTP, POP3, TLS"
  },
  "POP3": {
    security: "Use POP3 over TLS to protect email retrieval.",
    related: "SMTP, IMAP, TLS"
  },
  "SSH": {
    security: "SSH encrypts remote sessions. Keep software updated and use strong authentication.",
    related: "TCP, SFTP"
  },
  "TLS": {
    security: "TLS protects data in transit. Correct certificate validation and modern configurations are important.",
    related: "HTTPS, TCP, DNS"
  },
  "DHCP": {
    security: "Unauthorised DHCP servers can provide incorrect network settings. Networks should control who can offer DHCP.",
    related: "IP, DNS, ARP"
  },
  "TCP": {
    security: "TCP provides reliable delivery but does not encrypt data by itself. Applications can use TLS for protection.",
    related: "IP, UDP, TLS"
  },
  "UDP": {
    security: "UDP does not provide encryption or guaranteed delivery by itself. Applications must add protection when needed.",
    related: "IP, DNS, TCP"
  },
  "IP": {
    security: "IP provides addressing and routing, not encryption. Additional security protocols can protect IP traffic.",
    related: "TCP, UDP, ICMP, ARP"
  },
  "ICMP": {
    security: "ICMP is useful for diagnostics, but networks may limit certain ICMP traffic to reduce abuse.",
    related: "IP, TCP, UDP"
  },
  "ARP": {
    security: "ARP does not authenticate replies, so local networks can be vulnerable to ARP spoofing.",
    related: "IP, DHCP"
  },
  "NTP": {
    security: "Use trusted time servers and authenticated NTP where supported to reduce time-tampering risks.",
    related: "UDP, IP"
  }
};
const list = document.getElementById("protocol-list");
const searchInput = document.getElementById("protocol-search");
const filterButtons = document.querySelectorAll(".filter-btn");
const emptyMessage = document.createElement("p");
emptyMessage.className = "empty-message";
emptyMessage.textContent = "No protocols found. Try another search or category.";
emptyMessage.hidden = true;
list.appendChild(emptyMessage);

let activeFilter = "ALL";

function showProtocol(i) {
  const p = protocols[i];

  document.querySelectorAll(".protocol-choice").forEach((b, n) => {
    b.classList.toggle("active", n === i);
  });

  for (const [id, val] of Object.entries({
    "protocol-layer": p.layer,
    "protocol-port": p.port,
    "protocol-symbol": p.symbol,
    "protocol-name": p.name,
    "protocol-summary": p.summary,
    "protocol-explain": p.explain,
    "protocol-example": p.example,

   "protocol-security": protocolExtras[p.name].security,
"protocol-related": ""
  })) {
    document.getElementById(id).textContent = val;
  }
showRelatedProtocols(p.name);
}

function showRelatedProtocols(protocolName) {
  const relatedContainer = document.getElementById("protocol-related");
  const relatedNames = protocolExtras[protocolName].related.split(",");

  relatedContainer.innerHTML = "";

  relatedNames.forEach(name => {
    const protocolName = name.trim();

    const button = document.createElement("button");
    button.textContent = protocolName;
    button.className = "related-protocol-btn";

    const index = protocols.findIndex(
      p => p.name.toLowerCase() === protocolName.toLowerCase()
    );

    if (index !== -1) {
      button.addEventListener("click", () => {
        showProtocol(index);
      });

      relatedContainer.appendChild(button);
    }
  });
}
protocols.forEach((p, i) => {
  const b = document.createElement("button");
  b.className = "protocol-choice";
  b.innerHTML = `<span>${p.name}</span>${p.layer}`;
  b.addEventListener("click", () => showProtocol(i));
  list.appendChild(b);
});

function filterProtocols() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const buttons = document.querySelectorAll(".protocol-choice");
  let firstVisible = -1;

  buttons.forEach((button, i) => {
    const p = protocols[i];

    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm) ||
      p.summary.toLowerCase().includes(searchTerm) ||
      p.layer.toLowerCase().includes(searchTerm);

    const matchesFilter =
      activeFilter === "ALL" || p.layer === activeFilter;

    const visible = matchesSearch && matchesFilter;
    button.hidden = !visible;

    if (visible && firstVisible === -1) {
      firstVisible = i;
    }
  });

  emptyMessage.hidden = firstVisible !== -1;
  document.querySelector(".detail-card").hidden = firstVisible === -1;

  if (firstVisible !== -1) {
    showProtocol(firstVisible);
  }
}
searchInput.addEventListener("input", filterProtocols);

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;

    filterButtons.forEach(b => {
      b.classList.toggle("active", b === button);
    });

    filterProtocols();
  });
});

showProtocol(0);const descriptions=["Your browser asks a DNS resolver to find the IP address associated with the domain name.","Your device establishes a connection with the server. TCP is commonly used for this step.","For HTTPS, the browser and server negotiate encryption using TLS.","The browser sends an HTTP request asking for a page or another resource.","The server sends back a response, such as HTML, CSS, images, or other data."];
let current=0;const stepEls=[...document.querySelectorAll(".step")];function updateStep(){stepEls.forEach((el,i)=>el.classList.toggle("active",i===current));document.getElementById("step-count").textContent=`Step ${current+1} of 5`;document.getElementById("step-description").textContent=descriptions[current];document.getElementById("prev-step").disabled=current===0;document.getElementById("next-step").textContent=current===4?"Start again ↻":"Next step →";}
document.getElementById("prev-step").addEventListener("click",()=>{current=Math.max(0,current-1);updateStep()});document.getElementById("next-step").addEventListener("click",()=>{current=current===4?0:current+1;updateStep()});
document.querySelectorAll("#quiz-options button").forEach(b=>b.addEventListener("click",()=>{const correct=b.dataset.answer==="DNS";document.querySelectorAll("#quiz-options button").forEach(x=>x.classList.remove("correct","wrong"));b.classList.add(correct?"correct":"wrong");document.getElementById("quiz-feedback").textContent=correct?"Correct! DNS translates domain names into IP addresses.":"Not quite. The correct answer is DNS — try selecting DNS."; }));


/* PREMIUM SEQUENTIAL NETWORK ANIMATION */

const sendPacketButton = document.getElementById("send-packet");
const networkPackets = document.querySelectorAll(".network-stage .packet");
const networkStatus = document.getElementById("network-status");

let networkAnimationRunning = false;

sendPacketButton.addEventListener("click", async () => {
  if (networkAnimationRunning) return;

  networkAnimationRunning = true;
  sendPacketButton.disabled = true;

  const wait = ms =>
    new Promise(resolve => setTimeout(resolve, ms));

  const stages = [
    "Your device is sending the packet to the router...",
    "The router is forwarding the packet to the internet...",
    "The internet is routing the packet to the DNS resolver...",
    "The DNS resolver is helping locate the web server..."
  ];

  networkPackets.forEach(packet => {
    packet.classList.remove("moving");
    packet.style.opacity = "0";
  });

  networkStatus.textContent = "Preparing your data packet...";
  await wait(700);

  for (let i = 0; i < networkPackets.length; i++) {
    networkStatus.textContent = stages[i];

    const packet = networkPackets[i];
    packet.style.opacity = "1";
    packet.classList.remove("moving");

    void packet.offsetWidth;
    packet.classList.add("moving");

    await wait(1300);

    packet.style.opacity = "0";
    packet.classList.remove("moving");

    await wait(400);
  }

  networkStatus.textContent =
    "Success! Your packet reached the web server.";

  await wait(800);

  networkAnimationRunning = false;
  sendPacketButton.disabled = false;
});
/* DAY 3 - NETWORK SEQUENCE CONTROLS */

const sequenceSteps = [
  {
    title: "Step 1: DNS lookup",
    description: "Your browser asks DNS to find the server's IP address."
  },
  {
    title: "Step 2: Connection",
    description: "Your device establishes a connection with the destination server."
  },
  {
    title: "Step 3: Secure session",
    description: "For HTTPS, TLS helps secure communication between your browser and the server."
  },
  {
    title: "Step 4: Data exchange",
    description: "Your browser sends a request and the server sends back a response."
  }
];

let sequenceIndex = -1;

const sequenceTitle = document.getElementById("sequence-title");
const sequenceDescription = document.getElementById("sequence-description");
const sequenceCount = document.getElementById("sequence-count");
const sequencePrev = document.getElementById("sequence-prev");
const sequenceNext = document.getElementById("sequence-next");
const sequencePlay = document.getElementById("sequence-play");

function updateSequence() {
  const step = sequenceSteps[sequenceIndex];

  sequenceTitle.textContent = step.title;
  sequenceDescription.textContent = step.description;
  sequenceCount.textContent =
    `Step ${sequenceIndex + 1} of ${sequenceSteps.length}`;

  sequencePrev.disabled = sequenceIndex === 0;

  sequenceNext.textContent =
    sequenceIndex === sequenceSteps.length - 1
      ? "Restart ↻"
      : "Next →";

  // Highlight the devices involved in the current step
  const highlightedDevices = [
    ["dns"],
    ["router"],
    ["router", "server"],
    ["device", "server"]
  ];

  const activeDevices = highlightedDevices[sequenceIndex];

  mapNodes.forEach(node => {
    node.classList.toggle(
      "active",
      activeDevices.includes(node.dataset.node)
    );
  });
}
sequenceNext.addEventListener("click", () => {
  sequenceIndex =
    sequenceIndex === sequenceSteps.length - 1
      ? 0
      : sequenceIndex + 1;

  updateSequence();
});

sequencePrev.addEventListener("click", () => {
  if (sequenceIndex > 0) {
    sequenceIndex--;
    updateSequence();
  }
});

sequencePlay.addEventListener("click", async () => {
  sequencePlay.disabled = true;
  sequencePrev.disabled = true;
  sequenceNext.disabled = true;

  sequenceIndex = 0;
  updateSequence();

  await new Promise(resolve => setTimeout(resolve, 1200));

  while (sequenceIndex < sequenceSteps.length - 1) {
    sequenceIndex++;
    updateSequence();
   await new Promise(resolve => setTimeout(resolve, 1800));
  }

  sequencePlay.disabled = false;
  sequencePrev.disabled = false;
  sequenceNext.disabled = false;
});
sequenceTitle.textContent = "Ready to explore";
sequenceDescription.textContent =
  "Follow a request as it travels across the network.";
sequenceCount.textContent = "Step 0 of 4";
sequencePrev.disabled = true;

/* DAY 3 - INTERACTIVE NETWORK DEVICE INFORMATION */

const networkDeviceInfo = {
  device: {
    title: "Your Device – Client",
    description: "Your device starts the communication. When you enter a website address, your browser prepares a request and uses network protocols to contact the destination server."
  },

  router: {
    title: "Router – Network Gateway",
    description: "A router connects different networks. It examines destination IP addresses and forwards data packets toward their destination."
  },

  dns: {
    title: "DNS Server – Name Lookup",
    description: "A DNS server helps translate human-readable domain names, such as example.com, into IP addresses that computers use to locate servers."
  },

  server: {
    title: "Web Server – Destination",
    description: "A web server receives requests from browsers and sends responses containing website resources such as HTML, CSS, images and other data."
  }
};

const mapNodes = document.querySelectorAll(".map-node");
const nodeInfoTitle = document.getElementById("node-info-title");
const nodeInfoDescription = document.getElementById("node-info-description");

mapNodes.forEach(node => {
  node.addEventListener("click", () => {
    const device = networkDeviceInfo[node.dataset.node];

    if (!device) return;

    nodeInfoTitle.textContent = device.title;
    nodeInfoDescription.textContent = device.description;

    mapNodes.forEach(item => {
      item.classList.toggle("active", item === node);
    });
  });
});

// DAY 4 - INTERACTIVE OSI MODEL

const osiLayers = [
  {
    name: "7. Application",
    description: "Provides network services to applications. Examples include HTTP, HTTPS, DNS and SMTP."
  },
  {
    name: "6. Presentation",
    description: "Handles data formatting, encoding, encryption and compression."
  },
  {
    name: "5. Session",
    description: "Establishes, manages and ends communication sessions between applications."
  },
  {
    name: "4. Transport",
    description: "Provides end-to-end data delivery. TCP and UDP work at this layer."
  },
  {
    name: "3. Network",
    description: "Handles logical addressing and routing data between networks. IP works here."
  },
  {
    name: "2. Data Link",
    description: "Moves frames between devices on the same network and uses MAC addresses."
  },
  {
    name: "1. Physical",
    description: "Transmits raw bits through physical media such as cables, radio waves and fibre."
  }
];

const osiContainer = document.getElementById("osi-layers");
const osiInfo = document.getElementById("osi-info");

osiLayers.forEach((layer) => {
  const button = document.createElement("button");
  button.className = "osi-layer-btn";
  button.textContent = layer.name;

  button.addEventListener("click", () => {
    osiInfo.innerHTML = `
      <h4>${layer.name}</h4>
      <p>${layer.description}</p>
    `;

    document.querySelectorAll(".osi-layer-btn").forEach((item) => {
      item.classList.toggle("active", item === button);
    });
  });

  osiContainer.appendChild(button); 
});

// DAY 4 - INTERACTIVE PACKET FLOW

const packetFlowSteps = [
  {
    title: "1. Browser creates a request",
    description: "When you enter a website address, your browser prepares a request for the website."
  },
  {
    title: "2. DNS finds the server",
    description: "DNS looks up the domain name and helps your browser find the server's IP address."
  },
  {
    title: "3. A connection is established",
    description: "Your browser establishes a connection with the web server."
  },
  {
    title: "4. Data is transferred",
    description: "Your browser sends a request and data travels across the network."
  },
  {
    title: "5. The server responds",
    description: "The web server processes the request and sends a response back to your browser."
  }
];

const packetStepButtons = document.querySelectorAll(".packet-step");
const packetFlowTitle = document.getElementById("packet-flow-title");
const packetFlowDescription = document.getElementById("packet-flow-description");

packetStepButtons.forEach(button => {
  button.addEventListener("click", () => {
    const stepIndex = Number(button.dataset.step);
    const step = packetFlowSteps[stepIndex];

    packetFlowTitle.textContent = step.title;
    packetFlowDescription.textContent = step.description;

    packetStepButtons.forEach(item => {
      item.classList.toggle("active", item === button);
    });
  });
});