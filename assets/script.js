(() => {
  // Year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile nav
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("navmenu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu when clicking a link (mobile)
    menu.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        if (menu.classList.contains("open")) {
          menu.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  // FAQ accordion
  document.querySelectorAll("[data-accordion] .faq-q").forEach(btn => {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      const answer = btn.nextElementSibling;

      btn.setAttribute("aria-expanded", String(!expanded));
      if (answer) answer.hidden = expanded;

      const icon = btn.querySelector(".faq-icon");
      if (icon) icon.textContent = expanded ? "+" : "–";
    });
  });

  // Demo subscribe button
  const fakeBtn = document.getElementById("fakeSubscribe");
  const subMsg = document.getElementById("subMsg");
  if (fakeBtn && subMsg) {
    fakeBtn.addEventListener("click", () => {
      subMsg.textContent = "Danke! (Demo) – In der echten Seite würdest du hier z. B. eine Mailchimp/CRM-Anbindung nutzen.";
    });
  }
})();
