fetch('https://ipinfo.io/json', {
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json'
  }
}).then(function (response) {
  return response.json();
}).then(function (ip) {
  fetch('https://script.google.com/macros/s/AKfycbwMZwR-7TSCJ79fgfc8yiU37at5fpt6wcVDMTI7Weik-bYqxBaH/exec?name=index&ip=' + ip.ip).then(function (response) {
    return response.text();
  }).then(function (response) {
    document.getElementById('getCounter').textContent = JSON.parse(response).count;
  });
});
