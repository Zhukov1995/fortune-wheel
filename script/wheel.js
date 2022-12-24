// надписи и цвета на секторах
const prizes = [
    {
      text: "ТОП И ШОРТЫ DADAWEAR",
      color: "#B255FB",
      margin: '10px 0px 0px -25px'
    },
    { 
      text: "СТРИПЫ",
      color: "#131313",
      margin: '10px 0px 0px -20px'
    },
    { 
      text: "МЕРОПРИЯТИЯ DADADANCE",
      color: "#B255FB",
      margin: '10px 0px 0px -20px'
    },
    {
      text: "1000₽",
      color: "#131313",
      margin: '10px 0px 0px -20px'
    },
    {
      text: "ОНЛАЙН КУРС СТРИП/ТВЕРК",
      color: "#B255FB",
      margin: '10px 0px 0px -10px'
    },
    {
      text: "ДОСТУП В БД ЯНВАРЬ",
      color: "#131313",
      margin: '10px 0px 0px -10px'
    },
    {
      text: "ИНДИВ С ПЕДАГОГОМ",
      color: "#B255FB",
      margin: '10px 0px 0px -10px'
    },
    {
      text: "УРОК В ОТКРЫТОЙ ГРУППЕ",
      color: "#131313",
      margin: '-20px 0px 0px -10px'
    },
    {
        text: "ТРЕНИНГ В SECRETS",
        color: "#B255FB",
        margin: '-20px 0px 0px -10px'
    },
    {
        text: "ШОРТЫ DADAWEAR",
        color: "#131313",
        margin: '-15px 0px 0px -20px'
    },  
    {
        text: "БРЕНДИРОВАННЫЕ БУТЫЛКИ",
        color: "#B255FB",
        margin: '-35px 0px 0px -25px'
    },  
    {
        text: "БЛОКНОТЫ",
        color: "#131313",
        margin: '-20px 0px 0px -25px'
    },  
    {
        text: "REHAB.YOU - СКИДКА НА МАССАЖ 25%",
        color: "#B255FB",
        margin: '-10px 0px 0px -28px'
    },    
    {
        text: "РИЛС С ДАДАДЭНС",
        color: "#131313",
        margin: '0px 0px 0px -25px'
    },      
  ];

  let winPrizes = [];

    const setWinArr = (index) => {
        winPrizes.push(prizes[index].text);
    }

    let fullRounds = 0;
    let rounds = 0;
  

    const checkPromo = (promoCode) => {
        let validate;
        let localRounds;
        const length = promoCode.length;
        codes.forEach(item => {
          if(item.id == length) {
            if(item.promo.indexOf(promoCode) !== -1) {
              validate = true;
              localRounds = item.value;
            } else {
              validate = false;
            }
          }
        })
        return {validate,localRounds};
    }


    const setRounds = (promoCode) => {
        const {validate,localRounds} = checkPromo(promoCode);
        if(validate) {
          fullRounds = localRounds;
          rounds = localRounds;
          trigger.removeAttribute('disabled');
          trigger.textContent = `ОСТАЛОСЬ ${rounds}/${fullRounds} ПРОКРУТОК`;
          document.querySelector('.block__input').style ='display: none';
        }
    }

    const stopGame = () => {
          trigger.setAttribute('disabled', true);
    }

    document.querySelector('.btn-input').addEventListener('click', () => {
      const valueInput = document.querySelector('.input-promo').value;
      setRounds(valueInput);
    });

    const codes = [
      {
        id: 9,
        value:1,
        promo: [
            'l4.xUKIJ4', 'z-GSfyctw', '5HsHc@TLB', 'lv:sX4iLa', 'UJM5LL3c.',
            'ZyRpbM533', 'FvxS:fljF', 'jKXxQ2Pt9', 'PHzL7GAGY', 'dGL27ZrEW',],
      },
      {
        id: 10,
        value:2,
        promo: [
            'AL0tq2:I85', 'lr65XbYwOX', 'P9AHn6@4eh', 'hPQhIvNpt:', '4hVruKTMnt',
            'geHhwzbT-g', 's:xGgi5tKv', 'rzqGmnEBnM', 'zabWnhLHxH', 'Z@5beLr2Qk',]
      },
      {
        id: 11,
        value:3,
        promo: [
            '0w:6.9@17ms', 'gul-QP!R2.x', 'anlN.ahNpyJ', '..Zahhh2-B!', 'ADLti!CyM7t',
            'SdaGtGCbXxj', 'tuDclb4Lmq2', 'cmaLLeBz1Zq', '7BBWC@OtOp6', '2B0qikr!AUz',]
      },
      {
        id: 12,
        value:4,
        promo: [
            '5:YH-14W0LJV', 'ilKDODAi5hx!', 'j2O-sHMqTiEw', '5yltxUT-J.j4',
            'onCF@Te69fFY', 'SKaf@!0Ixr0B', '3gS:wFcCvX2S', 'Il@5wqtUuQVP',]
      },
      {
        id: 13,
        value:5,
        promo: [
            'eP7CM6BrnTpHk', '0XbWAKe7UjW-H', 'Jmiq7Gnxhzt1r', 'jl!zWEWntgl32',
            'SzMz2eNd2EgOn', 'UQY3AL:zKf8:K', '9AWRJdBSSXF5I', 'A@LEIhKRkj-vI',]
      },
      {
        id: 14,
        value:6,
        promo: [
            'l20.EhVFH4CFps', 'Q3XFTUZgIWH5Po', 'GOHGQtAhiFl5Wi', 'CSoErwik@g-L8n',
            ':8UyEGXjKNaJDZ', 'BPmcB@9JqZRuED', 'udrMlw6ufAvtqT', 'jDlNckA-6WyZIV',]
      },
      {
        id: 15,
        value:7,
        promo: [
            'mPvZ14VhPRIV3GE', 'xr6qK2Yb7OfvVGz', 'vB6qi6v.eLynKPs', 'yl6ZRoNoLyO!DiT',
            '6NEwTWbmA9J2Rkb', 'G1AP5l5f:p3!pu1', 'PY8cqdUdk8hWjdu', 'onbHbMHPboq-c1C',]
      },
      {
        id: 16,
        value:8,
        promo: [
            'DOuPS5am8ZGV640@', 'U4IG@:!ZT5-@lYp0', 'LikEt2m4OHnSWT5P', 'rl@iMoGZ8U0Ej4MJ',
            'V8czyRFsoY7bVUuT', 'Gug5J5HfImTW7:sg', 'm9OSe8UPTfgu2jY5', '-cNiZB0MDFcZsmK7',]
      },
      {
        id: 17,
        value:10,
        promo: [
            '5eGfTo84inxwmLO8B', 'hB!TH-1azYX7KGhc5', 'q-Xhwpy3F:uY87WW2',
            'eQT:3j3JCciPotVu6', 'mxs84vg!g0BtfYan7', 'vW@@Vxkay6auC7s4m',]
      },
      {
        id: 18,
        value:12,
        promo: [
            'pIRBw6NyvnB.9fJ6lF', 'XpHJktEcaMCjV7iALm', 'E4pQM6WdwHL9G0Bq.O',
            'nnMXbps8pQz4fjV5Tf', '!7gOZdeM31TEZ8-j@b', 'MDQUlmGrK9DjU8IiKe',]
      },
      {
        id: 19,
        value:14,
        promo: [
            'arDySsCs@h2Ed0IS43M', 't.gO2aWj:yJEWWYiwlC', 'Ic2!CFDF:E.gnv3Z9uQ',
            'xt6DM78TJA7BbAtrhFc', 'r@kwu2T3jNPqfNGmw-A', 'c9K6iRKj0BWzpZSWisQ',]
      },
      {
        id: 20,
        value:20,
        promo: [
            'auGqD3kkhaUhKhHf7I4o', '2J9bkeQ!:6nvm3JgDlRV', 'dSxWPArO8uwhQYJqjCT@',
            'EtERtbfySNuo1-Pt4A:C', '.EECdxGNzgD4WzNnRx-w', '-F2zhlqtrmqQ.X.ZAe0a',]
      },
      {
        id: 21,
        value:22,
        promo: [
            'twM5bgXmzKYaGLNblqg16', '5KF77A!ZY.fo@4XutS3k9', 'uZ.8NIBjd75AsTP4DQnvL',
            'HAcpIthfK8ghsF3tEs6!V', 'Q7u-gq0KMrx@JEbjl-@UB', '3bcInZfGe2K7qB3vPxhRT',]
      }
    ];



  // создаём переменные для быстрого доступа ко всем объектам на странице — блоку в целом, колесу, кнопке и язычку
  const wheel = document.querySelector(".deal-wheel");
  const spinner = wheel.querySelector(".spinner");
  const trigger = wheel.querySelector(".btn-spin");
  const ticker = wheel.querySelector(".ticker");
  const targetPrize = document.querySelector('.target__prize');
  
   trigger.textContent = `ОСТАЛОСЬ ${rounds}/${fullRounds} ПРОКРУТОК`;

    trigger.setAttribute('disabled', true);
  // на сколько секторов нарезаем круг
  const prizeSlice = 360 / prizes.length;
  // на какое расстояние смещаем сектора друг относительно друга
  const prizeOffset = Math.floor(180 / prizes.length);
  // прописываем CSS-классы, которые будем добавлять и убирать из стилей
  const spinClass = "is-spinning";
  const selectedClass = "selected";
  // получаем все значения параметров стилей у секторов
  const spinnerStyles = window.getComputedStyle(spinner);
  
  // переменная для анимации
  let tickerAnim;
  // угол вращения
  let rotation = 0;
  // текущий сектор
  let currentSlice = 0;
  // переменная для текстовых подписей
  let prizeNodes;

  
  // расставляем текст по секторам
  const createPrizeNodes = () => {
    // обрабатываем каждую подпись
    prizes.forEach(({ text, color, reaction, margin }, i) => {
      // каждой из них назначаем свой угол поворота
      const rotation = ((prizeSlice * i) * -1) - prizeOffset;
      // добавляем код с размещением текста на страницу в конец блока spinner
      spinner.insertAdjacentHTML(
        "beforeend",
        // текст при этом уже оформлен нужными стилями
        `<li class="prize" data-reaction=${reaction} style="--rotate: ${rotation}deg; margin: ${margin} ">
          <span class="text">${text}</span>
        </li>`
      );
    });
  };
  
  // рисуем разноцветные секторы
  const createConicGradient = () => {
    // устанавливаем нужное значение стиля у элемента spinner
    spinner.setAttribute(
      "style",
      `background: conic-gradient(
        from -90deg,
        ${prizes
          // получаем цвет текущего сектора
          .map(({ color }, i) => `${color} 0 ${(100 / prizes.length) * (prizes.length - i)}%`)
          .reverse()
        }
      );`
    );
  };
  
  // создаём функцию, которая нарисует колесо в сборе
  const setupWheel = () => {
    // сначала секторы
    createConicGradient();
    // потом текст
    createPrizeNodes();
    // а потом мы получим список всех призов на странице, чтобы работать с ними как с объектами
    prizeNodes = wheel.querySelectorAll(".prize");
  };
  
  // определяем количество оборотов, которое сделает наше колесо
  const spinertia = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  // функция запуска вращения с плавной остановкой
  const runTickerAnimation = () => {
   
    // взяли код анимации отсюда: https://css-tricks.com/get-value-of-css-rotation-through-javascript/
    const values = spinnerStyles.transform.split("(")[1].split(")")[0].split(",");
    const a = values[0];
    const b = values[1];  
    let rad = Math.atan2(b, a);
    
    if (rad < 0) rad += (2 * Math.PI);
    
    const angle = Math.round(rad * (180 / Math.PI));
    const slice = Math.floor(angle / prizeSlice);
  
    // анимация язычка, когда его задевает колесо при вращении
    // если появился новый сектор
    if (currentSlice !== slice) {
      // убираем анимацию язычка
      ticker.style.animation = "none";
      // и через 10 миллисекунд отменяем это, чтобы он вернулся в первоначальное положение
      setTimeout(() => ticker.style.animation = null, 10);
      // после того, как язычок прошёл сектор - делаем его текущим 
      currentSlice = slice;
    }
    // запускаем анимацию
    tickerAnim = requestAnimationFrame(runTickerAnimation);
  };
  
  // функция выбора призового сектора и добавление выигрыша в результирующий массив
  const selectPrize = () => {
    const selected = Math.floor(rotation / prizeSlice);
    prizeNodes[selected].classList.add(selectedClass);
    setWinArr(selected);
    targetPrize.textContent = winPrizes[winPrizes.length - 1];
    if(rounds !== 0) {
      --rounds
      trigger.textContent = `ОСТАЛОСЬ ${rounds}/${fullRounds} ПРОКРУТОК`;
    } else {
      trigger.setAttribute('disabled', true);
    }
  };
  
  // отслеживаем нажатие на кнопку
  trigger.addEventListener("click", () => {
    // делаем её недоступной для нажатия
    trigger.disabled = true;
    // задаём начальное вращение колеса
    rotation = Math.floor(Math.random() * 360 + spinertia(2000, 5000));
    // убираем прошлый приз
    prizeNodes.forEach((prize) => prize.classList.remove(selectedClass));
    // добавляем колесу класс is-spinning, с помощью которого реализуем нужную отрисовку
    wheel.classList.add(spinClass);
    // через CSS говорим секторам, как им повернуться
    spinner.style.setProperty("--rotate", rotation);
    // возвращаем язычок в горизонтальную позицию
    ticker.style.animation = "none";
    // запускаем анимацию вращение
    runTickerAnimation();
  });
  
  // отслеживаем, когда закончилась анимация вращения колеса
  spinner.addEventListener("transitionend", () => {
    // останавливаем отрисовку вращения
    cancelAnimationFrame(tickerAnim);
    // получаем текущее значение поворота колеса
    rotation %= 360;
    // выбираем приз
    selectPrize();
    // убираем класс, который отвечает за вращение
    wheel.classList.remove(spinClass);
    // отправляем в CSS новое положение поворота колеса
    spinner.style.setProperty("--rotate", rotation);
    // делаем кнопку снова активной
    if(rounds !== 0) {
      trigger.disabled = false;
    }
    const wrapperPrize = document.querySelector('.prize__wrapper');
    const prizeBtnContinue = document.querySelector('.prize__btn__continue');
    const prizeBtnGet = document.querySelector('.prize__btn__get');
    wrapperPrize.style = 'display: block';
    if(wrapperPrize.style.display === 'block') {
      if(rounds > 0) {
        prizeBtnContinue.style = 'display: inline-block';
        prizeBtnGet.style = 'display: none';
        prizeBtnContinue.addEventListener('click', () => {
          wrapperPrize.style = 'display: none';
        })
      } else {
        prizeBtnGet.style = 'display: inline-block';
        prizeBtnContinue.style = 'display: none';
        prizeBtnGet.addEventListener('click', () => {
          document.querySelector('.prize__content').style = 'display: none';
          document.querySelector('.form').style = 'display: block';
          let resultPrizes = '';
          winPrizes.forEach(item => {
            resultPrizes += item + ', '
          })
          document.querySelector('.form__prize').value = resultPrizes;
        })
      }
    }
  });
  
  // подготавливаем всё к первому запуску
  setupWheel();