// Logica dell'app: tab dei giorni con scorrimento orizzontale, pannello del giorno, countdown

const ICONS = {
  flight: "✈️",
  city: "🏙️",
  glacier: "🧊",
  border: "🛂",
  mountain: "⛰️"
};

const FLAGS = { AR: "🇦🇷", CL: "🇨🇱" };
const COUNTRY_NAMES = { AR: "Argentina", CL: "Cile" };

let currentIndex = 0;

function flagsFor(d) {
  return d.countryFrom ? FLAGS[d.countryFrom] + FLAGS[d.country] : FLAGS[d.country];
}

function countryLabel(d) {
  return d.countryFrom
    ? `${COUNTRY_NAMES[d.countryFrom]} → ${COUNTRY_NAMES[d.country]}`
    : COUNTRY_NAMES[d.country];
}

function renderTabs() {
  const bar = document.getElementById("tabs-scroll");
  bar.innerHTML = TRIP.days
    .map(
      (d, i) => `
      <button class="tab c-${d.country}" role="tab" data-index="${i}" id="tab-${i}"
              aria-selected="false" aria-controls="day-panel"
              title="Giorno ${d.day} · ${countryLabel(d)}">
        <span class="tab-flag" aria-hidden="true">${flagsFor(d)}</span>
        <span class="tab-text">
          <span class="tab-day">Giorno ${d.day}</span>
          <span class="tab-date">${d.tabLabel}</span>
        </span>
      </button>`
    )
    .join("");
}

function activityHTML(a) {
  const link = a.link
    ? `<a class="activity-link" href="${a.link.url}" target="_blank" rel="noopener">🔗 ${a.link.label}</a>`
    : "";
  return `
    <div class="activity">
      <div class="activity-title">${a.title}</div>
      ${a.desc ? `<div class="activity-desc">${a.desc}</div>` : ""}
      ${link}
    </div>`;
}

function renderPanel(i) {
  const d = TRIP.days[i];

  const flight = d.flight
    ? `<div class="flight-box">
         <span class="flight-route">✈️ ${d.flight.route}</span>
         ${d.flight.carrier ? `<span class="sep">·</span><span>${d.flight.carrier}</span>` : ""}
         <span class="sep">·</span><span>${d.flight.depart} → ${d.flight.arrive}</span>
       </div>`
    : "";

  const overnight = d.overnight
    ? `<div class="overnight-box">🛏️ Notte a ${d.overnight}</div>`
    : "";

  const infoRow = flight || overnight ? `<div class="info-row">${flight}${overnight}</div>` : "";

  const link = d.link
    ? `<a class="day-link" href="${d.link.url}" target="_blank" rel="noopener">🔗 ${d.link.label}</a>`
    : "";

  const activities = d.activities.length
    ? `<div class="activities">${d.activities.map(activityHTML).join("")}</div>`
    : `<p class="empty-note">🌤️ Giornata libera, nessuna tappa fissata.</p>`;

  const prev = TRIP.days[i - 1];
  const next = TRIP.days[i + 1];

  document.getElementById("day-panel").innerHTML = `
    <div class="panel">
      <div class="panel-head">
        <div class="panel-badge">${ICONS[d.icon] || "📍"}</div>
        <div>
          <div class="panel-eyebrow">
            <span aria-hidden="true">${flagsFor(d)}</span>
            <span>Giorno ${d.day} · ${d.dateLabel} · ${countryLabel(d)}</span>
          </div>
          <h2 class="panel-title">${d.title}</h2>
          <div class="panel-location">${d.location}</div>
        </div>
      </div>
      ${infoRow}
      ${d.intro ? `<p class="panel-intro">${d.intro}</p>` : ""}
      ${link}
      ${activities}
      <div class="panel-nav">
        <button class="nav-btn" id="btn-prev" ${prev ? "" : "disabled"}>
          ${prev ? `${prev.dateLabel} · ${prev.title}` : "Inizio"}
        </button>
        <button class="nav-btn" id="btn-next" ${next ? "" : "disabled"}>
          ${next ? `${next.dateLabel} · ${next.title}` : "Fine"}
        </button>
      </div>
    </div>`;

  document.getElementById("btn-prev").addEventListener("click", () => selectDay(i - 1));
  document.getElementById("btn-next").addEventListener("click", () => selectDay(i + 1));
}

function selectDay(i) {
  if (i < 0 || i >= TRIP.days.length) return;
  currentIndex = i;
  const d = TRIP.days[i];

  // ridipinge l'accento della pagina col colore del paese
  document.body.dataset.country = d.country;

  document.querySelectorAll(".tab").forEach((t, idx) => {
    const active = idx === i;
    t.classList.toggle("active", active);
    t.setAttribute("aria-selected", active ? "true" : "false");
    t.setAttribute("tabindex", active ? "0" : "-1");
  });

  const activeTab = document.getElementById("tab-" + i);
  if (activeTab) activeTab.scrollIntoView({ block: "nearest", inline: "center" });

  renderPanel(i);
  history.replaceState(null, "", "#giorno-" + d.day);
}

function setupTabs() {
  document.getElementById("tabs-scroll").addEventListener("click", e => {
    const tab = e.target.closest(".tab");
    if (tab) selectDay(Number(tab.dataset.index));
  });

  document.addEventListener("keydown", e => {
    if (e.target.closest("a, input, textarea")) return;
    if (e.key === "ArrowRight") selectDay(currentIndex + 1);
    if (e.key === "ArrowLeft") selectDay(currentIndex - 1);
  });
}

function renderCountdown() {
  const el = document.getElementById("countdown-value");
  const target = new Date(TRIP.startDate).getTime();

  function tick() {
    const diff = target - Date.now();
    if (diff <= 0) {
      document.getElementById("countdown-pill").innerHTML = "🎉 <strong>Buon viaggio!</strong>";
      return;
    }
    const day = 86400000;
    const days = Math.floor(diff / day);
    const hours = Math.floor((diff % day) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    el.textContent = `${days}g ${hours}h ${minutes}m`;
  }

  tick();
  setInterval(tick, 30000);
}

function initialIndexFromHash() {
  const match = (location.hash || "").match(/giorno-(\d+)/);
  if (!match) return 0;
  const idx = TRIP.days.findIndex(d => d.day === Number(match[1]));
  return idx >= 0 ? idx : 0;
}

function init() {
  document.getElementById("trip-title").textContent = TRIP.title;
  document.getElementById("trip-subtitle").textContent = TRIP.subtitle;
  document.getElementById("tz-note").textContent = TRIP.timezoneNote;
  renderTabs();
  setupTabs();
  renderCountdown();
  selectDay(initialIndexFromHash());
}

document.addEventListener("DOMContentLoaded", init);
