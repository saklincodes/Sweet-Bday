/**
 * 🎀 Project: Sweet-Bday — Interactive Celebration Reel
 * 👤 Author: Saklin
 * 📸 Instagram: @saklin_01 (https://instagram.com/saklin_01)
 * 💻 GitHub: @saklincodes (https://github.com/saklincodes)
 * 
 * Interactive logic, custom audio engine & particle physics
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const audio = document.getElementById('audioPlayer');
  const playBtn = document.getElementById('playBtn');
  const iconPause = document.getElementById('iconPause');
  const iconPlay = document.getElementById('iconPlay');
  const timeCurrent = document.getElementById('timeCurrent');
  const timeTotal = document.getElementById('timeTotal');
  const trackSlider = document.getElementById('trackSlider');
  const trackFill = document.getElementById('trackFill');
  const trackThumb = document.getElementById('trackThumb');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const repeatBtn = document.getElementById('repeatBtn');
  const shuffleBtn = document.getElementById('shuffleBtn');

  // Format seconds to M:SS
  const formatTime = (secs) => {
    if (isNaN(secs) || secs < 0) return '0:00';
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Update Total Duration when audio metadata is loaded
  const onMetadataLoaded = () => {
    if (audio.duration && !isNaN(audio.duration)) {
      timeTotal.textContent = formatTime(audio.duration);
    }
  };

  audio.addEventListener('loadedmetadata', onMetadataLoaded);
  if (audio.readyState >= 1) {
    onMetadataLoaded();
  }

  // Update Progress during playback
  const updateProgress = () => {
    const duration = audio.duration || 207;
    const current = audio.currentTime || 0;
    const percentage = Math.min((current / duration) * 100, 100);

    // Update Page 1 Tracker
    if (trackFill) trackFill.style.width = `${percentage}%`;
    if (trackThumb) trackThumb.style.left = `${percentage}%`;
    if (timeCurrent) timeCurrent.textContent = formatTime(current);
  };

  // Sync Audio Play/Pause UI on Page 1
  const syncAudioUI = (isPlaying) => {
    if (isPlaying) {
      iconPause.classList.remove('hidden');
      iconPlay.classList.add('hidden');
    } else {
      iconPause.classList.add('hidden');
      iconPlay.classList.remove('hidden');
    }
  };

  // Play / Pause Toggle
  const togglePlay = () => {
    if (audio.paused) {
      audio.play().then(() => {
        syncAudioUI(true);
      }).catch(err => {
        console.warn('Playback prevented by browser policy:', err);
      });
    } else {
      audio.pause();
      syncAudioUI(false);
    }
  };

  // Click on Track Slider to Seek
  const seek = (e) => {
    const rect = trackSlider.getBoundingClientRect();
    const clickX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const ratio = clickX / rect.width;
    const duration = audio.duration || 207;
    audio.currentTime = ratio * duration;
    updateProgress();
  };

  // Controls Event Listeners
  playBtn.addEventListener('click', togglePlay);
  trackSlider.addEventListener('click', seek);
  audio.addEventListener('timeupdate', updateProgress);
  audio.addEventListener('play', () => syncAudioUI(true));
  audio.addEventListener('pause', () => syncAudioUI(false));

  // Audio Ended Handler
  audio.addEventListener('ended', () => {
    if (!audio.loop) {
      syncAudioUI(false);
      audio.currentTime = 0;
      updateProgress();
    }
  });

  // Previous Button — Restart Song
  prevBtn.addEventListener('click', () => {
    audio.currentTime = 0;
    updateProgress();
  });

  // Next Button — Skip 10s or Replay
  nextBtn.addEventListener('click', () => {
    if (audio.currentTime + 10 < audio.duration) {
      audio.currentTime += 10;
    } else {
      audio.currentTime = 0;
    }
    updateProgress();
  });

  // Repeat Button — Toggle loop
  let isRepeat = false;
  repeatBtn.addEventListener('click', () => {
    isRepeat = !isRepeat;
    audio.loop = isRepeat;
    repeatBtn.style.opacity = isRepeat ? '1' : '0.6';
    repeatBtn.style.filter = isRepeat ? 'drop-shadow(0 0 4px rgba(255,255,255,0.8))' : 'none';
  });

  // Shuffle Button feedback
  let isShuffle = false;
  shuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    shuffleBtn.style.opacity = isShuffle ? '1' : '0.6';
  });

  // Initialize UI state
  syncAudioUI(!audio.paused);
  updateProgress();

  /* ==========================================
     Page Navigation Logic (Page 1 <-> Page 2 <-> Page 3 <-> Page 4 <-> Page 5)
     ========================================== */
  const page1 = document.getElementById('page-1');
  const page2 = document.getElementById('page-2');
  const page3 = document.getElementById('page-3');
  const page4 = document.getElementById('page-4');
  const page5 = document.getElementById('page-5');
  const toPage2Btn = document.getElementById('toPage2Btn');
  const toPage3Btn = document.getElementById('toPage3Btn');
  const toPage4Btn = document.getElementById('toPage4Btn');
  const toPage5Btn = document.getElementById('toPage5Btn');

  // Universal Page Entrance Animation Trigger
  const triggerPageAnimations = (pageElement) => {
    if (!pageElement) return;
    pageElement.classList.remove('play-entrance');
    void pageElement.offsetWidth; // trigger reflow
    pageElement.classList.add('play-entrance');
  };

  // Trigger Page 1 on initial load
  triggerPageAnimations(page1);

  // Go to Page 2
  if (toPage2Btn) {
    toPage2Btn.addEventListener('click', () => {
      page1.classList.add('hidden');
      if (page3) page3.classList.add('hidden');
      if (page4) page4.classList.add('hidden');
      if (page5) page5.classList.add('hidden');
      page2.classList.remove('hidden');
      triggerPageAnimations(page2);
    });
  }

  // Go to Page 3
  if (toPage3Btn) {
    toPage3Btn.addEventListener('click', () => {
      if (page1) page1.classList.add('hidden');
      page2.classList.add('hidden');
      if (page4) page4.classList.add('hidden');
      if (page5) page5.classList.add('hidden');
      if (page3) {
        page3.classList.remove('hidden');
        triggerPageAnimations(page3);
      }
    });
  }

  // Go to Page 4 (Balloons & Wishes)
  if (toPage4Btn) {
    toPage4Btn.addEventListener('click', () => {
      if (page1) page1.classList.add('hidden');
      if (page2) page2.classList.add('hidden');
      if (page3) page3.classList.add('hidden');
      if (page5) page5.classList.add('hidden');
      if (page4) {
        page4.classList.remove('hidden');
        triggerPageAnimations(page4);
      }
    });
  }

  // Go to Page 5 (Grand Finale & Celebration)
  if (toPage5Btn) {
    toPage5Btn.addEventListener('click', () => {
      if (page1) page1.classList.add('hidden');
      if (page2) page2.classList.add('hidden');
      if (page3) page3.classList.add('hidden');
      if (page4) page4.classList.add('hidden');
      if (page5) {
        page5.classList.remove('hidden');
        triggerPageAnimations(page5);
      }
      // Grand entrance celebration: Fireworks + Balloons + Confetti
      launchBalloonBlast();
      triggerConfetti();
      triggerCelebrationStreamers();
      setTimeout(() => {
        launchGrandFireworksShow();
      }, 500);
    });
  }



  // Master Full-Scale Fireworks & Balloons Blast Sequence for Page 5
  const triggerMegaCelebrationShow = () => {
    // 1. Rising Balloons that burst into radiant fireworks
    launchBalloonBlast();

    // 2. High-speed aerial firework rockets
    setTimeout(() => {
      launchGrandFireworksShow();
    }, 400);

    // 3. Dense Celebration Confetti & Metallic Streamers
    triggerConfetti();
    triggerCelebrationStreamers();

    // 4. Second wave grand rocket finale after 1.4s
    setTimeout(() => {
      launchGrandFireworksShow();
      triggerConfetti();
    }, 1400);
  };

  // Page 5: Interactive 3D Gift Box Unboxing Experience
  const surpriseGiftBox = document.getElementById('surpriseGiftBox');
  const giftTapHint = document.getElementById('giftTapHint');
  const blastCelebrationBtn = document.getElementById('blastCelebrationBtn');

  if (surpriseGiftBox) {
    surpriseGiftBox.addEventListener('click', (e) => {
      // Don't re-trigger if clicking the "Fire Again" button directly
      if (e.target.closest('#blastCelebrationBtn')) return;

      if (!surpriseGiftBox.classList.contains('opened')) {
        surpriseGiftBox.classList.add('opened');
        if (giftTapHint) {
          giftTapHint.style.opacity = '0';
          giftTapHint.style.transform = 'translateY(-10px)';
          setTimeout(() => { giftTapHint.style.display = 'none'; }, 400);
        }
        // Blast full mega celebration with balloons & aerial fireworks!
        triggerMegaCelebrationShow();
      }
    });
  }

  // Fire Again Button
  if (blastCelebrationBtn) {
    blastCelebrationBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      triggerMegaCelebrationShow();
    });
  }

  /* ==========================================
     Page 4: Interactive Balloons & Wishes Checklist
     ========================================== */
  // 1. Wish Items Interactive Toggle
  const wishItems = document.querySelectorAll('.wish-item');
  wishItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('wish-checked');
      const badge = item.querySelector('.wish-check-badge');
      if (badge) {
        badge.textContent = item.classList.contains('wish-checked') ? '💖' : '✨';
        badge.style.opacity = '1';
        badge.style.transform = 'scale(1.3)';
        setTimeout(() => {
          badge.style.transform = 'scale(1)';
        }, 250);
      }
    });
  });

  // 2. Balloon Interactive Gentle Wobble on Click
  const balloonItems = document.querySelectorAll('.balloon-item');
  balloonItems.forEach(balloon => {
    balloon.addEventListener('click', () => {
      balloon.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      balloon.style.transform = 'scale(1.2) translateY(-12px) rotate(8deg)';
      setTimeout(() => {
        balloon.style.transform = '';
      }, 400);
    });
  });

  // 3. Cheering Bunny Click Hop Animation
  const bunnyGif = document.getElementById('bunnyGifContainer');
  if (bunnyGif) {
    bunnyGif.addEventListener('click', () => {
      bunnyGif.classList.remove('bunny-cheer');
      void bunnyGif.offsetWidth; // trigger reflow
      bunnyGif.classList.add('bunny-cheer');
    });
  }
  /* ==========================================
     Page 3: 3D Flip Polaroid Card Interaction
     ========================================== */
  /* ==========================================
     Page 3: 3 Side-by-Side Polaroid Cards Trio
     (Independent 3D Flip on Each Card)
     ========================================== */
  const flipCards = document.querySelectorAll('.flip-polaroid-card');
  flipCards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('is-flipped');
    });
  });

  /* ==========================================
     Page 2: Cake Candle & Balloon Blast Interaction
     ========================================== */
  const cakeWrap = document.getElementById('cakeWrap');
  const badgeText = document.getElementById('badgeText');
  const cakeSubtitle = document.getElementById('cakeSubtitle');
  const confettiContainer = document.getElementById('confettiContainer');
  const balloonBlastContainer = document.getElementById('balloonBlastContainer');

  // Balloon Blast Celebration Effect (GPU-Optimized & Batch-Rendered)
  const launchBalloonBlast = () => {
    if (!balloonBlastContainer) return;
    balloonBlastContainer.innerHTML = '';

    const balloonColors = [
      '#ff4d79', // vibrant pink
      '#ffd166', // champagne gold
      '#00f0ff', // bright sky cyan
      '#f72585', // radiant magenta
      '#7209b7', // royal purple
      '#ff8fa3'  // blush rose
    ];

    const isMobile = window.innerWidth <= 768 || ('ontouchstart' in window);
    const containerW = balloonBlastContainer.clientWidth || window.innerWidth;
    const containerH = balloonBlastContainer.clientHeight || window.innerHeight;

    const balloonCount = isMobile ? 4 : 6;
    for (let i = 0; i < balloonCount; i++) {
      const balloon = document.createElement('div');
      balloon.className = 'blast-balloon';

      // Spread naturally across width with organic stagger
      const startLeft = isMobile ? (10 + (i * 24) + (Math.random() * 4 - 2)) : (12 + (i * 15) + (Math.random() * 6 - 3));
      const color = balloonColors[i % balloonColors.length];
      const bSize = (isMobile ? 44 : 52) + Math.random() * 12;
      const riseTime = 1.3 + (i * 0.08) + Math.random() * 0.2; // 1.3s to 1.7s
      const driftX = (Math.random() - 0.5) * (isMobile ? 24 : 40);
      const targetYVh = 48 + Math.random() * 24; // 48vh to 72vh rise
      const delay = i * 0.08; // Staggered release: smooth wave

      balloon.style.left = `${startLeft}%`;
      balloon.style.setProperty('--b-size', `${bSize}px`);
      balloon.style.setProperty('--rise-time', `${riseTime}s`);
      balloon.style.setProperty('--balloon-delay', `${delay}s`);
      balloon.style.setProperty('--drift-x', `${driftX}px`);
      balloon.style.setProperty('--target-y', `-${targetYVh}vh`);

      balloon.innerHTML = `
        <div class="balloon-body" style="background: ${color};"></div>
        <div class="balloon-string"></div>
      `;

      balloonBlastContainer.appendChild(balloon);

      // Pre-calculated apex position — Eliminates getBoundingClientRect layout thrashing
      const popX = (containerW * startLeft) / 100 + driftX;
      const popY = containerH - 90 - (containerH * targetYVh) / 100;
      const popDelayMs = (delay + riseTime) * 1000 - 60;

      // Pop the balloon at its peak height with radiant explosion
      setTimeout(() => {
        if (!balloon.parentElement) return;
        balloon.remove();
        createPopBurst(popX, popY, color, false);
      }, popDelayMs);
    }
  };

  // Radiant Fireworks Pop Burst (Lag-Free Batch DOM Construction)
  const createPopBurst = (x, y, baseColor, isGrand = false) => {
    if (!balloonBlastContainer) return;
    const isMobile = window.innerWidth <= 768 || ('ontouchstart' in window);
    const burst = document.createElement('div');
    burst.className = 'blast-pop-burst';
    burst.style.left = `${x}px`;
    burst.style.top = `${y}px`;

    // 1. Central Diamond Flash
    const flash = document.createElement('div');
    flash.className = isGrand ? 'firework-flash grand' : 'firework-flash';
    burst.appendChild(flash);

    // 2. Dual Shockwave Rings
    const ring1 = document.createElement('div');
    ring1.className = 'blast-ring';
    ring1.style.setProperty('--ring-size', isGrand ? (isMobile ? '140px' : '190px') : (isMobile ? '100px' : '130px'));
    burst.appendChild(ring1);

    const ring2 = document.createElement('div');
    ring2.className = 'blast-ring ring-secondary';
    ring2.style.setProperty('--ring-size', isGrand ? (isMobile ? '110px' : '150px') : (isMobile ? '80px' : '100px'));
    burst.appendChild(ring2);

    // 3. Fireworks Colors Palette
    const fireworkColors = [
      '#ffd700', // Sparkling 24k Gold
      '#ff1361', // Electric Rose
      '#00f0ff', // Cyber Turquoise
      '#a855f7', // Vivid Purple
      '#ffffff', // Diamond White
      baseColor
    ];

    // 4. Batch generate sparks in a DocumentFragment for single reflow
    const fragment = document.createDocumentFragment();
    const sparkCount = isGrand ? (isMobile ? 18 : 28) : (isMobile ? 12 : 18); // visually dense, 60fps smooth
    const starChars = ['✦', '★', '✧', '✨', '💖'];

    for (let j = 0; j < sparkCount; j++) {
      const isStar = j % 3 === 0;
      const spark = document.createElement('div');
      const sColor = fireworkColors[j % fireworkColors.length];

      const angle = (j / sparkCount) * 2 * Math.PI + ((Math.random() - 0.5) * 0.25);
      const distance = (isGrand ? 50 : 35) + Math.random() * (isGrand ? (isMobile ? 55 : 85) : 50);
      const fx = Math.cos(angle) * distance;
      const fy = Math.sin(angle) * distance;
      const duration = (isGrand ? 0.85 : 0.7) + Math.random() * 0.3;
      const gravity = 20 + Math.random() * 25;

      spark.style.setProperty('--fx', `${fx.toFixed(1)}px`);
      spark.style.setProperty('--fy', `${fy.toFixed(1)}px`);
      spark.style.setProperty('--gravity', `${gravity.toFixed(1)}px`);
      spark.style.setProperty('--spark-duration', `${duration.toFixed(2)}s`);
      spark.style.color = sColor;

      if (isStar) {
        spark.className = 'firework-star';
        spark.textContent = starChars[j % starChars.length];
        spark.style.setProperty('--star-size', `${(isGrand ? (isMobile ? 13 : 15) : 12) + (j % 4)}px`);
      } else {
        spark.className = 'firework-spark';
        spark.style.backgroundColor = sColor;
        spark.style.setProperty('--spark-size', `${(isGrand ? 4 : 4.5) + (j % 2)}px`);
      }

      fragment.appendChild(spark);
    }

    burst.appendChild(fragment);
    balloonBlastContainer.appendChild(burst);

    setTimeout(() => {
      burst.remove();
    }, 1100);
  };

  // Grand Aerial Fireworks Finale (Multiple Rockets Shooting to the Sky)
  const launchGrandFireworksShow = () => {
    if (!balloonBlastContainer) return;
    const isMobile = window.innerWidth <= 768 || ('ontouchstart' in window);

    // Ambient Screen Flash Glow
    const glowFlash = document.createElement('div');
    glowFlash.className = 'celebration-glow-flash';
    balloonBlastContainer.appendChild(glowFlash);
    setTimeout(() => glowFlash.remove(), 700);

    // Sequence of grand aerial rockets detonating in the sky
    const grandRockets = isMobile ? [
      { left: 25, targetY: 28, delay: 180, color: '#ffd700' },
      { left: 75, targetY: 24, delay: 550, color: '#ff1361' },
      { left: 50, targetY: 18, delay: 1000, color: '#00f0ff' }
    ] : [
      { left: 24, targetY: 28, delay: 200, color: '#ffd700' },
      { left: 74, targetY: 24, delay: 500, color: '#ff1361' },
      { left: 48, targetY: 18, delay: 850, color: '#00f0ff' },
      { left: 32, targetY: 34, delay: 1200, color: '#a855f7' },
      { left: 66, targetY: 22, delay: 1550, color: '#ffd700' }
    ];

    grandRockets.forEach(({ left, targetY, delay, color }) => {
      setTimeout(() => {
        // Create rising rocket with sparkle trail
        const rocket = document.createElement('div');
        rocket.className = 'firework-rocket';
        rocket.style.left = `${left}%`;
        rocket.style.bottom = '15%';
        const riseVh = 85 - targetY;
        rocket.style.setProperty('--rocket-target-y', `-${riseVh}vh`);
        rocket.style.setProperty('--rise-time', '0.6s');
        balloonBlastContainer.appendChild(rocket);

        // Explode into grand shell at apex
        setTimeout(() => {
          rocket.remove();
          const targetPxX = (window.innerWidth * left) / 100;
          const targetPxY = (window.innerHeight * targetY) / 100;
          createPopBurst(targetPxX, targetPxY, color, true);
        }, 580);
      }, delay);
    });
  };

  // 3D Spiraling Metallic Streamers
  const triggerCelebrationStreamers = () => {
    if (!confettiContainer) return;
    const isMobile = window.innerWidth <= 768 || ('ontouchstart' in window);
    const streamerColors = ['#ffd700', '#ff1361', '#ff8fa3', '#00f0ff', '#ffffff', '#a855f7'];

    const fragment = document.createDocumentFragment();
    const streamerCount = isMobile ? 8 : 14;
    for (let i = 0; i < streamerCount; i++) {
      const streamer = document.createElement('div');
      streamer.className = 'streamer-spiral';
      streamer.style.left = `${Math.random() * 100}%`;
      streamer.style.backgroundColor = streamerColors[i % streamerColors.length];
      streamer.style.animationDelay = `${(Math.random() * 0.35).toFixed(2)}s`;
      streamer.style.animationDuration = `${(2.8 + Math.random() * 1.2).toFixed(2)}s`;
      fragment.appendChild(streamer);
    }
    confettiContainer.appendChild(fragment);

    setTimeout(() => {
      document.querySelectorAll('.streamer-spiral').forEach(s => s.remove());
    }, 4500);
  };

  // Full Screen Confetti Cannon (Batched)
  const triggerConfetti = () => {
    if (!confettiContainer) return;
    const isMobile = window.innerWidth <= 768 || ('ontouchstart' in window);
    const colors = ['#ff6b8b', '#ffb3c6', '#ffd166', '#ffffff', '#f72585', '#00f0ff', '#a855f7'];

    const fragment = document.createDocumentFragment();
    const confettiCount = isMobile ? 22 : 40;
    for (let i = 0; i < confettiCount; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.backgroundColor = colors[i % colors.length];
      piece.style.animationDelay = `${(Math.random() * 0.4).toFixed(2)}s`;
      piece.style.animationDuration = `${(2.2 + Math.random() * 1.5).toFixed(2)}s`;
      const size = 6 + Math.random() * 7;
      piece.style.width = `${size.toFixed(1)}px`;
      piece.style.height = `${(size * (i % 2 === 0 ? 1.4 : 1)).toFixed(1)}px`;
      if (i % 3 === 0) piece.style.borderRadius = '50%';
      fragment.appendChild(piece);
    }
    confettiContainer.appendChild(fragment);

    setTimeout(() => {
      document.querySelectorAll('.confetti-piece').forEach(c => c.remove());
    }, 4500);
  };

  if (cakeWrap) {
    cakeWrap.addEventListener('click', () => {
      // Cake joyful cheer bounce animation
      cakeWrap.classList.remove('cheering');
      void cakeWrap.offsetWidth; // trigger reflow
      cakeWrap.classList.add('cheering');

      // 1. Launch Rising Balloons that Burst into Fireworks
      launchBalloonBlast();

      // 2. Cascade into Grand Aerial Fireworks Show
      setTimeout(() => {
        launchGrandFireworksShow();
      }, 700);

      // 3. Party Streamers & Festive Confetti Storm
      triggerConfetti();
      triggerCelebrationStreamers();

      // 4. Update Celebration Messaging
      if (badgeText) {
        badgeText.innerHTML = '🎉 Joyful Celebration! 🎆 💖 ✨';
      }
      if (cakeSubtitle) {
        cakeSubtitle.innerHTML = '✨ Happy Birthday! Wishing you magic, smiles & celebration! 🎂💖';
      }
    });
  }
});
