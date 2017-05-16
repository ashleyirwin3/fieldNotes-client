app.factory('UserFact', function($http) {
  return{
    addUser : (userObject) => {
      return $http
      .post(`http://localhost:3000/api/v1/user`, userObject)
      .then((res) => {
        return res;
      })
      .catch((res) => {
        console.error(res);
      })
    }
  }
})
