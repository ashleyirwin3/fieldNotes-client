app.controller('AddEntryCtrl', function($scope, EntryFact) {
  EntryFact.getEntries()
  .then((res) => {
    $scope.entries= res.data
    console.log($scope.entries)
  })
// $scope.editing = false

// const getEntries = () => {
//   EntryFact.getAll()
//     .then((entries) => {
//       console.log(entries)
//       $scope.entries = entries.entries
//       $scope.$apply()
//     })
//   }

})
