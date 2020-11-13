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
  let list = `Your age on Mercury is ${this.mercuryAge}. Your age on Venus is ${this.venusAge}. Your age on Mars is ${this.marsAge}. Your age on Jupiter is ${this.jupiterAge}.`;
  return list;
  }

  calcRemainder() {
    let lifeExpectancy = 72;
    let earthSpan = Math.trunc(lifeExpectancy - this.earthAge);
    return earthSpan;
  }
}