(function () {
  // Menu

  const header = document.querySelector('.header');
  const headerLogo = header.querySelector('.header__logo');
  const navToggle = header.querySelector('.header__toggle');

  header.classList.add('header--closed');

  navToggle.addEventListener('click', () => {
    if (header.classList.contains('header--closed')) {
      header.classList.remove('header--closed')
      header.classList.add('header--open');
    } else {
      header.classList.remove('header--open');
      header.classList.add('header--closed');
    }
  });


  // Logic and functionality of the question window

  const mainWindow = document.querySelector('.main');
  const footerWindow = document.querySelector('.footer');
  const testBtn = document.querySelectorAll('.button-test');

  const footerResultText = 'TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos esse quod suscipit quisquam, unde expedita harum. Omnis autem veniam voluptatum! Id, labore. Reprehenderit quaerat similique nesciunt ipsam esse est pariatur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos esse quod suscipit quisquam, unde expedita harum. Omnis autem veniam voluptatum! Id, labore. Reprehenderit quaerat similique nesciunt ipsam esse est pariatur!';

  const genderQuestionWindow = document.querySelector('#gender').content.querySelector('.gender');
  const genderQuestionBtn = genderQuestionWindow.querySelector('.button');
  const ageQuestionWindow = document.querySelector('#age').content.querySelector('.age');
  const ageQuestionBtn = ageQuestionWindow.querySelector('.button');
  const dwellingQuestionWindow = document.querySelector('#dwelling').content.querySelector('.dwelling');
  const dwellingQuestionBtn = dwellingQuestionWindow.querySelector('.button');
  const continueNumberQuestionWindow = document.querySelector('#continue-number').content.querySelector('.continue-number');
  const continueNumberQuestionBtn = continueNumberQuestionWindow.querySelector('.button');
  const colourFirstQuestionWindow = document.querySelector('#colour-first').content.querySelector('.colour-first');
  const colourFirstQuestionBtn = colourFirstQuestionWindow.querySelector('.button');
  const colourSecondQuestionWindow = document.querySelector('#colour-second').content.querySelector('.colour-second');
  const colourSecondQuestionBtn = colourSecondQuestionWindow.querySelector('.button');
  const citiesQuestionWindow = document.querySelector('#cities').content.querySelector('.cities');
  const citiesQuestionBtn = citiesQuestionWindow.querySelector('.button');
  const figureQuestionWindow = document.querySelector('#figure').content.querySelector('.figure');
  const figureQuestionBtn = figureQuestionWindow.querySelector('.button');
  const familiarQuestionWindow = document.querySelector('#familiar').content.querySelector('.familiar');
  const familiarQuestionBtn = familiarQuestionWindow.querySelector('.button');
  const definitionQuestionWindow = document.querySelector('#definition').content.querySelector('.definition');
  const definitionQuestionBtn = definitionQuestionWindow.querySelector('.button');
  const numberQuestionWindow = document.querySelector('#number').content.querySelector('.number');
  const numberQuestionBtn = numberQuestionWindow.querySelector('.button');
  const processingQuestionWindow = document.querySelector('#processing').content.querySelector('.processing');
  const resultQuestionWindow = document.querySelector('#result').content.querySelector('.result');
  const resultQuestionBtn = resultQuestionWindow.querySelector('.button');

  const appendWindow = (element) => {
    mainWindow.innerHTML = "";
    mainWindow.appendChild(element);
  };

  const errorMessage = (message) => {
    const alertContainer = document.createElement('div');
    alertContainer.style.width = 'auto';
    alertContainer.style.zIndex = 100;
    alertContainer.style.position = 'absolute';
    alertContainer.style.transform = 'translate(-50%)';
    alertContainer.style.left = '50%';
    alertContainer.style.top = '25%';
    alertContainer.style.padding = '25px 50px';
    alertContainer.style.fontSize = '25px';
    alertContainer.style.lineHeight = '20px';
    alertContainer.style.textAlign = 'center';
    alertContainer.style.color = '#272727';
    alertContainer.style.backgroundColor = '#FFC700';
    alertContainer.style.borderRadius = '50px';

    alertContainer.textContent = message;

    document.body.append(alertContainer);

    setTimeout(() => {
      alertContainer.remove();
    }, 1000);
  };

  const getInputClass = (el) => {
    const label = el.querySelectorAll('label');
    const input = el.querySelectorAll('input');

    label.forEach((i) => {
      i.addEventListener('click', (e) => {
        input.forEach((i) => {
          if (i.classList.contains('check')) {
            i.removeAttribute('class');
          }
        });
        const inputAdd = e.target.previousElementSibling;
        inputAdd.classList.add('check');
      });
    });
  };

  const checkValidInput = (btn, currentWindow, nextWindow) => {

    btn.addEventListener('click', () => {
      const input = currentWindow.querySelectorAll('input');
      let inputArray = Array.from(input);

      inputArray.forEach((i) => {
        if (i.classList.contains('check')) {
          appendWindow(nextWindow);
        }
      });

      if (inputArray.every(elem => !elem.classList.contains('check'))) {
        errorMessage("Выберите один из варинатов!")
      }
    });
  };

  testBtn.forEach((el) => {
    el.addEventListener('click', () => {
      appendWindow(genderQuestionWindow);
      footerWindow.classList.add('visually-hidden');
      headerLogo.classList.remove('visually-hidden');
    });
  })

  // Validation and change first question window
  getInputClass(genderQuestionWindow);
  checkValidInput(genderQuestionBtn, genderQuestionWindow, ageQuestionWindow);

  // Validation and change second question window
  getInputClass(ageQuestionWindow);
  checkValidInput(ageQuestionBtn, ageQuestionWindow, dwellingQuestionWindow);

  // Validation and change third question window
  getInputClass(dwellingQuestionWindow);
  checkValidInput(dwellingQuestionBtn, dwellingQuestionWindow, continueNumberQuestionWindow);

  // Validation and change fourth question window
  getInputClass(continueNumberQuestionWindow);
  checkValidInput(continueNumberQuestionBtn, continueNumberQuestionWindow, colourFirstQuestionWindow);

  // Validation and change fifth question window
  getInputClass(colourFirstQuestionWindow);
  checkValidInput(colourFirstQuestionBtn, colourFirstQuestionWindow, colourSecondQuestionWindow);

  // Validation and change sixth question window
  getInputClass(colourSecondQuestionWindow);
  checkValidInput(colourSecondQuestionBtn, colourSecondQuestionWindow, citiesQuestionWindow);

  // Validation and change seventh question window
  getInputClass(citiesQuestionWindow);
  checkValidInput(citiesQuestionBtn, citiesQuestionWindow, figureQuestionWindow);

  // Validation and change eighth question window
  getInputClass(figureQuestionWindow);
  checkValidInput(figureQuestionBtn, figureQuestionWindow, familiarQuestionWindow);

  // Validation and change nineth question window
  getInputClass(familiarQuestionWindow);
  checkValidInput(familiarQuestionBtn, familiarQuestionWindow, definitionQuestionWindow);

  // Validation and change tenth question window
  getInputClass(definitionQuestionWindow);
  checkValidInput(definitionQuestionBtn, definitionQuestionWindow, numberQuestionWindow);

  // Validation and change eleventh question window
  getInputClass(numberQuestionWindow);
  checkValidInput(numberQuestionBtn, numberQuestionWindow, processingQuestionWindow);

  const resultTimer = resultQuestionWindow.querySelector('.result__timer');
  const timerWindow = resultQuestionWindow.querySelector('.result__timer-time');
  let timeMinut = 10 * 60;

  const timer = () => {
    setInterval(function () {
      seconds = timeMinut % 60
      minutes = timeMinut / 60 % 60
      if (timeMinut <= 0) {
        clearInterval(timer);
        resultTimer.innerHTML = "<p>Ваше время вышло</p>";
        resultQuestionBtn.classList.add('visually-hidden');
      } else {
        if (seconds === 0) {
          let strTimer = `${Math.trunc(minutes)}:${seconds}0`;
          timerWindow.innerHTML = strTimer;
        } else if (seconds < 10) {
          let strTimer = `${Math.trunc(minutes)}:0${seconds}`;
          timerWindow.innerHTML = strTimer;
        } else {
          let strTimer = `${Math.trunc(minutes)}:${seconds}`;
          timerWindow.innerHTML = strTimer;
        }
      }
      --timeMinut;
    }, 1000)
  };

  const processingText = processingQuestionWindow.querySelector('.processing__text p');

  const processingLoud = () => {
    setInterval(function () {
      let root = processingText.textContent
      root = root + ('.');
      processingText.textContent = root;
    }, 1000)
  }

  let observer = new MutationObserver(mutations => {
    for (let mutation of mutations) {
      for (let node of mutation.addedNodes) {
        if (node.classList.contains('processing')) {
          processingLoud();
          setTimeout(() => {
            appendWindow(resultQuestionWindow);
          }, 10000);
        } else if (node.classList.contains('result')) {
          timer();
          headerLogo.classList.add('header__logo--big');
          const headerLogoText = headerLogo.querySelector('span');
          headerLogoText.textContent = "Готово!";
          footerWindow.classList.remove('visually-hidden');
          footerWindow.classList.add('footer--result');
          const footerText = footerWindow.querySelector('.footer__text');
          footerText.textContent = footerResultText;
          observer.disconnect();
        };
      };
    };
  });

  observer.observe(mainWindow, {
    childList: true
  });


  resultQuestionBtn.addEventListener('click', e => {
    e.preventDefault();

    const getData = () => {
      return fetch('https://swapi.dev/api/people/1/')
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Не удалось загрузить данные с сервера!');
        })
        .then((array) => {
          return array;
        })
        .catch(() => {
          errorMessage('Что-то пошло не так, попробуйте перезагрузить страницу!');
        });
    };

    const createMassage = (element) => {
      const messageContainer = document.createElement('div');
      messageContainer.style.margin = '15px';
      messageContainer.style.zIndex = '5';
      messageContainer.style.padding = '15px 5px';
      messageContainer.style.fontSize = '30px';
      messageContainer.style.lineHeight = '40px'
      messageContainer.style.textAlign = 'center';
      messageContainer.style.color = 'black';
      messageContainer.style.backgroundColor = '#F4CE0C';
      messageContainer.style.borderRadius = '5px';

      const name = document.createElement('p');
      name.textContent = `Имя: ${element.name}`;
      name.style.margin = '5px 10px';
      messageContainer.append(name);

      const growth = document.createElement('p');
      growth.textContent = `Рост: ${element.height}см`;
      growth.style.margin = '5px 10px';
      messageContainer.append(growth);

      const weight = document.createElement('p');
      weight.textContent = `Вес: ${element.mass}кг`;
      weight.style.margin = '5px 10px';
      messageContainer.append(weight);

      const hairColor = document.createElement('p');
      hairColor.textContent = `Волосы цвета ${element.hair_color}`;
      hairColor.style.margin = '5px 10px';
      messageContainer.append(hairColor);

      const eyeColor = document.createElement('p');
      eyeColor.textContent = `Глаза цвета ${element.eye_color}`;
      eyeColor.style.margin = '5px 10px';
      messageContainer.append(eyeColor);

      resultQuestionWindow.append(messageContainer);
    };

    getData().then((result) => {
      createMassage(result);
    });

    clearInterval(timer);
    resultTimer.classList.add('visually-hidden');
    resultQuestionBtn.disabled = true;
  });
})();
