
(() => {
  const wa = "972546980558";
  document.querySelectorAll("button.landing-cta").forEach((b) => {
    const d = b.nextElementSibling;
    if (d && d.tagName === "DIALOG") b.addEventListener("click", () => d.showModal());
  });
  document.querySelectorAll("dialog button[aria-label='סגירה']").forEach((b) => b.addEventListener("click", () => b.closest("dialog").close()));
  document.querySelectorAll("dialog form").forEach((f) => f.addEventListener("submit", (e) => {
    e.preventDefault();
    const v = (n) => (f.elements[n] && f.elements[n].value || "").trim();
    if (v("website")) return;
    const prefs = ["pref1", "pref2", "pref3"].map(v).filter(Boolean);
    const lines = [
      "היי מיכאל, אשמח לשיחת מיפוי של 15 דקות.",
      "שם: " + v("name"),
      v("business") && "עסק: " + v("business"),
      "טלפון: " + v("phone"),
      prefs.length && "זמנים נוחים: " + prefs.join(" / "),
      v("pain") && "מה הכי גוזל זמן: " + v("pain"),
    ].filter(Boolean);
    window.location.href = "https://wa.me/" + wa + "?text=" + encodeURIComponent(lines.join("\n"));
  }));
})();
