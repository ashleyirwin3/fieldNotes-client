app.factory('EntryFact', function($http) {
  return{
    getEntries : () => {
      return $http
      .get(`http://localhost:3000/api/v1/profile`)
      .then((res) => {
          return res
      })
      .catch((res) => {
          console.error(res);
      })
    }
  }
})
