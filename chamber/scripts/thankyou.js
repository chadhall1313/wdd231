
const myInfo = new URLSearchParams(window.location.search);


document.querySelector("#results").innerHTML = `
<p>Name: ${myInfo.get("first-name")} ${myInfo.get("last-name")}</p>
<p>Email: ${myInfo.get("email")}</p>
<p>Phone: ${myInfo.get("phone")}</p>
<p>Business: ${myInfo.get("business")}</p>
<p>Timestamp: ${myInfo.get("timestamp")}</p>`