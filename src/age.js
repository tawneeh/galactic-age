export default class GalacticAge {
  constructor(earthAge, mercuryAge, venusAge, marsAge, jupiterAge) {
    this.earthAge = earthAge;
    this.mercuryAge = mercuryAge;
    this.venusAge = venusAge;
    this.marsAge = marsAge;
    this.jupiterAge = jupiterAge;
  }

  calcDays() {
    let days = this.earthAge * 365;
      return days;
  }


  mercury() {
    let days = this.earthAge * 365;
    let mercuryAge = Math.trunc(days / 88);
      return mercuryAge;
  }

  venus() {
    let days = this.earthAge * 365;
    let venusAge = Math.trunc(days / 225);
      return venusAge;
  }

  mars() {
    let days = this.earthAge * 365;
    let marsAge = Math.trunc(days / 687);
      return marsAge;
  }

  jupiter() {
    let jupiterAge = Math.trunc(this.earthAge / 11);
      return jupiterAge;
  }

  listAges() {
    let list = (`Your age on Mercury is ${this.mercuryAge}. Your age on Venus is ${this.venusAge}. Your age on Mars is ${this.marsAge}. Your age on Jupiter is ${this.jupiterAge}.`);
      return list;
  }

  calcRemainder() {
    let lifeExpectancy = 72;
    let earthSpan = Math.trunc(lifeExpectancy - this.earthAge);
      if (earthSpan < 0) {
        return Math.abs(earthSpan);
      } else {
        return ("Keep on keepin on!");
      }
  }

  mercuryRemainder() {
    let mercuryExpectancy = 298;
    let mercurySpan = Math.trunc(mercuryExpectancy - this.mercuryAge);
      if (mercurySpan < 0) {
        return Math.abs(mercurySpan);
      } else {
        return ("Keep on keepin on!");
      }
  }

  venusRemainder() {
    let venusExpectancy = 116;
    let venusSpan = Math.trunc(venusExpectancy - this.venusAge);
      if (venusSpan < 0) {
        return Math.abs(venusSpan);
      } else {
        return ("Keep on keepin on!");
      }
  }

  marsRemainder() {
    let marsExpectancy = 38;
    let marsSpan = Math.trunc(marsExpectancy - this.marsAge);
      if (marsSpan < 0) {
        return Math.abs(marsSpan);
      } else {
        return ("Keep on keepin on!");
      }
  }

  jupiterRemainder() {
    let jupiterExpectancy = 6;
    let jupiterSpan = Math.trunc(jupiterExpectancy - this.jupiterAge);
      if (jupiterSpan < 0) {
        return Math.abs(jupiterSpan);
      } else {
        return ("Keep on keepin on!");
      }
  }
}