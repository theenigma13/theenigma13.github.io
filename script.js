tableau.extensions.initializeAsync().then(() => {
    let dashboard = tableau.extensions.dashboardContent.dashboard;
    let selectedWorksheet = dashboard.worksheets.find(w => w.name === 'Historical Trend');
    let fieldName = 'Date';
    updateFilterRange(selectedWorksheet, fieldName);
  });
  
  function updateFilterRange(worksheet, fieldName) {
    let today = new Date();
    let lastYear = new Date();
    lastYear.setDate(today.getDay()-14);
    worksheet.applyRangeFilterAsync(["Delivery Date"], { min: lastYear, max: today});
  }