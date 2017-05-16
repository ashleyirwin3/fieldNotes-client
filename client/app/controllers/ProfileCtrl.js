app.controller('ProfileCtrl', function($scope, EntryFact) {
  function getAllEntries() {
    EntryFact.getEntries()
    .then((res) => {
    $scope.entries= res.data
    console.log($scope.entries)
  })
}
  $scope.addEntry = (entryObject) => {
    console.log(entryObject)
    EntryFact.addEntry(entryObject)
    .then((res) => {
      console.log(res)
      getAllEntries();
    })
    .catch((err) => {
      console.log(err, 'testing')
    })
  }
  getAllEntries()
})
