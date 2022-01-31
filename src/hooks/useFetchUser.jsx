const useFetchUser = userName => {
  const protocol = 'https://';
  const host = 'jsonplaceholder.typicode.com/';
  const param = `users?username=${userName}`;
  const url = `${protocol}${host}${param}`;

  return fetch(url)
    .then(response => response.json())
    .then(data => data);
};


export default useFetchUser;
