// CONTENT SCRIPTS
const host = window.location.host,
  pattern = "youtube",
  isYoutube = host.match(new RegExp(pattern, "i"));
// style-scope ytd-display-ad-renderer
const Run = () => {
  requestAnimationFrame(Run);
  const skipAd = document.querySelector(".ytp-ad-skip-button.ytp-button");
  if (skipAd) {
    skipAd.click();
  }
};

// **************** CODE *******************
if (isYoutube) {
  Run();
}
