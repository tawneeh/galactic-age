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
  let list = `Age on Mercury: ${this.mercuryAge}, Age on Venus: ${this.venusAge}, Age on Mars: ${this.marsAge}, Age on Jupiter: ${this.jupiterAge}`;
  return list;
  }

}