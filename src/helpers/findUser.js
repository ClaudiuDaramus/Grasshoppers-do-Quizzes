const findUser = (username, password) => {
  if(username === 'admin' && password === 'password') {
    return {
      username,
    }
  } else {
    return null;
  }
}
  
export default findUser;