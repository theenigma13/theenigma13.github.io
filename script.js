
(function () {
  let unregisterHandlerFunctions = [];

  $(document).ready(function () {
    tableau.extensions.initializeAsync().then(function () {
      let dashboard = tableau.extensions.dashboardContent.dashboard;
      let fieldName = 'Delivery Date';
      updateFilterRange(dashboard, fieldName);
    }, function (err) {
      // Something went wrong in initialization.
      console.log('Error while Initializing: ' + err.toString());
    });
  });

  
  function updateFilterRange(worksheet, fieldName) {
    let today = new Date();
    let lastYear = new Date();
    lastYear.setDate(today.getDay()-14);
    dashboard.applyRangeFilterAsync(fieldName, { min: lastYear, max: today});
  }
})