

export const sendMessage = (data) => {
  const request = new XMLHttpRequest();
  const dataAsString = JSON.stringify(data);
  
  request.open('POST', '/entries', true);
  request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  request.send(dataAsString);
};
