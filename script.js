// ══════════════════════════════════════════
//  DATA CONFIG
// ══════════════════════════════════════════
const TICKETS = {
  both: [
    {
      id: 'both-ga',
      name: 'General Admission',
      price: 239.99,
      tag: null,
      perks: [
        'Access to all debates on Saturday July 25 and Sunday July 26',
      ],
      hasDinner: false,
      dinnerNights: []
    },
    {
      id: 'both-vip',
      name: 'VIP',
      price: 349.99,
      tag: null,
      perks: [
        'Access to all debates both days',
        'Personalized name tag and lanyard',
        'Signed emblem page by all debaters (first 60 VIP+ holders)',
        'Meet & greet + professional photo with your favorite debater (one day)',
      ],
      hasDinner: false,
      dinnerNights: []
    },
    {
      id: 'both-svip',
      name: 'Super VIP',
      price: 449.99,
      tag: 'POPULAR',
      recommended: true,
      perks: [
        'Access to all debates both days',
        'Personalized name tag and lanyard',
        'Signed emblem page by all debaters (first 60 VIP+ holders)',
        'Meet & greet + professional photo with your favorite debater on BOTH days',
        'On-site lunch social both Saturday and Sunday (speakers attend)',
      ],
      hasDinner: false,
      dinnerNights: []
    },
    {
      id: 'both-uvip',
      name: 'Ultra VIP',
      price: 524.99,
      tag: 'ULTIMATE',
      perks: [
        'Access to all debates both days',
        'Personalized name tag and lanyard',
        'Signed emblem page by all debaters (first 60 VIP+ holders)',
        'Meet & greet + professional photo with your favorite debater on BOTH days',
        'On-site lunch social both days (speakers attend)',
        'Reserved seating in the first few rows',
        'Small group dinner with speaker of your choice — one night (Saturday or Sunday)',
      ],
      hasDinner: true,
      dinnerNights: ['Saturday Night', 'Sunday Night']
    },
    {
      id: 'both-allaccess',
      name: 'All Access',
      price: 674.99,
      tag: 'ULTIMATE',
      perks: [
        'Access to all debates both days',
        'Personalized name tag and lanyard',
        'Signed emblem page by all debaters (first 60 VIP+ holders)',
        'Meet & greet + professional photo with your favorite debater',
        'On-site lunch social both days (Andrew & Rachel Wilson attend)',
        'Small group dinner with speaker of your choice — BOTH Saturday AND Sunday',
        'Personally reserved seat (your name) in the first two rows',
        'Exclusive DEBATECON 8 swag bag',
      ],
      hasDinner: true,
      dinnerNights: ['Both Nights']
    },
  ],
  saturday: [
    {
      id: 'sat-ga',
      name: 'General Admission',
      price: 149.99,
      tag: null,
      perks: ['Access to all debates on Saturday July 25'],
      hasDinner: false,
      dinnerNights: []
    },
    {
      id: 'sat-vip',
      name: 'VIP',
      price: 199.99,
      tag: null,
      perks: [
        'Access to all debates on Saturday July 25',
        'Personalized name tag and lanyard',
        'Meet & greet + professional photo with your favorite debater',
      ],
      hasDinner: false,
      dinnerNights: []
    },
    {
      id: 'sat-svip',
      name: 'Super VIP',
      price: 249.99,
      tag: 'POPULAR',
      recommended: true,
      perks: [
        'Access to all debates on Saturday July 25',
        'Personalized name tag and lanyard',
        'Meet & greet + professional photo with your favorite debater',
        'On-site lunch social Saturday (speakers attend)',
      ],
      hasDinner: false,
      dinnerNights: []
    },
    {
      id: 'sat-uvip',
      name: 'Ultra VIP',
      price: 299.99,
      tag: 'ULTIMATE',
      perks: [
        'Access to all debates on Saturday July 25',
        'Personalized name tag and lanyard',
        'Meet & greet + professional photo with your favorite debater',
        'On-site lunch social Saturday (speakers attend)',
        'Reserved seating in the first few rows',
        'Small group dinner with speaker of your choice Saturday night',
      ],
      hasDinner: true,
      dinnerNights: []
    },
  ],
  sunday: [
    {
      id: 'sun-ga',
      name: 'General Admission',
      price: 149.99,
      tag: null,
      perks: ['Access to all debates on Sunday July 26'],
      hasDinner: false,
      dinnerNights: []
    },
    {
      id: 'sun-vip',
      name: 'VIP',
      price: 199.99,
      tag: null,
      perks: [
        'Access to all debates on Sunday July 26',
        'Personalized name tag and lanyard',
        'Meet & greet + professional photo with your favorite debater',
      ],
      hasDinner: false,
      dinnerNights: []
    },
    {
      id: 'sun-svip',
      name: 'Super VIP',
      price: 249.99,
      tag: 'POPULAR',
      recommended: true,
      perks: [
        'Access to all debates on Sunday July 26',
        'Personalized name tag and lanyard',
        'Meet & greet + professional photo with your favorite debater',
        'On-site lunch social Sunday (speakers attend)',
      ],
      hasDinner: false,
      dinnerNights: []
    },
    {
      id: 'sun-uvip',
      name: 'Ultra VIP',
      price: 299.99,
      tag: 'ULTIMATE',
      perks: [
        'Access to all debates on Sunday July 26',
        'Personalized name tag and lanyard',
        'Meet & greet + professional photo with your favorite debater',
        'On-site lunch social Sunday (speakers attend)',
        'Reserved seating in the first few rows',
        'Small group dinner with speaker of your choice Sunday night',
      ],
      hasDinner: true,
      dinnerNights: []
    },
  ]
};

const SPEAKERS = [
  'Andrew Wilson', 'Rachel Wilson', 'Dr. James', 'Speaker TBA'
];

// Discount config — Phase 2 will validate against real DB
const DISCOUNTS = {
  student: { pct: 0.10, label: 'Student Discount (10%)' },
  military: {
    pct: 0.10,
    label: 'Military Discount (10%)',
    codes: ['MIL2026', 'MILITARY8', 'VETDC8'] // placeholder codes
  }
};

// ══════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════
let state = {
  currentStep: 0,
  selectedDay: null,
  selectedTier: null,
  qty: 1,
  attendees: [],
  dinnerSelections: [],
  discount: null,
  discountPct: 0,
};

// ══════════════════════════════════════════
//  STEP NAVIGATION
// ══════════════════════════════════════════
const screens = ['hero', 'day', 'tier', 'details', 'confirm'];
const stepNames = [null, 'day', 'tier', 'details', 'confirm'];

function goToStep(n) {
  // Hero vs content area
  const heroEl = document.getElementById('screen-hero');
  const contentEl = document.querySelector('.content');
  const pb = document.getElementById('progress-bar');

  if (n === 0) {
    heroEl.style.display = 'block';
    contentEl.style.display = 'none';
    pb.style.display = 'none';
  } else {
    heroEl.style.display = 'none';
    contentEl.style.display = 'block';
    pb.style.display = n < 4 ? 'block' : 'none';

    // Hide all screens inside content
    document.querySelectorAll('.content .screen').forEach(s => {
      s.style.display = 'none';
      s.classList.remove('active');
    });

    // Show target screen
    const target = stepNames[n];
    if (target) {
      const el = document.getElementById('screen-' + target);
      if (el) {
        el.style.display = 'block';
        el.classList.add('active');
      }
    }
  }

  updateProgress(n);
  state.currentStep = n;
  if (n === 2) renderTiers();
  if (n === 3) renderDetails();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateProgress(active) {
  for (let i = 1; i <= 4; i++) {
    const step = document.getElementById('step' + i);
    const line = document.getElementById('line' + i);
    step.classList.remove('active', 'done');
    if (line) line.classList.remove('done');
    if (i < active) { step.classList.add('done'); if (line) line.classList.add('done'); }
    else if (i === active) step.classList.add('active');
  }
}

// ══════════════════════════════════════════
//  DAY SELECTION
// ══════════════════════════════════════════
function selectDay(day, el) {
  state.selectedDay = day;
  state.selectedTier = null;
  document.querySelectorAll('.day-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  el.querySelector('.day-card-check').textContent = '✓';
  document.querySelectorAll('.day-card:not(.selected) .day-card-check').forEach(c => c.textContent = '');
  document.getElementById('btn-day-next').disabled = false;
}

// ══════════════════════════════════════════
//  TIER RENDERING
// ══════════════════════════════════════════
function renderTiers() {
  const tiers = TICKETS[state.selectedDay] || [];
  const dayLabels = { both: 'Both Days (Jul 25–26)', saturday: 'Saturday (Jul 25)', sunday: 'Sunday (Jul 26)' };
  document.getElementById('tier-sub').textContent = dayLabels[state.selectedDay];

  const grid = document.getElementById('tier-grid');
  grid.innerHTML = tiers.map((t, i) => `
    <div class="tier-card${t.recommended ? ' recommended' : ''}${t.tag === 'ULTIMATE' ? ' tier-ultimate' : ''}${t.id.includes('-ga') ? ' tier-ga' : ''}" id="tier-${t.id}" onclick="selectTier('${t.id}', this)" style="animation-delay:${i*0.06}s">
      <div class="tier-card-header">
        ${t.tag ? `<span class="tier-badge${t.id.includes('allaccess') ? ' gold' : t.tag === 'ULTIMATE' ? ' ultimate' : ''}">${t.tag}</span>` : '<span></span>'}
        <div class="tier-name">${t.name}</div>
        <div>
          <div class="tier-price">$${t.price.toFixed(2)}</div>
          <div class="tier-price-sub">per person</div>
        </div>
        <div class="tier-select-btn"></div>
      </div>
      <div class="tier-divider"></div>
      <div class="tier-perks">
        <ul class="tier-perks-list">
          ${t.perks.map(p => `<li>${p}</li>`).join('')}
        </ul>
      </div>
      <div class="tier-sponsor">
        Sponsored by <a href="https://mainefirstproject.org/" target="_blank" class="tier-sponsor-link">Maine First Project</a>
      </div>
    </div>
  `).join('');
}

function selectTier(id, el) {
  state.selectedTier = id;
  document.querySelectorAll('.tier-card').forEach(c => {
    c.classList.remove('selected');
    const btn = c.querySelector('.tier-select-btn');
    if (btn) btn.textContent = '';
  });
  el.classList.add('selected');
  const btn = el.querySelector('.tier-select-btn');
  if (btn) btn.textContent = '✓';
  document.getElementById('btn-tier-next').disabled = false;
}



// ══════════════════════════════════════════
//  DETAILS SCREEN
// ══════════════════════════════════════════
function renderDetails() {
  renderAttendees();
  renderDinnerSection();
  updateOrderSummary();
}

function changeQty(delta) {
  const newQty = Math.max(1, Math.min(10, state.qty + delta));
  state.qty = newQty;
  document.getElementById('qty-display').textContent = newQty;
  renderAttendees();
  renderDinnerSection();
  updateOrderSummary();
}

function renderAttendees() {
  const container = document.getElementById('attendee-forms');
  container.innerHTML = '';
  for (let i = 0; i < state.qty; i++) {
    container.innerHTML += `
      <div class="attendee-form">
        <div class="attendee-form-title">
          <div class="attendee-num">${i+1}</div>
          Ticket Holder ${i+1}
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">First Name</label>
            <input type="text" class="form-input" id="fname-${i}" placeholder="First name" oninput="updateOrderSummary()">
          </div>
          <div class="form-group">
            <label class="form-label">Last Name</label>
            <input type="text" class="form-input" id="lname-${i}" placeholder="Last name">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group full">
            <label class="form-label">Email Address</label>
            <input type="email" class="form-input" id="email-${i}" placeholder="email@example.com">
          </div>
        </div>
      </div>
    `;
  }
}

function renderDinnerSection() {
  const tier = getTierData();
  if (!tier || !tier.hasDinner) {
    document.getElementById('dinner-section').classList.remove('show');
    return;
  }
  document.getElementById('dinner-section').classList.add('show');

  const hasNightChoice = tier.dinnerNights && tier.dinnerNights.length > 0;
  const container = document.getElementById('dinner-forms');
  container.innerHTML = '';

  for (let i = 0; i < state.qty; i++) {
    const speakerOptions = SPEAKERS.map(s => `<option value="${s}">${s}</option>`).join('');
    const nightOptions = hasNightChoice
      ? tier.dinnerNights.map(n => `<option value="${n}">${n}</option>`).join('')
      : '';

    const nightSelector = hasNightChoice ? `
      <div class="dinner-select-group">
        <div class="dinner-select-label">Night</div>
        <div class="dinner-select-wrap">
          <select class="dinner-select" id="dinner-night-${i}">
            ${nightOptions}
          </select>
          <svg class="dinner-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
      </div>` : '';

    const gridCols = hasNightChoice ? 'dinner-selects-two' : 'dinner-selects-one';

    container.innerHTML += `
      <div class="dinner-card">
        <div class="dinner-card-title">
          <div class="dinner-card-num">${i+1}</div>
          <span>Ticket ${i+1} — Preferred Speaker</span>
        </div>
        <div class="dinner-selects ${gridCols}">
          <div class="dinner-select-group">
            <div class="dinner-select-label">Speaker</div>
            <div class="dinner-select-wrap">
              <select class="dinner-select" id="dinner-speaker-${i}">
                ${speakerOptions}
              </select>
              <svg class="dinner-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
          </div>
          ${nightSelector}
        </div>
      </div>
    `;
  }
}

function getTierData() {
  if (!state.selectedDay || !state.selectedTier) return null;
  return TICKETS[state.selectedDay].find(t => t.id === state.selectedTier);
}

function updateOrderSummary() {
  const tier = getTierData();
  if (!tier) return;

  const container = document.getElementById('order-lines');
  const fname = document.getElementById('fname-0');
  const nameDisplay = fname && fname.value ? fname.value + '...' : 'Attendee';

  const dayLabels = { both: 'Both Days', saturday: 'Saturday', sunday: 'Sunday' };
  const subtotal = tier.price * state.qty;
  const discountAmt = subtotal * state.discountPct;
  const total = subtotal - discountAmt;

  container.innerHTML = `
    <div class="order-line">
      <div class="order-line-name">
        ${tier.name}<br>
        <span style="font-size:12px;color:var(--text3)">${dayLabels[state.selectedDay]} × ${state.qty}</span>
      </div>
      <div class="order-line-price">$${(tier.price * state.qty).toFixed(2)}</div>
    </div>
  `;

  const discLine = document.getElementById('order-discount-line');
  if (state.discountPct > 0) {
    discLine.style.display = 'flex';
    document.getElementById('discount-label').textContent = state.discount;
    document.getElementById('discount-amount').textContent = `-$${discountAmt.toFixed(2)}`;
  } else {
    discLine.style.display = 'none';
  }

  document.getElementById('order-total').textContent = '$' + total.toFixed(2);
}

// ══════════════════════════════════════════
//  DISCOUNTS
// ══════════════════════════════════════════
function setDiscountTab(type, el) {
  document.querySelectorAll('.discount-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.discount-body').forEach(b => b.classList.remove('show'));
  el.classList.add('active');
  document.getElementById('discount-' + type).classList.add('show');
}

async function applyStudentDiscount() {
  const email = document.getElementById('student-email').value.trim();
  const status = document.getElementById('student-status');
  if (!email.toLowerCase().endsWith('.edu')) {
    status.className = 'discount-status error';
    status.textContent = '✗ Please use a valid .edu email address.';
    return;
  }
  status.className = 'discount-status info';
  status.textContent = 'Sending verification email...';
  status.style.display = 'block';
  status.style.color = 'var(--text2)';
  try {
    const res = await fetch('/api/verify-student', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    const data = await res.json();
    if (res.ok) {
      status.className = 'discount-status success';
      status.textContent = '✓ Check your inbox — click the link to verify and unlock 10% off.';
    } else {
      status.className = 'discount-status error';
      status.textContent = '✗ ' + (data.error || 'Could not send email. Try again.');
    }
  } catch {
    status.className = 'discount-status error';
    status.textContent = '✗ Network error. Please try again.';
  }
}

function applySidebarDiscount() {
  const val = document.getElementById('sidebar-discount-input').value.trim();
  const status = document.getElementById('sidebar-discount-status');
  if (val.toLowerCase().endsWith('.edu')) {
    state.discount = 'Student Discount (10%)';
    state.discountPct = 0.15;
    status.className = 'discount-status success';
    status.textContent = '✓ Student discount applied — 10% off.';
    updateOrderSummary();
  } else if (DISCOUNTS.military.codes.includes(val.toUpperCase())) {
    state.discount = 'Military Discount (20%)';
    state.discountPct = 0.20;
    status.className = 'discount-status success';
    status.textContent = '✓ Military discount applied — 10% off.';
    updateOrderSummary();
  } else {
    status.className = 'discount-status error';
    status.textContent = '✗ Invalid code. Use a .edu email or military code.';
  }
}

async function applyMilitaryDiscount() {
  const code = document.getElementById('military-code').value.trim();
  const status = document.getElementById('military-status');
  if (!code) {
    status.className = 'discount-status error';
    status.textContent = '✗ Please enter a code.';
    return;
  }
  status.style.display = 'block';
  status.style.color = 'var(--text2)';
  status.textContent = 'Checking code...';
  try {
    const res = await fetch('/api/check-military', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code })
    });
    const data = await res.json();
    if (res.ok && data.success) {
      state.discount = data.label;
      state.discountPct = data.discount;
      status.className = 'discount-status success';
      status.textContent = '✓ Military discount applied — 10% off your order.';
      updateOrderSummary();
    } else {
      status.className = 'discount-status error';
      status.textContent = '✗ ' + (data.error || 'Invalid code.');
    }
  } catch {
    status.className = 'discount-status error';
    status.textContent = '✗ Network error. Please try again.';
  }
}

// ══════════════════════════════════════════
//  FORM VALIDATION + SUBMIT
// ══════════════════════════════════════════
function generateTicketId() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let a = '', b = '';
  for (let i = 0; i < 4; i++) a += chars[Math.floor(Math.random() * chars.length)];
  for (let i = 0; i < 4; i++) b += chars[Math.floor(Math.random() * chars.length)];
  return 'DC8-' + a + '-' + b;
}

async function submitOrder() {
  const alertEl = document.getElementById('details-alert');
  alertEl.innerHTML = '';

  // Validate attendees
  let valid = true;
  let attendees = [];
  for (let i = 0; i < state.qty; i++) {
    const fname = document.getElementById('fname-' + i)?.value.trim();
    const lname = document.getElementById('lname-' + i)?.value.trim();
    const email = document.getElementById('email-' + i)?.value.trim();
    if (!fname || !lname || !email) {
      valid = false;
      break;
    }
    if (!email.includes('@') || !email.includes('.')) {
      valid = false;
      break;
    }
    attendees.push({ fname, lname, email, ticketId: generateTicketId() });
  }

  if (!valid) {
    alertEl.innerHTML = '<div class="alert error">Please fill in all required fields for every ticket holder.</div>';
    return;
  }

  state.attendees = attendees;

  const order = {
    id: generateTicketId(),
    timestamp: new Date().toISOString(),
    day: state.selectedDay,
    tier: state.selectedTier,
    qty: state.qty,
    attendees: state.attendees,
    discount: state.discount,
    discountPct: state.discountPct,
    total: getTierData().price * state.qty * (1 - state.discountPct)
  };

  // Show loading state
  const btn = document.getElementById('btn-details-next');
  const origText = btn.textContent;
  btn.textContent = 'PROCESSING...';
  btn.disabled = true;

  try {
    const response = await fetch('/api/submit-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ order, attendees: state.attendees })
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.error || 'Order failed');
    }

    renderConfirmation(order);
    setTimeout(() => goToStep(4), 50);

  } catch (err) {
    console.error('Order error:', err);
    alertEl.innerHTML = '<div class="alert error">Something went wrong. Please try again or contact support.</div>';
    btn.textContent = origText;
    btn.disabled = false;
  }
}

// ══════════════════════════════════════════
//  CONFIRMATION
// ══════════════════════════════════════════
function renderConfirmation(order) {
  const tier = getTierData();
  const dayLabels = { both: 'Both Days (Jul 25–26)', saturday: 'Saturday Only', sunday: 'Sunday Only' };
  const container = document.getElementById('confirm-tickets');
  container.innerHTML = order.attendees.map(a => `
    <div class="ticket-card">
      <div class="qr-placeholder">QR<br>CODE<br>HERE</div>
      <div class="ticket-card-type">${tier.name} · ${dayLabels[order.day]}</div>
      <div class="ticket-card-name">${a.fname} ${a.lname}</div>
      <div style="font-size:13px;color:var(--text3);margin-bottom:12px">${a.email}</div>
      <div class="ticket-card-id">${a.ticketId}</div>
    </div>
  `).join('');
}

// ══════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  // Start on hero, hide content area
  const heroEl = document.getElementById('screen-hero');
  heroEl.style.display = 'block';
  document.querySelector('.content').style.display = 'none';
  document.getElementById('progress-bar').style.display = 'none';
  // Handle redirect back from student verification
  const params = new URLSearchParams(window.location.search);
  if (params.get('discount') === 'student' && params.get('verified_email')) {
    state.discount = 'Student Discount (10%)';
    state.discountPct = 0.10;
    // Clear URL params without reload
    window.history.replaceState({}, '', window.location.pathname);
    // Show notification
    const note = document.createElement('div');
    note.style.cssText = 'position:fixed;top:80px;right:20px;background:#2B5BE8;color:#fff;padding:12px 20px;border-radius:10px;font-size:14px;font-weight:500;z-index:999;';
    note.textContent = '✓ Student discount verified — 10% off applied!';
    document.body.appendChild(note);
    setTimeout(() => note.remove(), 4000);
  }
  if (params.get('error') === 'expired') {
    const note = document.createElement('div');
    note.style.cssText = 'position:fixed;top:80px;right:20px;background:#ff4444;color:#fff;padding:12px 20px;border-radius:10px;font-size:14px;font-weight:500;z-index:999;';
    note.textContent = '✗ Verification link expired. Please try again.';
    document.body.appendChild(note);
    setTimeout(() => note.remove(), 5000);
  }


  // Button is now hardcoded in HTML
});

function setSidebarTab(type, el) {
  document.querySelectorAll('.sd-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.sd-body').forEach(b => b.classList.remove('show'));
  el.classList.add('active');
  document.getElementById('sd-' + type).classList.add('show');
}

function applySidebarStudentDiscount() {
  const email = document.getElementById('sd-student-email').value.trim();
  const status = document.getElementById('sd-student-status');
  if (!email.toLowerCase().endsWith('.edu')) {
    status.className = 'discount-status error';
    status.textContent = '✗ Please use a valid .edu email address.';
    return;
  }
  state.discount = DISCOUNTS.student.label;
  state.discountPct = DISCOUNTS.student.pct;
  status.className = 'discount-status success';
  status.textContent = '✓ Student discount applied — 10% off.';
  updateOrderSummary();
}

function applySidebarMilitaryDiscount() {
  const code = document.getElementById('sd-military-code').value.trim().toUpperCase();
  const status = document.getElementById('sd-military-status');
  if (DISCOUNTS.military.codes.includes(code)) {
    state.discount = DISCOUNTS.military.label;
    state.discountPct = DISCOUNTS.military.pct;
    status.className = 'discount-status success';
    status.textContent = '✓ Military discount applied — 10% off.';
    updateOrderSummary();
  } else {
    status.className = 'discount-status error';
    status.textContent = '✗ Invalid code. Please try again.';
  }
}      perks: [
        'Access to all debates both days',
        'Personalized name tag and lanyard',
        'Signed emblem page by all debaters (first 60 VIP+ holders)',
        'Meet & greet + professional photo with your favorite debater on BOTH days',
        'On-site lunch social both Saturday and Sunday (speakers attend)',
      ],
      hasDinner: false,
      dinnerNights: []
    },
    {
      id: 'both-uvip',
      name: 'Ultra VIP',
      price: 524.99,
      tag: 'ULTIMATE',
      perks: [
        'Access to all debates both days',
        'Personalized name tag and lanyard',
        'Signed emblem page by all debaters (first 60 VIP+ holders)',
        'Meet & greet + professional photo with your favorite debater on BOTH days',
        'On-site lunch social both days (speakers attend)',
        'Reserved seating in the first few rows',
        'Small group dinner with speaker of your choice — one night (Saturday or Sunday)',
      ],
      hasDinner: true,
      dinnerNights: ['Saturday Night', 'Sunday Night']
    },
    {
      id: 'both-allaccess',
      name: 'All Access',
      price: 674.99,
      tag: 'ULTIMATE',
      perks: [
        'Access to all debates both days',
        'Personalized name tag and lanyard',
        'Signed emblem page by all debaters (first 60 VIP+ holders)',
        'Meet & greet + professional photo with your favorite debater',
        'On-site lunch social both days (Andrew & Rachel Wilson attend)',
        'Small group dinner with speaker of your choice — BOTH Saturday AND Sunday',
        'Personally reserved seat (your name) in the first two rows',
        'Exclusive DEBATECON 8 swag bag',
      ],
      hasDinner: true,
      dinnerNights: ['Both Nights']
    },
  ],
  saturday: [
    {
      id: 'sat-ga',
      name: 'General Admission',
      price: 149.99,
      tag: null,
      perks: ['Access to all debates on Saturday July 25'],
      hasDinner: false,
      dinnerNights: []
    },
    {
      id: 'sat-vip',
      name: 'VIP',
      price: 199.99,
      tag: null,
      perks: [
        'Access to all debates on Saturday July 25',
        'Personalized name tag and lanyard',
        'Meet & greet + professional photo with your favorite debater',
      ],
      hasDinner: false,
      dinnerNights: []
    },
    {
      id: 'sat-svip',
      name: 'Super VIP',
      price: 249.99,
      tag: 'POPULAR',
      recommended: true,
      perks: [
        'Access to all debates on Saturday July 25',
        'Personalized name tag and lanyard',
        'Meet & greet + professional photo with your favorite debater',
        'On-site lunch social Saturday (speakers attend)',
      ],
      hasDinner: false,
      dinnerNights: []
    },
    {
      id: 'sat-uvip',
      name: 'Ultra VIP',
      price: 299.99,
      tag: 'ULTIMATE',
      perks: [
        'Access to all debates on Saturday July 25',
        'Personalized name tag and lanyard',
        'Meet & greet + professional photo with your favorite debater',
        'On-site lunch social Saturday (speakers attend)',
        'Reserved seating in the first few rows',
        'Small group dinner with speaker of your choice Saturday night',
      ],
      hasDinner: true,
      dinnerNights: []
    },
  ],
  sunday: [
    {
      id: 'sun-ga',
      name: 'General Admission',
      price: 149.99,
      tag: null,
      perks: ['Access to all debates on Sunday July 26'],
      hasDinner: false,
      dinnerNights: []
    },
    {
      id: 'sun-vip',
      name: 'VIP',
      price: 199.99,
      tag: null,
      perks: [
        'Access to all debates on Sunday July 26',
        'Personalized name tag and lanyard',
        'Meet & greet + professional photo with your favorite debater',
      ],
      hasDinner: false,
      dinnerNights: []
    },
    {
      id: 'sun-svip',
      name: 'Super VIP',
      price: 249.99,
      tag: 'POPULAR',
      recommended: true,
      perks: [
        'Access to all debates on Sunday July 26',
        'Personalized name tag and lanyard',
        'Meet & greet + professional photo with your favorite debater',
        'On-site lunch social Sunday (speakers attend)',
      ],
      hasDinner: false,
      dinnerNights: []
    },
    {
      id: 'sun-uvip',
      name: 'Ultra VIP',
      price: 299.99,
      tag: 'ULTIMATE',
      perks: [
        'Access to all debates on Sunday July 26',
        'Personalized name tag and lanyard',
        'Meet & greet + professional photo with your favorite debater',
        'On-site lunch social Sunday (speakers attend)',
        'Reserved seating in the first few rows',
        'Small group dinner with speaker of your choice Sunday night',
      ],
      hasDinner: true,
      dinnerNights: []
    },
  ]
};

const SPEAKERS = [
  'Andrew Wilson', 'Rachel Wilson', 'Dr. James', 'Speaker TBA'
];

// Discount config — Phase 2 will validate against real DB
const DISCOUNTS = {
  student: { pct: 0.10, label: 'Student Discount (10%)' },
  military: {
    pct: 0.10,
    label: 'Military Discount (10%)',
    codes: ['MIL2026', 'MILITARY8', 'VETDC8'] // placeholder codes
  }
};

// ══════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════
let state = {
  currentStep: 0,
  selectedDay: null,
  selectedTier: null,
  qty: 1,
  attendees: [],
  dinnerSelections: [],
  discount: null,
  discountPct: 0,
};

// ══════════════════════════════════════════
//  STEP NAVIGATION
// ══════════════════════════════════════════
const screens = ['hero', 'day', 'tier', 'details', 'confirm'];
const stepNames = [null, 'day', 'tier', 'details', 'confirm'];

function goToStep(n) {
  // Hero vs content area
  const heroEl = document.getElementById('screen-hero');
  const contentEl = document.querySelector('.content');
  const pb = document.getElementById('progress-bar');

  if (n === 0) {
    heroEl.style.display = 'block';
    contentEl.style.display = 'none';
    pb.style.display = 'none';
  } else {
    heroEl.style.display = 'none';
    contentEl.style.display = 'block';
    pb.style.display = n < 4 ? 'block' : 'none';

    // Hide all screens inside content
    document.querySelectorAll('.content .screen').forEach(s => {
      s.style.display = 'none';
      s.classList.remove('active');
    });

    // Show target screen
    const target = stepNames[n];
    if (target) {
      const el = document.getElementById('screen-' + target);
      if (el) {
        el.style.display = 'block';
        el.classList.add('active');
      }
    }
  }

  updateProgress(n);
  state.currentStep = n;
  if (n === 2) renderTiers();
  if (n === 3) renderDetails();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateProgress(active) {
  for (let i = 1; i <= 4; i++) {
    const step = document.getElementById('step' + i);
    const line = document.getElementById('line' + i);
    step.classList.remove('active', 'done');
    if (line) line.classList.remove('done');
    if (i < active) { step.classList.add('done'); if (line) line.classList.add('done'); }
    else if (i === active) step.classList.add('active');
  }
}

// ══════════════════════════════════════════
//  DAY SELECTION
// ══════════════════════════════════════════
function selectDay(day, el) {
  state.selectedDay = day;
  state.selectedTier = null;
  document.querySelectorAll('.day-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  el.querySelector('.day-card-check').textContent = '✓';
  document.querySelectorAll('.day-card:not(.selected) .day-card-check').forEach(c => c.textContent = '');
  document.getElementById('btn-day-next').disabled = false;
}

// ══════════════════════════════════════════
//  TIER RENDERING
// ══════════════════════════════════════════
function renderTiers() {
  const tiers = TICKETS[state.selectedDay] || [];
  const dayLabels = { both: 'Both Days (Jul 25–26)', saturday: 'Saturday (Jul 25)', sunday: 'Sunday (Jul 26)' };
  document.getElementById('tier-sub').textContent = dayLabels[state.selectedDay];

  const grid = document.getElementById('tier-grid');
  grid.innerHTML = tiers.map((t, i) => `
    <div class="tier-card${t.recommended ? ' recommended' : ''}${t.tag === 'ULTIMATE' ? ' tier-ultimate' : ''}${t.id.includes('-ga') ? ' tier-ga' : ''}" id="tier-${t.id}" onclick="selectTier('${t.id}', this)" style="animation-delay:${i*0.06}s">
      <div class="tier-card-header">
        ${t.tag ? `<span class="tier-badge${t.id.includes('allaccess') ? ' gold' : t.tag === 'ULTIMATE' ? ' ultimate' : ''}">${t.tag}</span>` : '<span></span>'}
        <div class="tier-name">${t.name}</div>
        <div>
          <div class="tier-price">$${t.price.toFixed(2)}</div>
          <div class="tier-price-sub">per person</div>
        </div>
        <div class="tier-select-btn"></div>
      </div>
      <div class="tier-divider"></div>
      <div class="tier-perks">
        <ul class="tier-perks-list">
          ${t.perks.map(p => `<li>${p}</li>`).join('')}
        </ul>
      </div>
      <div class="tier-sponsor">
        Sponsored by <a href="https://mainefirstproject.org/" target="_blank" class="tier-sponsor-link">Maine First Project</a>
      </div>
    </div>
  `).join('');
}

function selectTier(id, el) {
  state.selectedTier = id;
  document.querySelectorAll('.tier-card').forEach(c => {
    c.classList.remove('selected');
    const btn = c.querySelector('.tier-select-btn');
    if (btn) btn.textContent = '';
  });
  el.classList.add('selected');
  const btn = el.querySelector('.tier-select-btn');
  if (btn) btn.textContent = '✓';
  document.getElementById('btn-tier-next').disabled = false;
}



// ══════════════════════════════════════════
//  DETAILS SCREEN
// ══════════════════════════════════════════
function renderDetails() {
  renderAttendees();
  renderDinnerSection();
  updateOrderSummary();
}

function changeQty(delta) {
  const newQty = Math.max(1, Math.min(10, state.qty + delta));
  state.qty = newQty;
  document.getElementById('qty-display').textContent = newQty;
  renderAttendees();
  renderDinnerSection();
  updateOrderSummary();
}

function renderAttendees() {
  const container = document.getElementById('attendee-forms');
  container.innerHTML = '';
  for (let i = 0; i < state.qty; i++) {
    container.innerHTML += `
      <div class="attendee-form">
        <div class="attendee-form-title">
          <div class="attendee-num">${i+1}</div>
          Ticket Holder ${i+1}
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">First Name</label>
            <input type="text" class="form-input" id="fname-${i}" placeholder="First name" oninput="updateOrderSummary()">
          </div>
          <div class="form-group">
            <label class="form-label">Last Name</label>
            <input type="text" class="form-input" id="lname-${i}" placeholder="Last name">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group full">
            <label class="form-label">Email Address</label>
            <input type="email" class="form-input" id="email-${i}" placeholder="email@example.com">
          </div>
        </div>
      </div>
    `;
  }
}

function renderDinnerSection() {
  const tier = getTierData();
  if (!tier || !tier.hasDinner) {
    document.getElementById('dinner-section').classList.remove('show');
    return;
  }
  document.getElementById('dinner-section').classList.add('show');

  const hasNightChoice = tier.dinnerNights && tier.dinnerNights.length > 0;
  const container = document.getElementById('dinner-forms');
  container.innerHTML = '';

  for (let i = 0; i < state.qty; i++) {
    const speakerOptions = SPEAKERS.map(s => `<option value="${s}">${s}</option>`).join('');
    const nightOptions = hasNightChoice
      ? tier.dinnerNights.map(n => `<option value="${n}">${n}</option>`).join('')
      : '';

    const nightSelector = hasNightChoice ? `
      <div class="dinner-select-group">
        <div class="dinner-select-label">Night</div>
        <div class="dinner-select-wrap">
          <select class="dinner-select" id="dinner-night-${i}">
            ${nightOptions}
          </select>
          <svg class="dinner-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
      </div>` : '';

    const gridCols = hasNightChoice ? 'dinner-selects-two' : 'dinner-selects-one';

    container.innerHTML += `
      <div class="dinner-card">
        <div class="dinner-card-title">
          <div class="dinner-card-num">${i+1}</div>
          <span>Ticket ${i+1} — Preferred Speaker</span>
        </div>
        <div class="dinner-selects ${gridCols}">
          <div class="dinner-select-group">
            <div class="dinner-select-label">Speaker</div>
            <div class="dinner-select-wrap">
              <select class="dinner-select" id="dinner-speaker-${i}">
                ${speakerOptions}
              </select>
              <svg class="dinner-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
          </div>
          ${nightSelector}
        </div>
      </div>
    `;
  }
}

function getTierData() {
  if (!state.selectedDay || !state.selectedTier) return null;
  return TICKETS[state.selectedDay].find(t => t.id === state.selectedTier);
}

function updateOrderSummary() {
  const tier = getTierData();
  if (!tier) return;

  const container = document.getElementById('order-lines');
  const fname = document.getElementById('fname-0');
  const nameDisplay = fname && fname.value ? fname.value + '...' : 'Attendee';

  const dayLabels = { both: 'Both Days', saturday: 'Saturday', sunday: 'Sunday' };
  const subtotal = tier.price * state.qty;
  const discountAmt = subtotal * state.discountPct;
  const total = subtotal - discountAmt;

  container.innerHTML = `
    <div class="order-line">
      <div class="order-line-name">
        ${tier.name}<br>
        <span style="font-size:12px;color:var(--text3)">${dayLabels[state.selectedDay]} × ${state.qty}</span>
      </div>
      <div class="order-line-price">$${(tier.price * state.qty).toFixed(2)}</div>
    </div>
  `;

  const discLine = document.getElementById('order-discount-line');
  if (state.discountPct > 0) {
    discLine.style.display = 'flex';
    document.getElementById('discount-label').textContent = state.discount;
    document.getElementById('discount-amount').textContent = `-$${discountAmt.toFixed(2)}`;
  } else {
    discLine.style.display = 'none';
  }

  document.getElementById('order-total').textContent = '$' + total.toFixed(2);
}

// ══════════════════════════════════════════
//  DISCOUNTS
// ══════════════════════════════════════════
function setDiscountTab(type, el) {
  document.querySelectorAll('.discount-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.discount-body').forEach(b => b.classList.remove('show'));
  el.classList.add('active');
  document.getElementById('discount-' + type).classList.add('show');
}

async function applyStudentDiscount() {
  const email = document.getElementById('student-email').value.trim();
  const status = document.getElementById('student-status');
  if (!email.toLowerCase().endsWith('.edu')) {
    status.className = 'discount-status error';
    status.textContent = '✗ Please use a valid .edu email address.';
    return;
  }
  status.className = 'discount-status info';
  status.textContent = 'Sending verification email...';
  status.style.display = 'block';
  status.style.color = 'var(--text2)';
  try {
    const res = await fetch('/api/verify-student', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    const data = await res.json();
    if (res.ok) {
      status.className = 'discount-status success';
      status.textContent = '✓ Check your inbox — click the link to verify and unlock 10% off.';
    } else {
      status.className = 'discount-status error';
      status.textContent = '✗ ' + (data.error || 'Could not send email. Try again.');
    }
  } catch {
    status.className = 'discount-status error';
    status.textContent = '✗ Network error. Please try again.';
  }
}

function applySidebarDiscount() {
  const val = document.getElementById('sidebar-discount-input').value.trim();
  const status = document.getElementById('sidebar-discount-status');
  if (val.toLowerCase().endsWith('.edu')) {
    state.discount = 'Student Discount (10%)';
    state.discountPct = 0.15;
    status.className = 'discount-status success';
    status.textContent = '✓ Student discount applied — 10% off.';
    updateOrderSummary();
  } else if (DISCOUNTS.military.codes.includes(val.toUpperCase())) {
    state.discount = 'Military Discount (20%)';
    state.discountPct = 0.20;
    status.className = 'discount-status success';
    status.textContent = '✓ Military discount applied — 10% off.';
    updateOrderSummary();
  } else {
    status.className = 'discount-status error';
    status.textContent = '✗ Invalid code. Use a .edu email or military code.';
  }
}

async function applyMilitaryDiscount() {
  const code = document.getElementById('military-code').value.trim();
  const status = document.getElementById('military-status');
  if (!code) {
    status.className = 'discount-status error';
    status.textContent = '✗ Please enter a code.';
    return;
  }
  status.style.display = 'block';
  status.style.color = 'var(--text2)';
  status.textContent = 'Checking code...';
  try {
    const res = await fetch('/api/check-military', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code })
    });
    const data = await res.json();
    if (res.ok && data.success) {
      state.discount = data.label;
      state.discountPct = data.discount;
      status.className = 'discount-status success';
      status.textContent = '✓ Military discount applied — 10% off your order.';
      updateOrderSummary();
    } else {
      status.className = 'discount-status error';
      status.textContent = '✗ ' + (data.error || 'Invalid code.');
    }
  } catch {
    status.className = 'discount-status error';
    status.textContent = '✗ Network error. Please try again.';
  }
}

// ══════════════════════════════════════════
//  FORM VALIDATION + SUBMIT
// ══════════════════════════════════════════
function generateTicketId() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let a = '', b = '';
  for (let i = 0; i < 4; i++) a += chars[Math.floor(Math.random() * chars.length)];
  for (let i = 0; i < 4; i++) b += chars[Math.floor(Math.random() * chars.length)];
  return 'DC8-' + a + '-' + b;
}

async function submitOrder() {
  const alertEl = document.getElementById('details-alert');
  alertEl.innerHTML = '';

  // Validate attendees
  let valid = true;
  let attendees = [];
  for (let i = 0; i < state.qty; i++) {
    const fname = document.getElementById('fname-' + i)?.value.trim();
    const lname = document.getElementById('lname-' + i)?.value.trim();
    const email = document.getElementById('email-' + i)?.value.trim();
    if (!fname || !lname || !email) {
      valid = false;
      break;
    }
    if (!email.includes('@') || !email.includes('.')) {
      valid = false;
      break;
    }
    attendees.push({ fname, lname, email, ticketId: generateTicketId() });
  }

  if (!valid) {
    alertEl.innerHTML = '<div class="alert error">Please fill in all required fields for every ticket holder.</div>';
    return;
  }

  state.attendees = attendees;

  const order = {
    id: generateTicketId(),
    timestamp: new Date().toISOString(),
    day: state.selectedDay,
    tier: state.selectedTier,
    qty: state.qty,
    attendees: state.attendees,
    discount: state.discount,
    discountPct: state.discountPct,
    total: getTierData().price * state.qty * (1 - state.discountPct)
  };

  // Show loading state
  const btn = document.getElementById('btn-details-next');
  const origText = btn.textContent;
  btn.textContent = 'PROCESSING...';
  btn.disabled = true;

  try {
    const response = await fetch('/api/submit-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ order, attendees: state.attendees })
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.error || 'Order failed');
    }

    renderConfirmation(order);
    setTimeout(() => goToStep(4), 50);

  } catch (err) {
    console.error('Order error:', err);
    alertEl.innerHTML = '<div class="alert error">Something went wrong. Please try again or contact support.</div>';
    btn.textContent = origText;
    btn.disabled = false;
  }
}

// ══════════════════════════════════════════
//  CONFIRMATION
// ══════════════════════════════════════════
function renderConfirmation(order) {
  const tier = getTierData();
  const dayLabels = { both: 'Both Days (Jul 25–26)', saturday: 'Saturday Only', sunday: 'Sunday Only' };
  const container = document.getElementById('confirm-tickets');
  container.innerHTML = order.attendees.map(a => `
    <div class="ticket-card">
      <div class="qr-placeholder">QR<br>CODE<br>HERE</div>
      <div class="ticket-card-type">${tier.name} · ${dayLabels[order.day]}</div>
      <div class="ticket-card-name">${a.fname} ${a.lname}</div>
      <div style="font-size:13px;color:var(--text3);margin-bottom:12px">${a.email}</div>
      <div class="ticket-card-id">${a.ticketId}</div>
    </div>
  `).join('');
}

// ══════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  // Start on hero, hide content area
  const heroEl = document.getElementById('screen-hero');
  heroEl.style.display = 'block';
  document.querySelector('.content').style.display = 'none';
  document.getElementById('progress-bar').style.display = 'none';
  // Handle redirect back from student verification
  const params = new URLSearchParams(window.location.search);
  if (params.get('discount') === 'student' && params.get('verified_email')) {
    state.discount = 'Student Discount (10%)';
    state.discountPct = 0.10;
    // Clear URL params without reload
    window.history.replaceState({}, '', window.location.pathname);
    // Show notification
    const note = document.createElement('div');
    note.style.cssText = 'position:fixed;top:80px;right:20px;background:#2B5BE8;color:#fff;padding:12px 20px;border-radius:10px;font-size:14px;font-weight:500;z-index:999;';
    note.textContent = '✓ Student discount verified — 10% off applied!';
    document.body.appendChild(note);
    setTimeout(() => note.remove(), 4000);
  }
  if (params.get('error') === 'expired') {
    const note = document.createElement('div');
    note.style.cssText = 'position:fixed;top:80px;right:20px;background:#ff4444;color:#fff;padding:12px 20px;border-radius:10px;font-size:14px;font-weight:500;z-index:999;';
    note.textContent = '✗ Verification link expired. Please try again.';
    document.body.appendChild(note);
    setTimeout(() => note.remove(), 5000);
  }


  // Button is now hardcoded in HTML
});

function setSidebarTab(type, el) {
  document.querySelectorAll('.sd-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.sd-body').forEach(b => b.classList.remove('show'));
  el.classList.add('active');
  document.getElementById('sd-' + type).classList.add('show');
}

function applySidebarStudentDiscount() {
  const email = document.getElementById('sd-student-email').value.trim();
  const status = document.getElementById('sd-student-status');
  if (!email.toLowerCase().endsWith('.edu')) {
    status.className = 'discount-status error';
    status.textContent = '✗ Please use a valid .edu email address.';
    return;
  }
  state.discount = DISCOUNTS.student.label;
  state.discountPct = DISCOUNTS.student.pct;
  status.className = 'discount-status success';
  status.textContent = '✓ Student discount applied — 10% off.';
  updateOrderSummary();
}

function applySidebarMilitaryDiscount() {
  const code = document.getElementById('sd-military-code').value.trim().toUpperCase();
  const status = document.getElementById('sd-military-status');
  if (DISCOUNTS.military.codes.includes(code)) {
    state.discount = DISCOUNTS.military.label;
    state.discountPct = DISCOUNTS.military.pct;
    status.className = 'discount-status success';
    status.textContent = '✓ Military discount applied — 10% off.';
    updateOrderSummary();
  } else {
    status.className = 'discount-status error';
    status.textContent = '✗ Invalid code. Please try again.';
  }
}
