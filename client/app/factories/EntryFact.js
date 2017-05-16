app.factory('EntryFact', function($http) {

  const server = `http://localhost:3000/api/v1`

  return {
    getAll: function() {
      return new Promise((resolve, reject) => {
        $http.get(`${server}/profile`)
          .then((data) => {
            resolve(data.data)
          })
      })
    }
  }
})
