class Time {
  #hourEl = document.querySelector(".hour");
  #minEl = document.querySelector(".min");
  #secEl = document.querySelector(".sec");
  #fakeHour;
  constructor(hour = 0, min = 0, sec = 0) {
    this.sec = sec;
    this.min = min;
    this.hour = hour;
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
      if (this.min % 12 == 0) {
        this.updateHourUI();
      }
    } else {
      this._min = m % 60;
      this.hour += Number.parseInt(m / 60);
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
    document.querySelector(".sec-box").textContent = (this.sec + "").padStart(
      2,
      "0"
    );
    this.#secEl.style.transform = `rotate(${this.sec * 6}deg)`;
  }

  updateMinUI() {
    document.querySelector(".min-box").textContent = (this.min + "").padStart(
      2,
      "0"
    );
    this.#minEl.style.transform = `rotate(${this.min * 6}deg)`;
  }

  updateHourUI() {
    document.querySelector(".hour-box").textContent = (this.hour + "").padStart(
      2,
      "0"
    );
    this.#fakeHour = (this.hour % 12) * 5 + Number.parseInt(this.min / 12);

    this.#hourEl.style.transform = `rotate(${this.#fakeHour * 6}deg)`;
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
