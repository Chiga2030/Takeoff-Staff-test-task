const useFetchUser = userName => {
  const protocol = 'https://';
  const host = 'jsonplaceholder.typicode.com/';
  const param = `users?username=${userName}`;
  const url = `${protocol}${host}${param}`;

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.length) {
        return data;
      } throw new Error('Username is not exsist');
    });
};


export default useFetchUser;
