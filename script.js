// Google Sheets waitlist form
// Paste your deployed Google Apps Script Web App URL below.
const GOOGLE_SHEETS_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbw_18Dp0l_sHMXNU5Iqd5GEdrXzPq3yNS64fVpyTfQHEbN3WV3obGTsfI_2dwlFZh4R/exec";

const waitlistForm = document.getElementById("waitlist-form");

if (waitlistForm) {
  waitlistForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("waitlist-name").value.trim();
    const email = document.getElementById("waitlist-email").value.trim();
    const message = document.getElementById("form-message");
    const button = waitlistForm.querySelector("button[type='submit']");

    if (!name || !email) return;

    if (GOOGLE_SHEETS_WEB_APP_URL.includes("PASTE_YOUR")) {
      message.textContent = "Add your Google Sheets Web App URL in script.js first.";
      return;
    }

    button.disabled = true;
    button.innerHTML = "Joining...";

    try {
      await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ name, email })
      });

      message.textContent = "You're on the list. See you soon.";
      waitlistForm.reset();
    } catch (error) {
      message.textContent = "Something went wrong. Please try again.";
    } finally {
      button.disabled = false;
      button.innerHTML = 'Join the waitlist <span>↗</span>';
    }
  });
}

// Smooth scrolling for navigation links.
document.querySelectorAll('a[href^="#"]').forEach(link=>{link.addEventListener('click',event=>{const target=document.querySelector(link.getAttribute('href'));if(target){event.preventDefault();target.scrollIntoView({behavior:'smooth'});}})});

// Mood chips in the visual app preview.
document.querySelectorAll('.chip').forEach(chip=>{chip.addEventListener('click',()=>{document.querySelectorAll('.chip').forEach(item=>item.classList.remove('active'));chip.classList.add('active');});});
document.querySelectorAll('.dash-chip').forEach(chip=>{chip.addEventListener('click',()=>{document.querySelectorAll('.dash-chip').forEach(item=>item.classList.remove('selected'));chip.classList.add('selected');});});
