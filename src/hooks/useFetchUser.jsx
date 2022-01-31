const useFetchUser = userName => {
  const protocol = 'https://';
  const host = 'jsonplaceholder.typicode.com/';
  const param = `users?username=${userName}`;
  const url = `${protocol}${host}${param}`;

  return new Promise(resolve => setTimeout(() => resolve(), 2000))
    .then(() => fetch(url))
    .then(response => response.json())
    .then(data => data);
};


export default useFetchUser;
