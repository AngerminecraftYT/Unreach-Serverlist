var request = new XMLHttpRequest();
request.onload = requestListener;
request.onerror = requestError;
request.open('get', 'https://api.mcsrvstat.us/2/unreachpvp.servers.unreach.host', true);
request.send();
function requestListener() {
  var data = JSON.parse(this.responseText);
  console.log(data);
  document.getElementById('server-1-motd').innerHTML = data.motd.html
  document.getElementById('server-1-online').innerHTML = data.players.online
  document.getElementById('server-1-max').innerHTML = data.players.max
}
function requestError(){
    return;
}
