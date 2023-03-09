let apiUrl = "https://jsonplaceholder.typicode.com/comments";
function displayComment(response) {
  console.log(response);
  console.log(response.data[0]);
  console.log(response.data[0].email);
}

axios.get(apiUrl).then(displayComment);
