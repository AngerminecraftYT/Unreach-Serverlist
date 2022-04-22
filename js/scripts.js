function serverListener1() {
  var data = JSON.parse(this.responseText);
  console.log(data);
  document.getElementById('server-1-motd').innerHTML = data.motd.html
  document.getElementById('server-1-online').innerHTML = data.players.online
  document.getElementById('server-1-max').innerHTML = data.players.max
}
var request = new XMLHttpRequest();
request.onload = serverListener1;
request.onerror = requestError;
request.open('get', 'https://adminpanel.cyclenet.eu/api/ping?ip=unreachpvp.servers.unreach.host&port=25565', true);
request.send();
