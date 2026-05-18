const universities = [
  {
    id: 'ku',
    name: 'Kuwait University',
    type: 'public',
    shortDesc: 'Kuwait\'s premier public research university, established in 1966. Offers a wide range of undergraduate and postgraduate programs.',
    emoji: '🏛️',
    color: '#003366',
    location: 'Khaldiya, Kuwait City',
    locationArea: 'Kuwait City',
    established: 1966,
    tags: ['Public', 'Research', 'Arabic & English'],
    language: 'Bilingual',
    nationalities: ['Kuwaitis Only'],
    nationalitiesNote: 'Kuwait University primarily admits Kuwaiti nationals. A limited number of seats are available for children of Kuwaiti mothers and some GCC nationals in specific programs.',
    educationLevels: ['Bachelor', 'Master', 'Doctorate'],
    website: 'https://www.ku.edu.kw',
    email: 'info@ku.edu.kw',
    phone: '+965 2498 5000',
    overview: 'Kuwait University (KU) is the oldest and largest public university in Kuwait, founded in 1966. With 16 colleges across multiple campuses, it offers programs in medicine, engineering, law, sciences, arts, and more. KU is tuition-free for Kuwaiti nationals and provides a world-class education in a modern campus environment.',
    majors: [
      { name: 'Medicine & Surgery', faculty: 'Medicine', fee: 'Free (Kuwaiti)', gpa: '90%+', duration: '6 years' },
      { name: 'Civil Engineering', faculty: 'Engineering', fee: 'Free (Kuwaiti)', gpa: '85%+', duration: '5 years' },
      { name: 'Computer Science', faculty: 'Science', fee: 'Free (Kuwaiti)', gpa: '80%+', duration: '4 years' },
      { name: 'Business Administration', faculty: 'Business Administration', fee: 'Free (Kuwaiti)', gpa: '75%+', duration: '4 years' },
      { name: 'Law', faculty: 'Law', fee: 'Free (Kuwaiti)', gpa: '80%+', duration: '4 years' },
      { name: 'Architecture', faculty: 'Engineering', fee: 'Free (Kuwaiti)', gpa: '85%+', duration: '5 years' },
      { name: 'Dentistry', faculty: 'Dentistry', fee: 'Free (Kuwaiti)', gpa: '88%+', duration: '5 years' },
      { name: 'Pharmacy', faculty: 'Pharmacy', fee: 'Free (Kuwaiti)', gpa: '82%+', duration: '5 years' },
    ]
  },
  {
    id: 'aou',
    name: 'Arab Open University',
    type: 'private',
    shortDesc: 'A leading distance-learning institution with flexible programs for working professionals and students seeking part-time study.',
    emoji: '🌐',
    color: '#8B0000',
    location: 'Al Ardiya, Kuwait',
    locationArea: 'Al Ardiya',
    established: 2002,
    tags: ['Private', 'Distance Learning', 'English & Arabic'],
    language: 'Bilingual',
    nationalities: ['All Nationalities', 'Arab Nationals'],
    nationalitiesNote: 'AOU accepts students of all nationalities, with a focus on Arab nationals across the region. Both Kuwaiti and non-Kuwaiti residents of Kuwait are welcome to apply.',
    educationLevels: ['Bachelor', 'Master'],
    website: 'https://www.aou.edu.kw',
    email: 'info@aou.edu.kw',
    phone: '+965 1800 267',
    overview: 'The Arab Open University (AOU) Kuwait Branch was established in 2002 as part of a network of universities across the Arab world. Offering flexible distance-learning and blended programs, AOU is ideal for students who need flexible scheduling. It has a partnership with the UK Open University, ensuring international academic standards.',
    majors: [
      { name: 'Business Administration', faculty: 'Business', fee: '~250 KWD/semester', gpa: '60%+', duration: '4 years' },
      { name: 'Computer Science & IT', faculty: 'IT', fee: '~250 KWD/semester', gpa: '60%+', duration: '4 years' },
      { name: 'English Language & Literature', faculty: 'Languages', fee: '~220 KWD/semester', gpa: '60%+', duration: '4 years' },
      { name: 'Education', faculty: 'Education', fee: '~220 KWD/semester', gpa: '60%+', duration: '4 years' },
      { name: 'MBA', faculty: 'Business', fee: '~350 KWD/semester', gpa: 'Bachelor degree', duration: '2 years' },
    ]
  },
  {
    id: 'acm',
    name: 'American College of the Middle East (ACM)',
    type: 'international',
    shortDesc: 'An American-accredited university offering US-style education in Kuwait with degrees recognized worldwide.',
    emoji: '🇺🇸',
    color: '#1a3a6b',
    location: 'Egaila, Kuwait',
    locationArea: 'Egaila',
    established: 2005,
    tags: ['International', 'American Accredited', 'English'],
    language: 'English',
    nationalities: ['All Nationalities'],
    nationalitiesNote: 'ACM welcomes students of all nationalities — Kuwaiti, GCC, Arab, and international students are all eligible to apply.',
    educationLevels: ['Bachelor'],
    website: 'https://www.acm.edu.kw',
    email: 'info@acm.edu.kw',
    phone: '+965 2222 1212',
    overview: 'The American College of the Middle East (ACM) offers American-style higher education in Kuwait, with programs accredited by US and international bodies. ACM provides a globally competitive curriculum, experienced faculty, and strong industry connections, making its graduates highly sought after in Kuwait and internationally.',
    majors: [
      { name: 'Computer Engineering', faculty: 'Engineering', fee: '~500 KWD/semester', gpa: '75%+', duration: '4 years' },
      { name: 'Electrical Engineering', faculty: 'Engineering', fee: '~500 KWD/semester', gpa: '75%+', duration: '4 years' },
      { name: 'Business Administration', faculty: 'Business', fee: '~450 KWD/semester', gpa: '65%+', duration: '4 years' },
      { name: 'Information Technology', faculty: 'Computing', fee: '~480 KWD/semester', gpa: '65%+', duration: '4 years' },
      { name: 'Mechanical Engineering', faculty: 'Engineering', fee: '~510 KWD/semester', gpa: '75%+', duration: '4 years' },
    ]
  },
  {
    id: 'gust',
    name: 'Gulf University for Science & Technology (GUST)',
    type: 'private',
    shortDesc: 'A premium private university offering American-accredited programs in business, computing, and arts & sciences.',
    emoji: '⭐',
    color: '#004080',
    location: 'Mishref, Kuwait',
    locationArea: 'Mishref',
    established: 2002,
    tags: ['Private', 'US Accredited', 'English'],
    language: 'English',
    nationalities: ['All Nationalities'],
    nationalitiesNote: 'GUST accepts students of all nationalities. Kuwaiti, Arab, and international students are all welcome. The university has a diverse student body from over 40 countries.',
    educationLevels: ['Bachelor', 'Master'],
    website: 'https://www.gust.edu.kw',
    email: 'admissions@gust.edu.kw',
    phone: '+965 2530 7000',
    overview: 'Gulf University for Science and Technology (GUST) is one of Kuwait\'s leading private universities, offering American-accredited programs since 2002. With partnerships with major US universities and a strong emphasis on research, entrepreneurship, and career development, GUST provides a comprehensive university experience.',
    majors: [
      { name: 'Computer Science', faculty: 'Computing', fee: '~520 KWD/semester', gpa: '70%+', duration: '4 years' },
      { name: 'Finance', faculty: 'Business', fee: '~490 KWD/semester', gpa: '65%+', duration: '4 years' },
      { name: 'Marketing', faculty: 'Business', fee: '~490 KWD/semester', gpa: '65%+', duration: '4 years' },
      { name: 'Accounting', faculty: 'Business', fee: '~490 KWD/semester', gpa: '65%+', duration: '4 years' },
      { name: 'Psychology', faculty: 'Arts & Sciences', fee: '~460 KWD/semester', gpa: '65%+', duration: '4 years' },
      { name: 'Mathematics', faculty: 'Arts & Sciences', fee: '~460 KWD/semester', gpa: '70%+', duration: '4 years' },
    ]
  },
  {
    id: 'auk',
    name: 'American University of Kuwait (AUK)',
    type: 'international',
    shortDesc: 'A liberal arts university offering American-model education with a strong focus on critical thinking and leadership.',
    emoji: '🏆',
    color: '#B8860B',
    location: 'Salmiya, Kuwait',
    locationArea: 'Salmiya',
    established: 2004,
    tags: ['International', 'Liberal Arts', 'English'],
    language: 'English',
    nationalities: ['All Nationalities'],
    nationalitiesNote: 'AUK is open to all nationalities. Kuwaiti and non-Kuwaiti students are both eligible. The university actively recruits international and Arab students.',
    educationLevels: ['Bachelor'],
    website: 'https://www.auk.edu.kw',
    email: 'info@auk.edu.kw',
    phone: '+965 2224 8399',
    overview: 'The American University of Kuwait (AUK) is a liberal arts institution offering a comprehensive American-style education. AUK is affiliated with Dartmouth College and has established itself as a center for critical thinking, leadership development, and global citizenship. Its graduates are known for strong communication and analytical skills.',
    majors: [
      { name: 'Business Administration', faculty: 'Business', fee: '~580 KWD/semester', gpa: '70%+', duration: '4 years' },
      { name: 'Computer Science', faculty: 'Arts & Sciences', fee: '~560 KWD/semester', gpa: '70%+', duration: '4 years' },
      { name: 'Mass Communication', faculty: 'Arts & Sciences', fee: '~540 KWD/semester', gpa: '65%+', duration: '4 years' },
      { name: 'English Literature', faculty: 'Arts & Sciences', fee: '~520 KWD/semester', gpa: '65%+', duration: '4 years' },
      { name: 'International Studies', faculty: 'Arts & Sciences', fee: '~540 KWD/semester', gpa: '65%+', duration: '4 years' },
    ]
  },
  {
    id: 'australiankw',
    name: 'Australian College of Kuwait (ACK)',
    type: 'international',
    shortDesc: 'An engineering-focused institution offering Australian-accredited programs and strong industry partnerships.',
    emoji: '🦘',
    color: '#006400',
    location: 'Mishref, Kuwait',
    locationArea: 'Mishref',
    established: 2004,
    tags: ['International', 'Australian', 'English'],
    language: 'English',
    nationalities: ['All Nationalities'],
    nationalitiesNote: 'ACK accepts students of all nationalities. The college has a diverse mix of Kuwaiti, Arab, and expatriate students enrolled across all its engineering and business programs.',
    educationLevels: ['Bachelor'],
    website: 'https://www.ack.edu.kw',
    email: 'info@ack.edu.kw',
    phone: '+965 2537 1991',
    overview: 'The Australian College of Kuwait (ACK) provides Australian-accredited education with a strong focus on engineering, computing, and business. ACK maintains close ties with Australian universities, ensuring graduates receive internationally recognized qualifications. The campus features state-of-the-art engineering labs and simulation facilities.',
    majors: [
      { name: 'Civil & Construction Engineering', faculty: 'Engineering', fee: '~470 KWD/semester', gpa: '70%+', duration: '4 years' },
      { name: 'Electrical & Electronics Engineering', faculty: 'Engineering', fee: '~480 KWD/semester', gpa: '72%+', duration: '4 years' },
      { name: 'Mechanical Engineering', faculty: 'Engineering', fee: '~480 KWD/semester', gpa: '72%+', duration: '4 years' },
      { name: 'Computer Systems Engineering', faculty: 'Engineering', fee: '~470 KWD/semester', gpa: '70%+', duration: '4 years' },
      { name: 'Business Administration', faculty: 'Business', fee: '~430 KWD/semester', gpa: '60%+', duration: '4 years' },
    ]
  },
  {
    id: 'box-hill',
    name: 'Box Hill College Kuwait (BHCK)',
    type: 'international',
    shortDesc: 'An Australian technical college offering hospitality, business, and computing programs with hands-on training.',
    emoji: '🏨',
    color: '#5B2C6F',
    location: 'Abu Halifa, Kuwait',
    locationArea: 'Abu Halifa',
    established: 2003,
    tags: ['International', 'Vocational', 'English'],
    language: 'English',
    nationalities: ['All Nationalities'],
    nationalitiesNote: 'Box Hill College Kuwait is open to all nationalities. Kuwaiti and non-Kuwaiti students, including Arab and international residents, are all welcome to enroll.',
    educationLevels: ['Diploma', 'Bachelor'],
    website: 'https://www.bhck.edu.kw',
    email: 'info@bhck.edu.kw',
    phone: '+965 2240 8800',
    overview: 'Box Hill College Kuwait (BHCK) is affiliated with Box Hill Institute in Australia. It provides vocationally-oriented programs in hospitality, business, and IT with strong practical training components. Graduates receive qualifications recognized in Australia and internationally. BHCK is especially popular for its Hospitality & Hotel Management program.',
    majors: [
      { name: 'Hospitality & Hotel Management', faculty: 'Hospitality', fee: '~350 KWD/semester', gpa: '60%+', duration: '3 years' },
      { name: 'Business Administration', faculty: 'Business', fee: '~330 KWD/semester', gpa: '55%+', duration: '3 years' },
      { name: 'Information Technology', faculty: 'Computing', fee: '~340 KWD/semester', gpa: '60%+', duration: '3 years' },
      { name: 'Accounting', faculty: 'Business', fee: '~330 KWD/semester', gpa: '55%+', duration: '3 years' },
    ]
  },
  {
    id: 'gulf',
    name: 'Gulf University for Science & Technology – Graduate School',
    type: 'private',
    shortDesc: 'Dedicated postgraduate programs in MBA, finance, and computer science for working professionals.',
    emoji: '🎓',
    color: '#003366',
    location: 'Mubarak Al Abdullah, Kuwait',
    locationArea: 'Mubarak Al Abdullah',
    established: 2009,
    tags: ['Private', 'Postgraduate', 'English'],
    language: 'English',
    nationalities: ['All Nationalities'],
    nationalitiesNote: 'The GUST Graduate School is open to students of all nationalities who hold a qualifying undergraduate degree. Both Kuwaiti and non-Kuwaiti professionals are welcome.',
    educationLevels: ['Master'],
    website: 'https://www.gust.edu.kw',
    email: 'grad@gust.edu.kw',
    phone: '+965 2530 7000',
    overview: 'GUST\'s Graduate School offers advanced master\'s programs designed for working professionals and fresh graduates seeking advanced academic credentials. Programs are designed in consultation with industry partners and taught by internationally qualified faculty.',
    majors: [
      { name: 'MBA (Master of Business Administration)', faculty: 'Business', fee: '~700 KWD/semester', gpa: 'Bachelor + 2yr exp', duration: '2 years' },
      { name: 'MSc Finance', faculty: 'Business', fee: '~680 KWD/semester', gpa: 'Bachelor in Business', duration: '2 years' },
      { name: 'MSc Computer Science', faculty: 'Computing', fee: '~720 KWD/semester', gpa: 'Bachelor in CS/IT', duration: '2 years' },
    ]
  },
  {
    id: 'puk',
    name: 'Public Authority for Applied Education & Training (PAAET)',
    type: 'public',
    shortDesc: 'Kuwait\'s premier government applied education authority offering technical, health, and business diploma programs.',
    emoji: '🔧',
    color: '#006B3F',
    location: 'Multiple campuses across Kuwait',
    locationArea: 'Multiple',
    established: 1982,
    tags: ['Public', 'Applied / Technical', 'Arabic & English'],
    language: 'Bilingual',
    nationalities: ['Kuwaitis Only'],
    nationalitiesNote: 'PAAET primarily admits Kuwaiti nationals as it is a government-funded institution. Some programs may accept children of Kuwaiti mothers or Bidoon students under special admission criteria.',
    educationLevels: ['Diploma', 'Bachelor'],
    website: 'https://www.paaet.edu.kw',
    email: 'info@paaet.edu.kw',
    phone: '+965 1844 555',
    overview: 'PAAET (Public Authority for Applied Education and Training) is a government institution providing applied and vocational higher education across Kuwait. With colleges in technology, health, business, and teacher training, PAAET is free for Kuwaiti students and offers strong pathways into Kuwait\'s workforce, particularly in technical and healthcare sectors.',
    majors: [
      { name: 'Nursing', faculty: 'Health Sciences', fee: 'Free (Kuwaiti)', gpa: '70%+', duration: '4 years' },
      { name: 'Computer Engineering Technology', faculty: 'Technology', fee: 'Free (Kuwaiti)', gpa: '65%+', duration: '4 years' },
      { name: 'Accounting', faculty: 'Business', fee: 'Free (Kuwaiti)', gpa: '60%+', duration: '4 years' },
      { name: 'Electrical Engineering Technology', faculty: 'Technology', fee: 'Free (Kuwaiti)', gpa: '68%+', duration: '4 years' },
      { name: 'Teacher Training', faculty: 'Education', fee: 'Free (Kuwaiti)', gpa: '65%+', duration: '4 years' },
      { name: 'Pharmacy Technician', faculty: 'Health Sciences', fee: 'Free (Kuwaiti)', gpa: '72%+', duration: '3 years' },
    ]
  },
  {
    id: 'diplomat',
    name: 'Maastricht School of Management Kuwait',
    type: 'international',
    shortDesc: 'A Dutch management school offering internationally accredited MBA and executive education programs in Kuwait.',
    emoji: '🌷',
    color: '#9B1B1B',
    location: 'Kuwait City',
    locationArea: 'Kuwait City',
    established: 2008,
    tags: ['International', 'Dutch', 'MBA / Executive'],
    language: 'English',
    nationalities: ['All Nationalities'],
    nationalitiesNote: 'MSM Kuwait accepts participants of all nationalities. The school attracts professionals from Kuwait, GCC, and across the Arab world. International students are equally welcome.',
    educationLevels: ['Master', 'Doctorate'],
    website: 'https://www.msm.nl/kuwait',
    email: 'kuwait@msm.nl',
    phone: '+965 2249 0404',
    overview: 'Maastricht School of Management (MSM) Kuwait offers world-class management education with degrees accredited in the Netherlands. The school is especially renowned for its MBA program, drawing experienced professionals from across the Gulf region. MSM emphasizes global perspective, cross-cultural management, and real-world case studies.',
    majors: [
      { name: 'Master of Business Administration (MBA)', faculty: 'Management', fee: '~1,200 KWD/semester', gpa: 'Bachelor + experience', duration: '1.5 years' },
      { name: 'Executive MBA', faculty: 'Management', fee: '~1,500 KWD/semester', gpa: '5+ years experience', duration: '2 years' },
      { name: 'DBA (Doctorate in Business)', faculty: 'Management', fee: '~2,000 KWD/semester', gpa: 'MBA required', duration: '3 years' },
    ]
  },
  {
    id: 'bku',
    name: 'British University of Kuwait (BUK)',
    type: 'international',
    shortDesc: 'A British-inspired university offering UK-standard degrees in law, business, engineering, and computing.',
    emoji: '🇬🇧',
    color: '#003082',
    location: 'Mishref, Kuwait',
    locationArea: 'Mishref',
    established: 2011,
    tags: ['International', 'British', 'English'],
    language: 'English',
    nationalities: ['All Nationalities'],
    nationalitiesNote: 'BUK accepts students of all nationalities. Kuwaiti, Arab, GCC, and international students are all eligible to apply. The university has a diverse and multicultural campus community.',
    educationLevels: ['Bachelor'],
    website: 'https://www.buk.edu.kw',
    email: 'admissions@buk.edu.kw',
    phone: '+965 2251 4200',
    overview: 'The British University of Kuwait (BUK) delivers UK-standard higher education in a modern Kuwait campus. BUK\'s programs are validated by UK university partners, ensuring graduates receive internationally recognized British degrees. The university is known for its law faculty and strong business programs.',
    majors: [
      { name: 'Law (LLB)', faculty: 'Law', fee: '~550 KWD/semester', gpa: '70%+', duration: '3 years' },
      { name: 'Business Administration', faculty: 'Business', fee: '~500 KWD/semester', gpa: '65%+', duration: '3 years' },
      { name: 'Computer Science', faculty: 'Computing', fee: '~520 KWD/semester', gpa: '68%+', duration: '3 years' },
      { name: 'Civil Engineering', faculty: 'Engineering', fee: '~560 KWD/semester', gpa: '72%+', duration: '4 years' },
      { name: 'Accounting & Finance', faculty: 'Business', fee: '~510 KWD/semester', gpa: '65%+', duration: '3 years' },
    ]
  },
  {
    id: 'cck',
    name: 'Canadian College of Kuwait (CCK)',
    type: 'international',
    shortDesc: 'A Canadian-affiliated college offering applied programs in health sciences, IT, and business.',
    emoji: '🍁',
    color: '#C41E3A',
    location: 'Al Jahra, Kuwait',
    locationArea: 'Al Jahra',
    established: 2009,
    tags: ['International', 'Canadian', 'English'],
    language: 'English',
    nationalities: ['All Nationalities'],
    nationalitiesNote: 'CCK is open to all nationalities. Kuwaiti citizens, GCC nationals, Arab residents, and international students are all welcome to apply for any of the available programs.',
    educationLevels: ['Diploma', 'Bachelor'],
    website: 'https://www.cck.edu.kw',
    email: 'info@cck.edu.kw',
    phone: '+965 2576 2888',
    overview: 'The Canadian College of Kuwait (CCK) offers Canadian-standard education with a focus on healthcare, technology, and applied business. CCK partners with leading Canadian colleges to deliver programs that are both regionally relevant and internationally recognized. The college is particularly strong in health sciences and nursing.',
    majors: [
      { name: 'Nursing', faculty: 'Health Sciences', fee: '~420 KWD/semester', gpa: '70%+', duration: '4 years' },
      { name: 'Medical Lab Technology', faculty: 'Health Sciences', fee: '~400 KWD/semester', gpa: '68%+', duration: '3 years' },
      { name: 'Information Technology', faculty: 'Computing', fee: '~360 KWD/semester', gpa: '60%+', duration: '4 years' },
      { name: 'Business Administration', faculty: 'Business', fee: '~350 KWD/semester', gpa: '58%+', duration: '4 years' },
    ]
  },
];

let currentFilter = 'all';
let activeAdvFilters = { loc: [], nat: [], type: [], edu: [], lang: [] };

// ── FILTER PANEL ──────────────────────────────────────
function toggleFilterPanel() {
  document.getElementById('filterPanel').classList.toggle('open');
}

function toggleFilterOpt(el, group, value) {
  el.classList.toggle('checked');
  const arr = activeAdvFilters[group];
  const idx = arr.indexOf(value);
  if (idx > -1) arr.splice(idx, 1);
  else arr.push(value);
  updateFilterCount();
}

function updateFilterCount() {
  const total = Object.values(activeAdvFilters).reduce((s, a) => s + a.length, 0);
  const badge = document.getElementById('filterCount');
  badge.textContent = total;
  badge.classList.toggle('visible', total > 0);
}

function clearAllFilters() {
  activeAdvFilters = { loc: [], nat: [], type: [], edu: [], lang: [] };
  document.querySelectorAll('#filterPanel .filter-option').forEach(el => el.classList.remove('checked'));
  updateFilterCount();
  renderActiveChips();
  filterUniversities();
}

function applyFilters() {
  renderActiveChips();
  filterUniversities();
  document.getElementById('filterPanel').classList.remove('open');
}

function removeChip(group, value) {
  activeAdvFilters[group] = activeAdvFilters[group].filter(v => v !== value);
  // uncheck the corresponding option
  document.querySelectorAll('#filterPanel .filter-option').forEach(el => {
    if (el.getAttribute('data-group') === group && el.getAttribute('data-value') === value) {
      el.classList.remove('checked');
    }
  });
  updateFilterCount();
  renderActiveChips();
  filterUniversities();
}

function renderActiveChips() {
  const container = document.getElementById('activeFilters');
  const labelMap = {
    loc: '📍', nat: '🌍', type: '🏛️', edu: '🎓', lang: '🗣️'
  };
  const chips = [];
  Object.entries(activeAdvFilters).forEach(([group, values]) => {
    values.forEach(v => {
      chips.push(`<div class="active-chip">${labelMap[group]} ${v}<button onclick="removeChip('${group}','${v}')" title="Remove">✕</button></div>`);
    });
  });
  container.innerHTML = chips.join('');
}

// ── PAGE ROUTING ──────────────────────────────────────
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  // Map IDs
  const pageMap = {
    'home': 'home',
    'universities': 'universities-page',
    'ai': 'ai-page',
    'about': 'about-page',
    'contact': 'contact-page',
  };
  const pageId = pageMap[id] || id;
  const pageEl = document.getElementById(pageId);
  if (pageEl) {
    pageEl.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Activate nav link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(l => {
    const txt = l.textContent.trim().toLowerCase();
    if ((id === 'home' && txt === 'home') ||
        (id === 'universities' && txt === 'universities') ||
        (id === 'ai' && (txt === 'ai advisor' || txt.includes('ai'))) ||
        (id === 'about' && txt === 'about us') ||
        (id === 'contact' && txt === 'contact')) {
      l.classList.add('active');
    }
  });

  if (id === 'universities') renderUniversities();
  initScrollAnimations();
}

function goHome() { showPage('home'); }

function toggleMobile() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// ── UNIVERSITIES ──────────────────────────────────────
function renderUniversities() {
  filterUniversities();
}

function setFilter(type, btn) {
  currentFilter = type;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filterUniversities();
}

function filterUniversities() {
  const q = (document.getElementById('uniSearch')?.value || '').toLowerCase().trim();
  const grid = document.getElementById('universitiesGrid');
  const noRes = document.getElementById('noResults');
  if (!grid) return;

  const f = activeAdvFilters;

  const filtered = universities.filter(u => {
    // Quick type filter (top bar)
    if (currentFilter !== 'all' && u.type !== currentFilter) return false;

    // Text search
    if (q && !u.name.toLowerCase().includes(q) &&
        !u.shortDesc.toLowerCase().includes(q) &&
        !u.majors.some(m => m.name.toLowerCase().includes(q))) return false;

    // Advanced: Location
    if (f.loc.length > 0) {
      const locMatch = f.loc.some(l => {
        if (l === 'Multiple') return u.locationArea === 'Multiple';
        return u.locationArea && u.locationArea.toLowerCase().includes(l.toLowerCase());
      });
      if (!locMatch) return false;
    }

    // Advanced: Nationality
    if (f.nat.length > 0) {
      const natMatch = f.nat.some(n => u.nationalities && u.nationalities.includes(n));
      if (!natMatch) return false;
    }

    // Advanced: University type (from filter panel)
    if (f.type.length > 0) {
      if (!f.type.includes(u.type)) return false;
    }

    // Advanced: Education level
    if (f.edu.length > 0) {
      const eduMatch = f.edu.some(e => u.educationLevels && u.educationLevels.some(el => el.toLowerCase().includes(e.toLowerCase())));
      if (!eduMatch) return false;
    }

    // Advanced: Language
    if (f.lang.length > 0) {
      const langMatch = f.lang.some(l => u.language && u.language.toLowerCase().includes(l.toLowerCase()));
      if (!langMatch) return false;
    }

    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    noRes.style.display = 'block';
    return;
  }
  noRes.style.display = 'none';

  grid.innerHTML = filtered.map(u => {
    const natPills = (u.nationalities || []).map(n =>
      `<span class="meta-pill pill-nat"><i class="fas fa-globe" style="font-size:0.65rem"></i> ${n}</span>`
    ).join('');
    const eduPills = (u.educationLevels || []).map(e =>
      `<span class="meta-pill pill-edu"><i class="fas fa-graduation-cap" style="font-size:0.65rem"></i> ${e}</span>`
    ).join('');

    return `
    <div class="uni-card" onclick="showUniDetail('${u.id}')">
      <div class="uni-card-img-placeholder" style="background:linear-gradient(135deg, ${u.color}, #2c3e50);">
        <span style="font-size:4rem">${u.emoji}</span>
        <span class="uni-card-badge">${u.tags[0]}</span>
      </div>
      <div class="uni-card-body">
        <div class="uni-card-name">${u.name}</div>
        <div class="uni-card-type">${u.type.charAt(0).toUpperCase() + u.type.slice(1)} University</div>
        <div class="uni-card-meta">${natPills}${eduPills}</div>
        <div class="uni-card-desc">${u.shortDesc}</div>
        <div class="uni-card-footer">
          <div class="uni-card-majors"><i class="fas fa-book"></i> ${u.majors.length} majors</div>
          <button class="btn-view">View</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ── UNIVERSITY DETAIL ──────────────────────────────────
function showUniDetail(id) {
  const u = universities.find(u => u.id === id);
  if (!u) return;

  const tagClasses = { public: 'tag-public', private: 'tag-private', international: 'tag-intl' };
  const tagClass = tagClasses[u.type] || 'tag-intl';

  const majorsRows = u.majors.map(m => `
    <tr>
      <td><strong>${m.name}</strong></td>
      <td>${m.faculty}</td>
      <td><span style="color:var(--teal);font-weight:600">${m.gpa}</span></td>
      <td>${m.duration}</td>
      <td style="color:var(--navy);font-weight:500">${m.fee}</td>
    </tr>
  `).join('');

  document.getElementById('uniDetailContent').innerHTML = `
    <div class="detail-hero">
      <div style="position:relative;z-index:1;max-width:1100px;margin:0 auto;padding:0 5%;">
        <button class="detail-back" onclick="showPage('universities')"><i class="fas fa-arrow-left"></i> Back to Universities</button>
        <div class="detail-header">
          <div class="detail-logo" style="background:linear-gradient(135deg, ${u.color}, rgba(255,255,255,0.1));">${u.emoji}</div>
          <div>
            <div class="detail-title">${u.name}</div>
            <div class="detail-subtitle"><i class="fas fa-map-marker-alt"></i> ${u.location} &nbsp;·&nbsp; <i class="fas fa-calendar"></i> Est. ${u.established}</div>
            <div class="detail-tags">
              <span class="detail-tag ${tagClass}">${u.type.charAt(0).toUpperCase()+u.type.slice(1)}</span>
              ${u.tags.slice(1).map(t => `<span class="detail-tag tag-intl">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="detail-content" style="max-width:1100px;margin:0 auto;">
      <div>
        <div class="detail-section">
          <div class="detail-section-title"><i class="fas fa-info-circle"></i> Overview</div>
          <p style="color:var(--text-muted);line-height:1.8;font-size:0.95rem;">${u.overview}</p>
        </div>

        <div class="detail-section">
          <div class="detail-section-title"><i class="fas fa-globe"></i> Accepted Nationalities</div>
          <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:12px;">
            ${(u.nationalities||[]).map(n=>`<span style="display:inline-flex;align-items:center;gap:6px;padding:7px 16px;border-radius:20px;background:rgba(28,124,140,0.1);color:var(--teal);font-weight:700;font-size:0.85rem;border:1.5px solid rgba(28,124,140,0.2);"><i class="fas fa-check-circle"></i>${n}</span>`).join('')}
          </div>
          <p style="color:var(--text-muted);font-size:0.9rem;line-height:1.7;">${u.nationalitiesNote || ''}</p>
        </div>

        <div class="detail-section">
          <div class="detail-section-title"><i class="fas fa-layer-group"></i> Education Levels Offered</div>
          <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:12px;">
            ${(u.educationLevels||[]).map(e => {
              const icons = {Diploma:'🎖️', Bachelor:'🎓', Master:'📜', Doctorate:'🏅'};
              const colors = {Diploma:'rgba(91,44,111,0.12)', Bachelor:'rgba(13,27,42,0.08)', Master:'rgba(201,168,76,0.12)', Doctorate:'rgba(155,27,27,0.1)'};
              const textColors = {Diploma:'#5B2C6F', Bachelor:'var(--navy)', Master:'#8a6a00', Doctorate:'#9B1B1B'};
              return `<span style="display:inline-flex;align-items:center;gap:8px;padding:10px 20px;border-radius:20px;background:${colors[e]||'var(--mist)'};color:${textColors[e]||'var(--navy)'};font-weight:700;font-size:0.9rem;border:1.5px solid rgba(0,0,0,0.08);">${icons[e]||'📋'} ${e}</span>`;
            }).join('')}
          </div>
          <p style="color:var(--text-muted);font-size:0.88rem;">This university offers programs at the above level(s) of education. See the majors table below for specific program details and durations.</p>
        </div>

        <div class="detail-section">
          <div class="detail-section-title"><i class="fas fa-book-open"></i> Available Majors & Requirements</div>
          <div style="overflow-x:auto;border-radius:14px;border:1px solid var(--mist);">
            <table class="majors-table">
              <thead>
                <tr>
                  <th>Major</th><th>Faculty</th><th>Min. GPA</th><th>Duration</th><th>Tuition</th>
                </tr>
              </thead>
              <tbody>${majorsRows}</tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="detail-sidebar">
        <div class="contact-card">
          <div class="contact-card-title"><i class="fas fa-address-card" style="color:var(--gold);margin-right:8px;"></i> Contact & Links</div>
          <div class="contact-item"><i class="fas fa-globe"></i> <a href="${u.website}" target="_blank">${u.website.replace('https://','')}</a></div>
          <div class="contact-item"><i class="fas fa-envelope"></i> <a href="mailto:${u.email}">${u.email}</a></div>
          <div class="contact-item"><i class="fas fa-phone"></i> <span>${u.phone}</span></div>
          <div class="contact-item"><i class="fas fa-map-marker-alt"></i> <span>${u.location}</span></div>
        </div>

        <div class="contact-card">
          <div class="contact-card-title"><i class="fas fa-id-card" style="color:var(--gold);margin-right:8px;"></i> Quick Facts</div>
          <div class="info-grid">
            <div class="info-block">
              <div class="info-block-label"><i class="fas fa-globe"></i> Nationalities</div>
              <div class="nat-tag">${(u.nationalities||[]).join(' · ')}</div>
            </div>
            <div class="info-block">
              <div class="info-block-label"><i class="fas fa-language"></i> Language</div>
              <div class="info-block-value">${u.language||'—'}</div>
            </div>
          </div>
          <div class="info-block" style="margin-bottom:0;">
            <div class="info-block-label"><i class="fas fa-graduation-cap"></i> Education Levels</div>
            <div class="edu-level-pills">${(u.educationLevels||[]).map(e=>`<span class="edu-pill">${e}</span>`).join('')}</div>
          </div>
        </div>

        <button class="btn-primary" style="width:100%;justify-content:center;margin-top:4px;" onclick="showPage('ai')">
          <i class="fas fa-robot"></i> Check AI Match
        </button>
      </div>
    </div>
  `;

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('uni-detail').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── AI ADVISOR ──────────────────────────────────────────
function toggleCheck(el) {
  el.classList.toggle('checked');
}

function getCheckedFields() {
  return Array.from(document.querySelectorAll('#fieldsGroup .checkbox-label.checked'))
    .map(el => el.getAttribute('data-value'));
}

async function runAIAdvisor() {
  const gpa = document.getElementById('gpa').value;
  const budget = document.getElementById('budget').value;
  const location = document.getElementById('location').value;
  const transport = document.getElementById('transport').value;
  const citizenship = document.getElementById('citizenship').value;
  const fields = getCheckedFields();
  const note = document.getElementById('extraNote').value;

  if (!gpa || !budget) {
    showToast('Please fill in at least GPA and Budget ⚠️');
    return;
  }
  if (!citizenship) {
    showToast('Please select your citizenship ⚠️');
    return;
  }
  if (fields.length === 0) {
    showToast('Please select at least one field of study ⚠️');
    return;
  }

  const btn = document.getElementById('analyzeBtn');
  btn.disabled = true;
  btn.innerHTML = '<div class="loader" style="width:24px;height:24px;border-width:3px;margin:0 8px 0 0;"></div> Analyzing...';

  const resultsDiv = document.getElementById('ai-results');
  const resultsBody = document.getElementById('resultsBody');
  resultsDiv.style.display = 'block';
  resultsBody.innerHTML = `<div class="loading-wrap"><div class="loader"></div><div class="loading-text">Our AI is finding your best matches...</div></div>`;

  resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });

  // Build prompt
  const gpaLabels = {excellent:'90-100% (Excellent)',very_good:'80-89% (Very Good)',good:'70-79% (Good)',average:'60-69% (Average)',below:'Below 60%'};
  const budgetLabels = {free:'Government/Free',low:'Under 3,000 KWD/year',medium:'3,000-6,000 KWD/year',high:'6,000-10,000 KWD/year',very_high:'Above 10,000 KWD/year'};
  const citizenshipLabels = {kuwaiti:'Kuwaiti Citizen', gcc:'GCC Citizen', other:'Other Country Citizen'};

  const prompt = `You are a university advisor for Kuwait. A student has filled in this profile:
- High School GPA: ${gpaLabels[gpa]}
- Annual Budget: ${budgetLabels[budget]}
- Citizenship: ${citizenshipLabels[citizenship]}
- Location in Kuwait: ${location || 'Not specified'}
- Has personal transport: ${transport === 'yes' ? 'Yes' : 'No'}
- Preferred fields: ${fields.join(', ')}
- Additional notes: ${note || 'None'}

CRITICAL RULE: Only recommend universities that accept the student's nationality/citizenship. Kuwaiti-only universities must NOT be recommended to GCC or other country citizens.

From the following list of real Kuwaiti universities (with their accepted nationalities and available majors), recommend exactly the TOP 3 best matches for this student. For each university, also recommend the single BEST MATCHING MAJOR from that university's list that fits the student's preferred fields, GPA, and budget:
${universities.map(u => `- ${u.name} (${u.type}, accepts: ${(u.nationalities||[]).join(' / ')}, majors: ${u.majors.map(m=>`${m.name} [min GPA: ${m.gpa}, fee: ${m.fee}]`).join(' | ')})`).join('\n')}

Respond ONLY with a valid JSON array (no markdown, no text outside JSON) with exactly 3 objects:
[
  {
    "name": "Full university name exactly as listed",
    "match": 94,
    "reason": "2-3 sentences explaining specifically why this university suits this student based on their citizenship, GPA, budget, and field interests.",
    "recommended_major": "Exact major name from the university's list above",
    "major_reason": "1-2 sentences explaining specifically why this major is the best fit for this student's GPA, budget, and preferred fields.",
    "tags": ["tag1", "tag2", "tag3"]
  }
]
Match should be a number 70-98. Tags should include nationality eligibility info like "Open to All Nationalities" or "Kuwaiti Citizens". Also include tags like "Budget Friendly", "Matches GPA", "Strong in CS" where relevant.`;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        messages: [{ role: "user", content: prompt }]
      })
    });

    if (!response.ok) throw new Error('API error');
    const data = await response.json();
    const text = data.content?.map(i => i.text || '').join('') || '';
    const clean = text.replace(/```json|```/g, '').trim();
    const results = JSON.parse(clean);
    if (!Array.isArray(results) || results.length === 0) throw new Error('Bad response');

    renderAIResults(results);
  } catch (err) {
    renderAIResults(localAIFallback(gpa, budget, fields, location, transport, citizenship));
  }

  btn.disabled = false;
  btn.innerHTML = '<i class="fas fa-robot"></i> Get My Recommendations';
}

function localAIFallback(gpa, budget, fields, location, transport, citizenship) {

  // ── NATIONALITY ELIGIBILITY MAP ────────────────────────
  // Determines which universities each citizenship type can access
  function isEligible(u, citizenship) {
    const nats = u.nationalities || [];
    if (nats.includes('All Nationalities')) return true;
    if (citizenship === 'kuwaiti') return true; // Kuwaitis can apply anywhere
    if (citizenship === 'gcc') return nats.includes('GCC Nationals') || nats.includes('All Nationalities');
    if (citizenship === 'other') return nats.includes('All Nationalities');
    return true; // default: allow if unknown
  }

  // ── GPA eligibility thresholds per university ──────────────
  const gpaRank = { excellent: 5, very_good: 4, good: 3, average: 2, below: 1 };
  const uniMinGpa = {
    ku: 4,         // Kuwait University – needs very good or excellent
    puk: 3,        // PAAET – good is fine
    aou: 2,        // AOU – open / flexible
    gust: 3,       // GUST – good+
    auk: 3,        // AUK – good+
    acm: 3,        // ACM – good+
    australiankw: 3,
    bku: 3,
    cck: 2,
    'box-hill': 2,
    gulf: 4,       // GUST Grad – needs bachelor (proxy: very good)
    diplomat: 4,   // MSM – MBA level
  };

  // ── Annual cost tier per university ──────────────────────
  const uniCostTier = {
    ku: 'free',
    puk: 'free',
    aou: 'low',
    cck: 'low',
    'box-hill': 'low',
    bku: 'medium',
    australiankw: 'medium',
    acm: 'medium',
    gust: 'high',
    auk: 'high',
    gulf: 'high',
    diplomat: 'very_high',
  };
  const budgetRank = { free: 1, low: 2, medium: 3, high: 4, very_high: 5 };

  // ── Field → universities that are strong in that field ─────
  const fieldStrength = {
    engineering:   { ku: 10, acm: 10, australiankw: 10, bku: 8, puk: 7, gust: 4 },
    medicine:      { ku: 10, puk: 8, cck: 8, aou: 3 },
    business:      { gust: 10, auk: 10, aou: 9, bku: 8, acm: 7, cck: 6, 'box-hill': 6, ku: 6, puk: 5, diplomat: 10, gulf: 9 },
    cs:            { ku: 10, gust: 10, acm: 9, australiankw: 8, bku: 8, aou: 7, auk: 7, cck: 6, puk: 6 },
    law:           { ku: 10, bku: 9, auk: 5 },
    arts:          { auk: 10, ku: 8, aou: 7 },
    science:       { ku: 10, gust: 7, auk: 6 },
    architecture:  { ku: 10, acm: 5 },
    education:     { ku: 8, aou: 9, puk: 8 },
    any:           { ku: 7, gust: 7, aou: 7, auk: 7, acm: 7, australiankw: 7, bku: 7, cck: 6, puk: 7, 'box-hill': 5, gulf: 6, diplomat: 5 },
  };

  // ── Location proximity bonus ────────────────────────────
  // (rough area → which unis are nearby)
  const locationBonus = {
    kuwait_city: { ku: 5, aou: 4, bku: 4, diplomat: 5, gulf: 3 },
    hawally:     { gust: 8, auk: 6, aou: 5, ku: 3 },
    farwaniya:   { puk: 6, ku: 4, aou: 3 },
    ahmadi:      { australiankw: 5, acm: 4, puk: 4 },
    jahra:       { ku: 3, puk: 5 },
    mubarak:     { aou: 4, cck: 4, 'box-hill': 4 },
  };

  const studentGpaRank = gpaRank[gpa] || 2;
  const studentBudgetRank = budgetRank[budget] || 1;
  const noTransport = transport === 'no';

  // Hard-filter: remove universities the student is not eligible for
  const eligibleUniversities = universities.filter(u => isEligible(u, citizenship));

  const scored = eligibleUniversities.map(u => {
    let score = 40; // base
    const reasons = [];
    const tags = [];

    // ── 0. Nationality eligibility tag ────────────────────
    if ((u.nationalities || []).includes('All Nationalities')) {
      tags.push('Open to All Nationalities 🌍');
    } else if ((u.nationalities || []).includes('Kuwaitis Only')) {
      tags.push('Kuwaiti Citizens ✓');
    } else if ((u.nationalities || []).includes('GCC Nationals')) {
      tags.push('GCC Citizens ✓');
    }

    // ── 1. GPA eligibility ─────────────────────────────────
    const minGpa = uniMinGpa[u.id] || 3;
    if (studentGpaRank >= minGpa + 1) {
      score += 18;
      reasons.push(`Your GPA exceeds the typical entry requirement at ${u.name}`);
      tags.push('Matches GPA ✓');
    } else if (studentGpaRank >= minGpa) {
      score += 10;
      reasons.push(`Your GPA meets the entry requirements at ${u.name}`);
    } else {
      score -= 20; // penalise hard if GPA is too low
      reasons.push(`Entry requirements at ${u.name} may be competitive for your GPA`);
    }

    // ── 2. Budget fit ──────────────────────────────────────
    const costTier = uniCostTier[u.id] || 'medium';
    const costRank = budgetRank[costTier];
    const budgetGap = studentBudgetRank - costRank;

    if (budgetGap >= 2) {
      score += 16;
      tags.push('Well Within Budget 💰');
      reasons.push(`Tuition is comfortably within your annual budget`);
    } else if (budgetGap >= 0) {
      score += 9;
      tags.push('Budget Friendly');
      reasons.push(`Tuition fits your stated budget`);
    } else if (budgetGap === -1) {
      score -= 8;
      reasons.push(`Tuition is slightly above your budget — scholarships or payment plans may help`);
    } else {
      score -= 22;
      reasons.push(`Tuition is significantly above your stated budget`);
    }

    // ── 3. Field of study strength ─────────────────────────
    let fieldPoints = 0;
    const matchedFields = [];
    fields.forEach(f => {
      const strength = (fieldStrength[f] || {})[u.id] || 0;
      fieldPoints += strength;
      if (strength >= 8) matchedFields.push(f.replace('_',' ').replace(/\b\w/g,c=>c.toUpperCase()));
    });
    // Normalise: if user picked many fields, cap contribution
    const normFieldPoints = Math.min(fieldPoints / Math.max(fields.length, 1), 10);
    score += normFieldPoints * 2.2;
    if (matchedFields.length > 0) {
      tags.push(`Strong in ${matchedFields[0]}`);
      reasons.push(`${u.name} has a strong track record in ${matchedFields.join(', ')}`);
    }

    // ── 4. Location / transport ────────────────────────────
    const locMap = location ? (locationBonus[location] || {}) : {};
    const locPoints = locMap[u.id] || 0;
    if (locPoints >= 6) {
      score += 8;
      tags.push('Close to You 📍');
      reasons.push(`${u.name} is conveniently located relative to your area`);
    } else if (locPoints >= 3) {
      score += 4;
    } else if (noTransport) {
      score -= 5; // penalise distant unis if no transport
    }

    // ── 5. Type bonuses ────────────────────────────────────
    if (budget === 'free' && u.type === 'public') { score += 12; tags.push('Government / Free'); }
    if ((budget === 'very_high' || budget === 'high') && u.type === 'international') score += 5;
    if (gpa === 'excellent' && u.id === 'ku') { score += 8; tags.push('Top Public Uni'); }
    if (gpa === 'below' && (u.id === 'aou' || u.id === 'box-hill' || u.id === 'cck')) { score += 10; tags.push('Flexible Admission'); }

    // Clamp score to 55–97 range and convert to integer percentage
    const finalScore = Math.min(97, Math.max(55, Math.round(score)));

    // Build reason sentence (pick best 2 reasons)
    const reasonText = reasons.slice(0, 2).join('. ') + '.';

    return { u, score: finalScore, reasonText, tags: [...new Set(tags)].slice(0, 3) };
  });

  // Sort descending by score
  scored.sort((a, b) => b.score - a.score);

  return scored.slice(0, 3).map(({ u, score, reasonText, tags }) => {

    // ── Pick the best matching major for this university ───────
    // Map each user field to keywords that match major names
    const fieldKeywords = {
      engineering:  ['engineering', 'engineer'],
      medicine:     ['medicine', 'medical', 'nursing', 'health', 'pharmacy', 'dentistry'],
      business:     ['business', 'finance', 'accounting', 'marketing', 'management', 'mba'],
      cs:           ['computer', 'information technology', 'it', 'computing', 'software'],
      law:          ['law', 'legal', 'llb'],
      arts:         ['arts', 'humanities', 'english', 'literature', 'communication', 'media'],
      science:      ['science', 'mathematics', 'physics', 'chemistry', 'biology'],
      architecture: ['architecture', 'design', 'construction'],
      education:    ['education', 'teacher', 'teaching', 'training'],
      any:          [],
    };

    // Score each major against the user's chosen fields
    const scoredMajors = u.majors.map(m => {
      const mLower = m.name.toLowerCase();
      let mScore = 0;
      fields.forEach(f => {
        const kws = fieldKeywords[f] || [];
        if (kws.some(kw => mLower.includes(kw))) mScore += 10;
      });
      // Bonus: GPA compatibility (parse first number from gpa string like "75%+")
      const gpaNum = parseInt(m.gpa);
      if (!isNaN(gpaNum)) {
        const studentGpaPct = { excellent: 95, very_good: 85, good: 75, average: 65, below: 55 };
        if ((studentGpaPct[gpa] || 60) >= gpaNum) mScore += 5;
      }
      return { major: m, mScore };
    });

    scoredMajors.sort((a, b) => b.mScore - a.mScore);
    const bestMajor = scoredMajors[0]?.major || u.majors[0];

    // Build major reason
    const fieldNames = fields
      .filter(f => f !== 'any')
      .map(f => f.replace('_', ' '))
      .join(', ');
    const majorReason = `${bestMajor.name} is the strongest match for your interest in ${fieldNames || 'your chosen field'}. ` +
      `It requires a minimum GPA of ${bestMajor.gpa} and has a tuition of ${bestMajor.fee}, which aligns with your stated budget.`;

    return {
      name: u.name,
      match: score,
      reason: reasonText,
      recommended_major: bestMajor.name,
      major_reason: majorReason,
      tags,
    };
  });
}

function renderAIResults(results) {
  const body = document.getElementById('resultsBody');
  body.innerHTML = results.map((r, i) => `
    <div class="result-card" style="animation-delay:${i*0.15}s">
      <div class="result-rank">${i + 1}</div>

      <div class="result-uni-name">${r.name}</div>
      <div class="result-match">
        <div class="match-bar-wrap"><div class="match-bar" style="width:${r.match}%"></div></div>
        <span class="match-label">${r.match}%</span>
      </div>
      <div class="result-why">${r.reason}</div>

      ${r.recommended_major ? `
      <div style="margin-top:16px;padding:14px 16px;background:rgba(201,168,76,0.07);border:1.5px solid rgba(201,168,76,0.25);border-radius:12px;">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
          <i class="fas fa-graduation-cap" style="color:var(--gold);font-size:0.9rem;"></i>
          <span style="font-size:0.78rem;font-weight:700;letter-spacing:0.6px;text-transform:uppercase;color:var(--gold);">Recommended Major</span>
        </div>
        <div style="font-size:1rem;font-weight:700;color:var(--navy);margin-bottom:6px;">${r.recommended_major}</div>
        <div style="font-size:0.88rem;color:var(--text-muted);line-height:1.65;">${r.major_reason}</div>
      </div>
      ` : ''}

      <div class="result-tags" style="margin-top:14px;">${(r.tags||[]).map(t=>`<span class="result-tag">${t}</span>`).join('')}</div>
      <button class="btn-view" style="margin-top:16px;" onclick="showUniFromName('${r.name}')">
        View University <i class="fas fa-arrow-right" style="margin-left:4px;"></i>
      </button>
    </div>
  `).join('');
}

function showUniFromName(name) {
  const u = universities.find(u => u.name === name);
  if (u) showUniDetail(u.id);
}

// ── CONTACT ──────────────────────────────────────────
function sendContact() {
  const name = document.getElementById('contactName').value;
  const email = document.getElementById('contactEmail').value;
  const msg = document.getElementById('contactMsg').value;
  if (!name || !email || !msg) {
    showToast('Please fill in all required fields ⚠️');
    return;
  }
  document.getElementById('contactName').value = '';
  document.getElementById('contactEmail').value = '';
  document.getElementById('contactMsg').value = '';
  showToast('Message sent! Thank you 🙏');
}

// ── TOAST ──────────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ── SCROLL ANIMATIONS ──────────────────────────────────
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ── INIT ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  renderUniversities();
});
