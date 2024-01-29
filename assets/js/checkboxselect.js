
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
    "Fortinet NSE1/NSE2",
    "Veeam Backup & Replication"
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
      listItem.textContent = "‣ " + value;
      selectedValuesContainer.appendChild(listItem);

    });

  }

}
