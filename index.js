// constants
const audio = new Audio();
const playBtn = document.getElementById('play');
const nav = document.querySelector('nav');
const main = document.querySelector('main');
const logo = document.querySelector('logo');

const tracks = {
  forest: './assets/audio/forest.mp3',
  drozd: './assets/audio/drozd.mp3',
  javoronok: './assets/audio/javoronok.mp3',
  slavka: './assets/audio/slavka.mp3',
  solovey: './assets/audio/solovey.mp3',
  zarynka: './assets/audio/zarynka.mp3',
}

const images = {
  forest: './assets/img/forest.jpg',
  drozd: './assets/img/drozd.jpg',
  javoronok: './assets/img/javoronok.jpg',
  slavka: './assets/img/slavka.jpg',
  solovey: './assets/img/solovey.jpg',
  zarynka: './assets/img/zarynka.jpg',
}

const defaultTrack = tracks.forest;

// flags
let isPlay = false;
let currentTrack = '';

// functions
const playAudio = () => {
  // если изначально не выбрана звуковая дорожка, т.е. сразу жмёшь на play, играет дефолтный трек, т.е. forest
  audio.src = currentTrack || defaultTrack;
  audio.currentTime = 0;
  if (!isPlay) {
    // меняем бг на кнопке play
    playBtn.classList.toggle('pause')
    play();
  } else {
    // меняем бг на кнопке play
    playBtn.classList.toggle('pause')
    pause();
  }
}

const playBirdSounds = (event) => {
  // получаем трек и фон для той птицы, которую кликнули
  const soundAndInfo = getBirdInfo(event)
  // назначаем текущий трэк
  currentTrack = soundAndInfo.track;
  // назначаем проигрывать текущий трек
  audio.src = currentTrack;
  // меняем кнопку play на pause
  changePlayBtn();
  // меняем бэкграунд
  changeMainBG(soundAndInfo.background);
  play();
  setActive(event);
}

// получаем путь до трека той птицы, по которой кликнули в nav menu
const getBirdInfo = (source) => {
  const target = source.target.dataset.item;

  if (target == 'default') {
    return { track: tracks.forest, background: images.forest }
  } else {
    return { track: tracks[target], background: images[target] }
  }
}

// проигрываем музыку
const play = () => {
  audio.play();
  isPlay = true;
}

// останавливаем музыку
const pause = () => {
  audio.pause();
  isPlay = false;
}

// меняем кнопку play на pause здесь, т.к. мы кликнули сразу по птице, а не по play.
const changePlayBtn = () => {
  if (!playBtn.classList.contains('pause')) playBtn.classList.add('pause')
}

// меняем фон у main'a
const changeMainBG = (bg) => {
  main.style.backgroundImage = `url(${bg})`;
}

// делаем активным кликнутый элемент, а другие делаем не активными
const setActive = (event) => {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => item.classList.remove('active'))
  event.target.classList.add('active')
}

playBtn.addEventListener('click', playAudio);
nav.addEventListener('click', playBirdSounds);
logo.addEventListener('click', playBirdSounds);
