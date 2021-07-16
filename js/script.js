class Time {
  #hourEl = document.querySelector(".hour");
  #minEl = document.querySelector(".min");
  #secEl = document.querySelector(".sec");
  constructor(hour, min, sec) {
    this.hour = hour;
    this.min = min;
    this.sec = sec;
  }

  set hour(h) {
    if (h < 24) {
      this._hour = h;
    } else {
      this._hour = h % 24;
    }
    this.updateHourUI();
  }

  get hour() {
    return this._hour;
  }

  set min(m) {
    if (m < 60) {
      this._min = m;
    } else {
      this.hour += Number.parseInt(m / 60);
      this._min = m % 60;
    }
    this.updateMinUI();
  }

  get min() {
    return this._min;
  }

  set sec(s) {
    if (s < 60) {
      this._sec = s;
    } else {
      this.min += Number.parseInt(s / 60);
      this._sec = s % 60;
    }
    this.updateSecUI();
  }

  get sec() {
    return this._sec;
  }

  addSec(s) {
    this.sec += s;
  }

  updateSecUI() {
    this.#secEl.style.transform = `rotate(${this.sec * 6}deg)`;
  }

  updateMinUI() {
    this.#minEl.style.transform = `rotate(${this.min * 6}deg)`;
  }

  updateHourUI() {
    this.#hourEl.style.transform = `rotate(${this.hour * 30}deg)`;
  }
}
const time = new Date();
let hour = time.getHours();
let min = time.getMinutes();
let sec = time.getSeconds();

const clock = new Time(hour, min, sec);

setInterval(function () {
  clock.addSec(1);
}, 1000);
