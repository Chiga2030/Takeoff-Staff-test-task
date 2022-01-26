const useFetch = userName => {
  const protocol = 'https://';
  const host = 'jsonplaceholder.typicode.com/';
  const param = `users?username=${userName}`;
  const url = `${protocol}${host}${param}`;

  return fetch(url)
    .then(response => response.json())
    .then(json => json);
};


export default useFetch;
