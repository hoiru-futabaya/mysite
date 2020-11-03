let getCounter = () => {
  fetch('https://script.google.com/macros/s/AKfycbwMZwR-7TSCJ79fgfc8yiU37at5fpt6wcVDMTI7Weik-bYqxBaH/exec?name=index')
  .then(response => {
    return response.text();
  })
  .then(response => {
    document.getElementById('getCounter').textContent = JSON.parse(response).count;
  })
}
