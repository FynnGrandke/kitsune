
export const addReply = (data) => {
  const request = new XMLHttpRequest();
  const dataAsString = JSON.stringify(data);
  
  request.open('PUT', '/entries', true);
  request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  request.send(dataAsString);
};
