app.controller('AddEntryCtrl', function($scope, EntryFact) {

$scope.editing = false

const getEntries = () => {
  EntryFact.getAll()
    .then((entries) => {
      console.log(entries)
      $scope.entries = entries.entries
      $scope.$apply()
    })
  }

getEntries()
})
