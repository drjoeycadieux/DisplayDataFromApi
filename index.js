var request = new XMLHttpRequest();

request.open("POST", "https://www.spotternetwork.org/positions");

request.setRequestHeader("Content-Type", "application/json");

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log("Status:", this.status);
    console.log("Headers:", this.getAllResponseHeaders());
    console.log("Body:", this.responseText);
  }
};

var body = {
  id: "APPLICATION-ID"
};

request.send(JSON.stringify(body));
