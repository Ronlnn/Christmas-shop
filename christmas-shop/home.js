document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.burger-menu');
  const closeBtn = document.querySelector('.close-button');
  const sideMenu = document.getElementById('sideMenu');
  const sideMenuItems = document.querySelectorAll('.side-menu-content a');
  const sliderSection = document.querySelector('.slider-section');
  const sliderRowContainer = document.querySelector('.slider-row-container');
  const prevButton = document.querySelector('.inactive-slider-button');
  const nextButton = document.querySelector('.slider-button');
  const totalWidth = sliderRowContainer.scrollWidth;
  const visibleAreaWidth = sliderRowContainer.offsetWidth;
  let currentPosition = 0;

  updateButtons();
  prevButton.addEventListener('click', () => moveSlider('left'));
  nextButton.addEventListener('click', () => moveSlider('right'));

  function getStep() {
    const screenWidth = window.innerWidth;
    const totalScrollableWidth = totalWidth - visibleAreaWidth;

    if (screenWidth > 768) {
      return totalScrollableWidth / 3;
    } else {
      return totalScrollableWidth / 6;
    }
  }

  function moveSlider(direction) {
    const step = getStep();

    if (direction === 'left' && currentPosition > 0) {
      currentPosition -= step;
    } else if (
      direction === 'right' &&
      currentPosition < totalWidth - visibleAreaWidth
    ) {
      currentPosition += step;
    }

    currentPosition = Math.min(currentPosition, totalWidth - visibleAreaWidth);
    currentPosition = Math.max(currentPosition, 0);

    sliderRowContainer.style.transform = `translateX(-${currentPosition}px)`;
    updateButtons();
  }

  function updateButtons() {
    const maxPosition = totalWidth - visibleAreaWidth;

    // кнопка назад
    if (currentPosition === 0) {
      prevButton.classList.add('inactive-slider-button');
      prevButton.classList.remove('slider-button');
    } else {
      prevButton.classList.remove('inactive-slider-button');
      prevButton.classList.add('slider-button');
    }

    // кнопка вперед
    if (currentPosition >= maxPosition) {
      nextButton.classList.add('inactive-slider-button');
      nextButton.classList.remove('slider-button');
    } else {
      nextButton.classList.remove('inactive-slider-button');
      nextButton.classList.add('slider-button');
    }
  }
  // Открытие/закрытие меню
  burgerMenu.addEventListener('click', () => {
    sideMenu.classList.add('open');
    burgerMenu.style.display = 'none';
    closeBtn.style.display = 'block';
    document.body.classList.add('menu-open');
  });

  closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('open');
    closeBtn.style.display = 'none';
    burgerMenu.style.display = 'block';
    document.body.classList.remove('menu-open');
  });

  sideMenuItems.forEach(item => {
    item.addEventListener('click', () => {
      sideMenu.classList.remove('open');
      closeBtn.style.display = 'none';
      burgerMenu.style.display = 'block';
      document.body.classList.remove('menu-open');
    });
  });

  //Таймер
  function formatTime(num) {
    return num < 10 ? `0${num}` : num;
  }

  function updateTimer() {
    const newYear = new Date(Date.UTC(2025, 0, 1));
    const now = new Date(); // Текущее время
    const timeDiff = newYear - now;

    if (timeDiff <= 0) {
      document.getElementById('days').textContent = '00';
      document.getElementById('hours').textContent = '00';
      document.getElementById('minutes').textContent = '00';
      document.getElementById('seconds').textContent = '00';
      return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = formatTime(days);
    document.getElementById('hours').textContent = formatTime(hours);
    document.getElementById('minutes').textContent = formatTime(minutes);
    document.getElementById('seconds').textContent = formatTime(seconds);
  }
  setInterval(updateTimer, 1000);
  updateTimer();

  //Рандом подарков
  const giftsContainer = document.getElementById('gifts-container');
  const gifts = [
    {
      imgSrc: 'src/gift-for-work.png',
      name: 'Bug Magnet',
      description:
        'Able to find bugs in code like they were placed there on purpose.',
      category: 'work',
      superpowers: {
        live: '+500',
        create: '+500',
        love: '+200',
        dream: '+400',
      },
    },

    {
      imgSrc: 'src/gift-for-work.png',
      name: 'Console.log Guru',
      description: 'Uses console.log like a crystal ball to find any issue.',
      category: 'work',
      superpowers: {
        live: '+500',
        create: '+500',
        love: '+200',
        dream: '+400',
      },
    },

    {
      imgSrc: 'src/gift-for-work.png',
      name: 'Shortcut Cheater',
      description:
        'Knows every keyboard shortcut like they were born with them.',
      category: 'work',
      superpowers: {
        live: '+500',
        create: '+500',
        love: '+400',
        dream: '+200',
      },
    },

    {
      imgSrc: 'src/gift-for-work.png',
      name: 'Merge Master',
      description:
        'Merges branches in Git without conflicts, like a wizard during an exam.',
      category: 'work',
      superpowers: {
        live: '+200',
        create: '+500',
        love: '+200',
        dream: '+300',
      },
    },

    {
      imgSrc: 'src/gift-for-work.png',
      name: 'Async Tamer',
      description:
        'Handles asynchronous code and promises like well-trained pets.',
      category: 'work',
      superpowers: {
        live: '+100',
        create: '+400',
        love: '+200',
        dream: '+300',
      },
    },

    {
      imgSrc: 'src/gift-for-work.png',
      name: 'CSS Tamer',
      description:
        'Can make Flexbox and Grid work together like they were always best friends.',
      category: 'work',
      superpowers: {
        live: '+200',
        create: '+500',
        love: '+200',
        dream: '+300',
      },
    },

    {
      imgSrc: 'src/gift-for-work.png',
      name: 'Time Hacker',
      description:
        'Writes code at the last moment but always meets the deadline.',
      category: 'work',
      superpowers: {
        live: '+500',
        create: '+500',
        love: '+500',
        dream: '+200',
      },
    },

    {
      imgSrc: 'src/gift-for-work.png',
      name: 'Layout Master',
      description:
        "Creates perfect layouts on the first try, like they can read the designer's mind.",
      category: 'work',
      superpowers: {
        live: '+500',
        create: '+300',
        love: '+200',
        dream: '+200',
      },
    },

    {
      imgSrc: 'src/gift-for-work.png',
      name: 'Documentation Whisperer',
      description:
        'Understands cryptic documentation as if they wrote it themselves.',
      category: 'work',
      superpowers: {
        live: '+500',
        create: '+500',
        love: '+200',
        dream: '+100',
      },
    },

    {
      imgSrc: 'src/gift-for-work.png',
      name: 'Feedback Master',
      description: 'Accepts client revisions with the Zen calm of Buddha.',
      category: 'work',
      superpowers: {
        live: '+300',
        create: '+500',
        love: '+300',
        dream: '+400',
      },
    },

    {
      imgSrc: 'src/gift-for-work.png',
      name: 'Code Minimalist',
      description:
        'Writes code so concise that one line does more than a whole file.',
      category: 'work',
      superpowers: {
        live: '+500',
        create: '+500',
        love: '+500',
        dream: '+200',
      },
    },

    {
      imgSrc: 'src/gift-for-work.png',
      name: 'Pixel-Perfect Magician',
      description:
        'Aligns elements to the last pixel, even when the design looks abstract.',
      category: 'work',
      superpowers: {
        live: '+500',
        create: '+500',
        love: '+400',
        dream: '+400',
      },
    },

    {
      imgSrc: 'src/gift-for-health.png',
      name: 'Posture Levitation',
      description:
        'Can sit for hours, but maintains perfect posture like a ballerina.',
      category: 'health',
      superpowers: {
        live: '+400',
        create: '+500',
        love: '+500',
        dream: '+400',
      },
    },

    {
      imgSrc: 'src/gift-for-health.png',
      name: 'Step Master',
      description:
        'Gets 10,000 steps a day even while sitting at the computer.',
      category: 'health',
      superpowers: {
        live: '+400',
        create: '+300',
        love: '+500',
        dream: '+400',
      },
    },

    {
      imgSrc: 'src/gift-for-health.png',
      name: 'Snack Resister',
      description: 'Ignoring desktop snacks like a strict dietician.',
      category: 'health',
      superpowers: {
        live: '+400',
        create: '+100',
        love: '+200',
        dream: '+400',
      },
    },

    {
      imgSrc: 'src/gift-for-health.png',
      name: 'Hydration Bot',
      description:
        'Drinks the recommended 2 liters of water a day like a health-programmed robot.',
      category: 'health',
      superpowers: {
        live: '+500',
        create: '+300',
        love: '+500',
        dream: '+500',
      },
    },

    {
      imgSrc: 'src/gift-for-health.png',
      name: 'Sleep Overlord',
      description: 'Sleeps 6 hours but feels like they had 10.',
      category: 'health',
      superpowers: {
        live: '+400',
        create: '+500',
        love: '+500',
        dream: '+500',
      },
    },

    {
      imgSrc: 'src/gift-for-health.png',
      name: 'Break Guru',
      description:
        'Takes a stretch break every hour without forgetting, no matter how focused.',
      category: 'health',
      superpowers: {
        live: '+300',
        create: '+300',
        love: '+300',
        dream: '+400',
      },
    },

    {
      imgSrc: 'src/gift-for-health.png',
      name: 'Eye Protector',
      description:
        'Can work all day at the monitor without feeling like their eyes are on fire.',
      category: 'health',
      superpowers: {
        live: '+100',
        create: '+300',
        love: '+500',
        dream: '+400',
      },
    },

    {
      imgSrc: 'src/gift-for-health.png',
      name: 'Stress Dodger',
      description: 'Masters meditation right at the keyboard.',
      category: 'health',
      superpowers: {
        live: '+100',
        create: '+400',
        love: '+200',
        dream: '+400',
      },
    },

    {
      imgSrc: 'src/gift-for-health.png',
      name: 'Yoga Coder',
      description: 'Easily switches from coding to yoga and back.',
      category: 'health',
      superpowers: {
        live: '+400',
        create: '+400',
        love: '+400',
        dream: '+400',
      },
    },

    {
      imgSrc: 'src/gift-for-health.png',
      name: 'Healthy Snacker',
      description:
        'Always picks fruit, even when chocolate is within arm’s reach.',
      category: 'health',
      superpowers: {
        live: '+400',
        create: '+300',
        love: '+200',
        dream: '+400',
      },
    },

    {
      imgSrc: 'src/gift-for-health.png',
      name: 'Chair Exerciser',
      description: 'Manages to work out without leaving the chair.',
      category: 'health',
      superpowers: {
        live: '+500',
        create: '+500',
        love: '+500',
        dream: '+400',
      },
    },

    {
      imgSrc: 'src/gift-for-health.png',
      name: 'Caffeine Filter',
      description:
        'Drinks coffee at night and still falls asleep with no problem.',
      category: 'health',
      superpowers: {
        live: '+400',
        create: '+300',
        love: '+500',
        dream: '+200',
      },
    },

    {
      imgSrc: 'src/gift-for-harmony.png',
      name: 'Joy Charger',
      description:
        'Finds joy in the little things—even in a build that finishes unexpectedly fast.',
      category: 'harmony',
      superpowers: {
        live: '+200',
        create: '+200',
        love: '+500',
        dream: '+500',
      },
    },

    {
      imgSrc: 'src/gift-for-harmony.png',
      name: 'Error Laugher',
      description:
        'Laughs at code errors like they’re jokes instead of getting angry.',
      category: 'harmony',
      superpowers: {
        live: '+300',
        create: '+200',
        love: '+500',
        dream: '+500',
      },
    },

    {
      imgSrc: 'src/gift-for-harmony.png',
      name: 'Bug Acceptance Guru',
      description:
        'Accepts bugs as part of the journey to perfection — it’s just another task.',
      category: 'harmony',
      superpowers: {
        live: '+300',
        create: '+200',
        love: '+500',
        dream: '+400',
      },
    },

    {
      imgSrc: 'src/gift-for-harmony.png',
      name: 'Spontaneous Coding Philosopher',
      description:
        'Philosophically accepts any client suggestion after a long refactor.',
      category: 'harmony',
      superpowers: {
        live: '+300',
        create: '+200',
        love: '+500',
        dream: '+400',
      },
    },

    {
      imgSrc: 'src/gift-for-harmony.png',
      name: 'Deadline Sage',
      description:
        'Remains zen even when the deadline is close and the project manager is stressed.',
      category: 'harmony',
      superpowers: {
        live: '+200',
        create: '+200',
        love: '+300',
        dream: '+500',
      },
    },

    {
      imgSrc: 'src/gift-for-harmony.png',
      name: 'Inspiration Maestro',
      description:
        'Finds inspiration on an empty screen as if masterpieces are already there.',
      category: 'harmony',
      superpowers: {
        live: '+300',
        create: '+200',
        love: '+400',
        dream: '+100',
      },
    },

    {
      imgSrc: 'src/gift-for-harmony.png',
      name: 'Peace Keeper',
      description: 'Maintains inner calm even in moments of intense crisis.',
      category: 'harmony',
      superpowers: {
        live: '+200',
        create: '+200',
        love: '+500',
        dream: '+500',
      },
    },

    {
      imgSrc: 'src/gift-for-harmony.png',
      name: 'Empathy Guru',
      description: 'Feels the team’s mood and can lift everyone’s spirits.',
      category: 'harmony',
      superpowers: {
        live: '+500',
        create: '+200',
        love: '+500',
        dream: '+500',
      },
    },

    {
      imgSrc: 'src/gift-for-harmony.png',
      name: 'Laughter Generator',
      description:
        'Can lighten any tense situation with a joke that even bugs laugh at.',
      category: 'harmony',
      superpowers: {
        live: '+300',
        create: '+200',
        love: '+200',
        dream: '+500',
      },
    },

    {
      imgSrc: 'src/gift-for-harmony.png',
      name: 'Pause Master',
      description:
        'Knows when to just step back from the keyboard and breathe.',
      category: 'harmony',
      superpowers: {
        live: '+300',
        create: '+200',
        love: '+100',
        dream: '+100',
      },
    },

    {
      imgSrc: 'src/gift-for-harmony.png',
      name: 'Coder Healer',
      description:
        'Can support a colleague in their darkest hour, even if it’s a 500 error.',
      category: 'harmony',
      superpowers: {
        live: '+300',
        create: '+200',
        love: '+500',
        dream: '+500',
      },
    },

    {
      imgSrc: 'src/gift-for-harmony.png',
      name: 'Music Code Curator',
      description:
        'Creates work playlists so good, even deadlines follow the rhythm.',
      category: 'harmony',
      superpowers: {
        live: '+300',
        create: '+200',
        love: '+300',
        dream: '+200',
      },
    },
  ];

  function getRandomGifts(giftsArray, numberOfGifts) {
    const shuffled = [...giftsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numberOfGifts);
  }

  function displayGifts(giftsArray) {
    giftsArray.forEach(gift => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.setAttribute('data-name', gift.name);

      card.innerHTML = `
        <div class="img-container">
          <img src="${gift.imgSrc}" alt="${gift.alt}" class="card-img" />
        </div>
        <div class="gift-text-container">
          <h4 class="${gift.category}">${`For ${gift.category}`}</h4>
          <h3>${gift.name}</h3>
        </div>
      `;
      giftsContainer.appendChild(card);
    });
  }

  const randomGifts = getRandomGifts(gifts, 4);
  displayGifts(randomGifts);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  // Модальное окно
  const modalClass = document.querySelector('.modal');
  const modalContent = document.querySelector('.modal-content');

  // Обработчик кликов на карточки
  giftsContainer.addEventListener('click', event => {
    const card = event.target.closest('.card');
    if (card) {
      document.body.style.overflow = 'hidden';
      modalClass.classList.remove('hidden');
      modalClass.style.display = 'flex';
      const giftName = card.getAttribute('data-name');
      const selectedGift = gifts.find(gift => gift.name === giftName);

      if (selectedGift) {
        modalContent.innerHTML = `
      <button class="close-modal">
      <div class="line"></div>
      <div class="line"></div>
      </button>
        <div class= 'modal-img-container'> <img src="${
          selectedGift.imgSrc
        }" alt="${selectedGift.name}" class="modal-img" /></div>

        <div class= 'modal-text-container'>
           <h4 class="${selectedGift.category}">${capitalizeFirstLetter(
          `For ${selectedGift.category}`
        )}</h4>
           <h3>${selectedGift.name}</h3>
           <p>${selectedGift.description}</p>
        </div>
        <h4>Adds Superpowers to: </h4>
       <div class="superpowers">
       <div class= 'superpowers-item'>
<p class= 'superpowers-name'>Live </p>
<p id="live-value">${selectedGift.superpowers.live}</p>
<div class="superpowers-snowflake-container" id="live-snowflakes"></div>
</div>
<div class= 'superpowers-item'>
<p class= 'superpowers-name'>Create </p>
<p id="create-value">${selectedGift.superpowers.create}</p>
<div class="superpowers-snowflake-container" id="create-snowflakes"></div>
</div>
<div class= 'superpowers-item'>
<p class= 'superpowers-name'>Love</p>
<p id="love-value">${selectedGift.superpowers.love}</p>
<div class="superpowers-snowflake-container" id="love-snowflakes"></div>
</div>
<div class= 'superpowers-item'>
<p class= 'superpowers-name'>Dream</p>
<p id="dream-value">${selectedGift.superpowers.dream}</p>
<div class="superpowers-snowflake-container" id="dream-snowflakes"></div>
</div>
</div>

      `;

        function generateSnowflakes(superpowerValue, containerId) {
          const container = document.getElementById(containerId);
          container.innerHTML = '';

          const snowflakesCount = Math.min(
            5,
            Math.floor((superpowerValue - 100) / 100) + 1
          );

          for (let i = 0; i < 5; i++) {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');

            if (i < snowflakesCount) {
              snowflake.style.visibility = 'visible';
            } else if (i === snowflakesCount) {
              snowflake.style.opacity = '0.1';
              snowflake.style.visibility = 'visible';
            } else {
              snowflake.style.opacity = '0.1';
            }
            const svg = document.createElementNS(
              'http://www.w3.org/2000/svg',
              'svg'
            );
            svg.setAttribute('width', '14');
            svg.setAttribute('height', '16');
            svg.setAttribute('viewBox', '0 0 14 16');
            svg.setAttribute('fill', 'none');
            svg.innerHTML =
              '<path d="M11.1959 9.88162L10.6482 9.56542L12.1158 9.17219L11.8732 8.26704L9.50055 8.90278L8.38146 8.25667C8.39689 8.17336 8.40538 8.08765 8.40538 7.99997C8.40538 7.91229 8.39692 7.82655 8.38146 7.74327L9.50055 7.09716L11.8732 7.7329L12.1158 6.82775L10.6482 6.43452L11.1959 6.11831L13.546 5.97725L13.8921 4.02063L12.0246 3.34203L10.7274 5.30677L10.1797 5.62297L10.5729 4.15545L9.66778 3.91293L9.03204 6.28561L7.91226 6.93211C7.78247 6.82103 7.63242 6.73313 7.4683 6.67494V5.3828L9.20521 3.64586L8.5426 2.98325L7.46827 4.05755V3.42515L8.51792 1.32584L6.99976 0L5.48157 1.3259L6.53122 3.42521V4.05761L5.45689 2.98332L4.79429 3.64592L6.53119 5.38286V6.675C6.36708 6.73319 6.21702 6.82109 6.08724 6.93217L4.96746 6.28568L4.33171 3.91299L3.42656 4.15551L3.81979 5.62304L3.27213 5.30684L1.9749 3.34209L0.107422 4.02069L0.453485 5.97731L2.80362 6.11838L3.35128 6.43458L1.88375 6.82781L2.1263 7.73296L4.49898 7.09722L5.61807 7.74333C5.60264 7.82664 5.59414 7.91235 5.59414 8.00003C5.59414 8.08771 5.60261 8.17345 5.61807 8.25673L4.49898 8.90285L2.1263 8.2671L1.88375 9.17226L3.35128 9.56548L2.80362 9.88169L0.453485 10.0227L0.107422 11.9793L1.97493 12.6579L3.27216 10.6932L3.81985 10.377L3.42662 11.8445L4.33177 12.087L4.96752 9.71435L6.0873 9.06786C6.21708 9.17894 6.36714 9.26684 6.53125 9.32503V10.6172L4.79435 12.3541L5.45696 13.0167L6.53129 11.9424V12.5748L5.48163 14.6741L6.99983 16L8.51802 14.6741L7.46837 12.5748V11.9424L8.5427 13.0167L9.2053 12.3541L7.4684 10.6172V9.32503C7.63251 9.26684 7.78257 9.17894 7.91235 9.06786L9.03213 9.71435L9.66788 12.087L10.573 11.8445L10.1798 10.377L10.7275 10.6932L12.0247 12.6579L13.8922 11.9793L13.5462 10.0227L11.1959 9.88162Z" fill="#FF4646"/>';

            snowflake.appendChild(svg);
            container.appendChild(snowflake);
          }
        }
        generateSnowflakes(
          parseInt(document.getElementById('live-value').textContent),
          'live-snowflakes'
        );
        generateSnowflakes(
          parseInt(document.getElementById('create-value').textContent),
          'create-snowflakes'
        );
        generateSnowflakes(
          parseInt(document.getElementById('love-value').textContent),
          'love-snowflakes'
        );
        generateSnowflakes(
          parseInt(document.getElementById('dream-value').textContent),
          'dream-snowflakes'
        );

        const closeModal = modalContent.querySelector('.close-modal');
        closeModal.addEventListener('click', () => {
          modalClass.classList.add('hidden');
          modalClass.style.display = 'none';
          document.body.style.overflow = 'scroll';
        });
      }
    }
  });

  modalClass.addEventListener('click', e => {
    if (e.target === modalClass) {
      modalClass.classList.add('hidden');
      modalClass.style.display = 'none';
      document.body.style.overflow = 'scroll';
    }
  });

  //ScrollToTop Button

  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300 && window.innerWidth <= 768) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });
});
