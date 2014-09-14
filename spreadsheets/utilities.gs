/**
 * Retrieves all the rows in the active spreadsheet that contain data and logs the
 * values for each row.
 * For more information on using the Spreadsheet API, see
 * https://developers.google.com/apps-script/service_spreadsheet
 */
function readRows() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var rows = sheet.getDataRange();
  var numRows = rows.getNumRows();
  var values = rows.getValues();

  for (var i = 0; i <= numRows - 1; i++) {
    var row = values[i];
    Logger.log(row);
  }
};

/**
 * Adds a custom menu to the active spreadsheet, containing a single menu item
 * for invoking the readRows() function specified above.
 * The onOpen() function, when defined, is automatically invoked whenever the
 * spreadsheet is opened.
 * For more information on using the Spreadsheet API, see
 * https://developers.google.com/apps-script/service_spreadsheet
 */
function onOpen() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var entries = [{
    name : "Read Data",
    functionName : "readRows"
  }];
  spreadsheet.addMenu("Script Center Menu", entries);
};

function alternateColor() {
  var totalRows = SpreadsheetApp.getActiveRange().getNumRows();
  var totalColumns = SpreadsheetApp.getActiveRange().getNumColumns();
  var startRow = SpreadsheetApp.getActiveRange().getRow();
  var startColumn = SpreadsheetApp.getActiveRange().getColumn();
  var sheet = SpreadsheetApp.getActiveSheet();
  var row = startRow;

  while (row < totalRows + startRow) {
    var column = startColumn
    while (column < totalColumns+startColumn) {
      if (row % 2 == 0) {
        sheet.getRange(row, column).setBackgroundColor("#F2F2F2");
      }
      column++;
    }
    row++;
  }
}

