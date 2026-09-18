# isWatching — Revised Landing Page

Dark, smooth landing page for isWatching.

## Files
- `index.html` — page structure
- `style.css` — visual design and responsive layout
- `script.js` — smooth scrolling, UI interactions, and Google Sheets waitlist form
- `logo.png` — isWatching logo

## Before uploading to GitHub
Keep the same Google Apps Script Web App URL from the current live version in `script.js`:

```js
const GOOGLE_SHEETS_WEB_APP_URL = "YOUR_EXISTING_WEB_APP_URL";
```

Do not create a new Apps Script deployment. The existing Google Sheet integration can stay as-is.

## GitHub Pages
Replace the existing files in the current `isWatching` repository. The GitHub Pages URL does not need to change.


## V2 visual fix
This build includes explicit logo sizing and a critical dark-background fallback to prevent the hosted page from rendering the logo at full image size.
