# isWatching Landing Page — Google Sheets Form

Landing page for isWatching with a waitlist form connected to Google Sheets through Google Apps Script.

## Connect the form

Open `script.js` and find:

`const GOOGLE_SHEETS_WEB_APP_URL = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";`

Replace the placeholder with your deployed Apps Script Web App URL, then save.

The form sends Timestamp, Name, and Email to the Google Sheet.

The Apps Script deployment must use **Who has access: Anyone**.

For this bootcamp/demo, the frontend uses `no-cors` to submit the form to Apps Script.
