import './styles.css';

const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ targetDate } = {}) {
    this.targetDate = targetDate;
    this.init();
  }

  init() {
    setInterval(() => {
      const currentTime = Date.now();
      const deltatime = this.targetDate - currentTime;
      this.getTimeComponents(deltatime);
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  getTimeComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return updateClockface(days, hours, mins, secs);
  }
}

const countdownTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('March 24, 2021'),
});

function updateClockface(days, hours, mins, secs) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
}
