app.controller('AddEntryCtrl', function($scope, EntryFact) {
  EntryFact.getEntries()
  .then((res) => {
    $scope.entries= res.data
    console.log($scope.entries)
  })
})
