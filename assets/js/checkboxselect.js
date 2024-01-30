var skillsData = {
  "Languages": [
    "Français",
    "English",
    "Arabic"
  ],
  "Development": [
    "HTML5, CSS3, Bootstrap (Front-end)",
    "Javascript, React (Front-end)",
    "Python (Back-end)",
    "C (System programming)",
    "Experience in web development"
  ],
  "Network and Telecommunications": [
    "Network configuration and management",
    "Network security and firewall",
    "Server administration (Linux, Windows)",
    "Network protocols (TCP/IP, UDP)",
    "VoIP infrastructure and network virtualization",
    "Wireless technologies (Wi-Fi)"
  ],
  "Systems": [
    "System administration (Linux, Windows)",
    "User management, rights, and security",
    "Server configuration (Apache, Nginx)",
    "Task automation (Shell scripting)",
    "System monitoring and maintenance",
    "Preventive and corrective maintenance",
    "System integration"
  ],
  "Database": [
    "MySQL, MariaDB, MongoDB",
    "Data modeling and optimization",
    "Experience in data backup and recovery"
  ],
  "Certifications": [
    { 
      name: "Fortinet NSE1/NSE2", 
      pdfs: [
        { name: "NSE1 1", link: "assets/Certification/NSE_1_Certification.pdf" },
        { name: "NSE1 2", link: "assets/Certification/NSE_2_Certification.pdf" }
      ]
    },
    { 
      name: "Veeam Backup & Replication", 
      pdfs: [
        { name: "Veeam Sales", link: "assets/Certification/certificate_SL.pdf" },
        { name: "Veeam Technicale Sales", link: "assets/Certification/certificate_TSP.pdf" }
      ]
    }
  ]
};

var lastChecked = null;

function logSkills(checkbox) {
  var skillName = checkbox.value;
  var skillValues = skillsData[skillName];
  var selectedValuesContainer = document.getElementById("item-skills");

  if (lastChecked !== null && lastChecked !== checkbox) {
    lastChecked.checked = false;
  }
  lastChecked = checkbox;
  if (checkbox.checked) {
    selectedValuesContainer.innerHTML = "<ul></ul>"
    skillValues.forEach(function (value) {
      var listItem = document.createElement("li");
      if (typeof value === "object") {
        var sublist = document.createElement("ul");
        value.pdfs.forEach(function(pdf) {
          var subListItem = document.createElement("li");
          var link = document.createElement("a");
          link.href = pdf.link;
          link.textContent = pdf.name;
          link.target = "_blank"; // Open link in a new tab
          
          subListItem.appendChild(link);
          sublist.appendChild(subListItem);
        });
        listItem.textContent = value.name + ":";
        listItem.appendChild(sublist);
      } else {
        listItem.textContent = "‣ " + value;
      }
      selectedValuesContainer.appendChild(listItem);
    });
  }
}
