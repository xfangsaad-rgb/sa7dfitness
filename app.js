const STORAGE_KEY = 'sa7d-fitness-state-v1';
const APP_NOW = new Date('2026-04-28T09:41:00');
const DEEP_SCREENS = new Set([
  'editProfile',
  'editPlan',
  'editExercise',
  'customExercise',
  'exerciseGuide',
  'library',
  'history',
  'calendar',
  'nutrition',
  'achievements',
  'settings',
  'authIntro',
  'authLogin',
  'authSignup',
  'authForgot',
  'authReset',
  'cloudLogout',
  'notifications',
  'messages',
  'challenges'
]);
const MAIN_NAV = {
  home: 'home',
  workoutPlan: 'workout',
  workoutSession: 'workout',
  progress: 'progress',
  profile: 'profile',
  editProfile: 'profile',
  editPlan: 'workout',
  editExercise: 'workout',
  customExercise: 'workout',
  exerciseGuide: 'workout',
  library: 'workout',
  history: 'profile',
  calendar: 'profile',
  nutrition: 'profile',
  achievements: 'profile',
  settings: 'profile',
  authIntro: 'profile',
  authLogin: 'profile',
  authSignup: 'profile',
  authForgot: 'profile',
  authReset: 'profile',
  cloudLogout: 'profile',
  notifications: 'home',
  messages: 'profile',
  challenges: 'profile'
};
const GOALS = ['Bulking', 'Cutting', 'Maintain'];
const DIFFICULTIES = ['Beginner', 'Intermediate', 'Advanced'];
const CATEGORIES = ['All', 'Chest', 'Back', 'Legs', 'Shoulders', 'Arms', 'Core'];
const CLOUD_SYNC_DELAY = 1800;
const MEDIA_DB_NAME = 'sa7d-exercise-media';
const MEDIA_STORE_NAME = 'exercise-assets';
const CUSTOM_VIDEO_LIMIT_BYTES = 18 * 1024 * 1024;
const ANDROID_APK_FILE = 'sa7dfitness-android.apk';
const ANDROID_APK_DOWNLOAD_URL = 'https://xfangsaad-rgb.github.io/sa7dfitness/sa7dfitness-android.apk';

const ICONS = {
  menu:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8"/></svg>',
  bell:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 17h8l-1.1-1.5v-3.8a3.9 3.9 0 0 0-2.9-3.7V7.5a1 1 0 1 0-2 0V8a3.9 3.9 0 0 0-2.9 3.7v3.8L8 17Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.6"/><path d="M10.2 18.7a2.1 2.1 0 0 0 3.6 0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.6"/></svg>',
  back:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14.5 5-7 7 7 7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/></svg>',
  calendar:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5.5" width="16" height="14" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M8 3.8v3.2M16 3.8v3.2M4 9.5h16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.6"/></svg>',
  dots:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="5" cy="12" r="1.7" fill="currentColor"/><circle cx="12" cy="12" r="1.7" fill="currentColor"/><circle cx="19" cy="12" r="1.7" fill="currentColor"/></svg>',
  home:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10.3 12 4l8 6.3V19a1 1 0 0 1-1 1h-4.6v-6h-4.8v6H5a1 1 0 0 1-1-1Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.6"/></svg>',
  dumbbell:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 10v4M7 8v8M17 8v8M19 10v4M7 12h10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8"/></svg>',
  chart:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19V9M12 19V5M19 19v-7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.9"/></svg>',
  user:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.4" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M5.2 19c1.8-3 4.2-4.5 6.8-4.5s5 1.5 6.8 4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.7"/></svg>',
  edit:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 16.8 0 2.2 2.2 0L17.8 8.5l-2.2-2.2Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.6"/><path d="m14.4 5.3 2.2 2.2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.6"/></svg>',
  arrowRight:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13.5 6.5 19 12l-5.5 5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/></svg>',
  chevronRight:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9.5 5 7 7-7 7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/></svg>',
  monarch:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5 10.8 7l-3.7-2 1 4.1-4 .8 3.7 2.8-1.4 4.8 5-2.3 1.6 5.8 1.6-5.8 5 2.3-1.4-4.8 3.7-2.8-4-.8 1-4.1-3.7 2Z" fill="currentColor"/></svg>',
  check:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6.5 12.5 3.2 3.2 7.8-8.2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>',
  search:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.4" cy="10.4" r="5.6" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m15 15 4.2 4.2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8"/></svg>',
  plus:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8"/></svg>',
  target:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="7.5" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 4v4M20 12h-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.6"/></svg>',
  trophy:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5h8v2.7a4 4 0 0 1-4 4 4 4 0 0 1-4-4Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M8 6H5.5a1.5 1.5 0 0 0 0 3H8M16 6h2.5a1.5 1.5 0 1 1 0 3H16M12 11.7V16M9 19h6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.6"/></svg>',
  gear:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 4 1 .4 1.3 1.8 2.2-.1.7.8-.5 2.1 1.7 1.4v1.2l-1.7 1.4.5 2.1-.7.8-2.2-.1L13 19.6l-1 .4-1-.4-1.3-1.8-2.2.1-.7-.8.5-2.1-1.7-1.4v-1.2l1.7-1.4-.5-2.1.7-.8 2.2.1L11 4.4Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.4"/><circle cx="12" cy="12" r="2.5" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>',
  logout:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 5H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.6"/><path d="M13 8.5 18.5 12 13 15.5M18 12H9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/></svg>',
  flame:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.7 4.5c.5 2.2-.5 3.8-2 5 2 0 4.5 1.7 4.5 4.6a4.2 4.2 0 0 1-8.4 0c0-2.2 1.4-4 3.2-5.5.9-.8 1.7-1.8 2.7-4.1Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.7"/></svg>',
  timer:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="13" r="6.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 13V9.6M10 4h4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8"/></svg>',
  bolt:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 3 7.5 13h3.8L10.5 21l6-10h-3.8Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.7"/></svg>',
  trash:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 7.5h11M9 7.5V5.8h6v1.7M8.2 7.5l.8 10h6l.8-10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.6"/></svg>',
  scale:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 7h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 10.2a2.8 2.8 0 0 1 2.8 2.8M12 10.2a2.8 2.8 0 0 0-2.8 2.8M12 10.2l1.6 2.8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.6"/></svg>',
  camera:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4.2" y="6.8" width="15.6" height="10.4" rx="2.4" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M9 6.8 10 5h4l1 1.8" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.6"/><circle cx="12" cy="12" r="2.7" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',
  close:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6 18 18M18 6 6 18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8"/></svg>',
  chat:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 7.5h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H11l-4.2 3v-3H6a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.6"/></svg>',
  download:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4.5v9M8.5 10.5 12 14l3.5-3.5M5 18.5h14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/></svg>',
  upload:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19.5v-9M8.5 13.5 12 10l3.5 3.5M5 5.5h14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/></svg>',
  cloud:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 18h9.2a3.3 3.3 0 0 0 .3-6.6 5.4 5.4 0 0 0-10.4-1.3A3.6 3.6 0 0 0 7.5 18Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.6"/></svg>',
  mail:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 7.5h15a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 15V9a1.5 1.5 0 0 1 1.5-1.5Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="m5 8.5 7 5 7-5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6"/></svg>',
  lock:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5.5" y="10.5" width="13" height="9" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M8.5 10.5V8.7A3.5 3.5 0 0 1 12 5.2a3.5 3.5 0 0 1 3.5 3.5v1.8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.6"/></svg>',
  eye:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 12s3-5 8.5-5 8.5 5 8.5 5-3 5-8.5 5-8.5-5-8.5-5Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.6"/><circle cx="12" cy="12" r="2.4" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',
  play:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6.5v11l9-5.5Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.7"/></svg>'
};

function svgToUri(svg) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg.trim())}`;
}

const ART = {
  bench: svgToUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#0a121d"/>
          <stop offset="1" stop-color="#05080d"/>
        </linearGradient>
        <radialGradient id="glow" cx="52%" cy="38%" r="60%">
          <stop offset="0" stop-color="#a855f7" stop-opacity=".34"/>
          <stop offset="1" stop-color="#a855f7" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#f1f4ff"/>
          <stop offset="1" stop-color="#8390a6"/>
        </linearGradient>
        <linearGradient id="skin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#e0a57b"/>
          <stop offset="1" stop-color="#9f5b36"/>
        </linearGradient>
      </defs>
      <rect width="640" height="400" fill="url(#bg)"/>
      <rect width="640" height="400" fill="url(#glow)"/>
      <ellipse cx="305" cy="330" rx="205" ry="50" fill="#05080d"/>
      <rect x="70" y="98" width="500" height="10" rx="5" fill="url(#metal)"/>
      <rect x="170" y="209" width="240" height="16" rx="8" fill="#161f2a"/>
      <rect x="245" y="188" width="15" height="95" rx="7" fill="#1e2833"/>
      <rect x="365" y="188" width="15" height="95" rx="7" fill="#1e2833"/>
      <circle cx="112" cy="103" r="38" fill="#05080d" stroke="#394353" stroke-width="6"/>
      <circle cx="112" cy="103" r="24" fill="#0e1420"/>
      <circle cx="146" cy="103" r="30" fill="#05080d" stroke="#394353" stroke-width="6"/>
      <circle cx="146" cy="103" r="16" fill="#0e1420"/>
      <circle cx="498" cy="103" r="38" fill="#05080d" stroke="#394353" stroke-width="6"/>
      <circle cx="498" cy="103" r="24" fill="#0e1420"/>
      <circle cx="532" cy="103" r="30" fill="#05080d" stroke="#394353" stroke-width="6"/>
      <circle cx="532" cy="103" r="16" fill="#0e1420"/>
      <ellipse cx="320" cy="218" rx="62" ry="42" fill="#8d522e"/>
      <ellipse cx="360" cy="180" rx="34" ry="28" fill="#f4c7a6"/>
      <path d="M248 205c36-26 89-23 118 12-18 26-40 40-65 45-28 6-47-9-53-34Z" fill="#11161f"/>
      <path d="M278 235c22 10 60 7 90-9 19 25 19 49-2 71-18 19-52 31-85 16-31-14-41-50-3-78Z" fill="url(#skin)"/>
      <path d="M256 184c-28 4-52 20-68 47l26 18c11-17 25-31 43-42Zm136 25c26 11 52 25 70 44l21-20c-20-24-43-42-78-53Z" fill="url(#skin)"/>
      <path d="M299 149c-10-17-8-33 8-48 19-18 46-19 66-4 17 14 22 36 11 54-26-13-56-13-85-2Z" fill="#11161f"/>
      <path d="M241 252c-19 17-34 40-36 67l27 8c4-21 13-39 28-55Zm167 3c18 20 27 42 29 66l28-7c-3-27-17-51-39-71Z" fill="#9a5c38"/>
      <path d="M293 165c34-14 64-14 91 0l-4 19c-28 10-55 10-82 0Z" fill="#2f3a49"/>
      <path d="M250 153c12-9 27-14 43-14 13 0 24 3 36 9-11 23-15 44-13 61-23-1-45 6-64 20-10-22-11-52-2-76Z" fill="#141b26"/>
    </svg>
  `),
  pushup: svgToUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#09101a"/>
          <stop offset="1" stop-color="#03060b"/>
        </linearGradient>
        <radialGradient id="glow" cx="40%" cy="42%" r="55%">
          <stop offset="0" stop-color="#a855f7" stop-opacity=".28"/>
          <stop offset="1" stop-color="#a855f7" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="skin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#e2a981"/>
          <stop offset="1" stop-color="#965632"/>
        </linearGradient>
      </defs>
      <rect width="640" height="400" fill="url(#bg)"/>
      <rect width="640" height="400" fill="url(#glow)"/>
      <ellipse cx="310" cy="318" rx="210" ry="42" fill="#04070d"/>
      <path d="M193 245c45-10 103-10 177 0 60 8 96 14 131 25l-14 24c-27-4-53-8-77-11-24-3-72-4-144-2-54 1-89 10-125 30l-18-23c19-20 42-34 70-43Z" fill="#11161f"/>
      <ellipse cx="368" cy="204" rx="52" ry="33" fill="#9f5c35"/>
      <ellipse cx="425" cy="192" rx="30" ry="24" fill="#f3c3a0"/>
      <path d="M273 218c30 34 75 41 129 21-10 39-36 74-86 84-56 12-95-16-105-53 15-23 34-41 62-52Z" fill="url(#skin)"/>
      <path d="M161 250c-21 20-43 33-67 39l10 18c30-6 57-18 79-37Zm334 11c29 12 52 26 70 43l14-18c-22-24-49-41-79-52Z" fill="url(#skin)"/>
      <path d="M248 220c13 30 7 61-19 93l25 11c28-26 44-57 46-95Zm188 28c15 20 26 46 30 76l28-5c-2-35-14-67-36-95Z" fill="#965632"/>
      <path d="M261 214c9-42 51-82 94-82 26 0 50 16 71 49-24-5-49-3-76 7-29 11-58 19-89 26Z" fill="#131a25"/>
    </svg>
  `),
  torso: svgToUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#09111c"/>
          <stop offset="1" stop-color="#05080e"/>
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="40%" r="50%">
          <stop offset="0" stop-color="#c084fc" stop-opacity=".42"/>
          <stop offset="1" stop-color="#c084fc" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="640" height="400" fill="url(#bg)"/>
      <rect width="640" height="400" fill="url(#glow)"/>
      <g stroke="#67758a" stroke-width="3" fill="none" opacity=".65">
        <path d="M286 88c12-23 52-38 70-38 18 0 58 15 70 38l-22 34c-11-8-30-14-48-14-18 0-37 6-48 14Z"/>
        <path d="M286 88c-33 36-44 80-34 132 10 54 29 90 59 108l12-28c-17-16-31-42-41-79-8-32-6-58 7-89Zm140 0c33 36 44 80 34 132-10 54-29 90-59 108l-12-28c17-16 31-42 41-79 8-32 6-58-7-89Z"/>
        <path d="M308 122c-9 42 3 90 13 120m70-120c9 42-3 90-13 120m-37-126v164"/>
        <path d="M248 114c-26 18-44 51-46 83m191-83c26 18 44 51 46 83"/>
      </g>
      <g fill="#8b5cf6">
        <path d="M280 129c24-13 44-18 60-18 15 0 35 5 60 18l-15 43c-21-9-38-13-45-13-8 0-25 4-46 13Z"/>
        <path d="M294 180c16-5 28-7 46-7 18 0 30 2 46 7l-12 56c-11 9-22 14-34 14-12 0-23-5-34-14Z"/>
        <path d="M251 126c17 7 31 15 42 25l-4 58c-16-16-29-39-38-68Zm138 0c-17 7-31 15-42 25l4 58c16-16 29-39 38-68Z"/>
      </g>
      <circle cx="320" cy="73" r="25" fill="none" stroke="#67758a" stroke-width="3"/>
    </svg>
  `),
  portrait: svgToUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
      <defs>
        <radialGradient id="bg" cx="50%" cy="30%" r="70%">
          <stop offset="0" stop-color="#182636"/>
          <stop offset="1" stop-color="#070c13"/>
        </radialGradient>
        <radialGradient id="rim" cx="50%" cy="45%" r="58%">
          <stop offset="0" stop-color="#c084fc" stop-opacity=".28"/>
          <stop offset="1" stop-color="#c084fc" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="skin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#edc7a8"/>
          <stop offset="1" stop-color="#8d5332"/>
        </linearGradient>
      </defs>
      <rect width="480" height="480" rx="240" fill="url(#bg)"/>
      <rect width="480" height="480" rx="240" fill="url(#rim)"/>
      <ellipse cx="240" cy="400" rx="122" ry="68" fill="#111923"/>
      <path d="M188 140c5-45 36-75 80-75 57 0 88 40 84 102-3 39-28 88-60 99-12 4-25 4-37 0-35-12-69-67-67-126Z" fill="url(#skin)"/>
      <path d="M184 142c7-60 43-95 92-95 55 0 90 31 97 90-16-16-31-26-44-31-16-7-34-7-52 0-18 8-32 19-41 36-18 5-35 5-52 0Z" fill="#121924"/>
      <path d="M172 356c26-54 76-82 148-82 59 0 100 25 124 76-29 30-67 46-114 46-63 0-115-14-158-40Z" fill="#171f2b"/>
      <path d="M171 357c35-16 70-24 106-24 58 0 103 18 136 54-27 18-58 27-93 27-57 0-106-19-149-57Z" fill="#0b1118"/>
      <path d="M210 205c11-4 23-3 35 2m41-2c12-5 24-6 35-2" fill="none" stroke="#2b1a12" stroke-linecap="round" stroke-width="8"/>
      <path d="M238 241c4 8 16 15 25 15 10 0 20-4 28-15" fill="none" stroke="#6a3f2b" stroke-linecap="round" stroke-width="7"/>
      <path d="M198 364c23-25 52-40 86-45 36 6 68 25 93 55-18 10-39 15-62 15-48 0-87-9-117-25Z" fill="#8b5cf6" opacity=".12"/>
    </svg>
  `),
  back: svgToUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#09101a"/>
          <stop offset="1" stop-color="#04070d"/>
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="40%" r="55%">
          <stop offset="0" stop-color="#c084fc" stop-opacity=".3"/>
          <stop offset="1" stop-color="#c084fc" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="640" height="400" fill="url(#bg)"/>
      <rect width="640" height="400" fill="url(#glow)"/>
      <g fill="none" stroke="#67758a" stroke-width="3" opacity=".7">
        <circle cx="320" cy="80" r="24"/>
        <path d="M286 103c-26 22-48 65-50 108-3 45 9 101 36 145m98-253c26 22 48 65 50 108 3 45-9 101-36 145"/>
        <path d="M268 124c18 12 35 18 52 18s34-6 52-18"/>
      </g>
      <g fill="#8b5cf6">
        <path d="M258 127c18 16 39 24 62 24s44-8 62-24l-8 46c-16 20-34 30-54 30s-38-10-54-30Z"/>
        <path d="M253 196c17 21 38 34 67 40l-28 88c-16-14-29-43-39-86Zm134 0c-17 21-38 34-67 40l28 88c16-14 29-43 39-86Z"/>
      </g>
    </svg>
  `),
  legs: svgToUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#09101a"/>
          <stop offset="1" stop-color="#04070d"/>
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="56%" r="45%">
          <stop offset="0" stop-color="#c084fc" stop-opacity=".3"/>
          <stop offset="1" stop-color="#c084fc" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="640" height="400" fill="url(#bg)"/>
      <rect width="640" height="400" fill="url(#glow)"/>
      <g fill="none" stroke="#667387" stroke-width="3" opacity=".7">
        <circle cx="320" cy="80" r="22"/>
        <path d="M292 104c-12 30-12 73 0 129m56-129c12 30 12 73 0 129"/>
        <path d="M292 230c-20 45-33 89-39 132m95-132c20 45 33 89 39 132"/>
      </g>
      <g fill="#8b5cf6">
        <path d="M272 132c18 9 34 13 48 13s30-4 48-13l-12 89c-12 10-24 15-36 15s-24-5-36-15Z"/>
        <path d="M279 252c-20 29-31 58-36 88l29 14c1-29 10-58 28-88Zm82 0c18 29 27 58 28 88l-29 14c-5-30-16-59-35-88Z"/>
      </g>
    </svg>
  `)
};

const CATEGORY_PHOTOS = {
  bench: 'https://images.pexels.com/photos/4853659/pexels-photo-4853659.jpeg?auto=compress&cs=tinysrgb&w=1200',
  back: 'https://images.pexels.com/photos/29218860/pexels-photo-29218860.jpeg?auto=compress&cs=tinysrgb&w=1200',
  legs: 'https://images.pexels.com/photos/5327530/pexels-photo-5327530.jpeg?auto=compress&cs=tinysrgb&w=1200',
  torso: 'https://images.pexels.com/photos/4164773/pexels-photo-4164773.jpeg?auto=compress&cs=tinysrgb&w=1200',
  pushup: 'https://images.pexels.com/photos/15144758/pexels-photo-15144758.jpeg?auto=compress&cs=tinysrgb&w=1200'
};

const EXERCISE_PHOTOS = {
  'bench-press': 'https://images.pexels.com/photos/4853659/pexels-photo-4853659.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'incline-dumbbell-press': 'https://images.pexels.com/photos/29526383/pexels-photo-29526383.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'dumbbell-fly': 'https://images.pexels.com/photos/7289245/pexels-photo-7289245.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'push-ups': 'https://images.pexels.com/photos/15144758/pexels-photo-15144758.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'tricep-pushdown': 'https://images.pexels.com/photos/13616289/pexels-photo-13616289.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'overhead-tricep-extension': 'https://images.pexels.com/photos/29218854/pexels-photo-29218854.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'lat-pulldown': 'https://images.pexels.com/photos/29218860/pexels-photo-29218860.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'seated-row': 'https://images.pexels.com/photos/11876626/pexels-photo-11876626.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'single-arm-row': 'https://images.pexels.com/photos/29825221/pexels-photo-29825221.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'hammer-curl': 'https://images.pexels.com/photos/14793884/pexels-photo-14793884.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'barbell-curl': 'https://images.pexels.com/photos/29780130/pexels-photo-29780130.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'back-squat': 'https://images.pexels.com/photos/5327530/pexels-photo-5327530.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'romanian-deadlift': 'https://images.pexels.com/photos/4853280/pexels-photo-4853280.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'leg-press': 'https://images.pexels.com/photos/18060020/pexels-photo-18060020.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'walking-lunges': 'https://images.pexels.com/photos/4587359/pexels-photo-4587359.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'calf-raises': 'https://images.pexels.com/photos/13965339/pexels-photo-13965339.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'overhead-press': 'https://images.pexels.com/photos/4164773/pexels-photo-4164773.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'lateral-raise': 'https://images.pexels.com/photos/5327464/pexels-photo-5327464.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'face-pulls': 'https://images.pexels.com/photos/5327494/pexels-photo-5327494.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'dips': 'https://images.pexels.com/photos/4803712/pexels-photo-4803712.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'cable-curl': 'https://images.pexels.com/photos/29850900/pexels-photo-29850900.jpeg?auto=compress&cs=tinysrgb&w=1200'
};

const LIBRARY = [
  {
    id: 'bench-press',
    name: 'Bench Press',
    category: 'Chest',
    art: 'bench',
    cue: 'Drive your feet down, keep your shoulder blades tight, and press in a smooth arc.'
  },
  {
    id: 'incline-dumbbell-press',
    name: 'Incline Dumbbell Press',
    category: 'Chest',
    art: 'bench',
    cue: 'Keep your elbows under the dumbbells and squeeze the upper chest at the top.'
  },
  {
    id: 'dumbbell-fly',
    name: 'Dumbbell Fly',
    category: 'Chest',
    art: 'bench',
    cue: 'Lower with a soft elbow bend and stop when your chest is fully stretched.'
  },
  {
    id: 'push-ups',
    name: 'Push Ups',
    category: 'Chest',
    art: 'pushup',
    cue: 'Brace the core, keep a straight line, and press the floor away.'
  },
  {
    id: 'tricep-pushdown',
    name: 'Tricep Pushdown',
    category: 'Arms',
    art: 'torso',
    cue: 'Pin your elbows to your sides and finish with full tricep extension.'
  },
  {
    id: 'overhead-tricep-extension',
    name: 'Overhead Tricep Extension',
    category: 'Arms',
    art: 'torso',
    cue: 'Keep your ribs down and stretch the long head before pressing up.'
  },
  {
    id: 'lat-pulldown',
    name: 'Lat Pulldown',
    category: 'Back',
    art: 'back',
    cue: 'Lead with your elbows and pull the bar toward your upper chest.'
  },
  {
    id: 'seated-row',
    name: 'Seated Row',
    category: 'Back',
    art: 'back',
    cue: 'Sit tall, row to your waist, and squeeze your mid-back hard.'
  },
  {
    id: 'single-arm-row',
    name: 'Single Arm Row',
    category: 'Back',
    art: 'back',
    cue: 'Stay square through the hips and drive your elbow toward your pocket.'
  },
  {
    id: 'hammer-curl',
    name: 'Hammer Curl',
    category: 'Arms',
    art: 'torso',
    cue: 'Keep your upper arm quiet and control both the lift and lower.'
  },
  {
    id: 'barbell-curl',
    name: 'Barbell Curl',
    category: 'Arms',
    art: 'torso',
    cue: 'Avoid swinging and finish by squeezing the biceps at the top.'
  },
  {
    id: 'back-squat',
    name: 'Back Squat',
    category: 'Legs',
    art: 'legs',
    cue: 'Brace first, sit between your hips, and drive evenly through the whole foot.'
  },
  {
    id: 'romanian-deadlift',
    name: 'Romanian Deadlift',
    category: 'Legs',
    art: 'legs',
    cue: 'Push the hips back, keep the bar close, and feel the hamstring stretch.'
  },
  {
    id: 'leg-press',
    name: 'Leg Press',
    category: 'Legs',
    art: 'legs',
    cue: 'Lower with control and press through mid-foot without locking out hard.'
  },
  {
    id: 'walking-lunges',
    name: 'Walking Lunges',
    category: 'Legs',
    art: 'legs',
    cue: 'Step long enough to keep both knees tracking smoothly over the feet.'
  },
  {
    id: 'calf-raises',
    name: 'Calf Raises',
    category: 'Legs',
    art: 'legs',
    cue: 'Pause at the top, lower fully, and stay balanced over the big toe.'
  },
  {
    id: 'overhead-press',
    name: 'Overhead Press',
    category: 'Shoulders',
    art: 'torso',
    cue: 'Squeeze your glutes, stay stacked, and press in a straight line.'
  },
  {
    id: 'lateral-raise',
    name: 'Lateral Raise',
    category: 'Shoulders',
    art: 'torso',
    cue: 'Lead with the elbows and lift only to shoulder height.'
  },
  {
    id: 'face-pulls',
    name: 'Face Pulls',
    category: 'Shoulders',
    art: 'back',
    cue: 'Pull toward your eyebrows and finish with your hands outside the ears.'
  },
  {
    id: 'dips',
    name: 'Dips',
    category: 'Arms',
    art: 'pushup',
    cue: 'Keep the shoulders down and descend only as far as you can stay stable.'
  },
  {
    id: 'cable-curl',
    name: 'Cable Curl',
    category: 'Arms',
    art: 'torso',
    cue: 'Stay tall and curl without letting the shoulders roll forward.'
  }
];

function createGuide(motion, focus, beginnerTip, steps, mistakes) {
  return {
    motion,
    focus,
    beginnerTip,
    steps,
    mistakes
  };
}

const BEGINNER_GUIDES = {
  'bench-press': createGuide(
    'bench-press',
    'Chest, front delts, and triceps',
    'Start with the empty bar or light dumbbells until every rep looks the same.',
    ['Plant both feet hard on the floor.', 'Lower the bar to mid chest with tight shoulders.', 'Press back up without bouncing the bar.'],
    ['Flaring the elbows too wide', 'Lifting the hips off the bench']
  ),
  'incline-dumbbell-press': createGuide(
    'incline-press',
    'Upper chest and shoulders',
    'Use a low incline and light dumbbells first so you can control the path.',
    ['Set the bench to a gentle incline.', 'Lower the dumbbells beside the upper chest.', 'Drive up and meet the bells above your shoulders.'],
    ['Arching too hard', 'Letting the dumbbells drift behind the head']
  ),
  'dumbbell-fly': createGuide(
    'dumbbell-fly',
    'Chest stretch and squeeze',
    'Keep a soft elbow bend and use less weight than your press.',
    ['Open the arms wide with a slight bend in the elbows.', 'Stop when the chest is stretched, not the shoulders.', 'Bring the bells back together by hugging the chest in.'],
    ['Turning it into a press', 'Dropping too low and stressing the shoulders']
  ),
  'push-ups': createGuide(
    'push-up',
    'Chest, shoulders, triceps, and core',
    'Elevate the hands on a bench if floor reps feel too hard at first.',
    ['Make a straight line from head to heels.', 'Lower the chest between the hands with a tight core.', 'Press the floor away and lock in the plank again.'],
    ['Hips sagging', 'Looking forward and crunching the neck']
  ),
  'tricep-pushdown': createGuide(
    'pushdown',
    'Triceps lockout strength',
    'Pick a cable weight you can move without leaning your whole body into it.',
    ['Pin the elbows beside your ribs.', 'Push the handle down until the arms are straight.', 'Return slowly without letting the elbows drift forward.'],
    ['Swinging the torso', 'Letting the elbows travel']
  ),
  'overhead-tricep-extension': createGuide(
    'overhead-extension',
    'Long-head triceps stretch',
    'Keep your ribs down and use a lighter load than a pushdown.',
    ['Hold the weight above the head with braced abs.', 'Lower behind the head while the elbows point forward.', 'Extend up without letting the elbows flare wide.'],
    ['Arching the lower back', 'Letting the elbows split apart']
  ),
  'lat-pulldown': createGuide(
    'pulldown',
    'Lats and upper back',
    'Use a weight that lets you pull to the upper chest without rocking back.',
    ['Sit tall and lock the legs under the pad.', 'Pull elbows down toward your ribs.', 'Control the bar back up until the shoulders are stretched.'],
    ['Pulling behind the neck', 'Turning it into a full body swing']
  ),
  'seated-row': createGuide(
    'row',
    'Mid-back thickness',
    'Stay tall on the seat and keep your chest proud on every rep.',
    ['Reach forward with a flat back.', 'Row the handle toward the waist.', 'Pause and squeeze the shoulder blades together.'],
    ['Shrugging the shoulders up', 'Leaning too far back']
  ),
  'single-arm-row': createGuide(
    'single-row',
    'Lat control one side at a time',
    'Start light so you can keep the hips square the whole set.',
    ['Support one hand and brace your core.', 'Pull the elbow toward the back pocket.', 'Lower the weight under control without twisting open.'],
    ['Rotating the torso', 'Jerking the dumbbell off the floor']
  ),
  'hammer-curl': createGuide(
    'curl',
    'Biceps and forearms',
    'Keep the dumbbells light enough to avoid swinging.',
    ['Stand tall with palms facing each other.', 'Curl without moving the upper arm forward.', 'Lower slowly until the elbows are straight again.'],
    ['Rocking the body', 'Shrugging the shoulders']
  ),
  'barbell-curl': createGuide(
    'curl',
    'Biceps peak tension',
    'Keep your elbows tucked and stop the set when the body starts swaying.',
    ['Grip the bar just outside the hips.', 'Curl toward the shoulders while the elbows stay close.', 'Lower back down with full control.'],
    ['Swinging the hips', 'Cutting the lowering phase short']
  ),
  'back-squat': createGuide(
    'squat',
    'Legs, glutes, and full-body bracing',
    'Practice with bodyweight or an empty bar before loading heavy.',
    ['Brace your core before you move.', 'Sit down and between the hips with knees tracking over the feet.', 'Drive up through the whole foot and stand tall.'],
    ['Heels lifting off the floor', 'Knees collapsing inward']
  ),
  'romanian-deadlift': createGuide(
    'hinge',
    'Hamstrings and glutes',
    'Think hips back, not chest down, and keep the bar very close to the legs.',
    ['Soften the knees and brace the abs.', 'Push the hips back until the hamstrings stretch.', 'Stand up by squeezing the glutes forward.'],
    ['Rounding the back', 'Turning it into a squat']
  ),
  'leg-press': createGuide(
    'leg-press',
    'Quads and glutes',
    'Use a range where your lower back stays glued to the pad.',
    ['Place feet shoulder width on the platform.', 'Lower until the knees bend deeply without the hips rolling up.', 'Press through the mid-foot and stop before snapping the knees.'],
    ['Locking the knees hard', 'Letting the hips lift off the seat']
  ),
  'walking-lunges': createGuide(
    'lunge',
    'Leg balance and coordination',
    'Take shorter, lighter practice steps first to own your balance.',
    ['Step forward and keep the torso tall.', 'Lower both knees with control.', 'Push through the front heel and bring the back leg through.'],
    ['Feet landing on a tight line', 'Leaning too far forward']
  ),
  'calf-raises': createGuide(
    'calf-raise',
    'Calves and ankle control',
    'Use a slow pause at the top instead of loading the movement too fast.',
    ['Rise onto the balls of the feet.', 'Pause and squeeze the calves hard at the top.', 'Lower all the way down before the next rep.'],
    ['Bouncing through the reps', 'Rolling the ankles outward']
  ),
  'overhead-press': createGuide(
    'overhead-press',
    'Shoulders, triceps, and core',
    'Squeeze your glutes and ribs down before every press.',
    ['Start with the weight near the upper chest.', 'Press straight up and move the head slightly back out of the way.', 'Finish with the biceps near the ears.'],
    ['Overarching the lower back', 'Pressing out in front instead of overhead']
  ),
  'lateral-raise': createGuide(
    'lateral-raise',
    'Side delts',
    'Use lighter dumbbells and smooth tempo to feel the shoulder doing the work.',
    ['Stand tall with a slight bend in the elbows.', 'Lift the arms out to shoulder height.', 'Lower slowly without dropping the weights.'],
    ['Swinging the torso', 'Shrugging the traps']
  ),
  'face-pulls': createGuide(
    'face-pull',
    'Rear delts and upper back',
    'Set the cable around face height and move slower than you think.',
    ['Pull the rope toward the eyebrows.', 'Spread the hands apart as the elbows travel back.', 'Finish with the shoulders down and chest tall.'],
    ['Turning it into a row to the chest', 'Losing wrist alignment']
  ),
  dips: createGuide(
    'dips',
    'Chest and triceps pressing',
    'Use an assisted machine or band if bodyweight reps are too hard today.',
    ['Hold the bars with the shoulders packed down.', 'Lower until you still feel stable in the shoulders.', 'Press back up without swinging the legs.'],
    ['Dropping too deep too soon', 'Shoulders creeping toward the ears']
  ),
  'cable-curl': createGuide(
    'curl',
    'Biceps with constant tension',
    'Take a half step back from the cable so the stack stays lifted all set.',
    ['Stand tall with elbows close to the ribs.', 'Curl the handle while keeping the shoulders quiet.', 'Lower with control until the arms are straight again.'],
    ['Leaning into the cable', 'Letting the elbows drift forward']
  )
};

const GUIDE_MEDIA = {
  'bench-press': './guides/bench-press.gif?v=8',
  'incline-press': './guides/incline-press.gif?v=8',
  'dumbbell-fly': './guides/dumbbell-fly.gif?v=8',
  'push-up': './guides/push-up.gif?v=8',
  pushdown: './guides/pushdown.gif?v=8',
  'overhead-extension': './guides/overhead-extension.gif?v=8',
  pulldown: './guides/pulldown.gif?v=8',
  row: './guides/row.gif?v=8',
  'single-row': './guides/single-row.gif?v=8',
  curl: './guides/curl.gif?v=8',
  squat: './guides/squat.gif?v=8',
  hinge: './guides/hinge.gif?v=8',
  'leg-press': './guides/leg-press.gif?v=8',
  lunge: './guides/lunge.gif?v=8',
  'calf-raise': './guides/calf-raise.gif?v=8',
  'overhead-press': './guides/overhead-press.gif?v=8',
  'lateral-raise': './guides/lateral-raise.gif?v=8',
  'face-pull': './guides/face-pull.gif?v=8',
  dips: './guides/dips.gif?v=8'
};

function icon(name) {
  return `<span class="icon">${ICONS[name] || ''}</span>`;
}

function exerciseImage(exerciseOrKey) {
  if (exerciseOrKey && typeof exerciseOrKey === 'object' && exerciseOrKey.customImage) {
    return exerciseOrKey.customImage;
  }
  const key = typeof exerciseOrKey === 'string' ? exerciseOrKey : exerciseOrKey?.libId || exerciseOrKey?.id;
  const artKey = typeof exerciseOrKey === 'string' ? exerciseOrKey : exerciseOrKey?.art;
  return EXERCISE_PHOTOS[key] || CATEGORY_PHOTOS[artKey] || ART[artKey] || CATEGORY_PHOTOS.bench;
}

function planImage(plan) {
  if (plan?.exercises?.length) {
    return exerciseImage(plan.exercises[0]);
  }
  return CATEGORY_PHOTOS[plan?.art] || ART[plan?.art] || CATEGORY_PHOTOS.bench;
}

function artForCategory(category) {
  switch (category) {
    case 'Chest':
      return 'bench';
    case 'Back':
      return 'back';
    case 'Legs':
      return 'legs';
    case 'Shoulders':
    case 'Arms':
    case 'Core':
    default:
      return 'torso';
  }
}

function guideDataForExercise(exercise) {
  const key = exercise?.libId || exercise?.id;
  if (BEGINNER_GUIDES[key]) {
    return BEGINNER_GUIDES[key];
  }
  return createGuide(
    'bench-press',
    `${exercise?.category || 'Full body'} movement`,
    'Use light weight first and stop the set when the rep path changes.',
    ['Set your body before each rep.', exercise?.cue || 'Move with control.', 'Finish the rep and reset your position.'],
    ['Rushing the reps', 'Adding weight before form is stable']
  );
}

function builtInGuideMediaForExercise(exercise) {
  const motion = guideDataForExercise(exercise).motion;
  const src = GUIDE_MEDIA[motion];
  if (!src) {
    return null;
  }
  return {
    src,
    type: 'image/gif',
    label: 'App Demo'
  };
}

function guideButtonLabel(exercise) {
  if (exercise?.customVideoKey) {
    return 'Watch Video';
  }
  return builtInGuideMediaForExercise(exercise) ? 'Watch Demo' : 'How to do';
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function toIso(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function fromIso(value) {
  const [year, month, day] = value.split('-').map(Number);
  return new Date(year, month - 1, day);
}

function addDays(date, amount) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
}

function formatShortDate(value) {
  return fromIso(value).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

function formatDateChip(value) {
  const date = fromIso(value);
  return {
    label: date.toLocaleDateString('en-US', { weekday: 'short' }),
    day: date.getDate()
  };
}

function monthKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}

function formatMonthHeading(value) {
  const [year, month] = value.split('-').map(Number);
  return new Date(year, month - 1, 1).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  });
}

function formatRest(seconds) {
  const safe = Math.max(0, Number(seconds) || 0);
  const minutes = String(Math.floor(safe / 60)).padStart(2, '0');
  const remaining = String(safe % 60).padStart(2, '0');
  return `${minutes}:${remaining}`;
}

function weekDates(anchorIso) {
  const anchor = fromIso(anchorIso);
  const shift = (anchor.getDay() + 6) % 7;
  const monday = addDays(anchor, -shift);
  return Array.from({ length: 7 }, (_, index) => toIso(addDays(monday, index)));
}

function getMonthGrid(monthValue) {
  const [year, month] = monthValue.split('-').map(Number);
  const first = new Date(year, month - 1, 1);
  const startShift = (first.getDay() + 6) % 7;
  const start = addDays(first, -startShift);
  return Array.from({ length: 42 }, (_, index) => {
    const date = addDays(start, index);
    return {
      iso: toIso(date),
      day: date.getDate(),
      isCurrentMonth: date.getMonth() === first.getMonth()
    };
  });
}

function sum(list) {
  return list.reduce((total, value) => total + value, 0);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function libraryById(id) {
  return LIBRARY.find((item) => item.id === id);
}

function buildSets(setRows) {
  return setRows.map((set, index) => ({
    id: `${set.prefix || 'set'}-${index + 1}`,
    reps: set.reps,
    weight: set.weight
  }));
}

function buildExercise(baseId, setRows) {
  const source = libraryById(baseId);
  return {
    id: `${baseId}-${Math.random().toString(36).slice(2, 8)}`,
    libId: baseId,
    name: source.name,
    category: source.category,
    art: source.art,
    cue: source.cue,
    customImage: '',
    customVideoKey: '',
    customVideoName: '',
    customVideoType: '',
    sets: buildSets(setRows.map((set) => ({ ...set, prefix: baseId })))
  };
}

function buildCustomExercise({
  name = 'Custom Exercise',
  category = 'Chest',
  cue = 'Move slowly, stay controlled, and keep your form clean on every rep.',
  setRows = [
    { reps: 12, weight: 0 },
    { reps: 12, weight: 0 },
    { reps: 12, weight: 0 }
  ]
} = {}) {
  return {
    id: `custom-${Math.random().toString(36).slice(2, 10)}`,
    libId: '',
    name,
    category,
    art: artForCategory(category),
    cue,
    customImage: '',
    customVideoKey: '',
    customVideoName: '',
    customVideoType: '',
    sets: buildSets(setRows.map((set) => ({ ...set, prefix: 'custom' })))
  };
}

function createDefaultState() {
  const plans = [
    {
      id: 'plan-chest',
      name: 'Chest + Triceps',
      duration: 45,
      difficulty: 'Intermediate',
      calories: 450,
      accent: 'Chest',
      art: 'torso',
      exercises: [
        buildExercise('bench-press', [
          { reps: 12, weight: 60 },
          { reps: 12, weight: 70 },
          { reps: 12, weight: 80 }
        ]),
        buildExercise('incline-dumbbell-press', [
          { reps: 12, weight: 20 },
          { reps: 12, weight: 22.5 },
          { reps: 12, weight: 25 }
        ]),
        buildExercise('dumbbell-fly', [
          { reps: 12, weight: 12 },
          { reps: 12, weight: 12 },
          { reps: 12, weight: 14 }
        ]),
        buildExercise('push-ups', [
          { reps: 15, weight: 0 },
          { reps: 15, weight: 0 },
          { reps: 15, weight: 0 }
        ]),
        buildExercise('tricep-pushdown', [
          { reps: 12, weight: 25 },
          { reps: 12, weight: 27.5 },
          { reps: 12, weight: 30 }
        ]),
        buildExercise('overhead-tricep-extension', [
          { reps: 12, weight: 12.5 },
          { reps: 12, weight: 15 },
          { reps: 12, weight: 17.5 }
        ])
      ]
    },
    {
      id: 'plan-back',
      name: 'Back + Biceps',
      duration: 50,
      difficulty: 'Intermediate',
      calories: 520,
      accent: 'Back',
      art: 'back',
      exercises: [
        buildExercise('lat-pulldown', [
          { reps: 12, weight: 35 },
          { reps: 12, weight: 40 },
          { reps: 10, weight: 45 }
        ]),
        buildExercise('seated-row', [
          { reps: 12, weight: 30 },
          { reps: 12, weight: 35 },
          { reps: 12, weight: 40 }
        ]),
        buildExercise('single-arm-row', [
          { reps: 12, weight: 20 },
          { reps: 12, weight: 22.5 },
          { reps: 10, weight: 25 }
        ]),
        buildExercise('hammer-curl', [
          { reps: 12, weight: 10 },
          { reps: 12, weight: 12 },
          { reps: 12, weight: 12 }
        ]),
        buildExercise('barbell-curl', [
          { reps: 12, weight: 20 },
          { reps: 10, weight: 25 },
          { reps: 10, weight: 25 }
        ])
      ]
    },
    {
      id: 'plan-legs',
      name: 'Leg Day',
      duration: 60,
      difficulty: 'Advanced',
      calories: 610,
      accent: 'Legs',
      art: 'legs',
      exercises: [
        buildExercise('back-squat', [
          { reps: 10, weight: 70 },
          { reps: 8, weight: 80 },
          { reps: 8, weight: 85 }
        ]),
        buildExercise('romanian-deadlift', [
          { reps: 12, weight: 60 },
          { reps: 10, weight: 70 },
          { reps: 10, weight: 75 }
        ]),
        buildExercise('leg-press', [
          { reps: 12, weight: 110 },
          { reps: 12, weight: 130 },
          { reps: 10, weight: 150 }
        ]),
        buildExercise('walking-lunges', [
          { reps: 12, weight: 12 },
          { reps: 12, weight: 12 },
          { reps: 12, weight: 14 }
        ]),
        buildExercise('calf-raises', [
          { reps: 15, weight: 40 },
          { reps: 15, weight: 45 },
          { reps: 15, weight: 50 }
        ])
      ]
    },
    {
      id: 'plan-shoulders',
      name: 'Shoulders + Arms',
      duration: 40,
      difficulty: 'Intermediate',
      calories: 400,
      accent: 'Shoulders',
      art: 'torso',
      exercises: [
        buildExercise('overhead-press', [
          { reps: 10, weight: 30 },
          { reps: 8, weight: 35 },
          { reps: 8, weight: 35 }
        ]),
        buildExercise('lateral-raise', [
          { reps: 15, weight: 7.5 },
          { reps: 15, weight: 7.5 },
          { reps: 12, weight: 10 }
        ]),
        buildExercise('face-pulls', [
          { reps: 15, weight: 15 },
          { reps: 15, weight: 17.5 },
          { reps: 15, weight: 20 }
        ]),
        buildExercise('dips', [
          { reps: 12, weight: 0 },
          { reps: 10, weight: 0 },
          { reps: 10, weight: 0 }
        ]),
        buildExercise('cable-curl', [
          { reps: 12, weight: 15 },
          { reps: 12, weight: 17.5 },
          { reps: 10, weight: 20 }
        ])
      ]
    }
  ];

  const today = toIso(APP_NOW);
  const schedule = {};
  const schedulePlanOrder = ['plan-chest', 'plan-back', 'plan-legs', 'plan-shoulders'];
  weekDates(today).forEach((dateValue, index) => {
    schedule[dateValue] = schedulePlanOrder[index % schedulePlanOrder.length];
  });
  schedule[toIso(addDays(fromIso(today), 8))] = 'plan-chest';
  schedule[toIso(addDays(fromIso(today), 10))] = 'plan-back';

  const history = [];

  const notifications = buildDefaultNotifications();

  const messages = [
    {
      id: 'msg-1',
      sender: 'Coach Mira',
      preview: 'Start by updating the profile, then tweak any workout plan so the app matches the new user.',
      time: '9:05 AM',
      read: false
    },
    {
      id: 'msg-2',
      sender: 'Nutrition Bot',
      preview: 'Pick a goal in profile settings and I will keep the nutrition view aligned with it.',
      time: 'Yesterday',
      read: true
    }
  ];

  const challenges = [
    {
      id: 'challenge-1',
      title: 'First Workout',
      detail: 'Complete the first workout session to unlock progress tracking.',
      progress: 0,
      goal: 1,
      reward: '50 XP',
      claimed: false
    },
    {
      id: 'challenge-2',
      title: 'Profile Setup',
      detail: 'Update the basic profile details so the app fits the new user.',
      progress: 0,
      goal: 1,
      reward: 'Starter badge',
      claimed: false
    },
    {
      id: 'challenge-3',
      title: '3 Workout Week',
      detail: 'Track 3 sessions this week to build momentum.',
      progress: 0,
      goal: 3,
      reward: 'Recovery badge',
      claimed: false
    }
  ];

  return {
    profile: {
      name: 'New User',
      age: 18,
      height: 170,
      weight: 70,
      goal: 'Maintain',
      quote: 'Set up your profile and start your first workout.',
      targetWeight: 70
    },
    preferences: {
      reminder: true,
      nutritionMode: 'Balanced'
    },
    plans,
    schedule,
    history,
    notifications,
    messages,
    challenges,
    metrics: {
      weightLog: [
        { label: 'Today', value: 70 }
      ],
      bodyFat: 18,
      muscleMass: 52,
      caloriesWeek: [
        { label: 'Mon', value: 0 },
        { label: 'Tue', value: 0 },
        { label: 'Wed', value: 0 },
        { label: 'Thu', value: 0 },
        { label: 'Fri', value: 0 },
        { label: 'Sat', value: 0 },
        { label: 'Sun', value: 0 }
      ],
      streak: 0
    },
    meta: {
      dataUpdatedAt: new Date().toISOString()
    },
    cloud: {
      autoSync: true,
      lastSyncedAt: '',
      lastRemoteUpdatedAt: '',
      lastError: '',
      lastSyncStatus: 'local'
    },
    activeWorkout: null,
    ui: {
      screen: 'home',
      selectedDate: today,
      selectedPlanId: schedule[today] || plans[0].id,
      customExerciseDate: today,
      customExercisePlanId: schedule[today] || plans[0].id,
      guidePlanId: plans[0].id,
      guideExerciseId: plans[0].exercises[0]?.id || '',
      guideReturnScreen: 'workoutPlan',
      progressTab: 'overview',
      historyFilter: 'all',
      librarySearch: '',
      libraryCategory: 'All',
      drawerOpen: false,
      notificationFilter: 'all',
      calendarMonth: monthKey(APP_NOW),
      selectedCalendarDate: today,
      editingPlanId: 'plan-chest',
      editingExerciseId: null,
      restSeconds: 45,
      toast: ''
    }
  };
}

function buildDefaultNotifications() {
  return [
    {
      id: 'notif-1',
      title: 'Workout Complete!',
      message: "Great job! You've completed your Push Day workout.",
      time: '9:41 AM',
      section: 'Today',
      category: 'updates',
      iconName: 'dumbbell',
      variant: 'basic',
      read: false
    },
    {
      id: 'notif-2',
      title: 'Upcoming Class Reminder',
      message: 'Yoga Strength starts in 1 hour - 6:30 PM.',
      time: '8:30 AM',
      section: 'Today',
      category: 'reminders',
      iconName: 'calendar',
      variant: 'basic',
      read: false
    },
    {
      id: 'notif-3',
      title: 'Workout Complete.',
      message: 'You have completed your Push Day workout. Continue your rise.',
      time: 'now',
      section: 'Today',
      category: 'updates',
      iconName: 'monarch',
      variant: 'featured',
      read: false
    },
    {
      id: 'notif-4',
      title: 'New Achievement Unlocked!',
      message: "You've reached 10 workouts this month. Keep it up!",
      time: 'Yesterday',
      section: 'Today',
      category: 'updates',
      iconName: 'trophy',
      variant: 'basic',
      read: false
    },
    {
      id: 'notif-5',
      title: 'Special Offer Just for You!',
      message: 'Get 20% off on Personal Training packages. Limited time only!',
      time: 'Yesterday',
      section: 'Today',
      category: 'offers',
      iconName: 'target',
      variant: 'basic',
      read: false
    },
    {
      id: 'notif-6',
      title: 'Your Plan is Ready',
      message: 'Your custom workout plan for this week is now available.',
      time: 'Mon',
      section: 'This Week',
      category: 'updates',
      iconName: 'chart',
      variant: 'basic',
      read: false
    }
  ];
}

function inferNotificationCategory(item) {
  const title = String(item?.title || '').toLowerCase();
  const message = String(item?.message || '').toLowerCase();
  if (item?.category) {
    return item.category;
  }
  if (title.includes('offer') || message.includes('offer') || message.includes('% off')) {
    return 'offers';
  }
  if (title.includes('reminder') || message.includes('starts in') || title.includes('class')) {
    return 'reminders';
  }
  return 'updates';
}

function inferNotificationIconName(item) {
  if (item?.iconName && ICONS[item.iconName]) {
    return item.iconName;
  }
  const title = String(item?.title || '').toLowerCase();
  const category = inferNotificationCategory(item);
  if (title.includes('achievement')) {
    return 'trophy';
  }
  if (title.includes('plan')) {
    return 'chart';
  }
  if (category === 'reminders') {
    return 'calendar';
  }
  if (category === 'offers') {
    return 'target';
  }
  if (title.includes('workout')) {
    return 'dumbbell';
  }
  return 'bell';
}

function inferNotificationSection(item) {
  if (item?.section) {
    return item.section;
  }
  const timeLabel = String(item?.time || item?.day || '').trim();
  if (['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].includes(timeLabel)) {
    return 'This Week';
  }
  return 'Today';
}

function inferNotificationVariant(item) {
  if (item?.variant) {
    return item.variant;
  }
  const title = String(item?.title || '').trim();
  const message = String(item?.message || '').toLowerCase();
  return title === 'Workout Complete.' && message.includes('continue your rise') ? 'featured' : 'basic';
}

function normalizeNotificationItem(item, fallback = {}) {
  const merged = { ...fallback, ...(item || {}) };
  return {
    ...merged,
    id: merged.id || fallback.id || `notif-${Date.now()}`,
    title: merged.title || fallback.title || 'Notification',
    message: merged.message || fallback.message || '',
    time: merged.time || merged.day || fallback.time || 'now',
    section: inferNotificationSection(merged),
    category: inferNotificationCategory(merged),
    iconName: inferNotificationIconName(merged),
    variant: inferNotificationVariant(merged),
    read: Boolean(merged.read)
  };
}

function normalizeNotifications(list) {
  const fallback = buildDefaultNotifications();
  if (!Array.isArray(list) || !list.length) {
    return fallback;
  }

  const existingById = new Map(list.map((item) => [item.id, item]));
  const merged = fallback.map((item) => normalizeNotificationItem(existingById.get(item.id), item));
  const knownIds = new Set(fallback.map((item) => item.id));
  const extras = list
    .filter((item) => item?.id && !knownIds.has(item.id))
    .map((item) => normalizeNotificationItem(item));

  return [...merged, ...extras];
}

function isLegacyDemoState(value) {
  return Boolean(
    value &&
      value.profile?.name === 'Arkam' &&
      value.profile?.goal === 'Bulking' &&
      value.profile?.weight === 72.5 &&
      Array.isArray(value.history) &&
      value.history.length === 4 &&
      value.metrics?.streak === 5
  );
}

function isValidStateShape(value) {
  return Boolean(value && Array.isArray(value.plans) && value.profile);
}

function cloudSafeExercise(exercise) {
  const next = clone(exercise);
  delete next.customVideoKey;
  delete next.customVideoName;
  delete next.customVideoType;
  return next;
}

function cloudSafePlan(plan) {
  return {
    ...plan,
    exercises: plan.exercises.map(cloudSafeExercise)
  };
}

function buildCloudState(source = state) {
  return {
    profile: source.profile,
    preferences: source.preferences,
    plans: source.plans.map(cloudSafePlan),
    schedule: source.schedule,
    history: source.history,
    notifications: source.notifications,
    messages: source.messages,
    challenges: source.challenges,
    metrics: source.metrics,
    activeWorkout: source.activeWorkout,
    meta: {
      dataUpdatedAt: source.meta?.dataUpdatedAt || new Date().toISOString()
    }
  };
}

function fingerprintCloudState(source = state) {
  const cloudState = buildCloudState(source);
  delete cloudState.meta;
  return JSON.stringify(cloudState);
}

function normalizeState(value, { preserveUi = false } = {}) {
  const fallback = createDefaultState();
  if (!isValidStateShape(value)) {
    return fallback;
  }

  const normalized = {
    ...fallback,
    ...value,
    profile: { ...fallback.profile, ...value.profile },
    preferences: { ...fallback.preferences, ...value.preferences },
    metrics: { ...fallback.metrics, ...value.metrics },
    notifications: normalizeNotifications(value.notifications),
    messages: Array.isArray(value.messages) ? value.messages : fallback.messages,
    challenges: Array.isArray(value.challenges) ? value.challenges : fallback.challenges,
    meta: {
      ...fallback.meta,
      ...value.meta,
      dataUpdatedAt: value.meta?.dataUpdatedAt || fallback.meta.dataUpdatedAt
    },
    cloud: {
      ...fallback.cloud,
      ...value.cloud,
      lastError: '',
      lastSyncStatus: value.cloud?.lastSyncStatus || 'local'
    },
    ui: {
      ...fallback.ui,
      ...value.ui,
      toast: '',
      screen: preserveUi ? value.ui?.screen || fallback.ui.screen : 'home',
      drawerOpen: false,
      notificationFilter: ['all', 'updates', 'reminders', 'offers'].includes(value.ui?.notificationFilter)
        ? value.ui.notificationFilter
        : fallback.ui.notificationFilter
    }
  };

  return normalized;
}

function loadState() {
  const fallback = createDefaultState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return fallback;
    }
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.plans) || !parsed.profile) {
      return fallback;
    }
    if (isLegacyDemoState(parsed)) {
      return fallback;
    }
    return normalizeState(parsed);
  } catch {
    return fallback;
  }
}

function persistState({ scheduleCloud = true } = {}) {
  try {
    const nextFingerprint = fingerprintCloudState(state);
    const dataChanged = nextFingerprint !== lastLocalFingerprint;
    if (dataChanged) {
      state.meta.dataUpdatedAt = new Date().toISOString();
      state.cloud.lastSyncStatus = authUser && state.cloud.autoSync ? 'pending' : state.cloud.lastSyncStatus;
      state.cloud.lastError = '';
      lastLocalFingerprint = nextFingerprint;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    if (scheduleCloud && dataChanged) {
      scheduleCloudSync();
    }
    return true;
  } catch (error) {
    console.error(error);
    showToast('Local storage is full. Try a smaller custom image.');
    return false;
  }
}

let state = loadState();
let toastTimer = null;
let restTimer = null;
let pendingScrollReset = true;
let deferredInstallPrompt = null;
let authUser = null;
let authReady = false;
let authBusy = false;
let authMessage = '';
let authSettings = null;
let cloudSyncTimer = null;
let cloudSyncInFlight = null;
let lastLocalFingerprint = fingerprintCloudState(state);
let lastCloudFingerprint = state.cloud.lastSyncedAt ? lastLocalFingerprint : '';
let mediaDbPromise = null;
const exerciseMediaCache = new Map();
const exerciseMediaLoads = new Map();
const root = document.getElementById('app');

function isGitHubPagesHost() {
  return window.location.hostname.endsWith('github.io');
}

function isFirebaseHostingHost() {
  return window.location.hostname.endsWith('web.app') || window.location.hostname.endsWith('firebaseapp.com');
}

function cloudUnavailableCopy() {
  if (window.location.protocol === 'file:') {
    return 'Cloud login works on the hosted website. This local file version only saves data on this device.';
  }
  if (isGitHubPagesHost()) {
    return 'Cloud login works on the new Firebase website. This older GitHub Pages copy only saves data on this device.';
  }
  return 'Cloud login is not ready on this copy of the app yet. Local save still works on this device.';
}

function getIdentityClient() {
  return window.SA7DIdentity || null;
}

function getCloudClient() {
  return window.SA7DCloud || null;
}

function isCloudAvailable() {
  if (window.location.protocol === 'file:') {
    return false;
  }
  const identity = getIdentityClient();
  const cloud = getCloudClient();
  return Boolean(identity?.getIdentityConfig?.() && cloud?.loadState && cloud?.saveState);
}

function isCloudLoggedIn() {
  return Boolean(authUser);
}

function userDisplayName(user) {
  return user?.name || user?.email || 'Cloud User';
}

function cloudStatusCopy() {
  if (!isCloudAvailable()) {
    return cloudUnavailableCopy();
  }
  if (!authReady) {
    return 'Checking your cloud session...';
  }
  if (!authUser) {
    return 'Log in to back up workouts, profile changes, and progress across devices.';
  }
  if (state.cloud.lastSyncStatus === 'error' && state.cloud.lastError) {
    return state.cloud.lastError;
  }
  if (state.cloud.lastSyncStatus === 'pending') {
    return 'Local changes are ready and will sync to the cloud shortly.';
  }
  if (state.cloud.lastSyncStatus === 'syncing') {
    return 'Syncing your latest changes to the cloud...';
  }
  if (state.cloud.lastSyncedAt) {
    return `Last cloud sync: ${formatCloudTime(state.cloud.lastSyncedAt)}`;
  }
  return 'Cloud account connected. The first backup will run after your next change.';
}

function formatCloudTime(value) {
  if (!value) {
    return 'never';
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return 'just now';
  }
  return date.toLocaleString([], {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  });
}

function validatePasswordRules(password) {
  const value = String(password || '');
  return {
    minLength: value.length >= 8,
    uppercase: /[A-Z]/.test(value),
    lowercase: /[a-z]/.test(value),
    special: /[^A-Za-z0-9]/.test(value)
  };
}

function isStrongPassword(password) {
  return Object.values(validatePasswordRules(password)).every(Boolean);
}

function normalizeAuthError(error, mode = 'auth') {
  const code = String(error?.code || error?.json?.code || '').toLowerCase();
  const status = Number(error?.status || error?.json?.code || 0);
  const rawMessage =
    error?.json?.msg ||
    error?.json?.error_description ||
    error?.data ||
    error?.message ||
    '';
  const message = String(rawMessage).trim();
  const lower = message.toLowerCase();

  if (!message && !status) {
    return mode === 'signup' ? 'Sign up failed. Please try again.' : 'Login failed. Please try again.';
  }
  if (code.includes('email-already-in-use')) {
    return 'That email already has an account. Log in or use Forgot Password.';
  }
  if (code.includes('invalid-credential') || code.includes('wrong-password') || code.includes('user-not-found') || code.includes('invalid-login-credentials')) {
    return mode === 'login' ? 'Email or password is incorrect.' : 'These details are not valid.';
  }
  if (code.includes('too-many-requests')) {
    return 'Too many attempts right now. Please wait a moment and try again.';
  }
  if (code.includes('network-request-failed')) {
    return 'Could not reach the login server. Try again in a moment.';
  }
  if (code.includes('weak-password')) {
    return 'Use a stronger password with upper, lower, special, and at least 8 characters.';
  }
  if (code.includes('operation-not-allowed')) {
    return 'Email/password sign up is turned off in Firebase Authentication for this project.';
  }
  if (lower.includes('user already registered') || lower.includes('already registered') || lower.includes('email already')) {
    return 'That email already has an account. Log in or use Forgot Password.';
  }
  if (lower.includes('email not confirmed') || lower.includes('confirmation')) {
    return 'Check your email and confirm your account before logging in.';
  }
  if (lower.includes('signup is disabled') || lower.includes('signups not allowed') || authSettings?.disableSignup) {
    return 'Email/password sign up is turned off in Firebase Authentication for this project.';
  }
  if (lower.includes('netlify identity is not available') || lower.includes('cloud auth is not available')) {
    return cloudUnavailableCopy();
  }
  if (lower.includes('invalid login') || lower.includes('invalid email') || lower.includes('invalid password') || lower.includes('bad credentials')) {
    return mode === 'login' ? 'Email or password is incorrect.' : 'These details are not valid.';
  }
  if (lower.includes('failed to fetch') || lower.includes('networkerror') || lower.includes('load failed')) {
    return 'Could not reach the login server. Try again in a moment.';
  }
  if (status === 401) {
    return mode === 'login' ? 'Email or password is incorrect.' : 'You are not authorized for this action.';
  }
  if (status === 422) {
    return mode === 'signup' ? 'Please check your email and password details and try again.' : message || 'Please check your details and try again.';
  }
  if (status === 429) {
    return 'Too many attempts right now. Please wait a moment and try again.';
  }

  return message || (mode === 'signup' ? 'Sign up failed. Please try again.' : 'Login failed. Please try again.');
}

async function fetchCloudRecord() {
  const cloud = getCloudClient();
  if (!cloud || !authUser?.uid) {
    throw new Error(cloudUnavailableCopy());
  }

  const record = await cloud.loadState(authUser.uid);
  return record || { state: null, updatedAt: '' };
}

function applyCloudState(nextState, message) {
  const restored = normalizeState(nextState, { preserveUi: true });
  restored.ui = {
    ...restored.ui,
    ...state.ui,
    screen: state.ui.screen,
    drawerOpen: false,
    toast: state.ui.toast
  };
  restored.cloud = {
    ...restored.cloud,
    ...state.cloud,
    lastError: '',
    lastSyncStatus: 'synced',
    lastSyncedAt: restored.meta.dataUpdatedAt,
    lastRemoteUpdatedAt: restored.meta.dataUpdatedAt
  };
  state = restored;
  lastLocalFingerprint = fingerprintCloudState(state);
  lastCloudFingerprint = lastLocalFingerprint;
  persistState({ scheduleCloud: false });
  if (message) {
    showToast(message);
  }
  renderApp();
}

async function saveCloudState({ silent = false, force = false } = {}) {
  const cloud = getCloudClient();
  if (!authUser || !isCloudAvailable() || !cloud) {
    return false;
  }

  const fingerprint = fingerprintCloudState(state);
  if (!force && fingerprint === lastCloudFingerprint) {
    return true;
  }

  if (cloudSyncInFlight) {
    return cloudSyncInFlight;
  }

  state.cloud.lastSyncStatus = 'syncing';
  state.cloud.lastError = '';
  if (!silent) {
    renderApp();
  }

  const payload = buildCloudState(state);

  cloudSyncInFlight = cloud
    .saveState(authUser.uid, payload)
    .then(async (result) => {
      lastCloudFingerprint = fingerprint;
      state.cloud.lastSyncedAt = payload.meta.dataUpdatedAt;
      state.cloud.lastRemoteUpdatedAt = result.updatedAt || payload.meta.dataUpdatedAt;
      state.cloud.lastSyncStatus = 'synced';
      state.cloud.lastError = '';
      persistState({ scheduleCloud: false });
      if (!silent) {
        showToast('Cloud backup updated');
        renderApp();
      }
      return true;
    })
    .catch((error) => {
      console.error(error);
      state.cloud.lastSyncStatus = 'error';
      state.cloud.lastError = error.message || 'Cloud sync failed';
      persistState({ scheduleCloud: false });
      if (!silent) {
        showToast(state.cloud.lastError);
        renderApp();
      }
      return false;
    })
    .finally(() => {
      cloudSyncInFlight = null;
    });

  return cloudSyncInFlight;
}

function scheduleCloudSync() {
  if (!authReady || !authUser || !state.cloud.autoSync || !isCloudAvailable()) {
    return;
  }

  if (cloudSyncTimer) {
    clearTimeout(cloudSyncTimer);
  }

  cloudSyncTimer = setTimeout(() => {
    cloudSyncTimer = null;
    saveCloudState({ silent: true });
  }, CLOUD_SYNC_DELAY);
}

async function syncCloudAfterLogin() {
  try {
    const record = await fetchCloudRecord();
    const cloudState = record?.state;
    if (cloudState && isValidStateShape(cloudState)) {
      const cloudStamp = Date.parse(cloudState.meta?.dataUpdatedAt || '') || 0;
      const localStamp = Date.parse(state.meta?.dataUpdatedAt || '') || 0;
      if (cloudStamp > localStamp) {
        applyCloudState(cloudState, 'Cloud backup loaded');
        return;
      }
    }

    state.cloud.lastSyncStatus = 'local';
    state.cloud.lastError = '';
    persistState({ scheduleCloud: false });
    await saveCloudState({ silent: true, force: true });
    showToast(cloudState ? 'Local changes pushed to cloud' : 'Cloud account ready');
    renderApp();
  } catch (error) {
    console.error(error);
    state.cloud.lastSyncStatus = 'error';
    state.cloud.lastError = error.message || 'Cloud login worked, but sync failed.';
    persistState({ scheduleCloud: false });
    showToast(state.cloud.lastError);
    renderApp();
  }
}

async function restoreCloudState() {
  try {
    const record = await fetchCloudRecord();
    if (!record?.state || !isValidStateShape(record.state)) {
      showToast('No cloud backup found yet');
      return;
    }
    applyCloudState(record.state, 'Cloud backup restored');
  } catch (error) {
    console.error(error);
    showToast(error.message || 'Could not load cloud backup');
  }
}

async function sendCloudResetLink(email) {
  const identity = getIdentityClient();
  if (!identity) {
    showToast(cloudUnavailableCopy());
    return;
  }

  authBusy = true;
  authMessage = '';
  renderApp();

  try {
    await identity.requestPasswordRecovery(email);
    authMessage = 'Reset link sent. Check your email to continue.';
    showToast(authMessage);
  } catch (error) {
    console.error(error);
    authMessage = normalizeAuthError(error, 'recovery');
    showToast(authMessage);
  } finally {
    authBusy = false;
    renderApp();
  }
}

async function resetCloudPassword(password) {
  const identity = getIdentityClient();
  if (!identity || !authUser) {
    authMessage = 'Open the password reset link from your email first.';
    renderApp();
    return;
  }

  authBusy = true;
  authMessage = '';
  renderApp();

  try {
    await identity.updateUser({ password });
    await identity.logout();
    authUser = null;
    state.cloud.lastSyncStatus = 'local';
    state.cloud.lastError = '';
    authMessage = '';
    state.ui.screen = 'authLogin';
    requestScrollReset();
    persistState({ scheduleCloud: false });
    showToast('Password updated. You can log in now.');
  } catch (error) {
    console.error(error);
    authMessage = normalizeAuthError(error, 'reset');
    showToast(authMessage);
  } finally {
    authBusy = false;
    renderApp();
  }
}

async function loginToCloud(email, password) {
  const identity = getIdentityClient();
  if (!identity) {
    showToast(cloudUnavailableCopy());
    return;
  }

  authBusy = true;
  authMessage = '';
  renderApp();

  try {
    await identity.login(email, password);
    authUser = await identity.getUser();
    await syncCloudAfterLogin();
    enterAppAfterAuth();
  } catch (error) {
    console.error(error);
    authMessage = normalizeAuthError(error, 'login');
    showToast(authMessage);
    renderApp();
  } finally {
    authBusy = false;
    renderApp();
  }
}

async function signupForCloud(name, email, password) {
  const identity = getIdentityClient();
  if (!identity) {
    showToast(cloudUnavailableCopy());
    return;
  }

  authBusy = true;
  authMessage = '';
  renderApp();

  try {
    await identity.signup(name, email, password);
    authUser = await identity.getUser();
    await syncCloudAfterLogin();
    enterAppAfterAuth();
  } catch (error) {
    console.error(error);
    authMessage = normalizeAuthError(error, 'signup');
    showToast(authMessage);
  } finally {
    authBusy = false;
    renderApp();
  }
}

async function logoutFromCloud() {
  const identity = getIdentityClient();
  if (!identity) {
    return;
  }

  authBusy = true;
  renderApp();

  try {
    await identity.logout();
    authUser = null;
    authMessage = '';
    if (cloudSyncTimer) {
      clearTimeout(cloudSyncTimer);
      cloudSyncTimer = null;
    }
    state.cloud.lastSyncStatus = 'local';
    state.cloud.lastError = '';
    state.ui.screen = shouldUseWebsiteAuthEntry() ? 'authIntro' : 'settings';
    requestScrollReset();
    persistState({ scheduleCloud: false });
    showToast('Signed out of cloud save');
  } catch (error) {
    console.error(error);
    showToast(error.message || 'Cloud logout failed');
  } finally {
    authBusy = false;
    renderApp();
  }
}

async function initCloudAuth() {
  const identity = getIdentityClient();
  authReady = false;

  if (!identity || !identity.getIdentityConfig?.()) {
    authReady = true;
    renderApp();
    return;
  }

  try {
    const callback = await identity.handleAuthCallback();
    try {
      authSettings = await identity.getSettings?.();
    } catch (settingsError) {
      console.warn(settingsError);
    }
    await identity.hydrateSession();
    authUser = await identity.getUser();
    identity.onAuthChange(async (event, user) => {
      authUser = user;
      if (user && event === identity.AUTH_EVENTS?.LOGIN && !authBusy) {
        await syncCloudAfterLogin();
        if (shouldUseWebsiteAuthEntry()) {
          enterAppAfterAuth();
          renderApp();
        }
        return;
      }
      if (!user) {
        state.cloud.lastSyncStatus = 'local';
        state.cloud.lastError = '';
        persistState({ scheduleCloud: false });
      }
      renderApp();
    });

    if (callback?.type === 'recovery') {
      state.ui.screen = 'authReset';
      requestScrollReset();
      authMessage = 'Create a new password for your cloud account.';
      renderApp();
      return;
    }

    if (callback?.type === 'confirmation' && authUser) {
      await syncCloudAfterLogin();
      enterAppAfterAuth();
      return;
    }

    if (authUser) {
      state.cloud.lastError = '';
      if (shouldUseWebsiteAuthEntry() && isAuthScreen()) {
        enterAppAfterAuth();
      }
      persistState({ scheduleCloud: false });
    } else if (shouldUseWebsiteAuthEntry() && !isAuthScreen()) {
      state.ui.screen = 'authIntro';
      requestScrollReset();
    }
  } catch (error) {
    console.error(error);
    authMessage = error.message || 'Cloud sign-in callback failed.';
  } finally {
    authReady = true;
    renderApp();
  }
}

function getPlan(planId) {
  return state.plans.find((plan) => plan.id === planId) || state.plans[0];
}

function getSelectedPlan() {
  return getPlan(state.ui.selectedPlanId || state.schedule[state.ui.selectedDate] || state.plans[0].id);
}

function planIdForDate(dateIso) {
  return state.schedule[dateIso] || state.plans[0].id;
}

function scheduleDatesForPlan(planId) {
  return Object.entries(state.schedule)
    .filter(([, scheduledPlanId]) => scheduledPlanId === planId)
    .map(([dateIso]) => dateIso)
    .sort();
}

function clonePlanForDate(dateIso, sourcePlan) {
  const clonedPlan = clone(sourcePlan);
  clonedPlan.id = `plan-day-${dateIso}-${Math.random().toString(36).slice(2, 8)}`;
  clonedPlan.exercises = clonedPlan.exercises.map((exercise, exerciseIndex) => {
    const nextExercise = clone(exercise);
    const baseId = exercise.libId || exercise.id || `exercise-${exerciseIndex + 1}`;
    nextExercise.id = `${baseId}-${Math.random().toString(36).slice(2, 8)}`;
    nextExercise.sets = nextExercise.sets.map((set, setIndex) => ({
      ...set,
      id: `${nextExercise.id}-set-${setIndex + 1}`
    }));
    return nextExercise;
  });
  state.plans.push(clonedPlan);
  state.schedule[dateIso] = clonedPlan.id;
  return clonedPlan;
}

function ensurePlanForCustomDate(dateIso) {
  let plan = getPlan(planIdForDate(dateIso));
  const sharedDates = scheduleDatesForPlan(plan.id).filter((value) => value !== dateIso);
  if (sharedDates.length) {
    plan = clonePlanForDate(dateIso, plan);
  }
  state.ui.customExercisePlanId = plan.id;
  return plan;
}

function getExercise(planId, exerciseId) {
  const plan = getPlan(planId);
  return plan.exercises.find((exercise) => exercise.id === exerciseId);
}

function openExerciseGuide(planId, exerciseId, backScreen = state.ui.screen) {
  const exercise = getExercise(planId, exerciseId);
  if (!exercise) {
    return;
  }
  state.ui.drawerOpen = false;
  state.ui.guidePlanId = planId;
  state.ui.guideExerciseId = exerciseId;
  state.ui.guideReturnScreen = backScreen;
  state.ui.screen = 'exerciseGuide';
  requestScrollReset();
  persistState({ scheduleCloud: false });
  renderApp();
}

function recentHistory() {
  return [...state.history].sort((a, b) => (a.date < b.date ? 1 : -1));
}

function workoutsThisWeek() {
  const dates = weekDates(state.ui.selectedDate);
  return state.history.filter((entry) => dates.includes(entry.date));
}

function weeklyGoalCount() {
  return workoutsThisWeek().length;
}

function weeklyGoalTarget() {
  return 6;
}

function todayPlan() {
  return getPlan(state.schedule[state.ui.selectedDate] || state.plans[0].id);
}

function createWorkoutState(planId) {
  const plan = getPlan(planId);
  return {
    planId,
    startedAt: new Date().toISOString(),
    exerciseIndex: 0,
    completedSets: Object.fromEntries(
      plan.exercises.map((exercise) => [exercise.id, exercise.sets.map(() => false)])
    )
  };
}

function activePlan() {
  if (!state.activeWorkout) {
    return null;
  }
  return getPlan(state.activeWorkout.planId);
}

function isActivePlan(planId) {
  return Boolean(state.activeWorkout && state.activeWorkout.planId === planId);
}

function activeExercise() {
  const plan = activePlan();
  if (!plan || !state.activeWorkout) {
    return null;
  }
  return plan.exercises[state.activeWorkout.exerciseIndex] || plan.exercises[0];
}

function totalSetCount(plan, workout) {
  return sum(plan.exercises.map((exercise) => exercise.sets.length));
}

function completedSetCount(plan, workout) {
  return sum(
    plan.exercises.map((exercise) =>
      (workout.completedSets[exercise.id] || []).filter(Boolean).length
    )
  );
}

function completedRepCount(plan, workout) {
  return sum(
    plan.exercises.map((exercise) =>
      exercise.sets.reduce((reps, set, index) => {
        return reps + ((workout.completedSets[exercise.id] || [])[index] ? Number(set.reps) : 0);
      }, 0)
    )
  );
}

function homeSummary(plan) {
  return [
    { label: 'Calories', value: plan.calories, unit: 'kcal', icon: 'flame' },
    { label: 'Workout Time', value: plan.duration, unit: 'min', icon: 'timer' },
    { label: 'Exercises', value: plan.exercises.length, unit: 'Completed', icon: 'bolt' }
  ];
}

function unreadNotificationCount() {
  return state.notifications.filter((item) => !item.read).length;
}

function unreadMessageCount() {
  return state.messages.filter((item) => !item.read).length;
}

function activeChallengeCount() {
  return state.challenges.filter((item) => !item.claimed).length;
}

function groupedNotifications(list) {
  return ['Today', 'This Week', 'Earlier']
    .map((label) => ({
      label,
      items: list.filter((item) => inferNotificationSection(item) === label)
    }))
    .filter((group) => group.items.length);
}

function notificationTimeLabel(item, featured = false) {
  return item.time || item.day || (featured ? 'now' : '');
}

function renderBasicNotificationCard(item) {
  const iconName = inferNotificationIconName(item);
  return `
    <button class="notification-item basic ${item.read ? '' : 'unread'}" type="button" data-action="toggle-notification-read" data-id="${item.id}">
      <span class="notification-basic-icon-shell" aria-hidden="true">${icon(iconName)}</span>
      <span class="notification-basic-copy">
        <strong class="notification-basic-title">${escapeHtml(item.title)}</strong>
        <span class="notification-basic-message">${escapeHtml(item.message)}</span>
      </span>
      <span class="notification-basic-meta">
        <span class="notification-basic-time">${escapeHtml(notificationTimeLabel(item))}</span>
        <span class="notification-basic-dot ${item.read ? 'is-read' : ''}"></span>
      </span>
    </button>
  `;
}

function renderMonarchNotificationCard(item, { featured = false } = {}) {
  return `
    <button class="notification-item ${item.read ? '' : 'unread'} ${featured ? 'featured' : ''}" type="button" data-action="toggle-notification-read" data-id="${item.id}">
      <span class="notification-backdrop" aria-hidden="true"></span>
      <span class="notification-thumb-shell" aria-hidden="true"></span>
      <span class="notification-copy">
        <span class="notification-brand-row">
          <span class="notification-brand">Shadow Monarch</span>
          ${item.read || featured ? '' : '<span class="notification-live-dot"></span>'}
        </span>
        <span class="notification-title-row">
          <strong class="notification-title-display">${escapeHtml(item.title)}</strong>
          <span class="notification-title-sigil">${icon('monarch')}</span>
        </span>
        <span class="notification-body-display">${escapeHtml(item.message)}</span>
      </span>
      <span class="notification-side">
        <span class="notification-time-display">${escapeHtml(notificationTimeLabel(item, featured))}</span>
        <span class="notification-side-sigil">${icon('monarch')}</span>
        <span class="notification-chevron ${featured ? 'featured' : ''}">${icon('chevronRight')}</span>
      </span>
    </button>
  `;
}

function renderNotificationCard(item) {
  return inferNotificationVariant(item) === 'featured'
    ? renderMonarchNotificationCard(item, { featured: true })
    : renderBasicNotificationCard(item);
}

function isStandaloneMode() {
  return (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true;
}

function hasAppShellQuery() {
  return new URLSearchParams(window.location.search).get('appShell') === '1';
}

function isNativeShellMode() {
  try {
    if (!window.Capacitor) {
      return false;
    }
    if (typeof window.Capacitor.isNativePlatform === 'function') {
      return window.Capacitor.isNativePlatform();
    }
    if (typeof window.Capacitor.getPlatform === 'function') {
      return ['android', 'ios'].includes(window.Capacitor.getPlatform());
    }
  } catch (error) {
    console.warn(error);
  }
  return false;
}

function isAppMode() {
  return isStandaloneMode() || hasAppShellQuery() || isNativeShellMode();
}

function isWebsiteMode() {
  return !isAppMode();
}

function syncShellModeClass() {
  document.documentElement.classList.toggle('mode-app', isAppMode());
  document.documentElement.classList.toggle('mode-website', isWebsiteMode());
}

function shouldUseWebsiteAuthEntry() {
  return isWebsiteMode() && isCloudAvailable();
}

function isAuthScreen(screen = state.ui.screen) {
  return ['authIntro', 'authLogin', 'authSignup', 'authForgot', 'authReset', 'cloudLogout'].includes(screen);
}

function postAuthScreen() {
  return shouldUseWebsiteAuthEntry() ? 'home' : 'settings';
}

function enterAppAfterAuth() {
  state.ui.screen = postAuthScreen();
  requestScrollReset();
}

function shouldShowInstallAction() {
  return isWebsiteMode();
}

function shouldShowAndroidApkDownload() {
  return isWebsiteMode();
}

function triggerAndroidApkDownload() {
  const link = document.createElement('a');
  link.href = isFirebaseHostingHost() ? ANDROID_APK_DOWNLOAD_URL : ANDROID_APK_FILE;
  link.download = ANDROID_APK_FILE;
  link.rel = 'noopener';
  document.body.appendChild(link);
  link.click();
  link.remove();
  showToast('Android APK download started');
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = () => reject(new Error('file-read-failed'));
    reader.readAsDataURL(file);
  });
}

function optimizeImageDataUrl(dataUrl, mimeType = 'image/jpeg') {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      const maxWidth = 960;
      const maxHeight = 720;
      const scale = Math.min(1, maxWidth / image.width, maxHeight / image.height);
      const width = Math.max(1, Math.round(image.width * scale));
      const height = Math.max(1, Math.round(image.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext('2d');
      if (!context) {
        reject(new Error('canvas-unavailable'));
        return;
      }
      context.drawImage(image, 0, 0, width, height);
      const normalizedType = mimeType === 'image/png' ? 'image/png' : 'image/jpeg';
      resolve(canvas.toDataURL(normalizedType, normalizedType === 'image/png' ? undefined : 0.82));
    };
    image.onerror = () => reject(new Error('image-load-failed'));
    image.src = dataUrl;
  });
}

function saveExerciseCustomImage(file) {
  const exercise = getExercise(state.ui.editingPlanId, state.ui.editingExerciseId);
  if (!exercise || !file) {
    return;
  }
  const previousImage = exercise.customImage;
  fileToDataUrl(file)
    .then((dataUrl) => optimizeImageDataUrl(dataUrl, file.type))
    .then((optimizedImage) => {
      exercise.customImage = optimizedImage;
      if (!persistState()) {
        exercise.customImage = previousImage;
        renderApp();
        return;
      }
      showToast('Custom image saved');
      renderApp();
    })
    .catch(() => {
      showToast('Could not load that image');
      renderApp();
    });
}

function openExerciseMediaDb() {
  if (!window.indexedDB) {
    return Promise.reject(new Error('indexeddb-unavailable'));
  }
  if (!mediaDbPromise) {
    mediaDbPromise = new Promise((resolve, reject) => {
      const request = window.indexedDB.open(MEDIA_DB_NAME, 1);
      request.onupgradeneeded = () => {
        if (!request.result.objectStoreNames.contains(MEDIA_STORE_NAME)) {
          request.result.createObjectStore(MEDIA_STORE_NAME);
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error || new Error('media-db-open-failed'));
    });
  }
  return mediaDbPromise;
}

function runMediaRequest(mode, task) {
  return openExerciseMediaDb().then(
    (db) =>
      new Promise((resolve, reject) => {
        const transaction = db.transaction(MEDIA_STORE_NAME, mode);
        const store = transaction.objectStore(MEDIA_STORE_NAME);
        const request = task(store);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error || new Error('media-db-request-failed'));
      })
  );
}

function revokeCachedMedia(key) {
  const cached = exerciseMediaCache.get(key);
  if (cached?.objectUrl) {
    URL.revokeObjectURL(cached.objectUrl);
  }
  exerciseMediaCache.delete(key);
}

function queueExerciseVideoLoad(exercise) {
  const key = exercise?.customVideoKey;
  if (!key || exerciseMediaCache.has(key) || exerciseMediaLoads.has(key)) {
    return;
  }
  const load = runMediaRequest('readonly', (store) => store.get(key))
    .then((record) => {
      if (!record?.blob) {
        exerciseMediaCache.set(key, { missing: true });
        return;
      }
      const objectUrl = URL.createObjectURL(record.blob);
      exerciseMediaCache.set(key, {
        src: objectUrl,
        objectUrl,
        type: record.type || record.blob.type || 'video/mp4',
        name: record.name || exercise.customVideoName || 'Custom video'
      });
    })
    .catch(() => {
      exerciseMediaCache.set(key, { missing: true });
    })
    .finally(() => {
      exerciseMediaLoads.delete(key);
      renderApp();
    });
  exerciseMediaLoads.set(key, load);
}

function customVideoMediaForExercise(exercise) {
  const key = exercise?.customVideoKey;
  if (!key) {
    return null;
  }
  if (!exerciseMediaCache.has(key)) {
    queueExerciseVideoLoad(exercise);
    return { loading: true };
  }
  return exerciseMediaCache.get(key);
}

function purgeExerciseCustomVideo(exercise, { persist = false } = {}) {
  if (!exercise?.customVideoKey) {
    return;
  }
  const key = exercise.customVideoKey;
  runMediaRequest('readwrite', (store) => store.delete(key)).catch(() => {});
  revokeCachedMedia(key);
  exercise.customVideoKey = '';
  exercise.customVideoName = '';
  exercise.customVideoType = '';
  if (persist) {
    persistState({ scheduleCloud: false });
  }
}

function clearAllExerciseMedia() {
  exerciseMediaCache.forEach((_, key) => revokeCachedMedia(key));
  exerciseMediaLoads.clear();
  return runMediaRequest('readwrite', (store) => store.clear()).catch(() => {});
}

function saveExerciseCustomVideo(file) {
  const exercise = getExercise(state.ui.editingPlanId, state.ui.editingExerciseId);
  if (!exercise || !file) {
    return;
  }
  if (file.size > CUSTOM_VIDEO_LIMIT_BYTES) {
    showToast('Keep custom videos under 18 MB');
    renderApp();
    return;
  }
  const key = exercise.customVideoKey || `exercise-video-${exercise.id}`;
  revokeCachedMedia(key);
  runMediaRequest('readwrite', (store) =>
    store.put(
      {
        blob: file,
        name: file.name,
        type: file.type || (file.name.toLowerCase().endsWith('.gif') ? 'image/gif' : 'video/mp4'),
        savedAt: new Date().toISOString()
      },
      key
    )
  )
    .then(() => {
      exercise.customVideoKey = key;
      exercise.customVideoName = file.name;
      exercise.customVideoType = file.type || (file.name.toLowerCase().endsWith('.gif') ? 'image/gif' : 'video/mp4');
      persistState({ scheduleCloud: false });
      showToast('Custom video saved on this device');
      queueExerciseVideoLoad(exercise);
      renderApp();
    })
    .catch((error) => {
      console.error(error);
      showToast('Could not save that video');
      renderApp();
    });
}

function resetExerciseCustomVideo() {
  const exercise = getExercise(state.ui.editingPlanId, state.ui.editingExerciseId);
  if (!exercise) {
    return;
  }
  if (!exercise.customVideoKey) {
    showToast('This exercise is already using the app guide');
    renderApp();
    return;
  }
  purgeExerciseCustomVideo(exercise, { persist: true });
  showToast('Exercise guide reset');
  renderApp();
}

async function promptInstallApp() {
  if (isStandaloneMode()) {
    showToast('SA7D is already installed on this device');
    renderApp();
    return;
  }
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    const result = await deferredInstallPrompt.userChoice.catch(() => null);
    deferredInstallPrompt = null;
    showToast(result?.outcome === 'accepted' ? 'Install started' : 'Install cancelled');
    renderApp();
    return;
  }
  showToast('Open the browser menu and choose Install app or Add to Home Screen.');
  renderApp();
}

function resumeWorkout() {
  if (!state.activeWorkout) {
    return;
  }
  state.ui.selectedPlanId = state.activeWorkout.planId;
  state.ui.screen = 'workoutSession';
  requestScrollReset();
  persistState();
  renderApp();
}

function startWorkout(planId) {
  state.activeWorkout = createWorkoutState(planId);
  state.ui.selectedPlanId = planId;
  state.ui.screen = 'workoutSession';
  state.ui.restSeconds = 45;
  requestScrollReset();
  showToast('Workout started');
  persistState();
  renderApp();
}

function toggleSet(planId, exerciseId, setIndex) {
  if (!state.activeWorkout || state.activeWorkout.planId !== planId) {
    return;
  }
  const setState = state.activeWorkout.completedSets[exerciseId];
  setState[setIndex] = !setState[setIndex];
  state.ui.restSeconds = setState[setIndex] ? 45 : state.ui.restSeconds;
  persistState();
  renderApp();
}

function finishWorkout() {
  if (!state.activeWorkout) {
    return;
  }
  const plan = activePlan();
  const setsDone = completedSetCount(plan, state.activeWorkout);
  const allSets = totalSetCount(plan, state.activeWorkout);
  if (setsDone < allSets) {
    markCurrentExerciseDone();
    return;
  }

  const completedDate = state.ui.selectedDate;
  state.history.unshift({
    id: `hist-${Date.now()}`,
    date: completedDate,
    planId: plan.id,
    duration: plan.duration,
    calories: Math.round(plan.calories + Math.min(250, setsDone * 12))
  });

  const direction = state.profile.goal === 'Bulking' ? 0.2 : state.profile.goal === 'Cutting' ? -0.2 : 0;
  state.profile.weight = Number((state.profile.weight + direction).toFixed(1));
  state.metrics.bodyFat = Number((state.metrics.bodyFat + (direction > 0 ? 0.1 : direction < 0 ? -0.1 : 0)).toFixed(1));
  state.metrics.muscleMass = Number((state.metrics.muscleMass + (direction >= 0 ? 0.2 : -0.1)).toFixed(1));
  state.metrics.weightLog = [
    ...state.metrics.weightLog.slice(-7),
    {
      label: fromIso(completedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      value: state.profile.weight
    }
  ];
  state.metrics.caloriesWeek = state.metrics.caloriesWeek.map((entry, index, list) => {
    const weekList = weekDates(completedDate);
    const dayValue = weekList[index];
    const dayTotal = state.history
      .filter((item) => item.date === dayValue)
      .reduce((total, item) => total + item.calories, 0);
    return { ...entry, value: dayTotal || entry.value };
  });
  state.metrics.streak += 1;
  state.activeWorkout = null;
  state.ui.screen = 'progress';
  state.ui.progressTab = 'overview';
  state.ui.restSeconds = 45;
  requestScrollReset();
  persistState();
  showToast('Workout complete. Progress updated.');
  renderApp();
}

function markCurrentExerciseDone() {
  if (!state.activeWorkout) {
    return;
  }
  const plan = activePlan();
  const exercise = activeExercise();
  state.activeWorkout.completedSets[exercise.id] = exercise.sets.map(() => true);

  if (state.activeWorkout.exerciseIndex >= plan.exercises.length - 1) {
    finishWorkout();
    return;
  }
  state.activeWorkout.exerciseIndex += 1;
  state.ui.restSeconds = 45;
  requestScrollReset();
  persistState();
  renderApp();
}

function moveExercise(direction) {
  if (!state.activeWorkout) {
    return;
  }
  const plan = activePlan();
  const nextIndex = Math.max(0, Math.min(plan.exercises.length - 1, state.activeWorkout.exerciseIndex + direction));
  state.activeWorkout.exerciseIndex = nextIndex;
  requestScrollReset();
  persistState();
  renderApp();
}

function addExerciseToPlan(libraryId) {
  const plan = getPlan(state.ui.editingPlanId || state.ui.selectedPlanId);
  const newExercise = buildExercise(libraryId, [
    { reps: 12, weight: 20 },
    { reps: 12, weight: 22.5 },
    { reps: 12, weight: 25 }
  ]);
  plan.exercises.push(newExercise);
  if (state.activeWorkout && state.activeWorkout.planId === plan.id) {
    state.activeWorkout.completedSets[newExercise.id] = newExercise.sets.map(() => false);
  }
  state.ui.editingExerciseId = newExercise.id;
  state.ui.screen = 'editExercise';
  requestScrollReset();
  showToast('Exercise added to plan');
  persistState();
  renderApp();
}

function addCustomExerciseToPlan({ name, category, cue, sets, reps, weight }) {
  const dateIso = state.ui.customExerciseDate || state.ui.selectedDate;
  const plan = ensurePlanForCustomDate(dateIso);
  const newExercise = buildCustomExercise({
    name,
    category,
    cue,
    setRows: Array.from({ length: Math.max(1, sets) }, () => ({
      reps: Math.max(1, reps),
      weight: Math.max(0, weight)
    }))
  });
  plan.exercises.push(newExercise);
  if (state.activeWorkout && state.activeWorkout.planId === plan.id) {
    state.activeWorkout.completedSets[newExercise.id] = newExercise.sets.map(() => false);
  }
  state.ui.selectedDate = dateIso;
  state.ui.selectedPlanId = plan.id;
  state.ui.editingPlanId = plan.id;
  state.ui.editingExerciseId = newExercise.id;
  state.ui.customExercisePlanId = plan.id;
  state.ui.screen = 'editExercise';
  requestScrollReset();
  showToast('Custom exercise added to this day');
  persistState();
  renderApp();
}

function deleteCurrentPlan() {
  if (state.plans.length === 1) {
    showToast('Keep at least one plan in the app');
    renderApp();
    return;
  }
  const planId = state.ui.editingPlanId;
  const removedPlan = getPlan(planId);
  removedPlan.exercises.forEach((exercise) => purgeExerciseCustomVideo(exercise));
  state.plans = state.plans.filter((plan) => plan.id !== planId);
  Object.keys(state.schedule).forEach((dateKey) => {
    if (state.schedule[dateKey] === planId) {
      state.schedule[dateKey] = state.plans[0].id;
    }
  });
  state.history = state.history.map((item) => (item.planId === planId ? { ...item, planId: state.plans[0].id } : item));
  state.ui.selectedPlanId = state.plans[0].id;
  state.ui.editingPlanId = state.plans[0].id;
  state.ui.screen = 'workoutPlan';
  requestScrollReset();
  showToast('Plan deleted');
  persistState();
  renderApp();
}

function deleteCurrentExercise() {
  deleteExerciseFromPlan(state.ui.editingPlanId, state.ui.editingExerciseId, {
    nextScreen: 'workoutPlan'
  });
}

function deleteExerciseFromPlan(planId, exerciseId, options = {}) {
  const plan = getPlan(planId);
  const previousScreen = state.ui.screen;
  if (plan.exercises.length === 1) {
    showToast('A plan needs at least one exercise');
    renderApp();
    return;
  }

  const removedIndex = plan.exercises.findIndex((exercise) => exercise.id === exerciseId);
  if (removedIndex === -1) {
    return;
  }
  const removedExercise = plan.exercises[removedIndex];
  purgeExerciseCustomVideo(removedExercise);

  plan.exercises = plan.exercises.filter((exercise) => exercise.id !== exerciseId);
  state.ui.selectedPlanId = planId;
  state.ui.editingPlanId = planId;

  if (state.activeWorkout && state.activeWorkout.planId === planId) {
    delete state.activeWorkout.completedSets[exerciseId];
    if (state.activeWorkout.exerciseIndex > removedIndex) {
      state.activeWorkout.exerciseIndex -= 1;
    } else if (state.activeWorkout.exerciseIndex >= plan.exercises.length) {
      state.activeWorkout.exerciseIndex = Math.max(0, plan.exercises.length - 1);
    }
  }

  const nextIndex = Math.max(0, Math.min(removedIndex, plan.exercises.length - 1));
  state.ui.editingExerciseId = plan.exercises[nextIndex]?.id || plan.exercises[0].id;

  if (options.nextScreen) {
    state.ui.screen = options.nextScreen;
    if (options.nextScreen !== previousScreen) {
      requestScrollReset();
    }
  }

  showToast('Exercise removed');
  persistState();
  renderApp();
}

function changeCalendarMonth(step) {
  const [year, month] = state.ui.calendarMonth.split('-').map(Number);
  const date = new Date(year, month - 1 + step, 1);
  state.ui.calendarMonth = monthKey(date);
  persistState();
  renderApp();
}

function resetDemo() {
  localStorage.removeItem(STORAGE_KEY);
  clearAllExerciseMedia();
  state = createDefaultState();
  requestScrollReset();
  persistState();
  showToast('App reset for a new user');
  renderApp();
}

function showToast(message) {
  state.ui.toast = message;
  if (toastTimer) {
    clearTimeout(toastTimer);
  }
  toastTimer = setTimeout(() => {
    state.ui.toast = '';
    syncToast();
  }, 2400);
}

function requestScrollReset() {
  pendingScrollReset = true;
}

function updateWorkoutRestDisplay() {
  const timerValue = root.querySelector('[data-live="rest-timer"]');
  if (timerValue) {
    timerValue.textContent = formatRest(state.ui.restSeconds);
  }
}

function renderToastMarkup() {
  return state.ui.toast ? `<div class="toast">${escapeHtml(state.ui.toast)}</div>` : '';
}

function syncToast() {
  const viewport = root.querySelector('.app-viewport');
  if (!viewport) {
    return;
  }
  const existingToast = viewport.querySelector('.toast');
  if (state.ui.toast) {
    if (existingToast) {
      existingToast.textContent = state.ui.toast;
      return;
    }
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = state.ui.toast;
    viewport.appendChild(toast);
    return;
  }
  if (existingToast) {
    existingToast.remove();
  }
}

function syncRestTimer() {
  if (state.ui.screen === 'workoutSession' && state.activeWorkout && state.ui.restSeconds > 0) {
    if (!restTimer) {
      restTimer = setInterval(() => {
        if (state.ui.screen !== 'workoutSession' || !state.activeWorkout || state.ui.restSeconds <= 0) {
          clearInterval(restTimer);
          restTimer = null;
          return;
        }
        state.ui.restSeconds -= 1;
        updateWorkoutRestDisplay();
      }, 1000);
    }
  } else if (restTimer) {
    clearInterval(restTimer);
    restTimer = null;
  }
}

function renderStatusBar() {
  if (isAppMode()) {
    return '';
  }

  return `
    <div class="status-bar">
      <span>9:41</span>
      <div class="status-icons">
        <span class="status-pill"></span>
        <span class="status-pill" style="width:0.7rem;"></span>
        <span class="status-battery"></span>
      </div>
    </div>
  `;
}

function renderNav() {
  const active = MAIN_NAV[state.ui.screen] || 'home';
  const item = (screen, label, iconName, target) => `
    <button class="nav-item ${active === target ? 'active' : ''}" data-action="open-screen" data-screen="${screen}">
      ${icon(iconName)}
      <span>${label}</span>
    </button>
  `;
  return `
    <nav class="nav-bar">
      ${item('home', 'Home', 'home', 'home')}
      ${item('workoutPlan', 'Workout', 'dumbbell', 'workout')}
      ${item('progress', 'Progress', 'chart', 'progress')}
      ${item('profile', 'Profile', 'user', 'profile')}
    </nav>
  `;
}

function renderScreen() {
  switch (state.ui.screen) {
    case 'home':
      return renderHome();
    case 'workoutPlan':
      return renderWorkoutPlan();
    case 'workoutSession':
      return renderWorkoutSession();
    case 'progress':
      return renderProgress();
    case 'profile':
      return renderProfile();
    case 'editProfile':
      return renderEditProfile();
    case 'editPlan':
      return renderEditPlan();
    case 'editExercise':
      return renderEditExercise();
    case 'customExercise':
      return renderCustomExercise();
    case 'exerciseGuide':
      return renderExerciseGuide();
    case 'library':
      return renderLibrary();
    case 'history':
      return renderHistory();
    case 'calendar':
      return renderCalendar();
    case 'nutrition':
      return renderNutrition();
    case 'achievements':
      return renderAchievements();
    case 'settings':
      return renderSettings();
    case 'authIntro':
      return renderAuthIntro();
    case 'authLogin':
      return renderAuthLogin();
    case 'authSignup':
      return renderAuthSignup();
    case 'authForgot':
      return renderAuthForgot();
    case 'authReset':
      return renderAuthReset();
    case 'cloudLogout':
      return renderCloudLogout();
    case 'notifications':
      return renderNotifications();
    case 'messages':
      return renderMessages();
    case 'challenges':
      return renderChallenges();
    default:
      return renderHome();
  }
}

function renderHome() {
  const plan = activePlan() || todayPlan();
  const hasActiveSession = Boolean(state.activeWorkout);
  const summary = homeSummary(plan);
  const weeklyCount = weeklyGoalCount();
  const recent = recentHistory().slice(0, 3);
  const notificationCount = unreadNotificationCount();
  return `
    <div class="screen fade-up">
      <div class="brand">
        <button class="icon-button" type="button" data-action="open-drawer" aria-label="Open menu">${icon('menu')}</button>
        <img class="brand-logo" src="icons/app-logo.png" alt="SA7D">
        <div class="icon-button-stack" style="margin-left:auto;">
          <button class="icon-button" type="button" data-action="open-screen" data-screen="notifications" aria-label="Open notifications">${icon('bell')}</button>
          ${notificationCount ? `<span class="floating-count">${notificationCount}</span>` : ''}
        </div>
      </div>

      <h2 class="screen-title">Hello ${escapeHtml(state.profile.name)} <span class="accent">+</span></h2>
      <p class="screen-subtitle">Let's crush your goals today.</p>

      <section class="card hero-card section">
        <div class="hero-split">
          <div>
            <p class="label">${hasActiveSession ? 'Resume Workout' : "Today's Workout"}</p>
            <h3 class="screen-title" style="font-size:1.8rem; margin-top:0.2rem;">${escapeHtml(plan.name)}</h3>
            <div class="row-meta">
              <span>${plan.exercises.length} Exercises</span>
              <span>${plan.duration} Min</span>
            </div>
          </div>
          <div class="art-frame hero-image">
            <img src="${planImage(plan)}" alt="">
          </div>
        </div>
        <div style="margin-top:1rem;">
          <button class="cta-button" type="button" data-action="${hasActiveSession ? 'resume-workout' : 'start-workout'}" data-plan-id="${plan.id}">
            ${hasActiveSession ? 'Resume Workout' : 'Start Workout'} ${icon('arrowRight')}
          </button>
        </div>
      </section>

      <section class="section">
        <div class="section-head">
          <h3 class="section-title">Today's Summary</h3>
        </div>
        <div class="grid-3">
          ${summary
            .map(
              (item) => `
                <div class="card summary-card">
                  <span class="summary-icon">${icon(item.icon)}</span>
                  <p class="label">${item.label}</p>
                  <p class="summary-value">${item.value}</p>
                  <span class="summary-unit">${item.unit}</span>
                </div>
              `
            )
            .join('')}
        </div>
      </section>

      <section class="section card card-pad">
        <div class="section-head" style="margin-bottom:0.6rem;">
          <h3 class="section-title">Weekly Goal</h3>
          <span class="label">${weeklyCount} of ${weeklyGoalTarget()} Workouts</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width:${Math.min(100, (weeklyCount / weeklyGoalTarget()) * 100)}%"></div>
        </div>
      </section>

      <section class="section">
        <div class="section-head">
          <h3 class="section-title">Recent Workouts</h3>
          <button class="linkish" type="button" data-action="open-screen" data-screen="history">View All</button>
        </div>
        <div class="list">
          ${recent
            .map((entry) => {
              const workoutPlan = getPlan(entry.planId);
              return `
                <button class="history-item" type="button" data-action="open-screen" data-screen="history">
                  <span class="thumb"><img src="${planImage(workoutPlan)}" alt=""></span>
                  <span style="text-align:left;">
                    <strong class="list-title">${escapeHtml(workoutPlan.name)}</strong>
                    <span class="list-subtitle">${formatShortDate(entry.date)} • ${entry.duration} min</span>
                  </span>
                  <span class="status-dot">${icon('chevronRight')}</span>
                </button>
              `;
            })
            .join('') || '<div class="card empty-state">No workout history yet. Start the first session and it will appear here.</div>'}
        </div>
      </section>
    </div>
  `;
}

function renderWorkoutPlan() {
  const dates = weekDates(state.ui.selectedDate);
  const plan = getSelectedPlan();
  const canResumePlan = isActivePlan(plan.id);
  return `
    <div class="screen fade-up">
      <div class="title-bar">
        <button class="icon-button" type="button" data-action="open-screen" data-screen="home">${icon('back')}</button>
        <div style="text-align:center; flex:1;">
          <h2 class="section-title" style="font-size:1.1rem;">Workout Plan</h2>
        </div>
        <button class="icon-button" type="button" data-action="open-screen" data-screen="calendar">${icon('calendar')}</button>
      </div>

      <div class="chip-row">
        ${dates
          .map((dateValue) => {
            const chip = formatDateChip(dateValue);
            const active = dateValue === state.ui.selectedDate;
            return `
              <button class="chip date-chip ${active ? 'active' : ''}" type="button" data-action="select-date" data-date="${dateValue}">
                <span>${chip.label}</span>
                <strong>${chip.day}</strong>
              </button>
            `;
          })
          .join('')}
      </div>

      <section class="card hero-card">
        <div class="hero-split">
          <div>
            <h3 class="screen-title" style="font-size:1.7rem; margin:0 0 0.45rem;">${escapeHtml(plan.name)}</h3>
            <div class="row-meta">
              <span>${plan.exercises.length} Exercises</span>
              <span>${plan.duration} Min</span>
            </div>
          </div>
          <div class="art-frame plan-image">
            <img src="${planImage(plan)}" alt="">
          </div>
        </div>
      </section>

      <section class="section list">
        ${plan.exercises
          .map((exercise, index) => {
            const activeWorkoutState =
              state.activeWorkout && state.activeWorkout.planId === plan.id
                ? state.activeWorkout.completedSets[exercise.id]
                : null;
            const isDone = activeWorkoutState ? activeWorkoutState.every(Boolean) : false;
            const statusClass = isDone ? 'status-check' : 'status-ring';
            const statusIcon = isDone ? icon('check') : '';
            return `
              <div class="exercise-row">
                <button class="exercise-main" type="button" data-action="open-edit-exercise" data-plan-id="${plan.id}" data-exercise-id="${exercise.id}">
                  <span class="thumb"><img src="${exerciseImage(exercise)}" alt=""></span>
                  <span style="text-align:left;">
                    <strong class="list-title">${index + 1}. ${escapeHtml(exercise.name)}</strong>
                    <span class="list-subtitle">${exercise.sets.length} Sets • ${exercise.sets[0].reps} Reps</span>
                  </span>
                </button>
                <span class="${statusClass}">${statusIcon}</span>
                <button
                  class="icon-button exercise-delete-button"
                  type="button"
                  aria-label="Delete ${escapeHtml(exercise.name)}"
                  data-action="delete-exercise-row"
                  data-plan-id="${plan.id}"
                  data-exercise-id="${exercise.id}"
                >
                  ${icon('trash')}
                </button>
              </div>
            `;
          })
          .join('')}
      </section>

      <div class="action-grid section">
        <button class="secondary-button compact-button" type="button" data-action="open-screen" data-screen="library">
          ${icon('plus')} Add From Library
        </button>
        <button class="cta-button compact-button" type="button" data-action="open-screen" data-screen="customExercise">
          ${icon('edit')} Custom Exercise
        </button>
      </div>

      <div class="section">
        <button class="cta-button" type="button" data-action="${canResumePlan ? 'resume-workout' : 'start-workout'}" data-plan-id="${plan.id}">
          ${canResumePlan ? 'Resume Workout' : 'Start Workout'} ${icon('arrowRight')}
        </button>
      </div>
    </div>
  `;
}

function renderGuideMotion(exercise) {
  const guide = guideDataForExercise(exercise);
  const label = escapeHtml(`${exercise.name} beginner motion guide`);
  const renderGuideScene = (inner, animationCss = '') => `
    <svg class="guide-motion-svg" viewBox="0 0 340 220" role="img" aria-label="${label}">
      <style>
        .guide-bg { fill: url(#guideBg); }
        .guide-grid { stroke: rgba(255,255,255,0.08); stroke-width: 1; }
        .guide-floor { fill: rgba(255,255,255,0.04); }
        .guide-body { fill: #f4f1ff; }
        .guide-body-soft { fill: rgba(244, 241, 255, 0.4); }
        .guide-accent { fill: #a855f7; }
        .guide-accent-soft { fill: rgba(168, 85, 247, 0.25); }
        .guide-stroke { stroke: #f4f1ff; stroke-width: 8; stroke-linecap: round; stroke-linejoin: round; fill: none; }
        .guide-stroke-soft { stroke: rgba(244,241,255,0.35); stroke-width: 8; stroke-linecap: round; stroke-linejoin: round; fill: none; }
        .guide-arrow { stroke: #c084fc; stroke-width: 5; stroke-linecap: round; stroke-linejoin: round; fill: none; opacity: 0.95; }
        .guide-glow { fill: rgba(168, 85, 247, 0.14); }
        .guide-label { fill: #f4f1ff; font-size: 12px; font-family: Arial, sans-serif; opacity: 0.9; }
        .guide-animate {
          transform-box: fill-box;
          transform-origin: center;
        }
        ${animationCss}
      </style>
      <defs>
        <linearGradient id="guideBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#11081f"/>
          <stop offset="1" stop-color="#05040c"/>
        </linearGradient>
        <radialGradient id="guideGlow" cx="50%" cy="30%" r="65%">
          <stop offset="0" stop-color="#a855f7" stop-opacity="0.42"/>
          <stop offset="1" stop-color="#a855f7" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="340" height="220" rx="22" class="guide-bg"/>
      <rect width="340" height="220" rx="22" fill="url(#guideGlow)"/>
      <path d="M24 176H316" class="guide-grid"/>
      <path d="M24 145H316" class="guide-grid"/>
      <ellipse cx="170" cy="186" rx="130" ry="18" class="guide-floor"/>
      ${inner}
    </svg>
  `;

  switch (guide.motion) {
    case 'incline-press':
      return renderGuideScene(
        `
          <rect x="86" y="152" width="138" height="10" rx="5" class="guide-body-soft" transform="rotate(-18 86 152)"/>
          <rect x="152" y="124" width="10" height="42" rx="5" class="guide-body-soft"/>
          <g class="guide-animate guide-press-group">
            <rect x="94" y="64" width="152" height="8" rx="4" class="guide-body"/>
            <circle cx="100" cy="68" r="16" class="guide-body-soft"/>
            <circle cx="240" cy="68" r="16" class="guide-body-soft"/>
          </g>
          <circle cx="162" cy="106" r="14" class="guide-body"/>
          <path d="M153 120 128 147M171 118 194 142" class="guide-stroke"/>
          <path d="M129 146 110 160M196 141 214 158" class="guide-stroke-soft"/>
          <path d="M270 74v48m0-48-10 10m10-10 10 10m0 48-10-10m10 10 10-10" class="guide-arrow"/>
        `,
        `
          .guide-press-group { animation: guidePress 2s ease-in-out infinite; }
          @keyframes guidePress { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(16px); } }
        `
      );
    case 'dumbbell-fly':
      return renderGuideScene(
        `
          <rect x="96" y="150" width="148" height="10" rx="5" class="guide-body-soft"/>
          <circle cx="170" cy="112" r="14" class="guide-body"/>
          <path d="M170 126 170 154" class="guide-stroke"/>
          <g class="guide-animate guide-fly-left">
            <path d="M165 134 116 110" class="guide-stroke"/>
            <rect x="94" y="100" width="16" height="18" rx="6" class="guide-accent"/>
          </g>
          <g class="guide-animate guide-fly-right">
            <path d="M175 134 224 110" class="guide-stroke"/>
            <rect x="230" y="100" width="16" height="18" rx="6" class="guide-accent"/>
          </g>
          <path d="M88 96c18 8 26 25 26 25" class="guide-arrow"/>
          <path d="M252 96c-18 8-26 25-26 25" class="guide-arrow"/>
        `,
        `
          .guide-fly-left { animation: guideFlyLeft 2s ease-in-out infinite; }
          .guide-fly-right { animation: guideFlyRight 2s ease-in-out infinite; }
          @keyframes guideFlyLeft { 0%,100% { transform: rotate(0deg) translateX(0); } 50% { transform: rotate(10deg) translateX(18px); } }
          @keyframes guideFlyRight { 0%,100% { transform: rotate(0deg) translateX(0); } 50% { transform: rotate(-10deg) translateX(-18px); } }
        `
      );
    case 'push-up':
      return renderGuideScene(
        `
          <g class="guide-animate guide-push-group">
            <circle cx="248" cy="88" r="13" class="guide-body"/>
            <path d="M236 100 188 130 120 136 88 158" class="guide-stroke"/>
            <path d="M187 130 173 162M145 134 132 164" class="guide-stroke-soft"/>
          </g>
          <path d="M272 82v34m0-34-9 9m9-9 9 9m0 34-9-9m9 9 9-9" class="guide-arrow"/>
        `,
        `
          .guide-push-group { animation: guidePush 1.8s ease-in-out infinite; }
          @keyframes guidePush { 0%,100% { transform: translateY(0); } 50% { transform: translateY(18px); } }
        `
      );
    case 'pushdown':
      return renderGuideScene(
        `
          <path d="M120 52V176" class="guide-stroke-soft"/>
          <circle cx="170" cy="86" r="14" class="guide-body"/>
          <path d="M170 100 170 142" class="guide-stroke"/>
          <path d="M170 118 150 136M170 118 190 136" class="guide-stroke"/>
          <path d="M170 142 154 174M170 142 186 174" class="guide-stroke-soft"/>
          <g class="guide-animate guide-handle">
            <rect x="144" y="104" width="52" height="10" rx="5" class="guide-accent"/>
          </g>
          <path d="M236 98v52m0-52-10 10m10-10 10 10m0 52-10-10m10 10 10-10" class="guide-arrow"/>
        `,
        `
          .guide-handle { animation: guidePushdown 1.7s ease-in-out infinite; }
          @keyframes guidePushdown { 0%,100% { transform: translateY(0); } 50% { transform: translateY(28px); } }
        `
      );
    case 'overhead-extension':
      return renderGuideScene(
        `
          <circle cx="170" cy="88" r="14" class="guide-body"/>
          <path d="M170 102 170 148" class="guide-stroke"/>
          <path d="M170 120 152 174M170 120 188 174" class="guide-stroke-soft"/>
          <g class="guide-animate guide-overhead">
            <path d="M160 94 146 58M180 94 194 58" class="guide-stroke"/>
            <rect x="144" y="48" width="52" height="10" rx="5" class="guide-accent"/>
          </g>
          <path d="M246 56v48m0-48-10 10m10-10 10 10m0 48-10-10m10 10 10-10" class="guide-arrow"/>
        `,
        `
          .guide-overhead { animation: guideOverhead 1.8s ease-in-out infinite; }
          @keyframes guideOverhead { 0%,100% { transform: translateY(0); } 50% { transform: translateY(18px); } }
        `
      );
    case 'pulldown':
      return renderGuideScene(
        `
          <path d="M90 46H250" class="guide-stroke-soft"/>
          <path d="M110 46V176" class="guide-stroke-soft"/>
          <circle cx="170" cy="98" r="14" class="guide-body"/>
          <path d="M170 112 170 154" class="guide-stroke"/>
          <path d="M170 128 148 152M170 128 192 152" class="guide-stroke"/>
          <g class="guide-animate guide-pulldown-bar">
            <rect x="118" y="54" width="104" height="10" rx="5" class="guide-body"/>
          </g>
          <path d="M280 58v58m0-58-10 10m10-10 10 10m0 58-10-10m10 10 10-10" class="guide-arrow"/>
        `,
        `
          .guide-pulldown-bar { animation: guidePulldown 1.9s ease-in-out infinite; }
          @keyframes guidePulldown { 0%,100% { transform: translateY(0); } 50% { transform: translateY(28px); } }
        `
      );
    case 'row':
    case 'single-row':
    case 'face-pull':
      return renderGuideScene(
        `
          <path d="M252 64V176" class="guide-stroke-soft"/>
          <circle cx="132" cy="92" r="14" class="guide-body"/>
          <path d="M132 106 132 150" class="guide-stroke"/>
          <path d="M132 120 152 136M132 120 112 136" class="guide-stroke"/>
          <g class="guide-animate guide-row-handle">
            <rect x="164" y="108" width="58" height="10" rx="5" class="guide-accent"/>
          </g>
          <path d="M282 98h-64m64 0-10-10m10 10-10 10m-64 32h64m-64 0 10-10m-10 10 10 10" class="guide-arrow"/>
        `,
        `
          .guide-row-handle { animation: guideRow 1.8s ease-in-out infinite; }
          @keyframes guideRow { 0%,100% { transform: translateX(0); } 50% { transform: translateX(-28px); } }
        `
      );
    case 'curl':
      return renderGuideScene(
        `
          <circle cx="170" cy="78" r="14" class="guide-body"/>
          <path d="M170 92 170 146" class="guide-stroke"/>
          <path d="M170 108 146 128M170 108 194 128" class="guide-stroke"/>
          <path d="M170 146 154 180M170 146 186 180" class="guide-stroke-soft"/>
          <g class="guide-animate guide-curl-left">
            <rect x="134" y="124" width="14" height="22" rx="6" class="guide-accent"/>
          </g>
          <g class="guide-animate guide-curl-right">
            <rect x="192" y="124" width="14" height="22" rx="6" class="guide-accent"/>
          </g>
          <path d="M112 118c14 10 18 28 18 28" class="guide-arrow"/>
          <path d="M228 118c-14 10-18 28-18 28" class="guide-arrow"/>
        `,
        `
          .guide-curl-left { animation: guideCurlLeft 1.8s ease-in-out infinite; }
          .guide-curl-right { animation: guideCurlRight 1.8s ease-in-out infinite; }
          @keyframes guideCurlLeft { 0%,100% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(18px, -28px) rotate(-28deg); } }
          @keyframes guideCurlRight { 0%,100% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(-18px, -28px) rotate(28deg); } }
        `
      );
    case 'squat':
      return renderGuideScene(
        `
          <g class="guide-animate guide-squat-group">
            <rect x="112" y="56" width="116" height="8" rx="4" class="guide-body"/>
            <circle cx="170" cy="86" r="14" class="guide-body"/>
            <path d="M170 100 170 140" class="guide-stroke"/>
            <path d="M170 116 134 134M170 116 206 134" class="guide-stroke"/>
            <path d="M170 140 146 176M170 140 194 176" class="guide-stroke"/>
          </g>
          <path d="M272 88v54m0-54-10 10m10-10 10 10m0 54-10-10m10 10 10-10" class="guide-arrow"/>
        `,
        `
          .guide-squat-group { animation: guideSquat 2s ease-in-out infinite; }
          @keyframes guideSquat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(20px); } }
        `
      );
    case 'hinge':
      return renderGuideScene(
        `
          <g class="guide-animate guide-hinge-group">
            <circle cx="188" cy="78" r="14" class="guide-body"/>
            <path d="M188 92 164 138" class="guide-stroke"/>
            <path d="M172 110 138 128M164 138 150 176M164 138 188 176" class="guide-stroke"/>
            <rect x="122" y="132" width="54" height="10" rx="5" class="guide-accent"/>
          </g>
          <path d="M268 78c-20 14-28 34-28 58" class="guide-arrow"/>
        `,
        `
          .guide-hinge-group { animation: guideHinge 2s ease-in-out infinite; }
          @keyframes guideHinge { 0%,100% { transform: rotate(0deg) translateY(0); } 50% { transform: rotate(12deg) translate(-18px, 12px); } }
        `
      );
    case 'leg-press':
      return renderGuideScene(
        `
          <path d="M78 168 240 76" class="guide-stroke-soft"/>
          <rect x="232" y="62" width="48" height="64" rx="10" class="guide-body-soft"/>
          <g class="guide-animate guide-legpress-sled">
            <rect x="222" y="54" width="62" height="72" rx="12" class="guide-accent-soft"/>
          </g>
          <circle cx="126" cy="138" r="14" class="guide-body"/>
          <path d="M128 150 156 136 184 120" class="guide-stroke"/>
          <path d="M120 150 96 178M156 136 176 170" class="guide-stroke-soft"/>
          <path d="M286 90h-42m42 0-10-10m10 10-10 10m-42 28h42m-42 0 10-10m-10 10 10 10" class="guide-arrow"/>
        `,
        `
          .guide-legpress-sled { animation: guideLegPress 1.9s ease-in-out infinite; }
          @keyframes guideLegPress { 0%,100% { transform: translate(0, 0); } 50% { transform: translate(-18px, 10px); } }
        `
      );
    case 'lunge':
      return renderGuideScene(
        `
          <g class="guide-animate guide-lunge-group">
            <circle cx="170" cy="76" r="14" class="guide-body"/>
            <path d="M170 90 170 132" class="guide-stroke"/>
            <path d="M170 132 134 176M170 132 206 168" class="guide-stroke"/>
            <path d="M170 108 146 126M170 108 194 126" class="guide-stroke-soft"/>
          </g>
          <path d="M274 88v56m0-56-10 10m10-10 10 10m0 56-10-10m10 10 10-10" class="guide-arrow"/>
        `,
        `
          .guide-lunge-group { animation: guideLunge 1.9s ease-in-out infinite; }
          @keyframes guideLunge { 0%,100% { transform: translateY(0); } 50% { transform: translateY(18px); } }
        `
      );
    case 'calf-raise':
      return renderGuideScene(
        `
          <g class="guide-animate guide-calf-group">
            <circle cx="170" cy="72" r="14" class="guide-body"/>
            <path d="M170 86 170 142" class="guide-stroke"/>
            <path d="M170 106 148 126M170 106 192 126" class="guide-stroke-soft"/>
            <path d="M170 142 156 180M170 142 184 180" class="guide-stroke"/>
          </g>
          <path d="M250 124v46m0-46-10 10m10-10 10 10m0 46-10-10m10 10 10-10" class="guide-arrow"/>
        `,
        `
          .guide-calf-group { animation: guideCalf 1.2s ease-in-out infinite; }
          @keyframes guideCalf { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        `
      );
    case 'overhead-press':
      return renderGuideScene(
        `
          <circle cx="170" cy="84" r="14" class="guide-body"/>
          <path d="M170 98 170 150" class="guide-stroke"/>
          <path d="M170 116 146 132M170 116 194 132" class="guide-stroke"/>
          <path d="M170 150 154 180M170 150 186 180" class="guide-stroke-soft"/>
          <g class="guide-animate guide-overhead-press-bar">
            <rect x="130" y="94" width="80" height="10" rx="5" class="guide-body"/>
          </g>
          <path d="M270 70v56m0-56-10 10m10-10 10 10m0 56-10-10m10 10 10-10" class="guide-arrow"/>
        `,
        `
          .guide-overhead-press-bar { animation: guideOHP 1.8s ease-in-out infinite; }
          @keyframes guideOHP { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-30px); } }
        `
      );
    case 'lateral-raise':
      return renderGuideScene(
        `
          <circle cx="170" cy="78" r="14" class="guide-body"/>
          <path d="M170 92 170 146" class="guide-stroke"/>
          <path d="M170 146 154 180M170 146 186 180" class="guide-stroke-soft"/>
          <g class="guide-animate guide-raise-left">
            <path d="M164 110 136 132" class="guide-stroke"/>
            <rect x="126" y="128" width="14" height="20" rx="6" class="guide-accent"/>
          </g>
          <g class="guide-animate guide-raise-right">
            <path d="M176 110 204 132" class="guide-stroke"/>
            <rect x="200" y="128" width="14" height="20" rx="6" class="guide-accent"/>
          </g>
          <path d="M96 110c14 8 24 22 24 22" class="guide-arrow"/>
          <path d="M244 110c-14 8-24 22-24 22" class="guide-arrow"/>
        `,
        `
          .guide-raise-left { animation: guideRaiseLeft 1.8s ease-in-out infinite; }
          .guide-raise-right { animation: guideRaiseRight 1.8s ease-in-out infinite; }
          @keyframes guideRaiseLeft { 0%,100% { transform: rotate(0deg) translate(0, 0); } 50% { transform: rotate(-18deg) translate(-10px, -26px); } }
          @keyframes guideRaiseRight { 0%,100% { transform: rotate(0deg) translate(0, 0); } 50% { transform: rotate(18deg) translate(10px, -26px); } }
        `
      );
    case 'dips':
      return renderGuideScene(
        `
          <path d="M118 88V172M222 88V172" class="guide-stroke-soft"/>
          <g class="guide-animate guide-dip-body">
            <circle cx="170" cy="84" r="14" class="guide-body"/>
            <path d="M170 98 170 148" class="guide-stroke"/>
            <path d="M170 114 130 110M170 114 210 110" class="guide-stroke"/>
            <path d="M170 148 154 180M170 148 186 180" class="guide-stroke-soft"/>
          </g>
          <path d="M270 90v50m0-50-10 10m10-10 10 10m0 50-10-10m10 10 10-10" class="guide-arrow"/>
        `,
        `
          .guide-dip-body { animation: guideDip 1.8s ease-in-out infinite; }
          @keyframes guideDip { 0%,100% { transform: translateY(0); } 50% { transform: translateY(18px); } }
        `
      );
    case 'bench-press':
    default:
      return renderGuideScene(
        `
          <rect x="94" y="150" width="152" height="10" rx="5" class="guide-body-soft"/>
          <rect x="166" y="126" width="8" height="34" rx="4" class="guide-body-soft"/>
          <g class="guide-animate guide-bench-bar">
            <rect x="86" y="74" width="168" height="8" rx="4" class="guide-body"/>
            <circle cx="92" cy="78" r="16" class="guide-body-soft"/>
            <circle cx="248" cy="78" r="16" class="guide-body-soft"/>
          </g>
          <circle cx="170" cy="116" r="14" class="guide-body"/>
          <path d="M160 128 138 148M180 128 202 148" class="guide-stroke"/>
          <path d="M170 128 170 150" class="guide-stroke-soft"/>
          <path d="M278 82v48m0-48-10 10m10-10 10 10m0 48-10-10m10 10 10-10" class="guide-arrow"/>
        `,
        `
          .guide-bench-bar { animation: guideBench 2s ease-in-out infinite; }
          @keyframes guideBench { 0%,100% { transform: translateY(0); } 50% { transform: translateY(18px); } }
        `
      );
  }
}

function renderExerciseGuide() {
  const plan = getPlan(state.ui.guidePlanId || state.ui.selectedPlanId || state.plans[0].id);
  const exercise = getExercise(plan.id, state.ui.guideExerciseId) || plan.exercises[0];
  const guide = guideDataForExercise(exercise);
  const media = customVideoMediaForExercise(exercise);
  const builtInMedia = builtInGuideMediaForExercise(exercise);
  const hasCustomMedia = Boolean(media?.src);
  const customMediaMissing = Boolean(media?.missing);
  const backScreen = state.ui.guideReturnScreen || 'workoutSession';
  const backCopy = backScreen === 'workoutSession' ? 'Back to Workout' : 'Back';
  const mediaMarkup = hasCustomMedia
    ? media.type?.startsWith('image/')
      ? `<img class="guide-player-image" src="${media.src}" alt="${escapeHtml(exercise.name)} custom guide">`
      : `<video class="guide-player-video" src="${media.src}" controls loop muted playsinline autoplay></video>`
    : media?.loading
      ? `<div class="guide-loading"><span class="count-pill">Loading custom video...</span></div>`
      : builtInMedia
        ? `<img class="guide-player-image" src="${builtInMedia.src}" alt="${escapeHtml(exercise.name)} beginner demo GIF">`
        : renderGuideMotion(exercise);
  const supportCopy = hasCustomMedia
    ? 'This uploaded guide is saved on this device for this exercise.'
    : customMediaMissing
      ? 'The custom video was not found on this device, so the built-in beginner guide is showing instead.'
      : builtInMedia
        ? 'This built-in beginner demo is available for every user right away.'
        : 'This built-in beginner guide is available for every user right away.';
  return `
    <div class="screen tight fade-up">
      ${renderDeepHeader('Exercise Guide', backScreen, `<span class="count-pill ${hasCustomMedia ? '' : 'muted-pill'}">${hasCustomMedia ? 'Custom Video' : builtInMedia ? 'App Demo' : 'App Guide'}</span>`)}
      <section class="card card-pad guide-hero-card">
        <div class="section-head" style="align-items:flex-start;">
          <div>
            <p class="section-kicker accent">${escapeHtml(plan.name)}</p>
            <h2 class="screen-title" style="font-size:1.8rem; margin:0.2rem 0 0.35rem;">${escapeHtml(exercise.name)}</h2>
            <p class="screen-subtitle">${escapeHtml(guide.focus)}</p>
          </div>
          <span class="guide-badge">${icon('play')} Beginner View</span>
        </div>
        <div class="guide-player-shell">
          ${mediaMarkup}
        </div>
        <div class="guide-note">
          <strong class="list-title">Beginner tip</strong>
          <p class="list-subtitle">${escapeHtml(guide.beginnerTip)}</p>
          <p class="guide-support-copy">${escapeHtml(supportCopy)}</p>
        </div>
      </section>

      <section class="guide-step-list section">
        ${guide.steps
          .map(
            (step, index) => `
              <div class="card card-pad guide-step-card">
                <span class="guide-step-number">${index + 1}</span>
                <div>
                  <p class="label">Step ${index + 1}</p>
                  <p class="list-subtitle" style="margin:0.25rem 0 0;">${escapeHtml(step)}</p>
                </div>
              </div>
            `
          )
          .join('')}
      </section>

      <section class="card card-pad section">
        <p class="label">Common mistakes</p>
        <div class="guide-mistake-list">
          ${guide.mistakes.map((mistake) => `<span class="guide-mistake-pill">${escapeHtml(mistake)}</span>`).join('')}
        </div>
      </section>

      <div class="action-grid section">
        <button class="secondary-button compact-button" type="button" data-action="open-edit-exercise" data-plan-id="${plan.id}" data-exercise-id="${exercise.id}">
          ${icon('edit')} Custom Video
        </button>
        <button class="cta-button compact-button" type="button" data-action="open-screen" data-screen="${backScreen}">
          ${backCopy}
        </button>
      </div>
    </div>
  `;
}

function renderWorkoutSession() {
  const plan = activePlan() || getSelectedPlan();
  const workout = state.activeWorkout || createWorkoutState(plan.id);
  const exercise = activeExercise() || plan.exercises[0];
  const totalSets = totalSetCount(plan, workout);
  const doneSets = completedSetCount(plan, workout);
  const doneReps = completedRepCount(plan, workout);
  const allReps = sum(plan.exercises.flatMap((item) => item.sets.map((set) => Number(set.reps))));
  return `
    <div class="screen fade-up">
      <div class="title-bar">
        <button class="icon-button" type="button" data-action="open-screen" data-screen="workoutPlan">${icon('back')}</button>
        <div style="text-align:center; flex:1;">
          <h2 class="section-title" style="font-size:1.1rem;">Workout</h2>
        </div>
        <button class="icon-button" type="button" data-action="open-exercise-guide" data-plan-id="${plan.id}" data-exercise-id="${exercise.id}" data-back-screen="workoutSession" aria-label="Open exercise guide">${icon('play')}</button>
      </div>

      <p class="accent" style="margin:0 0 0.45rem; font-weight:600;">${state.activeWorkout ? state.activeWorkout.exerciseIndex + 1 : 1} of ${plan.exercises.length}</p>
      <h2 class="screen-title" style="font-size:1.9rem; margin:0;">${escapeHtml(exercise.name)}</h2>
      <p class="screen-subtitle">${escapeHtml(plan.name)}</p>

      <section class="card hero-card section">
        <div class="hero-split" style="grid-template-columns:1fr 0.95fr;">
          <div>
            <div class="art-frame hero-image">
              <img src="${planImage(plan)}" alt="">
            </div>
          </div>
          <div>
            <div class="art-frame workout-hero">
              <img src="${exerciseImage(exercise)}" alt="">
              <div class="workout-overlay">
                <button class="overlay-pill" type="button" data-action="open-exercise-guide" data-plan-id="${plan.id}" data-exercise-id="${exercise.id}" data-back-screen="workoutSession">${icon('play')}${guideButtonLabel(exercise)}</button>
              </div>
            </div>
          </div>
        </div>

        <div class="stats-row">
          <div class="card metric-card">
            <p class="label">Sets</p>
            <p class="metric-value">${doneSets}/${totalSets}</p>
            <span class="metric-caption">Completed</span>
          </div>
          <div class="card metric-card">
            <p class="label">Reps</p>
            <p class="metric-value">${doneReps}/${allReps}</p>
            <span class="metric-caption">Completed</span>
          </div>
          <div class="card metric-card">
            <p class="label">Rest</p>
            <p class="metric-value" data-live="rest-timer">${formatRest(state.ui.restSeconds)}</p>
            <span class="metric-caption muted">Remaining</span>
          </div>
        </div>
      </section>

      <section class="card card-pad set-card">
        <div class="section-head" style="margin-bottom:0;">
          <h3 class="section-title">Set Progress</h3>
          <button class="linkish" type="button" data-action="open-edit-exercise" data-plan-id="${plan.id}" data-exercise-id="${exercise.id}">
            Edit ${icon('edit')}
          </button>
        </div>
        <div class="set-table">
          ${exercise.sets
            .map((set, index) => {
              const done = (workout.completedSets[exercise.id] || [])[index];
              return `
                <button class="set-row ${done ? 'done' : ''}" type="button" data-action="toggle-set" data-plan-id="${plan.id}" data-exercise-id="${exercise.id}" data-set-index="${index}">
                  <span style="text-align:left;">
                    <strong class="list-title">Set ${index + 1}</strong>
                    <span class="list-subtitle">${set.reps} Reps</span>
                  </span>
                  <strong>${set.weight} kg</strong>
                  <span class="${done ? 'status-check' : 'status-ring'}">${done ? icon('check') : ''}</span>
                </button>
              `;
            })
            .join('')}
        </div>
      </section>

      <div class="button-row">
        <button class="secondary-button" type="button" data-action="move-exercise" data-direction="-1">
          ${icon('back')} Previous
        </button>
        <button class="cta-button" type="button" data-action="mark-exercise">
          ${state.activeWorkout && state.activeWorkout.exerciseIndex >= plan.exercises.length - 1 ? 'Finish Workout' : 'Mark as Done'} ${icon('check')}
        </button>
      </div>
    </div>
  `;
}

function renderProgress() {
  const weightValues = state.metrics.weightLog.map((entry) => entry.value);
  const hasWorkoutData = state.history.length > 0;
  const hasCalories = state.metrics.caloriesWeek.some((entry) => entry.value > 0);
  const weightDelta = Number((state.profile.weight - state.metrics.weightLog[0].value).toFixed(1));
  return `
    <div class="screen fade-up">
      <div class="title-bar">
        <div style="flex:1; text-align:center;">
          <h2 class="section-title" style="font-size:1.1rem;">Progress</h2>
        </div>
      </div>

      <div class="segment-control">
        ${['overview', 'workouts', 'body']
          .map(
            (tab) => `
              <button class="segment-button ${state.ui.progressTab === tab ? 'active' : ''}" type="button" data-action="select-progress-tab" data-tab="${tab}">
                ${tab === 'overview' ? 'Overview' : tab === 'workouts' ? 'Workouts' : 'Body Stats'}
              </button>
            `
          )
          .join('')}
      </div>

      ${
        state.ui.progressTab === 'overview'
          ? `
            <section class="card chart-card section">
              <div class="chart-head">
                <h3 class="section-title">Weight Progress</h3>
                <select class="chart-select" aria-label="Progress range">
                  <option>This Month</option>
                </select>
              </div>
              <div class="chart-wrap">${renderLineChart(state.metrics.weightLog, '#8b5cf6')}</div>
              <div class="chart-labels" style="grid-template-columns: repeat(${state.metrics.weightLog.length}, minmax(0, 1fr));">
                ${state.metrics.weightLog.map((item) => `<span>${item.label}</span>`).join('')}
              </div>
            </section>

            <section class="grid-3 section">
              <div class="card metric-card">
                <p class="label">Weight</p>
                <p class="metric-value">${state.profile.weight} kg</p>
                <span class="metric-caption">${weightDelta > 0 ? '+' : ''}${weightDelta} kg</span>
              </div>
              <div class="card metric-card">
                <p class="label">Body Fat</p>
                <p class="metric-value">${state.metrics.bodyFat}%</p>
                <span class="metric-caption">${state.metrics.bodyFat < 17 ? '↓ 1.2 %' : '↑ 0.4 %'}</span>
              </div>
              <div class="card metric-card">
                <p class="label">Muscle Mass</p>
                <p class="metric-value">${state.metrics.muscleMass} kg</p>
                <span class="metric-caption">↑ 1.8 kg</span>
              </div>
            </section>

            <section class="card chart-card section">
              <div class="chart-head">
                <h3 class="section-title">Calories Burned</h3>
                <select class="chart-select" aria-label="Calories range">
                  <option>This Week</option>
                </select>
              </div>
              ${
                hasCalories
                  ? `
                    <div class="bars">
                      ${state.metrics.caloriesWeek
                        .map((entry) => {
                          const max = Math.max(...state.metrics.caloriesWeek.map((item) => item.value), 900);
                          return `
                            <div class="bar-col">
                              <div class="bar-track">
                                <div class="bar" style="height:${Math.max(18, (entry.value / max) * 100)}%"></div>
                              </div>
                              <span class="bar-label">${entry.label}</span>
                            </div>
                          `;
                        })
                        .join('')}
                    </div>
                  `
                  : '<div class="empty-state">Calories will show here after the first completed workout.</div>'
              }
            </section>
          `
          : state.ui.progressTab === 'workouts'
            ? `
              <section class="card card-pad section">
                <div class="section-head" style="margin-bottom:0.7rem;">
                  <h3 class="section-title">Weekly Goal</h3>
                  <span class="label">${weeklyGoalCount()} of ${weeklyGoalTarget()} complete</span>
                </div>
                <div class="progress-bar">
                  <div class="progress-fill" style="width:${Math.min(100, (weeklyGoalCount() / weeklyGoalTarget()) * 100)}%"></div>
                </div>
              </section>

              <section class="grid-2 section">
                <div class="card metric-card">
                  <p class="label">Current Streak</p>
                  <p class="metric-value">${state.metrics.streak}</p>
                  <span class="metric-caption">Days active</span>
                </div>
                <div class="card metric-card">
                  <p class="label">Sessions</p>
                  <p class="metric-value">${state.history.length}</p>
                  <span class="metric-caption">Tracked workouts</span>
                </div>
              </section>

              <section class="card card-pad section">
                <h3 class="section-title" style="margin:0 0 0.8rem;">Most Used Splits</h3>
                <div class="list">
                  ${state.plans
                    .map((plan) => {
                      const count = state.history.filter((entry) => entry.planId === plan.id).length;
                      return `
                        <div class="mini-panel card">
                          <div class="section-head" style="margin-bottom:0.35rem;">
                            <strong>${escapeHtml(plan.name)}</strong>
                            <span class="label">${count} sessions</span>
                          </div>
                          <div class="progress-bar">
                            <div class="progress-fill" style="width:${Math.min(100, count * 20 + 10)}%"></div>
                          </div>
                        </div>
                      `;
                    })
                    .join('')}
                </div>
                ${hasWorkoutData ? '' : '<div class="empty-state" style="margin-top:0.85rem;">No sessions yet. Complete a workout and your favorite splits will show up here.</div>'}
              </section>
            `
            : `
              <section class="grid-2 section">
                <div class="card metric-card">
                  <p class="label">Weight</p>
                  <p class="metric-value">${state.profile.weight} kg</p>
                  <span class="metric-caption">Target ${state.profile.targetWeight} kg</span>
                </div>
                <div class="card metric-card">
                  <p class="label">Body Fat</p>
                  <p class="metric-value">${state.metrics.bodyFat}%</p>
                  <span class="metric-caption">Lean bulk track</span>
                </div>
              </section>

              <section class="card card-pad section">
                <h3 class="section-title" style="margin:0 0 0.7rem;">Body Composition</h3>
                <div class="grid-2">
                  <div class="mini-panel card">
                    <p class="label">Muscle Mass</p>
                    <p class="metric-value">${state.metrics.muscleMass} kg</p>
                    <span class="metric-caption">Steady gain</span>
                  </div>
                  <div class="mini-panel card">
                    <p class="label">Goal Mode</p>
                    <p class="metric-value" style="font-size:1.3rem;">${escapeHtml(state.profile.goal)}</p>
                    <span class="metric-caption">${escapeHtml(state.preferences.nutritionMode)}</span>
                  </div>
                </div>
              </section>
            `
      }
    </div>
  `;
}

function renderProfile() {
  return `
    <div class="screen fade-up">
      <div class="title-bar">
        <div style="flex:1; text-align:center;">
          <h2 class="section-title" style="font-size:1.1rem;">Profile</h2>
        </div>
        <button class="icon-button" type="button" data-action="open-screen" data-screen="settings">${icon('gear')}</button>
      </div>

      <section class="profile-hero">
        <div class="avatar-frame">
          <span class="thumb circle"><img src="${ART.portrait}" alt=""></span>
          <button class="avatar-edit" type="button" data-action="open-screen" data-screen="editProfile">${icon('edit')}</button>
        </div>
        <h2 class="screen-title" style="margin:0;">${escapeHtml(state.profile.name)}</h2>
        <p class="screen-subtitle">${escapeHtml(state.profile.quote)}</p>
      </section>

      <section class="stat-strip">
        <div class="stat-block">
          <span class="label">Age</span>
          <p class="metric-value" style="font-size:1.3rem; margin-top:0.25rem;">${state.profile.age}</p>
        </div>
        <div class="stat-block">
          <span class="label">Height</span>
          <p class="metric-value" style="font-size:1.3rem; margin-top:0.25rem;">${state.profile.height} cm</p>
        </div>
        <div class="stat-block">
          <span class="label">Weight</span>
          <p class="metric-value" style="font-size:1.3rem; margin-top:0.25rem;">${state.profile.weight} kg</p>
        </div>
      </section>

      <section class="card goal-card section">
        <div>
          <span class="label">Goal</span>
          <h3 class="screen-title" style="font-size:1.55rem; margin:0.25rem 0 0.3rem;">${escapeHtml(state.profile.goal)}</h3>
          <p class="screen-subtitle" style="margin:0;">Target Weight: ${state.profile.targetWeight} kg</p>
        </div>
        <span class="goal-badge">${icon('target')}</span>
      </section>

      <section class="section list">
        <button class="menu-item" type="button" data-action="toggle-reminder">
          <span class="status-dot">${icon('bell')}</span>
          <span style="text-align:left;">
            <strong class="list-title">Workout Reminder</strong>
            <span class="list-subtitle">${state.preferences.reminder ? 'On' : 'Off'}</span>
          </span>
          <span class="switch ${state.preferences.reminder ? 'active' : ''}"></span>
        </button>
        <button class="menu-item" type="button" data-action="open-screen" data-screen="nutrition">
          <span class="status-dot">${icon('bolt')}</span>
          <span style="text-align:left;">
            <strong class="list-title">Nutrition Plan</strong>
            <span class="list-subtitle">${escapeHtml(state.preferences.nutritionMode)}</span>
          </span>
          <span class="status-dot">${icon('chevronRight')}</span>
        </button>
        <button class="menu-item" type="button" data-action="open-screen" data-screen="achievements">
          <span class="status-dot">${icon('trophy')}</span>
          <span style="text-align:left;">
            <strong class="list-title">Achievements</strong>
            <span class="list-subtitle">${state.metrics.streak} day streak</span>
          </span>
          <span class="status-dot">${icon('chevronRight')}</span>
        </button>
        <button class="menu-item" type="button" data-action="open-screen" data-screen="history">
          <span class="status-dot">${icon('chart')}</span>
          <span style="text-align:left;">
            <strong class="list-title">Workout History</strong>
            <span class="list-subtitle">Review completed sessions</span>
          </span>
          <span class="status-dot">${icon('chevronRight')}</span>
        </button>
        <button class="menu-item" type="button" data-action="open-screen" data-screen="calendar">
          <span class="status-dot">${icon('calendar')}</span>
          <span style="text-align:left;">
            <strong class="list-title">Calendar</strong>
            <span class="list-subtitle">Plan your week</span>
          </span>
          <span class="status-dot">${icon('chevronRight')}</span>
        </button>
      </section>
    </div>
  `;
}

function renderEditProfile() {
  return `
    <div class="screen tight fade-up">
      ${renderDeepHeader('Edit Profile', 'profile', `<button class="linkish" type="submit" form="profile-form">Save</button>`)}

      <section class="profile-hero" style="margin-bottom:1rem;">
        <div class="avatar-frame">
          <span class="thumb circle"><img src="${ART.portrait}" alt=""></span>
          <button class="avatar-edit" type="button" data-action="toast" data-message="Avatar styling is already synced to the app mood.">${icon('camera')}</button>
        </div>
      </section>

      <form class="form" id="profile-form" data-form="profile">
        <label>
          <span class="field-label">Full Name</span>
          <input class="input-field" name="name" value="${escapeHtml(state.profile.name)}" required>
        </label>
        <div class="form-grid-2">
          <label>
            <span class="field-label">Age</span>
            <input class="input-field" type="number" min="12" max="90" name="age" value="${state.profile.age}" required>
          </label>
          <label>
            <span class="field-label">Height</span>
            <input class="input-field" type="number" min="120" max="250" name="height" value="${state.profile.height}" required>
          </label>
        </div>
        <div class="form-grid-2">
          <label>
            <span class="field-label">Weight</span>
            <input class="input-field" type="number" step="0.1" min="30" max="250" name="weight" value="${state.profile.weight}" required>
          </label>
          <label>
            <span class="field-label">Target Weight</span>
            <input class="input-field" type="number" step="0.1" min="30" max="250" name="targetWeight" value="${state.profile.targetWeight}" required>
          </label>
        </div>
        <label>
          <span class="field-label">Goal</span>
          <select class="select-field" name="goal">
            ${GOALS.map((goal) => `<option ${goal === state.profile.goal ? 'selected' : ''}>${goal}</option>`).join('')}
          </select>
        </label>
        <label>
          <span class="field-label">Profile Quote</span>
          <input class="input-field" name="quote" value="${escapeHtml(state.profile.quote)}" required>
        </label>
      </form>
    </div>
  `;
}

function renderEditPlan() {
  const plan = getPlan(state.ui.editingPlanId);
  return `
    <div class="screen tight fade-up">
      ${renderDeepHeader('Edit Plan', 'workoutPlan', `<button class="linkish" type="submit" form="plan-form">Save</button>`)}
      <form class="form" id="plan-form" data-form="plan">
        <label>
          <span class="field-label">Plan Name</span>
          <input class="input-field" name="name" value="${escapeHtml(plan.name)}" required>
        </label>
        <label>
          <span class="field-label">Duration</span>
          <input class="input-field" type="number" min="20" max="120" name="duration" value="${plan.duration}" required>
        </label>
        <label>
          <span class="field-label">Difficulty</span>
          <select class="select-field" name="difficulty">
            ${DIFFICULTIES.map((value) => `<option ${value === plan.difficulty ? 'selected' : ''}>${value}</option>`).join('')}
          </select>
        </label>
        <label>
          <span class="field-label">Exercises</span>
          <input class="input-field" value="${plan.exercises.length} Exercises" disabled>
        </label>
      </form>
      <div class="section">
        <button class="danger-button" type="button" data-action="delete-plan">Delete Plan</button>
      </div>
    </div>
  `;
}

function renderEditExercise() {
  const plan = getPlan(state.ui.editingPlanId);
  const exercise = plan.exercises.find((item) => item.id === state.ui.editingExerciseId) || plan.exercises[0];
  return `
    <div class="screen tight fade-up">
      ${renderDeepHeader('Edit Exercise', 'workoutPlan', `<button class="linkish" type="submit" form="exercise-form">Save</button>`)}
      <div class="hero-split" style="grid-template-columns:0.9fr 1.1fr; margin-bottom:1rem;">
        <div class="art-frame hero-image tall">
          <img src="${exerciseImage(exercise)}" alt="">
        </div>
        <div>
          <p class="label">Current Coaching Cue</p>
          <p class="screen-subtitle" style="margin-top:0.25rem;">${escapeHtml(exercise.cue)}</p>
        </div>
      </div>

      <form class="form" id="exercise-form" data-form="exercise">
        <input type="hidden" name="exerciseId" value="${exercise.id}">
        <label>
          <span class="field-label">Exercise Name</span>
          <input class="input-field" name="name" value="${escapeHtml(exercise.name)}" required>
        </label>
        <label>
          <span class="field-label">Category</span>
          <select class="select-field" name="category">
            ${CATEGORIES.filter((item) => item !== 'All').map((value) => `<option ${value === exercise.category ? 'selected' : ''}>${value}</option>`).join('')}
          </select>
        </label>
        <label>
          <span class="field-label">How To Do / Cue</span>
          <textarea class="input-field textarea-field" name="cue" rows="4" required>${escapeHtml(exercise.cue)}</textarea>
        </label>
        <section class="card card-pad">
          <div class="section-head" style="margin-bottom:0.7rem;">
            <div>
              <h3 class="section-title">Exercise Image</h3>
              <p class="screen-subtitle helper-copy">Upload your own photo for this exercise. It stays saved on this device.</p>
            </div>
            <span class="count-pill ${exercise.customImage ? '' : 'muted-pill'}">${exercise.customImage ? 'Custom' : 'App Photo'}</span>
          </div>
          <div class="action-grid">
            <button class="secondary-button compact-button" type="button" data-action="trigger-exercise-image">
              ${icon('camera')} Upload Photo
            </button>
            <button class="ghost-button compact-button" type="button" data-action="reset-exercise-image">
              ${icon('trash')} Use App Photo
            </button>
          </div>
          <input class="sr-only" type="file" accept="image/*" data-input="exerciseImageFile">
        </section>
        <section class="card card-pad">
          <div class="section-head" style="margin-bottom:0.7rem;">
            <div>
              <h3 class="section-title">Exercise Video / GIF</h3>
              <p class="screen-subtitle helper-copy">Add a short beginner demo for this exercise. Custom videos stay on this device.</p>
            </div>
            <span class="count-pill ${exercise.customVideoKey ? '' : 'muted-pill'}">${exercise.customVideoKey ? 'Custom Video' : builtInGuideMediaForExercise(exercise) ? 'App Demo' : 'App Guide'}</span>
          </div>
          <div class="action-grid">
            <button class="secondary-button compact-button" type="button" data-action="open-exercise-guide" data-plan-id="${plan.id}" data-exercise-id="${exercise.id}" data-back-screen="editExercise">
              ${icon('play')} Preview Guide
            </button>
            <button class="secondary-button compact-button" type="button" data-action="trigger-exercise-video">
              ${icon('upload')} Upload Video
            </button>
            <button class="ghost-button compact-button" type="button" data-action="reset-exercise-video">
              ${icon('trash')} Use App Guide
            </button>
          </div>
          <input class="sr-only" type="file" accept="video/*,image/gif" data-input="exerciseVideoFile">
        </section>
        <div class="set-editor">
          <div class="set-editor-head">
            <h3 class="section-title" style="margin:0;">Set Details</h3>
            <button class="linkish" type="button" data-action="add-set-row">${icon('plus')} Add Set</button>
          </div>
          <div class="set-editor-table">
            ${exercise.sets
              .map(
                (set, index) => `
                  <div class="set-editor-row">
                    <input class="input-field" name="setNumber" value="${index + 1}" disabled>
                    <input class="input-field" type="number" min="1" name="setReps" value="${set.reps}" required>
                    <input class="input-field" type="number" step="0.1" min="0" name="setWeight" value="${set.weight}" required>
                    <button class="icon-button" type="button" data-action="remove-set-row" data-index="${index}">${icon('trash')}</button>
                  </div>
                `
              )
              .join('')}
          </div>
        </div>
      </form>

      <div class="section">
        <button class="danger-button" type="button" data-action="delete-exercise">Delete Exercise</button>
      </div>
    </div>
  `;
}

function renderLibrary() {
  const filtered = LIBRARY.filter((item) => {
    const matchesCategory = state.ui.libraryCategory === 'All' || item.category === state.ui.libraryCategory;
    const matchesSearch = item.name.toLowerCase().includes(state.ui.librarySearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  return `
    <div class="screen tight fade-up">
      ${renderDeepHeader('Exercise Library', 'workoutPlan')}
      <section class="card card-pad section">
        <div class="section-head" style="margin-bottom:0.8rem;">
          <div>
            <h3 class="section-title">Need more exercises today?</h3>
            <p class="screen-subtitle helper-copy">Create your own custom movement and add it to the selected workout day.</p>
          </div>
          <span class="count-pill">${getSelectedPlan().exercises.length}</span>
        </div>
        <button class="cta-button compact-button" type="button" data-action="open-screen" data-screen="customExercise">
          ${icon('plus')} Create Custom Exercise
        </button>
      </section>
      <div class="search-row">
        <label>
          <span class="sr-only">Search exercises</span>
          <input class="input-field" name="librarySearch" data-input="librarySearch" placeholder="Search exercises..." value="${escapeHtml(state.ui.librarySearch)}">
        </label>
        <div class="category-row">
          ${CATEGORIES.map(
            (category) => `
              <button class="chip ${state.ui.libraryCategory === category ? 'active' : ''}" type="button" data-action="set-library-category" data-category="${category}">
                ${category}
              </button>
            `
          ).join('')}
        </div>
      </div>

      <section class="section list">
        ${filtered
          .map(
            (item) => `
              <div class="workout-list-item">
                <span class="thumb"><img src="${exerciseImage(item)}" alt=""></span>
                <span>
                  <strong class="list-title">${escapeHtml(item.name)}</strong>
                  <span class="list-subtitle">${escapeHtml(item.category)}</span>
                </span>
                <button class="icon-button" type="button" data-action="add-library-exercise" data-library-id="${item.id}">
                  ${icon('plus')}
                </button>
              </div>
            `
          )
          .join('') || '<div class="card empty-state">No exercises match this filter.</div>'}
      </section>
    </div>
  `;
}

function renderCustomExercise() {
  const selectedDate = state.ui.customExerciseDate || state.ui.selectedDate;
  const weekList = weekDates(selectedDate);
  const plan = getPlan(state.ui.customExercisePlanId || planIdForDate(selectedDate));
  const sharedDates = scheduleDatesForPlan(plan.id).filter((value) => value !== selectedDate);
  return `
    <div class="screen tight fade-up">
      ${renderDeepHeader('Custom Exercise', 'library', `<button class="linkish" type="submit" form="custom-exercise-form">Add</button>`)}
      <section class="card card-pad section">
        <p class="section-kicker accent">Selected Day</p>
        <h2 class="screen-title" style="font-size:1.55rem; margin:0.25rem 0 0.35rem;">${escapeHtml(plan.name)}</h2>
        <p class="screen-subtitle">Add a new custom exercise to ${escapeHtml(formatShortDate(selectedDate))}. You can add as many exercises as you need for one day.</p>
        <div class="chip-row section" style="margin-bottom:0;">
          ${weekList
            .map((dateValue) => {
              const chip = formatDateChip(dateValue);
              const active = dateValue === selectedDate;
              return `
                <button class="chip date-chip ${active ? 'active' : ''}" type="button" data-action="select-custom-exercise-day" data-date="${dateValue}">
                  <span>${chip.label}</span>
                  <strong>${chip.day}</strong>
                </button>
              `;
            })
            .join('')}
        </div>
        ${
          sharedDates.length
            ? `<p class="auth-hint section">This day currently shares the <strong>${escapeHtml(plan.name)}</strong> plan with other days. When you add this custom exercise, SA7D will make a day-only copy for ${escapeHtml(formatShortDate(selectedDate))}.</p>`
            : ''
        }
      </section>
      <form class="form" id="custom-exercise-form" data-form="custom-exercise">
        <label>
          <span class="field-label">Exercise Name</span>
          <input class="input-field" name="name" value="Custom Exercise" required>
        </label>
        <label>
          <span class="field-label">Category</span>
          <select class="select-field" name="category">
            ${CATEGORIES.filter((item) => item !== 'All').map((value) => `<option ${value === 'Chest' ? 'selected' : ''}>${value}</option>`).join('')}
          </select>
        </label>
        <label>
          <span class="field-label">How To Do / Cue</span>
          <textarea class="input-field textarea-field" name="cue" rows="4" required>Move slowly, stay controlled, and keep your form clean on every rep.</textarea>
        </label>
        <div class="grid-3">
          <label>
            <span class="field-label">Sets</span>
            <input class="input-field" type="number" name="sets" min="1" max="12" value="3" required>
          </label>
          <label>
            <span class="field-label">Reps</span>
            <input class="input-field" type="number" name="reps" min="1" value="12" required>
          </label>
          <label>
            <span class="field-label">Weight (kg)</span>
            <input class="input-field" type="number" step="0.5" name="weight" min="0" value="0" required>
          </label>
        </div>
      </form>
    </div>
  `;
}

function renderHistory() {
  const entries =
    state.ui.historyFilter === 'week'
      ? recentHistory().filter((item) => weekDates(state.ui.selectedDate).includes(item.date))
      : recentHistory();
  return `
    <div class="screen tight fade-up">
      ${renderDeepHeader('Workout History', 'profile')}
      <div class="section card card-pad">
        <div class="chart-head" style="margin-bottom:0;">
          <strong>Filter</strong>
          <select class="chart-select" name="historyFilter" data-input="historyFilter" style="max-width:11rem;">
            <option value="all" ${state.ui.historyFilter === 'all' ? 'selected' : ''}>All Workouts</option>
            <option value="week" ${state.ui.historyFilter === 'week' ? 'selected' : ''}>This Week</option>
          </select>
        </div>
      </div>

      <section class="section list">
        ${entries
          .map((entry) => {
            const plan = getPlan(entry.planId);
            return `
              <div class="history-item">
                <span class="thumb"><img src="${planImage(plan)}" alt=""></span>
                <span>
                  <strong class="list-title">${escapeHtml(plan.name)}</strong>
                  <span class="list-subtitle">${formatShortDate(entry.date)} • ${entry.duration} Min</span>
                </span>
                <span class="status-check">${icon('check')}</span>
              </div>
            `;
          })
          .join('') || '<div class="card empty-state">No workouts tracked yet. When the user finishes a workout, it will appear here.</div>'}
      </section>
    </div>
  `;
}

function renderCalendar() {
  const days = getMonthGrid(state.ui.calendarMonth);
  const selected = state.ui.selectedCalendarDate;
  const selectedPlan = getPlan(state.schedule[selected] || state.plans[0].id);
  const isCompleted = state.history.some((item) => item.date === selected);
  return `
    <div class="screen tight fade-up">
      ${renderDeepHeader('Calendar', 'profile')}
      <section class="card card-pad">
        <div class="chart-head">
          <button class="icon-button" type="button" data-action="change-calendar" data-step="-1">${icon('back')}</button>
          <strong>${formatMonthHeading(state.ui.calendarMonth)}</strong>
          <button class="icon-button" type="button" data-action="change-calendar" data-step="1">${icon('chevronRight')}</button>
        </div>
        <div class="calendar-grid">
          <div class="weekday-row">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
          <div class="calendar-days">
            ${days
              .map((day) => {
                const scheduled = !!state.schedule[day.iso];
                const completed = state.history.some((entry) => entry.date === day.iso);
                const classes = [
                  'calendar-day',
                  !day.isCurrentMonth ? 'muted' : '',
                  selected === day.iso ? 'active' : '',
                  scheduled ? 'scheduled' : '',
                  completed ? 'completed' : ''
                ]
                  .filter(Boolean)
                  .join(' ');
                return `
                  <button class="${classes}" type="button" data-action="select-calendar-day" data-date="${day.iso}">
                    ${day.day}
                  </button>
                `;
              })
              .join('')}
          </div>
        </div>
      </section>

      <section class="section card card-pad">
        <p class="label" style="margin-bottom:0.35rem;">${formatShortDate(selected)}</p>
        <h3 class="screen-title" style="font-size:1.5rem; margin:0 0 0.3rem;">${escapeHtml(selectedPlan.name)}</h3>
        <p class="screen-subtitle">${selectedPlan.exercises.length} Exercises • ${selectedPlan.duration} Min</p>
        <div class="category-row" style="margin-top:1rem;">
          ${state.plans
            .map(
              (plan) => `
                <button class="chip ${selectedPlan.id === plan.id ? 'active' : ''}" type="button" data-action="assign-plan" data-plan-id="${plan.id}">
                  ${escapeHtml(plan.name)}
                </button>
              `
            )
            .join('')}
        </div>
        <div style="margin-top:1rem;">
          <button class="${isCompleted ? 'ghost-button' : 'cta-button'}" type="button" data-action="calendar-complete">
            ${isCompleted ? 'Completed for this day' : 'Mark Day as Completed'}
          </button>
        </div>
      </section>
    </div>
  `;
}

function renderNutrition() {
  return `
    <div class="screen tight fade-up">
      ${renderDeepHeader('Nutrition Plan', 'profile')}
      <section class="card card-pad">
        <p class="label">Mode</p>
        <h2 class="screen-title" style="font-size:1.7rem; margin:0.25rem 0 0.35rem;">${escapeHtml(state.preferences.nutritionMode)}</h2>
        <p class="screen-subtitle">Balanced to support your ${escapeHtml(state.profile.goal.toLowerCase())} goal.</p>
      </section>
      <section class="grid-3 section">
        <div class="card metric-card"><p class="label">Protein</p><p class="metric-value">170g</p><span class="metric-caption">Daily</span></div>
        <div class="card metric-card"><p class="label">Carbs</p><p class="metric-value">300g</p><span class="metric-caption">Training fuel</span></div>
        <div class="card metric-card"><p class="label">Fats</p><p class="metric-value">70g</p><span class="metric-caption">Hormonal support</span></div>
      </section>
      <section class="card card-pad section">
        <h3 class="section-title" style="margin:0 0 0.6rem;">Meal Timing</h3>
        <div class="list">
          <div class="mini-panel card"><strong>Pre-workout</strong><p class="list-subtitle">60 to 90 min before: oats, fruit, whey.</p></div>
          <div class="mini-panel card"><strong>Post-workout</strong><p class="list-subtitle">Protein plus fast carbs to recover.</p></div>
          <div class="mini-panel card"><strong>Hydration</strong><p class="list-subtitle">Target 3 liters across the day.</p></div>
        </div>
      </section>
    </div>
  `;
}

function renderAchievements() {
  const badges = [
    { title: '5 Day Streak', caption: 'Consistency unlocked' },
    { title: 'Bench Builder', caption: 'Tracked 3 chest sessions' },
    { title: 'Goal Setter', caption: 'Profile and targets completed' }
  ];
  return `
    <div class="screen tight fade-up">
      ${renderDeepHeader('Achievements', 'profile')}
      <section class="list">
        ${badges
          .map(
            (badge) => `
              <div class="menu-item">
                <span class="status-dot">${icon('trophy')}</span>
                <span>
                  <strong class="list-title">${badge.title}</strong>
                  <span class="list-subtitle">${badge.caption}</span>
                </span>
                <span class="status-check">${icon('check')}</span>
              </div>
            `
          )
          .join('')}
      </section>
    </div>
  `;
}

function renderNotifications() {
  const filter = state.ui.notificationFilter;
  const notifications = state.notifications.filter((item) => filter === 'all' || inferNotificationCategory(item) === filter);
  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'updates', label: 'Updates' },
    { id: 'reminders', label: 'Reminders' },
    { id: 'offers', label: 'Offers' }
  ];
  return `
    <div class="screen tight fade-up monarch-notifications-screen">
      <section class="notification-page-shell">
        <div class="notification-page-head">
          <div class="notification-page-copy">
            <h1 class="notification-page-title">Notifications</h1>
            <p class="notification-page-subtitle">Stay updated with your progress, reminders and offers.</p>
          </div>
          <button class="notification-settings-button" type="button" data-action="open-screen" data-screen="settings" aria-label="Open notification settings">
            ${icon('gear')}
          </button>
        </div>

        <div class="notification-filter-tabs" role="tablist" aria-label="Notification categories">
          ${tabs
          .map(
            (tab) => `
              <button class="notification-filter-button ${state.ui.notificationFilter === tab.id ? 'active' : ''}" type="button" role="tab" aria-selected="${state.ui.notificationFilter === tab.id}" data-action="set-notification-filter" data-filter="${tab.id}">
                ${tab.label}
              </button>
            `
          )
          .join('')}
        </div>

        <section class="notification-page-sections">
          ${notifications.length
            ? groupedNotifications(notifications)
          .map(
            (group) => `
              <div class="notification-group modern">
                <h2 class="notification-section-heading">${group.label}</h2>
                <div class="notification-group-list">
                  ${group.items
                    .map((item) => renderNotificationCard(item))
                    .join('')}
                </div>
              </div>
            `
          )
          .join('')
          : '<div class="card empty-state">You are all caught up.</div>'}
        </section>
      </section>
    </div>
  `;
}

function renderMessages() {
  const unreadCount = unreadMessageCount();
  return `
    <div class="screen tight fade-up">
      ${renderDeepHeader('Messages', 'home', `<span class="count-pill">${unreadCount}</span>`)}
      <section class="card card-pad section">
        <p class="label">Inbox</p>
        <h2 class="screen-title" style="font-size:1.6rem; margin:0.25rem 0 0.35rem;">Stay in sync with your coaching feed</h2>
        <p class="screen-subtitle">Tap a thread to mark it ${unreadCount ? 'read' : 'unread'}.</p>
      </section>
      <section class="section list">
        ${state.messages
          .map(
            (item) => `
              <button class="thread-item ${item.read ? '' : 'unread'}" type="button" data-action="toggle-message-read" data-id="${item.id}">
                <span class="thread-avatar">${icon('chat')}</span>
                <span class="thread-copy">
                  <strong class="list-title">${escapeHtml(item.sender)}</strong>
                  <span class="list-subtitle">${escapeHtml(item.preview)}</span>
                </span>
                <span class="thread-meta">
                  <span class="tiny muted">${item.time}</span>
                  ${item.read ? '' : '<span class="notification-dot"></span>'}
                </span>
              </button>
            `
          )
          .join('')}
      </section>
    </div>
  `;
}

function renderChallenges() {
  return `
    <div class="screen tight fade-up">
      ${renderDeepHeader('Challenges', 'home', `<span class="count-pill">${activeChallengeCount()}</span>`)}
      <section class="card card-pad section">
        <p class="label">Weekly Push</p>
        <h2 class="screen-title" style="font-size:1.6rem; margin:0.25rem 0 0.35rem;">Keep stacking consistent wins</h2>
        <p class="screen-subtitle">Use the action button to update progress or claim a completed reward.</p>
      </section>
      <section class="section list">
        ${state.challenges
          .map((item) => {
            const progress = Math.min(100, (item.progress / item.goal) * 100);
            const readyToClaim = item.progress >= item.goal && !item.claimed;
            return `
              <div class="card card-pad challenge-card ${item.claimed ? 'claimed' : ''}">
                <div class="section-head challenge-head">
                  <div>
                    <h3 class="section-title">${escapeHtml(item.title)}</h3>
                    <p class="list-subtitle">${escapeHtml(item.detail)}</p>
                  </div>
                  <span class="count-pill ${item.claimed ? 'muted-pill' : ''}">${escapeHtml(item.reward)}</span>
                </div>
                <div class="challenge-progress">
                  <div class="progress-bar">
                    <div class="progress-fill" style="width:${progress}%"></div>
                  </div>
                  <span class="tiny muted">${item.progress}/${item.goal}</span>
                </div>
                <div style="margin-top:0.9rem;">
                  <button class="${readyToClaim ? 'cta-button' : item.claimed ? 'ghost-button' : 'secondary-button'} compact-button" type="button" data-action="advance-challenge" data-id="${item.id}">
                    ${item.claimed ? 'Reward Claimed' : readyToClaim ? 'Claim Reward' : 'Add Progress'}
                  </button>
                </div>
              </div>
            `;
          })
          .join('')}
      </section>
    </div>
  `;
}

function renderSettings() {
  return `
    <div class="screen tight fade-up">
      ${renderDeepHeader('Settings', 'profile')}
      ${renderCloudSettings()}
      <section class="card card-pad">
        <div class="list">
          ${
            shouldShowInstallAction()
              ? `
                <button class="menu-item" type="button" data-action="install-app">
                  <span class="status-dot">${icon('download')}</span>
                  <span>
                    <strong class="list-title">Install App</strong>
                    <span class="list-subtitle">${deferredInstallPrompt ? 'Install SA7D on this device' : 'Show install instructions for this device'}</span>
                  </span>
                  <span class="status-dot">${icon('chevronRight')}</span>
                </button>
              `
              : ''
          }
          ${
            shouldShowAndroidApkDownload()
              ? `
                <button class="menu-item" type="button" data-action="download-android-apk">
                  <span class="status-dot">${icon('download')}</span>
                  <span>
                    <strong class="list-title">Download Android APK</strong>
                    <span class="list-subtitle">Get the Android app file directly from this website</span>
                  </span>
                  <span class="status-dot">${icon('chevronRight')}</span>
                </button>
              `
              : ''
          }
          <button class="menu-item" type="button" data-action="open-screen" data-screen="editProfile">
            <span class="status-dot">${icon('edit')}</span>
            <span>
              <strong class="list-title">Edit Profile</strong>
              <span class="list-subtitle">Update name, stats, and goals</span>
            </span>
            <span class="status-dot">${icon('chevronRight')}</span>
          </button>
          <button class="menu-item" type="button" data-action="open-screen" data-screen="editPlan">
            <span class="status-dot">${icon('dumbbell')}</span>
            <span>
              <strong class="list-title">Edit Active Plan</strong>
              <span class="list-subtitle">Tune duration and exercise list</span>
            </span>
            <span class="status-dot">${icon('chevronRight')}</span>
          </button>
          <button class="menu-item" type="button" data-action="open-screen" data-screen="library">
            <span class="status-dot">${icon('plus')}</span>
            <span>
              <strong class="list-title">Exercise Library</strong>
              <span class="list-subtitle">Add new movements to your plan</span>
            </span>
            <span class="status-dot">${icon('chevronRight')}</span>
          </button>
        </div>
      </section>
      <div class="section">
        <button class="danger-button" type="button" data-action="reset-demo">${icon('logout')} Reset For New User</button>
      </div>
    </div>
  `;
}

function renderCloudSettings() {
  if (!isCloudAvailable()) {
    return `
      <section class="card card-pad">
        <div class="cloud-head">
          <span class="status-dot cloud-status-icon">${icon('cloud')}</span>
          <div class="cloud-copy">
            <p class="section-kicker accent">Cloud Save</p>
            <h3 class="section-title">Login + Backup</h3>
            <p class="helper-copy muted">${escapeHtml(cloudUnavailableCopy())}</p>
          </div>
        </div>
      </section>
    `;
  }

  if (!authUser) {
    return `
      <section class="card card-pad auth-preview-card">
        <div class="auth-preview-media">
          <img class="auth-preview-logo" src="icons/app-logo.png" alt="SA7D">
        </div>
        <div class="auth-preview-copy">
          <p class="section-kicker accent">Cloud Save</p>
          <h3 class="section-title">Login System</h3>
          <p class="helper-copy muted">${escapeHtml(cloudStatusCopy())}</p>
        </div>
        <div class="section action-grid">
          <button class="cta-button compact-button" type="button" data-action="open-screen" data-screen="authIntro">Get Started</button>
          <button class="secondary-button compact-button" type="button" data-action="open-screen" data-screen="authLogin">Log In</button>
        </div>
      </section>
    `;
  }

  return `
    <section class="card card-pad">
      <div class="cloud-head">
        <span class="status-dot cloud-status-icon">${icon('cloud')}</span>
        <div class="cloud-copy">
          <p class="section-kicker accent">Cloud Save</p>
          <h3 class="section-title">${escapeHtml(userDisplayName(authUser))}</h3>
          <p class="helper-copy muted">${escapeHtml(authUser.email || 'Signed in')}</p>
        </div>
      </div>
      <div class="cloud-note section">
        <strong class="list-title">Sync Status</strong>
        <p class="list-subtitle">${escapeHtml(cloudStatusCopy())}</p>
      </div>
      <div class="section">
        <button class="menu-item" type="button" data-action="toggle-cloud-sync">
          <span class="status-dot">${icon('upload')}</span>
          <span style="text-align:left;">
            <strong class="list-title">Auto Sync</strong>
            <span class="list-subtitle">${state.cloud.autoSync ? 'On for this account' : 'Paused for this account'}</span>
          </span>
          <span class="switch ${state.cloud.autoSync ? 'active' : ''}"></span>
        </button>
      </div>
      <div class="action-grid section">
        <button class="secondary-button compact-button" type="button" data-action="cloud-load" ${authBusy ? 'disabled' : ''}>Load Cloud Backup</button>
        <button class="cta-button compact-button" type="button" data-action="cloud-save" ${authBusy ? 'disabled' : ''}>Save To Cloud</button>
      </div>
      <div class="section">
        <button class="ghost-button compact-button" type="button" data-action="open-screen" data-screen="cloudLogout" ${authBusy ? 'disabled' : ''}>Log Out Of Cloud Save</button>
      </div>
    </section>
  `;
}

function renderAuthTopBar(backScreen, title = '') {
  return `
    <div class="auth-topbar">
      <button class="icon-button" type="button" data-action="open-screen" data-screen="${backScreen}">${icon('back')}</button>
      <div class="auth-topbar-title">${title ? `<h2 class="section-title">${title}</h2>` : ''}</div>
      <div class="auth-topbar-spacer"></div>
    </div>
  `;
}

function renderPasswordToggle(targetId) {
  return `
    <button class="auth-visibility-button" type="button" data-action="toggle-password-visibility" data-target="${targetId}" aria-label="Show or hide password">
      ${icon('eye')}
    </button>
  `;
}

function renderAuthInput({ label, name, type = 'text', placeholder, iconName, id, autocomplete = 'off', extra = '', disabled = false }) {
  return `
    <label class="auth-field">
      <span class="auth-field-label">${label}</span>
      <span class="auth-input-shell">
        <span class="auth-input-icon">${icon(iconName)}</span>
        <input class="auth-input" id="${id}" name="${name}" type="${type}" placeholder="${placeholder}" autocomplete="${autocomplete}" ${disabled ? 'disabled' : ''} required>
        ${extra}
      </span>
    </label>
  `;
}

function renderPasswordChecklist(password = '') {
  const rules = validatePasswordRules(password);
  const item = (rule, label) => `
    <li class="auth-checklist-item ${rules[rule] ? 'valid' : ''}" data-rule="${rule}">
      <span class="auth-check-indicator">${rules[rule] ? icon('check') : ''}</span>
      <span>${label}</span>
    </li>
  `;
  return `
    <ul class="auth-checklist">
      ${item('minLength', 'At least 8 characters')}
      ${item('uppercase', 'One uppercase letter')}
      ${item('lowercase', 'One lowercase letter')}
      ${item('special', 'One special character')}
    </ul>
  `;
}

function renderAuthNotice() {
  if (!authMessage) {
    return '';
  }
  return `<p class="auth-notice">${escapeHtml(authMessage)}</p>`;
}

function renderAuthIntro() {
  return `
    <div class="screen auth-screen auth-screen-intro fade-up">
      ${renderAuthTopBar('settings')}
      <div class="auth-splash">
        <img class="auth-splash-logo" src="icons/app-logo.png" alt="SA7D">
        <div class="auth-wordmark">SA7D</div>
        <p class="auth-tagline">Train Smart. Stay Consistent.<br>Be Your Best.</p>
      </div>
      <div class="auth-actions-stack">
        <button class="cta-button" type="button" data-action="open-screen" data-screen="authSignup">Get Started</button>
        <button class="secondary-button" type="button" data-action="open-screen" data-screen="authLogin">Log In</button>
      </div>
      ${
        shouldShowAndroidApkDownload()
          ? `
            <div class="auth-download-block">
              <button class="ghost-button" type="button" data-action="download-android-apk">${icon('download')} Download Android APK</button>
              <p class="auth-download-copy">Android users can download the app file from this page and install it on their phone.</p>
            </div>
          `
          : ''
      }
    </div>
  `;
}

function renderAuthLogin() {
  return `
    <div class="screen auth-screen fade-up">
      ${renderAuthTopBar('authIntro')}
      <section class="auth-panel">
        <h2 class="auth-title">Welcome Back!</h2>
        <p class="auth-subtitle">Log in to continue your fitness journey</p>
        <form class="form auth-form" data-form="cloud-login">
          ${renderAuthInput({
            label: 'Email',
            name: 'email',
            type: 'email',
            placeholder: 'Enter your email',
            iconName: 'mail',
            id: 'cloud-login-email',
            autocomplete: 'email',
            disabled: authBusy || !authReady
          })}
          ${renderAuthInput({
            label: 'Password',
            name: 'password',
            type: 'password',
            placeholder: 'Enter your password',
            iconName: 'lock',
            id: 'cloud-login-password',
            autocomplete: 'current-password',
            extra: renderPasswordToggle('cloud-login-password'),
            disabled: authBusy || !authReady
          })}
          <div class="auth-inline-end">
            <button class="auth-text-button" type="button" data-action="open-screen" data-screen="authForgot">Forgot Password?</button>
          </div>
          ${renderAuthNotice()}
          <button class="cta-button" type="submit" ${authBusy || !authReady ? 'disabled' : ''}>${authBusy ? 'Please wait...' : 'Log In'}</button>
        </form>
        <p class="auth-footer-copy">Don't have an account? <button class="auth-text-button" type="button" data-action="open-screen" data-screen="authSignup">Sign Up</button></p>
      </section>
    </div>
  `;
}

function renderAuthSignup() {
  return `
    <div class="screen auth-screen fade-up">
      ${renderAuthTopBar('authIntro')}
      <section class="auth-panel">
        <h2 class="auth-title">Create Account</h2>
        <p class="auth-subtitle">Join SA7D and start your journey</p>
        <form class="form auth-form" data-form="cloud-signup">
          ${renderAuthInput({
            label: 'Full Name',
            name: 'name',
            type: 'text',
            placeholder: 'Enter your full name',
            iconName: 'user',
            id: 'cloud-signup-name',
            autocomplete: 'name',
            disabled: authBusy || !authReady
          })}
          ${renderAuthInput({
            label: 'Email',
            name: 'email',
            type: 'email',
            placeholder: 'Enter your email',
            iconName: 'mail',
            id: 'cloud-signup-email',
            autocomplete: 'email',
            disabled: authBusy || !authReady
          })}
          ${renderAuthInput({
            label: 'Password',
            name: 'password',
            type: 'password',
            placeholder: 'Create a password',
            iconName: 'lock',
            id: 'cloud-signup-password',
            autocomplete: 'new-password',
            extra: renderPasswordToggle('cloud-signup-password'),
            disabled: authBusy || !authReady
          })}
          ${renderAuthInput({
            label: 'Confirm Password',
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Confirm your password',
            iconName: 'lock',
            id: 'cloud-signup-confirm',
            autocomplete: 'new-password',
            extra: renderPasswordToggle('cloud-signup-confirm'),
            disabled: authBusy || !authReady
          })}
          <label class="auth-checkbox">
            <input type="checkbox" name="terms" value="yes" ${authBusy || !authReady ? 'disabled' : ''} required>
            <span>I agree to the <strong>Terms &amp; Conditions</strong></span>
          </label>
          <p class="auth-hint">Your account will be created and signed in right away.</p>
          ${renderAuthNotice()}
          <button class="cta-button" type="submit" ${authBusy || !authReady ? 'disabled' : ''}>${authBusy ? 'Please wait...' : 'Sign Up'}</button>
        </form>
        <p class="auth-footer-copy">Already have an account? <button class="auth-text-button" type="button" data-action="open-screen" data-screen="authLogin">Log In</button></p>
      </section>
    </div>
  `;
}

function renderAuthForgot() {
  return `
    <div class="screen auth-screen auth-center-screen fade-up">
      ${renderAuthTopBar('authLogin')}
      <section class="auth-panel auth-panel-centered">
        <div class="auth-orb">${icon('lock')}</div>
        <h2 class="auth-title">Forgot Password</h2>
        <p class="auth-subtitle">Enter your email and we'll send you a link to reset your password.</p>
        <form class="form auth-form" data-form="cloud-forgot">
          ${renderAuthInput({
            label: 'Email',
            name: 'email',
            type: 'email',
            placeholder: 'Enter your email',
            iconName: 'mail',
            id: 'cloud-forgot-email',
            autocomplete: 'email',
            disabled: authBusy || !authReady
          })}
          ${renderAuthNotice()}
          <button class="cta-button" type="submit" ${authBusy || !authReady ? 'disabled' : ''}>${authBusy ? 'Sending...' : 'Send Reset Link'}</button>
        </form>
        <button class="auth-text-button auth-bottom-link" type="button" data-action="open-screen" data-screen="authLogin">Back to Log In</button>
      </section>
    </div>
  `;
}

function renderAuthReset() {
  const canReset = Boolean(authUser);
  return `
    <div class="screen auth-screen fade-up">
      ${renderAuthTopBar('authLogin')}
      <section class="auth-panel">
        <h2 class="auth-title">Reset Password</h2>
        <p class="auth-subtitle">${canReset ? 'Create a new password for your cloud account.' : 'Open the reset link from your email to continue.'}</p>
        <form class="form auth-form" data-form="cloud-reset">
          ${renderAuthInput({
            label: 'New Password',
            name: 'password',
            type: 'password',
            placeholder: 'Enter new password',
            iconName: 'lock',
            id: 'cloud-reset-password',
            autocomplete: 'new-password',
            extra: renderPasswordToggle('cloud-reset-password'),
            disabled: authBusy || !canReset
          })}
          <div data-live="password-checklist">
            ${renderPasswordChecklist()}
          </div>
          ${renderAuthInput({
            label: 'Confirm Password',
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Confirm new password',
            iconName: 'lock',
            id: 'cloud-reset-confirm',
            autocomplete: 'new-password',
            extra: renderPasswordToggle('cloud-reset-confirm'),
            disabled: authBusy || !canReset
          })}
          ${renderAuthNotice()}
          <button class="cta-button" type="submit" ${authBusy || !canReset ? 'disabled' : ''}>${authBusy ? 'Updating...' : 'Reset Password'}</button>
        </form>
        <button class="auth-text-button auth-bottom-link" type="button" data-action="open-screen" data-screen="authLogin">Back to Log In</button>
      </section>
    </div>
  `;
}

function renderCloudLogout() {
  return `
    <div class="screen auth-screen auth-center-screen fade-up">
      ${renderAuthTopBar('settings', 'Log Out')}
      <section class="auth-panel auth-panel-centered">
        <div class="auth-orb auth-orb-danger">${icon('logout')}</div>
        <h2 class="auth-title">Are you sure you want to log out?</h2>
        <p class="auth-subtitle">${escapeHtml(authUser?.email || 'Your cloud account will stay safe. You can log in again any time.')}</p>
        <div class="auth-actions-stack">
          <button class="danger-button" type="button" data-action="cloud-logout" ${authBusy ? 'disabled' : ''}>${authBusy ? 'Please wait...' : 'Log Out'}</button>
          <button class="secondary-button" type="button" data-action="open-screen" data-screen="settings">Cancel</button>
        </div>
      </section>
    </div>
  `;
}

function renderDrawer() {
  const items = [
    { screen: 'home', label: 'Home', iconName: 'home' },
    { screen: 'workoutPlan', label: 'Workout Plan', iconName: 'dumbbell' },
    { screen: 'progress', label: 'Progress', iconName: 'chart' },
    { screen: 'calendar', label: 'Calendar', iconName: 'calendar' },
    { screen: 'nutrition', label: 'Nutrition', iconName: 'bolt' },
    { screen: 'challenges', label: 'Challenges', iconName: 'target', count: activeChallengeCount() },
    { screen: 'messages', label: 'Messages', iconName: 'chat', count: unreadMessageCount() },
    { screen: 'settings', label: 'Settings', iconName: 'gear' }
  ];
  const activeScreen = state.ui.screen;
  return `
    <div class="drawer-layer">
      <button class="drawer-scrim" type="button" data-action="close-drawer" aria-label="Close menu"></button>
      <aside class="drawer-panel">
        <div class="drawer-head">
          <img class="brand-logo drawer-brand-logo" src="icons/app-logo.png" alt="SA7D">
          <button class="icon-button" type="button" data-action="close-drawer" aria-label="Close menu">${icon('close')}</button>
        </div>
        <div class="drawer-list">
          ${items
            .map(
              (item) => `
                <button class="drawer-link ${activeScreen === item.screen ? 'active' : ''}" type="button" data-action="open-screen" data-screen="${item.screen}">
                  <span class="drawer-link-copy">
                    ${icon(item.iconName)}
                    <span>${item.label}</span>
                  </span>
                  ${item.count ? `<span class="count-pill">${item.count}</span>` : ''}
                </button>
              `
            )
            .join('')}
          ${
            shouldShowInstallAction()
              ? `
                <button class="drawer-link" type="button" data-action="install-app">
                  <span class="drawer-link-copy">
                    ${icon('download')}
                    <span>Install App</span>
                  </span>
                  ${deferredInstallPrompt ? '<span class="count-pill">Ready</span>' : ''}
                </button>
              `
              : ''
          }
          ${
            shouldShowAndroidApkDownload()
              ? `
                <button class="drawer-link" type="button" data-action="download-android-apk">
                  <span class="drawer-link-copy">
                    ${icon('download')}
                    <span>Download Android APK</span>
                  </span>
                  <span class="count-pill">APK</span>
                </button>
              `
              : ''
          }
        </div>
        <button class="drawer-link drawer-link-danger" type="button" data-action="demo-logout">
          <span class="drawer-link-copy">
            ${icon('logout')}
            <span>Log Out</span>
          </span>
        </button>
      </aside>
    </div>
  `;
}

function renderDeepHeader(title, backScreen, right = '') {
  return `
    <div class="title-bar">
      <button class="icon-button" type="button" data-action="open-screen" data-screen="${backScreen}">${icon('back')}</button>
      <div style="flex:1; text-align:center;">
        <h2 class="section-title" style="font-size:1.1rem;">${title}</h2>
      </div>
      <div style="min-width:2rem; text-align:right;">${right}</div>
    </div>
  `;
}

function renderLineChart(log, stroke) {
  const width = 320;
  const height = 140;
  const padding = 14;
  const values = log.map((entry) => entry.value);
  const min = Math.min(...values) - 1;
  const max = Math.max(...values) + 1;
  const step = (width - padding * 2) / Math.max(1, log.length - 1);
  const points = log
    .map((entry, index) => {
      const x = padding + step * index;
      const y = height - padding - ((entry.value - min) / Math.max(1, max - min)) * (height - padding * 2);
      return `${x},${y}`;
    })
    .join(' ');
  const last = log[log.length - 1];
  const lastX = padding + step * (log.length - 1);
  const lastY = height - padding - ((last.value - min) / Math.max(1, max - min)) * (height - padding * 2);
  return `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Weight progress chart">
      <path d="M14 20 H306 M14 70 H306 M14 120 H306" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
      <polyline points="${points}" fill="none" stroke="${stroke}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="${lastX}" cy="${lastY}" r="5" fill="${stroke}"/>
      <rect x="${Math.max(178, lastX - 36)}" y="${Math.max(6, lastY - 28)}" width="58" height="24" rx="8" fill="${stroke}"/>
      <text x="${Math.max(207, lastX - 7)}" y="${Math.max(22, lastY - 12)}" text-anchor="middle" fill="#07100b" font-size="11" font-family="Trebuchet MS, sans-serif">${last.value.toFixed(1)} kg</text>
    </svg>
  `;
}

function renderApp(shouldPersist = false) {
  syncShellModeClass();
  const previousScreen = root.dataset.screen || '';
  const previousScroller = root.querySelector('.screen-scroll');
  const previousScrollTop = previousScroller ? previousScroller.scrollTop : 0;
  const navVisible = !DEEP_SCREENS.has(state.ui.screen);
  root.innerHTML = `
    <div class="app-viewport">
      ${renderStatusBar()}
      <div class="screen-scroll">
        ${renderScreen()}
      </div>
      ${navVisible ? renderNav() : ''}
      ${renderToastMarkup()}
      ${state.ui.drawerOpen ? renderDrawer() : ''}
    </div>
  `;
  root.dataset.screen = state.ui.screen;
  const nextScroller = root.querySelector('.screen-scroll');
  if (nextScroller) {
    const shouldRestoreScroll = !pendingScrollReset && previousScreen === state.ui.screen;
    nextScroller.scrollTop = shouldRestoreScroll ? previousScrollTop : 0;
  }
  pendingScrollReset = false;
  syncRestTimer();
  if (shouldPersist) {
    persistState();
  }
}

function openScreen(screen) {
  state.ui.drawerOpen = false;
  state.ui.screen = screen;
  if (screen.startsWith('auth') || screen === 'cloudLogout') {
    authMessage = '';
  }
  requestScrollReset();
  if (screen === 'workoutPlan' || screen === 'workoutSession') {
    state.ui.selectedPlanId = state.ui.selectedPlanId || todayPlan().id;
  }
  if (screen === 'editPlan') {
    state.ui.editingPlanId = state.ui.selectedPlanId || todayPlan().id;
  }
  if (screen === 'library') {
    state.ui.editingPlanId = state.ui.selectedPlanId || todayPlan().id;
  }
  if (screen === 'customExercise') {
    state.ui.customExerciseDate = state.ui.selectedDate;
    state.ui.customExercisePlanId = state.ui.selectedPlanId || todayPlan().id;
    state.ui.editingPlanId = state.ui.customExercisePlanId;
  }
  if (screen === 'calendar') {
    state.ui.selectedCalendarDate = state.ui.selectedCalendarDate || state.ui.selectedDate;
  }
  persistState();
  renderApp();
}

root.addEventListener('click', (event) => {
  const target = event.target.closest('[data-action]');
  if (!target) {
    return;
  }
  const { action } = target.dataset;

  if (action === 'open-drawer') {
    state.ui.drawerOpen = true;
    renderApp();
    return;
  }

  if (action === 'close-drawer') {
    state.ui.drawerOpen = false;
    renderApp();
    return;
  }

  if (action === 'open-screen') {
    openScreen(target.dataset.screen);
    return;
  }

  if (action === 'open-exercise-guide') {
    openExerciseGuide(target.dataset.planId, target.dataset.exerciseId, target.dataset.backScreen || state.ui.screen);
    return;
  }

  if (action === 'toggle-password-visibility') {
    const input = root.querySelector(`#${target.dataset.target}`);
    if (!input) {
      return;
    }
    input.type = input.type === 'password' ? 'text' : 'password';
    target.classList.toggle('active', input.type === 'text');
    return;
  }

  if (action === 'install-app') {
    promptInstallApp();
    return;
  }

  if (action === 'download-android-apk') {
    triggerAndroidApkDownload();
    return;
  }

  if (action === 'select-date') {
    state.ui.selectedDate = target.dataset.date;
    state.ui.selectedPlanId = state.schedule[target.dataset.date] || state.plans[0].id;
    persistState();
    renderApp();
    return;
  }

  if (action === 'select-custom-exercise-day') {
    state.ui.customExerciseDate = target.dataset.date;
    state.ui.customExercisePlanId = planIdForDate(target.dataset.date);
    state.ui.editingPlanId = state.ui.customExercisePlanId;
    persistState({ scheduleCloud: false });
    renderApp();
    return;
  }

  if (action === 'start-workout') {
    startWorkout(target.dataset.planId);
    return;
  }

  if (action === 'resume-workout') {
    resumeWorkout();
    return;
  }

  if (action === 'toggle-set') {
    toggleSet(target.dataset.planId, target.dataset.exerciseId, Number(target.dataset.setIndex));
    return;
  }

  if (action === 'move-exercise') {
    moveExercise(Number(target.dataset.direction));
    return;
  }

  if (action === 'mark-exercise') {
    markCurrentExerciseDone();
    return;
  }

  if (action === 'select-progress-tab') {
    state.ui.progressTab = target.dataset.tab;
    persistState();
    renderApp();
    return;
  }

  if (action === 'set-notification-filter') {
    state.ui.notificationFilter = target.dataset.filter;
    persistState();
    renderApp();
    return;
  }

  if (action === 'mark-all-notifications-read') {
    state.notifications = state.notifications.map((item) => ({ ...item, read: true }));
    persistState();
    showToast('All notifications marked as read');
    renderApp();
    return;
  }

  if (action === 'toggle-notification-read') {
    const notification = state.notifications.find((item) => item.id === target.dataset.id);
    if (!notification) {
      return;
    }
    notification.read = !notification.read;
    persistState();
    showToast(notification.read ? 'Notification marked as read' : 'Notification marked as unread');
    renderApp();
    return;
  }

  if (action === 'toggle-message-read') {
    const message = state.messages.find((item) => item.id === target.dataset.id);
    if (!message) {
      return;
    }
    message.read = !message.read;
    persistState();
    showToast(message.read ? `Opened ${message.sender}` : `${message.sender} marked unread`);
    renderApp();
    return;
  }

  if (action === 'advance-challenge') {
    const challenge = state.challenges.find((item) => item.id === target.dataset.id);
    if (!challenge) {
      return;
    }
    if (challenge.claimed) {
      showToast('Reward already claimed');
      renderApp();
      return;
    }
    if (challenge.progress < challenge.goal) {
      challenge.progress += 1;
      persistState();
      showToast(challenge.progress >= challenge.goal ? 'Challenge complete. Claim your reward.' : 'Challenge progress updated');
      renderApp();
      return;
    }
    challenge.claimed = true;
    state.metrics.streak += 1;
    persistState();
    showToast('Reward claimed');
    renderApp();
    return;
  }

  if (action === 'toggle-reminder') {
    state.preferences.reminder = !state.preferences.reminder;
    persistState();
    showToast(`Workout reminder ${state.preferences.reminder ? 'enabled' : 'disabled'}`);
    renderApp();
    return;
  }

  if (action === 'toggle-cloud-sync') {
    state.cloud.autoSync = !state.cloud.autoSync;
    if (!state.cloud.autoSync && cloudSyncTimer) {
      clearTimeout(cloudSyncTimer);
      cloudSyncTimer = null;
    }
    if (state.cloud.autoSync && authUser) {
      state.cloud.lastSyncStatus = 'pending';
      state.cloud.lastError = '';
    }
    persistState({ scheduleCloud: false });
    if (state.cloud.autoSync && authUser) {
      saveCloudState({ silent: true });
    }
    showToast(`Cloud auto sync ${state.cloud.autoSync ? 'enabled' : 'paused'}`);
    renderApp();
    return;
  }

  if (action === 'cloud-save') {
    saveCloudState({ force: true });
    return;
  }

  if (action === 'cloud-load') {
    restoreCloudState();
    return;
  }

  if (action === 'cloud-logout') {
    logoutFromCloud();
    return;
  }

  if (action === 'open-edit-exercise') {
    state.ui.editingPlanId = target.dataset.planId;
    state.ui.editingExerciseId = target.dataset.exerciseId;
    state.ui.screen = 'editExercise';
    requestScrollReset();
    persistState();
    renderApp();
    return;
  }

  if (action === 'delete-exercise-row') {
    deleteExerciseFromPlan(target.dataset.planId, target.dataset.exerciseId);
    return;
  }

  if (action === 'add-library-exercise') {
    addExerciseToPlan(target.dataset.libraryId);
    return;
  }

  if (action === 'set-library-category') {
    state.ui.libraryCategory = target.dataset.category;
    persistState();
    renderApp();
    return;
  }

  if (action === 'delete-plan') {
    deleteCurrentPlan();
    return;
  }

  if (action === 'delete-exercise') {
    deleteCurrentExercise();
    return;
  }

  if (action === 'trigger-exercise-image') {
    const fileInput = root.querySelector('[data-input="exerciseImageFile"]');
    if (fileInput) {
      fileInput.click();
    }
    return;
  }

  if (action === 'trigger-exercise-video') {
    const fileInput = root.querySelector('[data-input="exerciseVideoFile"]');
    if (fileInput) {
      fileInput.click();
    }
    return;
  }

  if (action === 'reset-exercise-image') {
    const exercise = getExercise(state.ui.editingPlanId, state.ui.editingExerciseId);
    if (!exercise) {
      return;
    }
    if (!exercise.customImage) {
      showToast('This exercise is already using the app photo');
      renderApp();
      return;
    }
    exercise.customImage = '';
    persistState();
    showToast('Exercise photo reset');
    renderApp();
    return;
  }

  if (action === 'reset-exercise-video') {
    resetExerciseCustomVideo();
    return;
  }

  if (action === 'add-set-row') {
    const exercise = getExercise(state.ui.editingPlanId, state.ui.editingExerciseId);
    exercise.sets.push({ id: `set-${Date.now()}`, reps: 12, weight: 20 });
    persistState();
    renderApp();
    return;
  }

  if (action === 'remove-set-row') {
    const exercise = getExercise(state.ui.editingPlanId, state.ui.editingExerciseId);
    if (exercise.sets.length === 1) {
      showToast('An exercise needs at least one set');
      renderApp();
      return;
    }
    exercise.sets.splice(Number(target.dataset.index), 1);
    persistState();
    renderApp();
    return;
  }

  if (action === 'change-calendar') {
    changeCalendarMonth(Number(target.dataset.step));
    return;
  }

  if (action === 'select-calendar-day') {
    state.ui.selectedCalendarDate = target.dataset.date;
    state.ui.selectedPlanId = state.schedule[target.dataset.date] || state.plans[0].id;
    persistState();
    renderApp();
    return;
  }

  if (action === 'assign-plan') {
    state.schedule[state.ui.selectedCalendarDate] = target.dataset.planId;
    state.ui.selectedPlanId = target.dataset.planId;
    persistState();
    showToast('Plan assigned to this day');
    renderApp();
    return;
  }

  if (action === 'calendar-complete') {
    const plannedId = state.schedule[state.ui.selectedCalendarDate] || state.plans[0].id;
    if (!state.history.some((entry) => entry.date === state.ui.selectedCalendarDate && entry.planId === plannedId)) {
      const plan = getPlan(plannedId);
      state.history.unshift({
        id: `hist-${Date.now()}`,
        date: state.ui.selectedCalendarDate,
        planId: plannedId,
        duration: plan.duration,
        calories: Math.round(plan.calories + 180)
      });
      persistState();
      showToast('Workout marked complete');
      renderApp();
      return;
    }
    showToast('This day is already completed');
    renderApp();
    return;
  }

  if (action === 'toast') {
    showToast(target.dataset.message);
    renderApp();
    return;
  }

  if (action === 'demo-logout') {
    state.ui.drawerOpen = false;
    state.ui.screen = shouldUseWebsiteAuthEntry() ? 'authIntro' : 'home';
    state.activeWorkout = null;
    state.ui.restSeconds = 45;
    requestScrollReset();
    persistState();
    showToast('Signed out of the local demo');
    renderApp();
    return;
  }

  if (action === 'reset-demo') {
    resetDemo();
  }
});

root.addEventListener('input', (event) => {
  const control = event.target;
  if (control.dataset.input === 'librarySearch') {
    state.ui.librarySearch = control.value;
    const cursor = control.selectionStart ?? control.value.length;
    renderApp();
    const search = root.querySelector('[data-input="librarySearch"]');
    if (search) {
      search.focus();
      search.setSelectionRange(cursor, cursor);
    }
    return;
  }
  if (control.id === 'cloud-reset-password') {
    const checklist = root.querySelector('[data-live="password-checklist"]');
    if (checklist) {
      checklist.innerHTML = renderPasswordChecklist(control.value);
    }
    return;
  }
  if (control.dataset.input === 'historyFilter') {
    state.ui.historyFilter = control.value;
    persistState();
    renderApp();
  }
});

root.addEventListener('change', (event) => {
  const control = event.target;
  if (control.dataset.input === 'exerciseImageFile') {
    const [file] = control.files || [];
    if (file) {
      saveExerciseCustomImage(file);
    }
    control.value = '';
    return;
  }
  if (control.dataset.input === 'exerciseVideoFile') {
    const [file] = control.files || [];
    if (file) {
      saveExerciseCustomVideo(file);
    }
    control.value = '';
    return;
  }
  if (control.dataset.input === 'historyFilter') {
    state.ui.historyFilter = control.value;
    persistState();
    renderApp();
  }
});

root.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);

  if (form.dataset.form === 'cloud-login') {
    const email = data.get('email')?.toString().trim() || '';
    const password = data.get('password')?.toString() || '';
    if (!email || !password) {
      showToast('Enter email and password first');
      return;
    }
    loginToCloud(email, password);
    return;
  }

  if (form.dataset.form === 'cloud-signup') {
    const name = data.get('name')?.toString().trim() || '';
    const email = data.get('email')?.toString().trim() || '';
    const password = data.get('password')?.toString() || '';
    const confirmPassword = data.get('confirmPassword')?.toString() || '';
    const termsAccepted = data.get('terms') === 'yes';

    if (!name || !email || !password || !confirmPassword) {
      showToast('Fill in all sign up fields');
      return;
    }
    if (password !== confirmPassword) {
      authMessage = 'Passwords do not match.';
      renderApp();
      return;
    }
    if (!isStrongPassword(password)) {
      authMessage = 'Use a stronger password with uppercase, lowercase, and a special character.';
      renderApp();
      return;
    }
    if (!termsAccepted) {
      authMessage = 'Please accept the terms to continue.';
      renderApp();
      return;
    }
    signupForCloud(name, email, password);
    return;
  }

  if (form.dataset.form === 'cloud-forgot') {
    const email = data.get('email')?.toString().trim() || '';
    if (!email) {
      showToast('Enter your email first');
      return;
    }
    sendCloudResetLink(email);
    return;
  }

  if (form.dataset.form === 'cloud-reset') {
    const password = data.get('password')?.toString() || '';
    const confirmPassword = data.get('confirmPassword')?.toString() || '';

    if (password !== confirmPassword) {
      authMessage = 'Passwords do not match.';
      renderApp();
      return;
    }
    if (!isStrongPassword(password)) {
      authMessage = 'Use a stronger password before saving.';
      renderApp();
      return;
    }
    resetCloudPassword(password);
    return;
  }

  if (form.dataset.form === 'profile') {
    state.profile.name = data.get('name').toString().trim();
    state.profile.age = Number(data.get('age'));
    state.profile.height = Number(data.get('height'));
    state.profile.weight = Number(Number(data.get('weight')).toFixed(1));
    state.profile.targetWeight = Number(Number(data.get('targetWeight')).toFixed(1));
    state.profile.goal = data.get('goal').toString();
    state.profile.quote = data.get('quote').toString().trim();
    state.ui.screen = 'profile';
    requestScrollReset();
    persistState();
    showToast('Profile updated');
    renderApp();
    return;
  }

  if (form.dataset.form === 'plan') {
    const plan = getPlan(state.ui.editingPlanId);
    plan.name = data.get('name').toString().trim();
    plan.duration = Number(data.get('duration'));
    plan.difficulty = data.get('difficulty').toString();
    state.ui.selectedPlanId = plan.id;
    state.ui.screen = 'workoutPlan';
    requestScrollReset();
    persistState();
    showToast('Plan saved');
    renderApp();
    return;
  }

  if (form.dataset.form === 'exercise') {
    const exercise = getExercise(state.ui.editingPlanId, data.get('exerciseId').toString());
    exercise.name = data.get('name').toString().trim();
    exercise.category = data.get('category').toString();
    exercise.art = artForCategory(exercise.category);
    exercise.cue = data.get('cue').toString().trim();
    const repValues = data.getAll('setReps').map(Number);
    const weightValues = data.getAll('setWeight').map(Number);
    exercise.sets = repValues.map((reps, index) => ({
      id: `${exercise.id}-set-${index + 1}`,
      reps,
      weight: Number(weightValues[index] ?? 0)
    }));
    state.ui.screen = 'workoutPlan';
    requestScrollReset();
    persistState();
    showToast('Exercise saved');
    renderApp();
    return;
  }

  if (form.dataset.form === 'custom-exercise') {
    addCustomExerciseToPlan({
      name: data.get('name').toString().trim(),
      category: data.get('category').toString(),
      cue: data.get('cue').toString().trim(),
      sets: Number(data.get('sets')) || 3,
      reps: Number(data.get('reps')) || 12,
      weight: Number(data.get('weight')) || 0
    });
  }
});

renderApp();
initCloudAuth();

if ('serviceWorker' in navigator) {
  let reloadingForServiceWorker = false;

  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (reloadingForServiceWorker) {
      return;
    }
    reloadingForServiceWorker = true;
    window.location.reload();
  });

  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./sw.js?v=10', { updateViaCache: 'none' })
      .then((registration) => {
        if (registration.waiting) {
          registration.waiting.postMessage({ type: 'SKIP_WAITING' });
        }
        return registration.update();
      })
      .catch((error) => console.error(error));
  });
}

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  renderApp();
});

window.addEventListener('appinstalled', () => {
  deferredInstallPrompt = null;
  showToast('SA7D installed on this device');
  renderApp();
});
