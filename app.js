(() => {
  "use strict";

  const SVG_NS = "http://www.w3.org/2000/svg";
  const C = 500;            // viewBox merkezi
  const R_HUB = 80;         // orta düğme
  const R_CAT = 170;        // kategori halkası dış yarıçapı
  const R_GRP = 268;        // alt kategori halkası dış yarıçapı
  const R_ITEM = 470;       // öneri halkası dış yarıçapı
  const R_RIM = 494;        // dış çerçeve
  const LIGHTS = 48;

  const data = window.REHBER;

  // Tüm önerileri sırayla düzleştir
  const items = [];
  data.forEach((cat, ci) => {
    cat.groups.forEach((grp, gi) => {
      grp.items.forEach((name) => items.push({ name, ci, gi, cat, grp }));
    });
  });
  const N = items.length;
  const STEP = 360 / N;

  const wheel = document.getElementById("wheel");
  const rotor = document.getElementById("rotor");
  const lightsG = document.getElementById("lights");
  const pointer = document.getElementById("pointer");
  const spinBtns = [document.getElementById("spinBtn"), document.getElementById("spinBtn2")];
  const soundBtn = document.getElementById("soundBtn");
  const modal = document.getElementById("modal");

  // ---------- Geometri yardımcıları ----------
  const pt = (r, a) => {
    const rad = (a * Math.PI) / 180;
    return [C + r * Math.sin(rad), C - r * Math.cos(rad)];
  };
  const f = (n) => n.toFixed(2);

  function sector(r0, r1, a0, a1) {
    const large = a1 - a0 > 180 ? 1 : 0;
    const [x0, y0] = pt(r1, a0);
    const [x1, y1] = pt(r1, a1);
    const [x2, y2] = pt(r0, a1);
    const [x3, y3] = pt(r0, a0);
    return `M${f(x0)} ${f(y0)} A${r1} ${r1} 0 ${large} 1 ${f(x1)} ${f(y1)} ` +
           `L${f(x2)} ${f(y2)} A${r0} ${r0} 0 ${large} 0 ${f(x3)} ${f(y3)} Z`;
  }

  function el(tag, attrs, parent) {
    const node = document.createElementNS(SVG_NS, tag);
    for (const k in attrs) node.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(node);
    return node;
  }

  // Metni dengeli iki satıra böl
  function twoLines(text) {
    const words = text.split(" ");
    if (words.length < 2) return [text];
    let best = null;
    for (let i = 1; i < words.length; i++) {
      const a = words.slice(0, i).join(" ");
      const b = words.slice(i).join(" ");
      const score = Math.max(a.length, b.length);
      if (!best || score < best.score) best = { score, lines: [a, b] };
    }
    return best.lines;
  }

  // Radyal metin: merkezden dışa doğru okunur, sol yarıda ters çevrilir
  function radialText(parent, mid, r, lines, cls, anchorMode) {
    const flip = mid > 180;
    const rot = flip ? mid + 90 : mid - 90;
    const g = el("g", { transform: `rotate(${f(rot)} ${C} ${C})` }, parent);
    let anchor = "middle";
    if (anchorMode === "outer") anchor = flip ? "start" : "end";
    const x = C + (flip ? -r : r);
    const lh = 12.5;
    lines.forEach((line, i) => {
      const y = C + (i - (lines.length - 1) / 2) * lh;
      const t = el("text", {
        x: f(x), y: f(y), class: cls,
        "text-anchor": anchor, "dominant-baseline": "central"
      }, g);
      t.textContent = line;
    });
    return g;
  }

  // ---------- Çarkı çiz ----------
  const itemNodes = [];
  const grpNodes = [];
  const catNodes = [];

  const itemLayer = el("g", {}, rotor);
  const grpLayer = el("g", {}, rotor);
  const catLayer = el("g", {}, rotor);
  const lineLayer = el("g", {}, rotor);

  let idx = 0;
  data.forEach((cat, ci) => {
    const catStart = idx * STEP;
    const gNodes = [];
    cat.groups.forEach((grp, gi) => {
      const grpStart = idx * STEP;
      grp.items.forEach((name) => {
        const a0 = idx * STEP;
        const a1 = a0 + STEP;
        const g = el("g", { class: "seg seg-item" }, itemLayer);
        el("path", { d: sector(R_GRP, R_ITEM, a0, a1), fill: cat.light, stroke: "#2b2b2e", "stroke-width": 0.7 }, g);
        radialText(g, a0 + STEP / 2, R_ITEM - 12, [name], "t-item", "outer");
        itemNodes.push(g);
        idx++;
      });
      const grpEnd = idx * STEP;
      const g = el("g", { class: "seg seg-grp" }, grpLayer);
      el("path", { d: sector(R_CAT, R_GRP, grpStart, grpEnd), fill: cat.sub, stroke: "#1d1d1f", "stroke-width": 1.6 }, g);
      radialText(g, (grpStart + grpEnd) / 2, (R_CAT + R_GRP) / 2, twoLines(grp.name), "t-grp", "middle");
      gNodes.push(g);
    });
    grpNodes.push(gNodes);

    const catEnd = idx * STEP;
    const mid = (catStart + catEnd) / 2;
    const g = el("g", { class: "seg seg-cat" }, catLayer);
    el("path", { d: sector(R_HUB, R_CAT, catStart, catEnd), fill: cat.color, stroke: "#1d1d1f", "stroke-width": 2.5 }, g);

    // Kategori adı: teğetsel, alt yarıda ters çevrilir
    const flip = mid > 90 && mid < 270;
    const rot = flip ? mid - 180 : mid;
    const tg = el("g", { transform: `rotate(${f(rot)} ${C} ${C})` }, g);
    const rMid = (R_HUB + R_CAT) / 2 + 2;
    const rows = [{ text: cat.icon, cls: "t-icon", off: -27 }];
    twoLines(cat.name).forEach((line, i) => rows.push({ text: line, cls: "t-cat", off: i * 16 }));
    rows.forEach((row) => {
      const y = flip ? C + rMid + row.off : C - rMid + row.off;
      const t = el("text", { x: C, y: f(y), class: row.cls, "text-anchor": "middle", "dominant-baseline": "central" }, tg);
      t.textContent = row.text;
    });
    catNodes.push(g);

    // Kategori sınır çizgisi
    const [x0, y0] = pt(R_HUB, catStart);
    const [x1, y1] = pt(R_ITEM, catStart);
    el("line", { x1: f(x0), y1: f(y0), x2: f(x1), y2: f(y1), stroke: "#1d1d1f", "stroke-width": 2.5 }, lineLayer);
  });

  el("circle", { cx: C, cy: C, r: R_ITEM, fill: "none", stroke: "#1d1d1f", "stroke-width": 2 }, lineLayer);
  el("circle", { cx: C, cy: C, r: R_HUB, fill: "#faf8f2", stroke: "#1d1d1f", "stroke-width": 3 }, lineLayer);

  // Dış çerçeve ve ışıklar (dönmez)
  el("path", {
    d: `M${C} ${C - R_RIM} A${R_RIM} ${R_RIM} 0 1 1 ${C - 0.01} ${C - R_RIM} Z ` +
       `M${C} ${C - R_ITEM} A${R_ITEM} ${R_ITEM} 0 1 0 ${C + 0.01} ${C - R_ITEM} Z`,
    fill: "#2a2a2e", "fill-rule": "evenodd"
  }, lightsG);
  const lights = [];
  for (let i = 0; i < LIGHTS; i++) {
    const [x, y] = pt((R_RIM + R_ITEM) / 2, (i + 0.5) * (360 / LIGHTS));
    lights.push(el("circle", { cx: f(x), cy: f(y), r: 5.5, class: "light" + (i % 2 ? "" : " on") }, lightsG));
  }

  // Metin stilleri
  const style = el("style", {}, wheel);
  style.textContent = `
    .t-item { font-size: 13px; font-weight: 600; fill: #1d1d1f; }
    .t-grp  { font-size: 11px; font-weight: 700; fill: #fff; }
    .t-cat  { font-size: 13.5px; font-weight: 800; fill: #fff; }
    .t-icon { font-size: 22px; fill: #fff; }
    .seg-item.win .t-item { font-weight: 800; }
  `;

  // ---------- Ses ----------
  let audio = null;
  let soundOn = true;
  try { soundOn = localStorage.getItem("cark-ses") !== "0"; } catch (e) { /* yoksay */ }
  const renderSound = () => {
    soundBtn.textContent = soundOn ? "🔊 Ses açık" : "🔇 Ses kapalı";
    soundBtn.setAttribute("aria-pressed", String(soundOn));
  };
  renderSound();
  soundBtn.addEventListener("click", () => {
    soundOn = !soundOn;
    try { localStorage.setItem("cark-ses", soundOn ? "1" : "0"); } catch (e) { /* yoksay */ }
    renderSound();
  });

  function ensureAudio() {
    if (!audio) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (Ctx) audio = new Ctx();
    }
    if (audio && audio.state === "suspended") audio.resume();
  }

  function tone(freq, start, dur, type, vol) {
    if (!audio || !soundOn) return;
    const t0 = audio.currentTime + start;
    const o = audio.createOscillator();
    const g = audio.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t0);
    g.gain.setValueAtTime(vol, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g).connect(audio.destination);
    o.start(t0);
    o.stop(t0 + dur + 0.02);
  }
  const tickSound = () => tone(1400, 0, 0.035, "square", 0.04);
  const winSound = () => {
    [523.25, 659.25, 783.99, 1046.5].forEach((fr, i) => tone(fr, i * 0.11, 0.35, "triangle", 0.18));
    tone(1318.5, 0.48, 0.6, "triangle", 0.14);
  };

  // ---------- Dönüş ----------
  let rotation = 0;
  let spinning = false;
  const mod = (n, m) => ((n % m) + m) % m;
  const indexAt = (rot) => Math.floor(mod(-rot, 360) / STEP) % N;
  const setRotation = (rot) => rotor.setAttribute("transform", `rotate(${rot.toFixed(3)} ${C} ${C})`);
  const easeOut = (t) => 1 - Math.pow(1 - t, 4);

  function clearHighlight() {
    wheel.classList.remove("done");
    wheel.querySelectorAll(".win").forEach((n) => n.classList.remove("win"));
  }

  function spin() {
    if (spinning) return;
    spinning = true;
    ensureAudio();
    closeModal();
    clearHighlight();
    spinBtns.forEach((b) => (b.disabled = true));

    const target = Math.floor(Math.random() * N);
    const offset = 0.2 + Math.random() * 0.6;
    const targetAngle = (target + offset) * STEP;

    rotation = mod(rotation, 360);
    const turns = 6 + Math.floor(Math.random() * 3);
    const delta = turns * 360 + mod(-targetAngle - rotation, 360);
    const start = rotation;
    const duration = 6500 + Math.random() * 1500;
    const t0 = performance.now();
    let lastIdx = indexAt(start);
    let lastTick = 0;
    let lightPhase = 0;

    function frame(now) {
      const t = Math.min(1, (now - t0) / duration);
      rotation = start + delta * easeOut(t);
      setRotation(rotation);

      const cur = indexAt(rotation);
      if (cur !== lastIdx) {
        lastIdx = cur;
        if (now - lastTick > 45) {
          lastTick = now;
          tickSound();
          pointer.classList.remove("tick");
          pointer.getBoundingClientRect(); // animasyonu yeniden tetikle
          pointer.classList.add("tick");
        }
      }

      // Işık kayan animasyonu
      const phase = Math.floor(now / 90) % 2;
      if (phase !== lightPhase) {
        lightPhase = phase;
        lights.forEach((l, i) => l.classList.toggle("on", (i + phase) % 2 === 0));
      }

      if (t < 1) requestAnimationFrame(frame);
      else finish(indexAt(rotation));
    }
    requestAnimationFrame(frame);
  }

  function finish(winIdx) {
    spinning = false;
    spinBtns.forEach((b) => (b.disabled = false));
    const it = items[winIdx];

    wheel.style.setProperty("--win", it.cat.color);
    itemNodes[winIdx].classList.add("win");
    grpNodes[it.ci][it.gi].classList.add("win");
    catNodes[it.ci].classList.add("win");
    // Kazanan dilimi en üste taşı ki parlaması diğerlerinin altında kalmasın
    itemNodes[winIdx].parentNode.appendChild(itemNodes[winIdx]);
    wheel.classList.add("done");

    winSound();
    confetti(it.cat.color);
    setTimeout(() => openModal(it), 900);
  }

  // ---------- Sonuç kartı ----------
  function openModal(it) {
    document.documentElement.style.setProperty("--accent", it.cat.color);
    document.getElementById("resultIcon").textContent = it.cat.icon;
    document.getElementById("resultItem").textContent = it.name;
    document.getElementById("resultCat").textContent = it.cat.name;
    document.getElementById("resultGroup").textContent = it.grp.name;
    document.getElementById("mapLink").href =
      "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(it.name + ", İstanbul");
    modal.hidden = false;
    document.getElementById("againBtn").focus();
  }
  function closeModal() { modal.hidden = true; }

  document.getElementById("againBtn").addEventListener("click", spin);
  document.getElementById("closeBtn").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  spinBtns.forEach((b) => b.addEventListener("click", spin));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
    if ((e.code === "Space" || e.key === "Enter") && !spinning && e.target === document.body) {
      e.preventDefault();
      spin();
    }
  });

  // ---------- Konfeti ----------
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  let parts = [];
  let confettiRunning = false;

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = innerWidth * dpr;
    canvas.height = innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  addEventListener("resize", resize);
  resize();

  function confetti(mainColor) {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const palette = [mainColor, "#ffd34d", "#ffffff", ...data.map((c) => c.color)];
    const W = innerWidth, H = innerHeight;
    for (let b = 0; b < 2; b++) {
      const ox = b === 0 ? W * 0.1 : W * 0.9;
      for (let i = 0; i < 110; i++) {
        const ang = (b === 0 ? -60 : -120) + (Math.random() - 0.5) * 50;
        const sp = 9 + Math.random() * 11;
        parts.push({
          x: ox, y: H * 0.85,
          vx: Math.cos((ang * Math.PI) / 180) * sp,
          vy: Math.sin((ang * Math.PI) / 180) * sp,
          w: 6 + Math.random() * 6, h: 4 + Math.random() * 6,
          rot: Math.random() * Math.PI, vr: (Math.random() - 0.5) * 0.3,
          color: palette[Math.floor(Math.random() * palette.length)],
          life: 0
        });
      }
    }
    if (!confettiRunning) { confettiRunning = true; requestAnimationFrame(drawConfetti); }
  }

  function drawConfetti() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    parts.forEach((p) => {
      p.vy += 0.32; p.vx *= 0.99; p.vy *= 0.99;
      p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.life++;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = Math.max(0, 1 - p.life / 240);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h * Math.abs(Math.cos(p.rot * 2)));
      ctx.restore();
    });
    parts = parts.filter((p) => p.life < 240 && p.y < innerHeight + 40);
    if (parts.length) requestAnimationFrame(drawConfetti);
    else { confettiRunning = false; ctx.clearRect(0, 0, innerWidth, innerHeight); }
  }

  setRotation(0);
})();
