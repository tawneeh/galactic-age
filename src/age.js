export default class GalacticAge {
  constructor(earthAge, mercuryAge, venusAge, marsAge, jupiterAge, earthSpan) {
    this.earthAge = earthAge;
    this.mercuryAge = mercuryAge;
    this.venusAge = venusAge;
    this.marsAge = marsAge;
    this.jupiterAge = jupiterAge;
    this.earthSpan = earthSpan;
  }

  calcDays() {
    return this.earthAge * 365;
  }

  mercury() {
    const days = this.calcDays();
    return Math.trunc(days / 88);
  }

  venus() {
    const days = this.calcDays();
    return Math.trunc(days / 225);
  }

  mars() {
    const days = this.calcDays();
    return Math.trunc(days / 687);
  }

  jupiter() {
    return Math.trunc(this.earthAge / 11);
  }

  listAges() {
    const list = `Your age on Mercury is ${this.mercuryAge}. Your age on Venus is ${this.venusAge}. Your age on Mars is ${this.marsAge}. Your age on Jupiter is ${this.jupiterAge}.`;
    return list;
  }

  calcRemainder() {
    const lifeExpectancy = 72;
    return Math.trunc(lifeExpectancy - this.earthAge);
  }

  mercuryRemainder() {
    let mercuryExpectancy = 298;
    return Math.trunc(mercuryExpectancy - this.mercuryAge);
  }

  venusRemainder() {
    let venusExpectancy = 116;
    return Math.trunc(venusExpectancy - this.venusAge);
  }

  marsRemainder() {
    let marsExpectancy = 38;
    return Math.trunc(marsExpectancy - this.marsAge);
  }

  jupiterRemainder() {
    let jupiterExpectancy = 6;
    return Math.trunc(jupiterExpectancy - this.jupiterAge);
  }
}