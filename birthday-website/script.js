/**
 * A LITTLE PLACE CALLED US — VINTAGE SCRAPBOOK ENGINE
 * Vanilla JavaScript (No Frameworks)
 * Designed for Childhood Best Friend Birthday Surprise
 * Enhanced with Font Awesome & Universal Floating Music Player
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. DATA DICTIONARIES (LETTERS & PLAYLISTS)
     ========================================================================== */

  // Section 3: Letters For You
  const lettersData = {
    birthday: {     
      category: 'A Birthday Letter 🎂',
      title: 'Selamat Ulang Tahun, Sahabat Masa Kecilku!',
      body: `Hai Arini,

Selamat bertambah usia! Rasanya baru kemarin kita masih lari-larian di halaman sekolah tanpa mikirin apa-apa, dan sekarang kita sudah sejauh ini berjalan di dunia masing-masing.

Melihat kamu tumbuh jadi pribadi yang sekarang—yang tangguh, yang penuh kasih, dan selalu hangat—selalu bikin aku kagum sekaligus bangga luar biasa. Terima kasih ya, sudah bertahan melewati segala pasang surut kehidupan sampai hari ini.

Di umurmu yang baru ini, doaku sederhana tapi tulus: semoga semesta selalu bermurah hati padamu. Semoga langkah kakimu diringankan, pundakmu dikuatkan, dan hatimu selalu menemukan alasan untuk tersenyum bahkan di hari-hari yang paling melelahkan. 

Jangan pernah ragu sama kemampuan dirimu sendiri. Kamu berharga, dan kamu selalu pantas mendapatkan segala hal baik yang ada di dunia ini.

Selamat merayakan hari lahirmu. Tetaplah jadi Arini yang aku kenal: hangat, jujur, dan luar biasa.`
    },
    thankyou: {
      category: 'Thank You Letter 🌸',
      title: 'Terima Kasih Telah Selalu Ada',
      body: `Hai Arini,

Ada banyak hal dalam hidup yang datang dan pergi, tapi keberadaanmu adalah salah satu dari sedikit hal yang selalu terasa menetap dan menenangkan.

Terima kasih ya. Terima kasih karena kamu gak pernah bosan dengerin ceritaku yang kadang berulang-ulang. Terima kasih untuk setiap tawa lepas yang cuma bisa keluar waktu aku lagi sama kamu. Terima kasih karena di depanmu, aku gak pernah merasa harus pura-pura jadi orang lain atau terlihat kuat setiap saat.

Menemukan sahabat yang mengerti setiap sudut sunyi dan ributnya pikiran kita itu langka banget, dan aku beruntung karena menemukannya di kamu sejak kita masih kecil.

Apapun yang terjadi nanti, terima kasih sudah menjadi tempat pulang paling aman di duniaku.`
    },
    future: {
      category: 'A Letter for Our Future ✨',
      title: 'Janji Kecil Untuk Masa Depan Kita',
      body: `Hai Arini,

Makin hari, dunia orang dewasa rasanya makin sibuk ya? Tanggung jawab makin berat, jarak mungkin bisa memisahkan, dan waktu luang kita gak sebanyak dulu lagi.

Tapi lewat surat ini, aku mau menitipkan satu janji kecil: sejauh apapun hidup nanti membawa kita melangkah, 'A Little Place Called Us' ini gak akan pernah hilang.

Bahkan kalau nanti kita cuma bisa ketemu setahun sekali, atau teleponan sebulan sekali di sela-sela kesibukan, pintu rumah persahabatan kita akan selalu terbuka lebar. Kapan pun kamu butuh tempat cerita, butuh teman nostalgia masa kecil, atau cuma pengen duduk berdua dalam diam, aku akan selalu ada.

Mari terus bertumbuh, mengejar mimpi-mimpi kita, dan saling menyemangati sampai nanti kita tua dan punya ribuan cerita baru untuk ditertawakan bersama.`
    }
  };

  // Section 8: Read This When...
  const readWhenData = {
    sad: {
      icon: '<i class="fa-solid fa-cloud-showers-heavy"></i>',
      category: 'OPEN WHEN YOU\'RE SAD',
      title: 'Peluk Jauh untuk Harimu yang Mendung',
      body: `Hai kamu,

Kalau hari ini rasanya berat dan hatimu sedang sedih, tarik napas panjang dulu ya. Gak apa-apa banget untuk merasa gak baik-baik saja. Kamu gak harus selalu tersenyum, dan kamu gak harus selalu kuat setiap detik.

Kalau mau menangis, luapkan saja. Menangis bukan berarti kamu lemah, itu cuma tanda bahwa kamu adalah manusia yang punya hati yang lembut.

Ingat, awan mendung gak akan selamanya tinggal di langit. Hari buruk ini cuma sebagian kecil dari cerita hidupmu yang masih sangat panjang. Saat kamu siap, aku ada di sini. Telepon aku, ceritakan semuanya, atau kita bisa diam bareng sampai dadamu terasa lebih lega.

Kamu dicintai, hari ini dan selamanya.`
    },
    miss: {
      icon: '<i class="fa-solid fa-paper-plane"></i>',
      category: 'OPEN WHEN YOU MISS ME',
      title: 'Kapan Pun Kamu Rindu...',
      body: `Hai Arini!

Kangen ya? Sama, aku juga! Lucu ya, dulu kita hampir tiap hari ketemu, jajan bareng, main bareng sampai dicariin orang tua. Sekarang mau ketemu aja harus nyocokin jadwal berkali-kali.

Tapi jarak dan waktu gak pernah bisa ngurangin eratnya ikatan kita. Ingat-ingat deh momen konyol waktu kita ketawa ngakak gara-gara hal gak jelas. Atau putar lagu Nadin dan Hindia favorit kita, bayangkan kita lagi di perjalanan malam sambil nyanyi kencang bareng.

Dan yang paling penting: gak usah nunggu momen khusus buat hubungin aku. Kirim pesan kapan aja, telepon tengah malam pun boleh. Aku selalu rindu ngobrol sama kamu!`
    },
    lonely: {
      icon: '<i class="fa-solid fa-moon"></i>',
      category: 'OPEN WHEN YOU FEEL LONELY',
      title: 'Kamu Tidak Pernah Benar-Benar Sendirian',
      body: `Hai sahabatku,

Di malam-malam sunyi saat rasanya seluruh dunia sedang sibuk sendiri dan kamu merasa terisolasi, tolong ingat kata-kataku ini: kamu tidak pernah sendirian.

Mungkin ragaku gak ada di sampingmu saat ini, tapi doaku dan rasa sayangku selalu menyertai setiap langkahmu. Di sudut dunia ini, ada orang yang selalu bersyukur pernah dipertemukan denganmu, dan orang itu adalah aku.

Kamu adalah bagian penting dalam hidup banyak orang, terutama hidupku. Jangan biarkan sunyi membisikkan hal-hal yang membuatmu ragu akan keberadaanmu. Kamu ada, dan kehadiranmu sangat berarti.`
    },
    loved: {
      icon: '<i class="fa-solid fa-heart"></i>',
      category: 'OPEN WHEN YOU NEED A REMINDER',
      title: 'Pengingat Betapa Kamu Sangat Dicintai',
      body: `Hai Arini manis,

Terkadang kita terlalu keras sama diri sendiri sampai lupa betapa indahnya diri kita di mata orang lain. Jadi hari ini, biar aku yang ingatkan ya:

Kamu dicintai karena kebaikan hatimu yang tulus.
Kamu dicintai karena caramu selalu peduli pada hal-hal kecil.
Kamu dicintai karena tawamu yang menular dan bikin suasana jadi hangat.
Dan yang paling penting, kamu dicintai hanya dengan menjadi dirimu sendiri, tanpa syarat apapun.

Dunia ini jadi tempat yang jauh lebih indah dan ramah karena ada kamu di dalamnya. Jangan pernah ragukan itu sedikit pun.`
    },
    difficult: {
      icon: '<i class="fa-solid fa-seedling"></i>',
      category: 'OPEN WHEN LIFE GETS DIFFICULT',
      title: 'Kamu Jauh Lebih Kuat dari yang Kamu Kira',
      body: `Hai Arini pejuang,

Saat jalan di depan terasa terjal, masalah datang bertubi-tubi, dan rasanya kamu ingin menyerah saja—berhentilah sejenak. Duduklah dan pandang ke belakang.

Lihat berapa banyak rintangan yang sudah berhasil kamu lalui sejauh ini. Dulu, ada hari-hari yang kamu pikir gak akan bisa kamu lewati, tapi nyatanya hari ini kamu ada di sini, berdiri dengan hebat.

Tantangan yang sekarang pun sama. Ini hanya ujian sementara. Istirahatlah sejenak kalau lelah, tapi jangan berhenti melangkah. Kamu punya keberanian dan kekuatan yang luar biasa di dalam dirimu.

Dan ingat, kamu gak perlu memikul semuanya sendirian. Ada aku yang siap berbagi beban kapan pun kamu butuh.`
    }
  };

  // Section: Real Song Data for Nadin & Hindia + Turntable Player
  const songsPlaylist = [
    // Her World: Nadin Amizah
    {
      key: 'nadin-bertaut',
      title: 'Bertaut',
      artist: 'Nadin Amizah',
      category: 'Her World',
      duration: '05:16',
      cover: 'assets/images/album-nadin.jpg',
      src: 'assets/music/nadin-bertaut.m4a'
    },
    {
      key: 'nadin-rayuan',
      title: 'Rayuan Perempuan Gila',
      artist: 'Nadin Amizah',
      category: 'Her World',
      duration: '04:32',
      cover: 'assets/images/album-nadin.jpg',
      src: 'assets/music/nadin-rayuan.m4a'
    },
    {
      key: 'nadin-sorai',
      title: 'Sorai',
      artist: 'Nadin Amizah',
      category: 'Her World',
      duration: '04:20',
      cover: 'assets/images/album-nadin.jpg',
      src: 'assets/music/nadin-sorai.m4a'
    },
    {
      key: 'nadin-beranjak',
      title: 'Beranjak Dewasa',
      artist: 'Nadin Amizah',
      category: 'Her World',
      duration: '04:55',
      cover: 'assets/images/album-nadin.jpg',
      src: 'assets/music/nadin-beranjak.m4a'
    },
    {
      key: 'nadin-dirayakan',
      title: 'Semua Aku Dirayakan',
      artist: 'Nadin Amizah',
      category: 'Her World',
      duration: '04:48',
      cover: 'assets/images/album-nadin.jpg',
      src: 'assets/music/nadin-dirayakan.m4a'
    },
    // My World: Hindia
    {
      key: 'hindia-evaluasi',
      title: 'Evaluasi',
      artist: 'Hindia',
      category: 'My World',
      duration: '03:24',
      cover: 'assets/images/album-hindia.jpg',
      src: 'assets/music/hindia-evaluasi.m4a'
    },
    {
      key: 'hindia-secukupnya',
      title: 'Secukupnya',
      artist: 'Hindia',
      category: 'My World',
      duration: '03:28',
      cover: 'assets/images/album-hindia.jpg',
      src: 'assets/music/hindia-secukupnya.m4a'
    },
    {
      key: 'hindia-rumah',
      title: 'Rumah ke Rumah',
      artist: 'Hindia',
      category: 'My World',
      duration: '04:37',
      cover: 'assets/images/album-hindia.jpg',
      src: 'assets/music/hindia-rumah.m4a'
    },
    {
      key: 'hindia-membasuh',
      title: 'Membasuh',
      artist: 'Hindia feat. Rara Sekar',
      category: 'My World',
      duration: '05:12',
      cover: 'assets/images/album-hindia.jpg',
      src: 'assets/music/hindia-membasuh.m4a'
    },
    {
      key: 'hindia-berdansalah',
      title: 'Berdansalah, Karir Ini Tak Ada Artinya',
      artist: 'Hindia',
      category: 'My World',
      duration: '04:08',
      cover: 'assets/images/album-hindia.jpg',
      src: 'assets/music/hindia-berdansalah.m4a'
    }
  ];
  let currentSongIndex = 0;


  /* ==========================================================================
     2. LOADING SCREEN SIMULATION
     ========================================================================== */
  const loadingScreen = document.getElementById('loadingScreen');
  const loaderBar = document.getElementById('loaderBar');
  const loaderCounter = document.getElementById('loaderCounter');

  let progress = 0;
  const progressInterval = setInterval(() => {
    progress += Math.floor(Math.random() * 14) + 8;
    if (progress >= 100) {
      progress = 100;
      clearInterval(progressInterval);
      if (loaderBar) loaderBar.style.width = '100%';
      if (loaderCounter) loaderCounter.textContent = '100%';

      setTimeout(() => {
        if (loadingScreen) loadingScreen.classList.add('hidden');
      }, 450);
    } else {
      if (loaderBar) loaderBar.style.width = `${progress}%`;
      if (loaderCounter) loaderCounter.textContent = `${progress}%`;
    }
  }, 90);


  /* ==========================================================================
     3. SPA PAGE NAVIGATION SYSTEM (SIDEBAR & BUTTONS)
     ========================================================================== */
  const navLinks = document.querySelectorAll('.nav-link');
  const pageSections = document.querySelectorAll('.page-section');
  const sidebar = document.getElementById('sidebar');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const sidebarCloseBtn = document.getElementById('sidebarCloseBtn');
  const sidebarBackdrop = document.getElementById('sidebarBackdrop');

  function switchSection(targetId) {
    pageSections.forEach(section => {
      if (section.id === targetId) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });

    navLinks.forEach(link => {
      if (link.getAttribute('data-target') === targetId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    closeMobileSidebar();

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-target');
      if (target) switchSection(target);
    });
  });

  document.querySelectorAll('[data-navigate]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-navigate');
      if (target) switchSection(target);
    });
  });

  const btnBackHome = document.getElementById('btnBackHome');
  if (btnBackHome) {
    btnBackHome.addEventListener('click', () => {
      switchSection('home');
    });
  }

  // Mobile Drawer Toggle
  function openMobileSidebar() {
    sidebar.classList.add('mobile-open');
    sidebarBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileSidebar() {
    sidebar.classList.remove('mobile-open');
    sidebarBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openMobileSidebar);
  if (sidebarCloseBtn) sidebarCloseBtn.addEventListener('click', closeMobileSidebar);
  if (sidebarBackdrop) sidebarBackdrop.addEventListener('click', closeMobileSidebar);


  /* ==========================================================================
     4. CUSTOM CURSOR & SPARKLE FOLLOWER (DESKTOP)
     ========================================================================== */
  const customCursor = document.getElementById('customCursor');
  const customCursorFollower = document.getElementById('customCursorFollower');

  if (customCursor && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let followerX = mouseX;
    let followerY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      customCursor.style.left = `${mouseX}px`;
      customCursor.style.top = `${mouseY}px`;
    });
 
    function animateCursorFollower() {
      followerX += (mouseX - followerX) * 0.18;
      followerY += (mouseY - followerY) * 0.18;
      customCursorFollower.style.left = `${followerX}px`;
      customCursorFollower.style.top = `${followerY}px`;
      requestAnimationFrame(animateCursorFollower);
    }
    animateCursorFollower();

    const interactiveElements = document.querySelectorAll('button, a, .polaroid-item, .envelope-item, .scrap-card, .when-envelope, .song-item');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        customCursor.classList.add('active');
        customCursorFollower.style.transform = 'translate(-50%, -50%) scale(1.4)';
        customCursorFollower.style.borderColor = 'var(--burgundy)';
      });
      el.addEventListener('mouseleave', () => {
        customCursor.classList.remove('active');
        customCursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
        customCursorFollower.style.borderColor = 'var(--rose-dusty)';
      });
    });
  }


  /* ==========================================================================
     5. FLOATING PASTEL HEARTS PARTICLES
     ========================================================================== */
  const heartsContainer = document.getElementById('floatingHeartsContainer');

  function createFloatingHeart() {
    if (!heartsContainer) return;
    const heart = document.createElement('div');
    heart.className = 'floating-heart-particle';

    const heartColors = ['#E6B2B8', '#C58C8C', '#F3D2D6', '#9B2F3E', '#DFA3AA'];
    const randomColor = heartColors[Math.floor(Math.random() * heartColors.length)];

    const heartSymbols = ['♥', '♡', '❦', '❀'];
    const randomSymbol = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

    const startLeft = Math.random() * 100;
    const size = Math.random() * 16 + 12;
    const duration = Math.random() * 6 + 7;

    heart.innerHTML = randomSymbol;
    heart.style.left = `${startLeft}%`;
    heart.style.fontSize = `${size}px`;
    heart.style.color = randomColor;
    heart.style.animationDuration = `${duration}s`;

    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, duration * 1000);
  }

  setInterval(createFloatingHeart, 1800);
  for (let i = 0; i < 4; i++) {
    setTimeout(createFloatingHeart, i * 400);
  }


  /* ==========================================================================
     6. UNIVERSAL MUSIC ENGINE (PLAYABLE AT ANY TIME)
     Synchronizes:
     - Floating Music Widget (pinned on screen)
     - Home Hero Direct Music Button
     - Sidebar Music Capsule
     - Mobile Topbar Music Disc
     - Turntable Player (Nadin & Hindia section)
     - Web Audio API Lo-Fi Chords for guaranteed playback out of the box!
     ========================================================================== */
  const bgMusic = document.getElementById('bgMusic');
  
  // Triggers
  const floatingMusicWidget = document.getElementById('floatingMusicWidget');
  const floatingMusicBtn = document.getElementById('floatingMusicBtn');
  const floatingSongTitle = document.getElementById('floatingSongTitle');
  const floatingSongStatus = document.getElementById('floatingSongStatus');
  const floatingPlayIcon = document.getElementById('floatingPlayIcon');
  const floatingPauseIcon = document.getElementById('floatingPauseIcon');

  const heroMusicBtn = document.getElementById('heroMusicBtn');
  const heroMusicBtnText = document.getElementById('heroMusicBtnText');

  const musicToggleBtn = document.getElementById('musicToggleBtn');
  const mobileMusicBtn = document.getElementById('mobileMusicBtn');
  const miniVinyl = document.getElementById('miniVinyl');
  const musicStatus = document.getElementById('musicStatus');
  const musicTitleMini = document.getElementById('musicTitleMini');

  // Turntable UI
  const vinylPlatter = document.getElementById('vinylPlatter');
  const turntableTonearm = document.getElementById('turntableTonearm');
  const playerPlayMainBtn = document.getElementById('playerPlayMainBtn');
  const audioEqualizer = document.getElementById('audioEqualizer');
  const playerScrubberBar = document.getElementById('playerScrubberBar');
  const playerScrubberWrap = document.getElementById('playerScrubberWrap');
  const playerCurrentTime = document.getElementById('playerCurrentTime');
  const playerTotalTime = document.getElementById('playerTotalTime');
  const nowPlayingTitle = document.getElementById('nowPlayingTitle');
  const nowPlayingArtist = document.getElementById('nowPlayingArtist');
  const playerPrevBtn = document.getElementById('playerPrevBtn');
  const playerNextBtn = document.getElementById('playerNextBtn');

  let isPlaying = false;
  let audioContext = null;
  let synthInterval = null;
  let currentScrubTime = 0;
  let scrubberInterval = null;

  // Web Audio API Synthesizer: Soft Kalimba / Acoustic Rhodes Chord Loop
  function startLoFiAcousticSynth() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!audioContext) {
        audioContext = new AudioCtx();
      }
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }

      stopLoFiAcousticSynth();

      // Chord progression: Fmaj7 - G - Em7 - Am7 (Warm, nostalgic, peaceful)
      const chords = [
        [349.23, 440.00, 523.25, 659.25], // F4, A4, C5, E5 (Fmaj7)
        [392.00, 493.88, 587.33, 783.99], // G4, B4, D5, G5 (G)
        [329.63, 392.00, 493.88, 659.25], // E4, G4, B4, E5 (Em7)
        [220.00, 440.00, 523.25, 659.25]  // A3, A4, C5, E5 (Am7)
      ];
      let chordIndex = 0;

      function playChime(freq, delay, duration = 2.0) {
        if (!audioContext) return;
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, audioContext.currentTime + delay);

        gain.gain.setValueAtTime(0.0001, audioContext.currentTime + delay);
        gain.gain.exponentialRampToValueAtTime(0.18, audioContext.currentTime + delay + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + delay + duration);

        osc.connect(gain);
        gain.connect(audioContext.destination);

        osc.start(audioContext.currentTime + delay);
        osc.stop(audioContext.currentTime + delay + duration + 0.1);
      }

      function playNextChord() {
        const chord = chords[chordIndex % chords.length];
        chord.forEach((freq, idx) => {
          playChime(freq, idx * 0.14, 2.2);
        });
        chordIndex++;
      }

      playNextChord();
      synthInterval = setInterval(playNextChord, 2400);
    } catch (e) {
      console.log('Audio synth initialized gently:', e);
    }
  }

  function stopLoFiAcousticSynth() {
    if (synthInterval) {
      clearInterval(synthInterval);
      synthInterval = null;
    }
  }

  // Update ALL music player elements across the website simultaneously
  function updateMusicUI(active) {
    isPlaying = active;
    const currentSong = songsPlaylist[currentSongIndex] || songsPlaylist[0];

    // Update tracklist highlights & play pills
    document.querySelectorAll('.song-list .song-item').forEach(si => {
      const key = si.getAttribute('data-song-key');
      const isCurrent = (key === currentSong.key);
      si.classList.toggle('active', isCurrent);
      si.classList.toggle('playing', isCurrent && active);

      const pill = si.querySelector('.song-play-pill');
      if (pill) {
        if (isCurrent && active) {
          pill.innerHTML = '<i class="fa-solid fa-pause pill-icon"></i> <span class="pill-label">Jeda</span>';
        } else {
          pill.innerHTML = '<i class="fa-solid fa-play pill-icon"></i> <span class="pill-label">Putar</span>';
        }
      }
    });

    if (active) {
      // 1. Floating Widget
      if (floatingMusicWidget) floatingMusicWidget.classList.add('playing');
      if (floatingSongTitle) floatingSongTitle.textContent = `${currentSong.artist} - ${currentSong.title}`;
      if (floatingSongStatus) floatingSongStatus.innerHTML = '<i class="fa-solid fa-volume-high"></i> Sedang Memutar Musik Asli...';
      if (floatingPlayIcon) floatingPlayIcon.style.display = 'none';
      if (floatingPauseIcon) floatingPauseIcon.style.display = 'inline-block';

      // 2. Hero Direct Music Button
      if (heroMusicBtn) {
        heroMusicBtn.classList.add('playing');
        if (heroMusicBtnText) heroMusicBtnText.textContent = `Jeda Lagu: ${currentSong.title} ❚❚`;
      }

      // 3. Sidebar Capsule
      if (miniVinyl) miniVinyl.classList.add('spinning');
      if (musicTitleMini) musicTitleMini.textContent = `${currentSong.artist} - ${currentSong.title}`;
      if (musicStatus) {
        musicStatus.textContent = 'Now Playing';
        musicStatus.style.color = 'var(--burgundy)';
      }
      if (musicToggleBtn) {
        const pIcon = musicToggleBtn.querySelector('.play-icon');
        const sIcon = musicToggleBtn.querySelector('.pause-icon');
        if (pIcon) pIcon.style.display = 'none';
        if (sIcon) sIcon.style.display = 'inline-block';
      }

      // 4. Mobile Top Bar
      if (mobileMusicBtn) mobileMusicBtn.classList.add('playing');

      // 5. Turntable UI
      if (vinylPlatter) vinylPlatter.classList.add('spinning');
      if (turntableTonearm) turntableTonearm.classList.add('on-record');
      if (audioEqualizer) audioEqualizer.classList.add('active');
      if (playerPlayMainBtn) {
        const pIcon = playerPlayMainBtn.querySelector('.icon-play');
        const sIcon = playerPlayMainBtn.querySelector('.icon-pause');
        if (pIcon) pIcon.style.display = 'none';
        if (sIcon) sIcon.style.display = 'inline-block';
      }
    } else {
      // 1. Floating Widget
      if (floatingMusicWidget) floatingMusicWidget.classList.remove('playing');
      if (floatingSongStatus) floatingSongStatus.innerHTML = '<i class="fa-solid fa-play"></i> Putar Lagu Asli Kapan Saja';
      if (floatingPlayIcon) floatingPlayIcon.style.display = 'inline-block';
      if (floatingPauseIcon) floatingPauseIcon.style.display = 'none';

      // 2. Hero Direct Music Button
      if (heroMusicBtn) {
        heroMusicBtn.classList.remove('playing');
        if (heroMusicBtnText) heroMusicBtnText.textContent = 'Nyalakan Musik Latar ♫';
      }

      // 3. Sidebar Capsule
      if (miniVinyl) miniVinyl.classList.remove('spinning');
      if (musicStatus) {
        musicStatus.textContent = 'Music Paused';
        musicStatus.style.color = 'var(--brown-muted)';
      }
      if (musicToggleBtn) {
        const pIcon = musicToggleBtn.querySelector('.play-icon');
        const sIcon = musicToggleBtn.querySelector('.pause-icon');
        if (pIcon) pIcon.style.display = 'inline-block';
        if (sIcon) sIcon.style.display = 'none';
      }

      // 4. Mobile Top Bar
      if (mobileMusicBtn) mobileMusicBtn.classList.remove('playing');

      // 5. Turntable UI
      if (vinylPlatter) vinylPlatter.classList.remove('spinning');
      if (turntableTonearm) turntableTonearm.classList.remove('on-record');
      if (audioEqualizer) audioEqualizer.classList.remove('active');
      if (playerPlayMainBtn) {
        const pIcon = playerPlayMainBtn.querySelector('.icon-play');
        const sIcon = playerPlayMainBtn.querySelector('.icon-pause');
        if (pIcon) pIcon.style.display = 'inline-block';
        if (sIcon) sIcon.style.display = 'none';
      }
    }
  }

  // Load and play actual song from songsPlaylist
  function loadSong(index, shouldPlay = true) {
    if (index < 0) index = songsPlaylist.length - 1;
    if (index >= songsPlaylist.length) index = 0;
    currentSongIndex = index;

    const song = songsPlaylist[currentSongIndex];

    // Update player text
    if (nowPlayingTitle) nowPlayingTitle.textContent = song.title;
    if (nowPlayingArtist) nowPlayingArtist.textContent = `${song.artist} • ${song.category}`;
    if (playerTotalTime) playerTotalTime.textContent = song.duration;
    if (musicTitleMini) musicTitleMini.textContent = `${song.artist} - ${song.title}`;
    if (floatingSongTitle) floatingSongTitle.textContent = `${song.artist} - ${song.title}`;

    if (playerScrubberBar) playerScrubberBar.style.width = '0%';
    if (playerCurrentTime) playerCurrentTime.textContent = '00:00';

    // Set real audio source
    if (bgMusic) {
      const currentSrc = bgMusic.src || '';
      if (!currentSrc.includes(song.src)) {
        bgMusic.src = song.src;
        bgMusic.load();
      }
    }

    if (shouldPlay) {
      playCurrentSong();
    } else {
      updateMusicUI(false);
    }
  }

  function playCurrentSong() {
    if (audioContext && audioContext.state === 'suspended') {
      audioContext.resume();
    }
    stopLoFiAcousticSynth();

    if (bgMusic) {
      bgMusic.volume = 0.95;
      const playPromise = bgMusic.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          updateMusicUI(true);
        }).catch((err) => {
          console.log('Audio element blocked/failed, starting web audio synthesizer:', err);
          startLoFiAcousticSynth();
          updateMusicUI(true);
        });
      } else {
        updateMusicUI(true);
      }
    } else {
      startLoFiAcousticSynth();
      updateMusicUI(true);
    }
  }

  function pauseCurrentSong() {
    if (bgMusic) bgMusic.pause();
    stopLoFiAcousticSynth();
    updateMusicUI(false);
  }

  function toggleMusicPlayback(e) {
    if (e) {
      if (e.preventDefault) e.preventDefault();
      if (e.stopPropagation) e.stopPropagation();
    }

    if (!isPlaying) {
      if (bgMusic && (!bgMusic.src || bgMusic.src === '')) {
        bgMusic.src = songsPlaylist[currentSongIndex].src;
        bgMusic.load();
      }
      playCurrentSong();
    } else {
      pauseCurrentSong();
    }
  }

  // Connect all universal play triggers
  const musicTriggers = [
    floatingMusicBtn,
    floatingMusicWidget,
    heroMusicBtn,
    musicToggleBtn,
    mobileMusicBtn,
    playerPlayMainBtn
  ];

  musicTriggers.forEach(el => {
    if (el) el.addEventListener('click', toggleMusicPlayback);
  });

  const musicCapsule = document.getElementById('musicCapsule');
  if (musicCapsule) {
    musicCapsule.addEventListener('click', (e) => {
      if (e.target !== musicToggleBtn && !musicToggleBtn.contains(e.target)) {
        toggleMusicPlayback(e);
      }
    });
  }

  // Turntable Next & Prev track buttons
  if (playerPrevBtn) {
    playerPrevBtn.addEventListener('click', () => {
      loadSong(currentSongIndex - 1, true);
    });
  }
  if (playerNextBtn) {
    playerNextBtn.addEventListener('click', () => {
      loadSong(currentSongIndex + 1, true);
    });
  }

  // Song items click handler (Clicking ANY song from Nadin or Hindia list)
  document.querySelectorAll('.song-list .song-item').forEach(item => {
    item.addEventListener('click', (e) => {
      const key = item.getAttribute('data-song-key');
      const foundIdx = songsPlaylist.findIndex(s => s.key === key);
      if (foundIdx === -1) return;

      if (currentSongIndex === foundIdx && isPlaying) {
        // Already playing this song -> pause it
        pauseCurrentSong();
      } else {
        // Play selected real song
        loadSong(foundIdx, true);
      }
    });
  });

  // Real audio progress bar updates
  if (bgMusic) {
    bgMusic.addEventListener('timeupdate', () => {
      if (bgMusic.duration && !isNaN(bgMusic.duration)) {
        const pct = (bgMusic.currentTime / bgMusic.duration) * 100;
        if (playerScrubberBar) playerScrubberBar.style.width = `${pct}%`;

        const curM = String(Math.floor(bgMusic.currentTime / 60)).padStart(2, '0');
        const curS = String(Math.floor(bgMusic.currentTime % 60)).padStart(2, '0');
        if (playerCurrentTime) playerCurrentTime.textContent = `${curM}:${curS}`;

        const durM = String(Math.floor(bgMusic.duration / 60)).padStart(2, '0');
        const durS = String(Math.floor(bgMusic.duration % 60)).padStart(2, '0');
        if (playerTotalTime) playerTotalTime.textContent = `${durM}:${durS}`;
      }
    });

    // Auto-advance to next song on finish
    bgMusic.addEventListener('ended', () => {
      loadSong((currentSongIndex + 1) % songsPlaylist.length, true);
    });
  }

  // Scrubber seeking
  if (playerScrubberWrap) {
    playerScrubberWrap.addEventListener('click', (e) => {
      const rect = playerScrubberWrap.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const pct = Math.max(0, Math.min(1, clickX / rect.width));
      if (bgMusic && bgMusic.duration) {
        bgMusic.currentTime = pct * bgMusic.duration;
      }
      if (playerScrubberBar) playerScrubberBar.style.width = `${pct * 100}%`;
    });
  }

  // Initialize initial song into audio element without autoplaying
  loadSong(0, false);


  /* ==========================================================================
     7. SECTION 2: GALLERY LIGHTBOX (8 LANDSCAPE PHOTOS)
     ========================================================================== */
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxDate = document.getElementById('lightboxDate');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');

  const galleryItems = Array.from(document.querySelectorAll('.polaroid-item'));
  let currentLightboxIndex = 0;

  function openLightbox(index) {
    if (index < 0) index = galleryItems.length - 1;
    if (index >= galleryItems.length) index = 0;
    currentLightboxIndex = index;

    const item = galleryItems[currentLightboxIndex];
    const src = item.getAttribute('data-src');
    const caption = item.getAttribute('data-caption');
    const date = item.getAttribute('data-date');

    lightboxImg.src = src;
    lightboxCaption.textContent = caption;
    lightboxDate.textContent = date;
    lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${galleryItems.length}`;

    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => openLightbox(index));
  });

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', () => openLightbox(currentLightboxIndex - 1));
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', () => openLightbox(currentLightboxIndex + 1));

  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) closeLightbox();
  });


  /* ==========================================================================
     8. SECTION 3: LETTERS READING MODAL
     ========================================================================== */
  const letterModal = document.getElementById('letterModal');
  const modalLetterCategory = document.getElementById('modalLetterCategory');
  const modalLetterTitle = document.getElementById('modalLetterTitle');
  const modalLetterBody = document.getElementById('modalLetterBody');
  const letterModalCloseBtn = document.getElementById('letterModalCloseBtn');
  const letterModalCloseBtn2 = document.getElementById('letterModalCloseBtn2');

  function openLetterModal(letterKey) {
    const data = lettersData[letterKey];
    if (!data) return;

    modalLetterCategory.textContent = data.category;
    modalLetterTitle.textContent = data.title;
    modalLetterBody.textContent = data.body;

    letterModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLetterModal() {
    letterModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.envelope-item').forEach(env => {
    env.addEventListener('click', () => {
      const letterKey = env.getAttribute('data-letter');
      openLetterModal(letterKey);
    });
  });

  if (letterModalCloseBtn) letterModalCloseBtn.addEventListener('click', closeLetterModal);
  if (letterModalCloseBtn2) letterModalCloseBtn2.addEventListener('click', closeLetterModal);

  letterModal.addEventListener('click', (e) => {
    if (e.target === letterModal) closeLetterModal();
  });


  /* ==========================================================================
     10. SECTION 7: LITTLE THINGS (SCRAPBOOK CARDS EXPANSION)
     ========================================================================== */
  document.querySelectorAll('.scrap-card').forEach(card => {
    const toggleBtn = card.querySelector('.btn-card-toggle');
    const hiddenContent = card.querySelector('.card-hidden-content');

    function toggleCard() {
      const isActive = hiddenContent.classList.contains('active');
      if (isActive) {
        hiddenContent.classList.remove('active');
        toggleBtn.innerHTML = '<span>Buka Catatan</span> <i class="fa-solid fa-arrow-right"></i>';
      } else {
        hiddenContent.classList.add('active');
        toggleBtn.innerHTML = '<span>Tutup Catatan</span> <i class="fa-solid fa-xmark"></i>';
      }
    }

    card.addEventListener('click', (e) => {
      if (e.target !== toggleBtn) toggleCard();
    });

    if (toggleBtn) {
      toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleCard();
      });
    }
  });


  /* ==========================================================================
     11. SECTION 8: READ THIS WHEN... MODAL
     ========================================================================== */
  const readWhenModal = document.getElementById('readWhenModal');
  const readWhenIcon = document.getElementById('readWhenIcon');
  const readWhenCategoryTag = document.getElementById('readWhenCategoryTag');
  const readWhenModalTitle = document.getElementById('readWhenModalTitle');
  const readWhenModalBody = document.getElementById('readWhenModalBody');
  const readWhenCloseBtn = document.getElementById('readWhenCloseBtn');
  const readWhenCloseBtn2 = document.getElementById('readWhenCloseBtn2');

  function openReadWhenModal(whenKey) {
    const data = readWhenData[whenKey];
    if (!data) return;

    readWhenIcon.innerHTML = data.icon;
    readWhenCategoryTag.textContent = data.category;
    readWhenModalTitle.textContent = data.title;
    readWhenModalBody.textContent = data.body;

    readWhenModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeReadWhenModal() {
    readWhenModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.when-envelope').forEach(card => {
    card.addEventListener('click', () => {
      const whenKey = card.getAttribute('data-when');
      openReadWhenModal(whenKey);
    });
  });

  if (readWhenCloseBtn) readWhenCloseBtn.addEventListener('click', closeReadWhenModal);
  if (readWhenCloseBtn2) readWhenCloseBtn2.addEventListener('click', closeReadWhenModal);

  readWhenModal.addEventListener('click', (e) => {
    if (e.target === readWhenModal) closeReadWhenModal();
  });


  /* ==========================================================================
     12. KEYBOARD ACCESSIBILITY (ESC & ARROWS FOR MODALS)
     ========================================================================== */
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (lightboxModal.classList.contains('active')) closeLightbox();
      if (letterModal.classList.contains('active')) closeLetterModal();
      if (readWhenModal.classList.contains('active')) closeReadWhenModal();
      if (sidebar.classList.contains('mobile-open')) closeMobileSidebar();
    } else if (e.key === 'ArrowLeft' && lightboxModal.classList.contains('active')) {
      openLightbox(currentLightboxIndex - 1);
    } else if (e.key === 'ArrowRight' && lightboxModal.classList.contains('active')) {
      openLightbox(currentLightboxIndex + 1);
    }
  });


  /* ==========================================================================
     13. SCROLL REVEAL OBSERVER (FOR TIMELINE & SECTIONS)
     ========================================================================== */
  const scrollElements = document.querySelectorAll('.scroll-reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    scrollElements.forEach(el => revealObserver.observe(el));
  } else {
    scrollElements.forEach(el => el.classList.add('revealed'));
  }

});
