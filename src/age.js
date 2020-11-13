export default class GalacticAge {
  constructor(earthAge, mercuryAge, venusAge, marsAge, jupiterAge, earthExpectancy) {
    this.earthAge = earthAge;
    this.mercuryAge = mercuryAge;
    this.venusAge = venusAge;
    this.marsAge = marsAge;
    this.jupiterAge = jupiterAge; 
    this.earthExpectancy = earthExpectancy;
  }

  calcDays() {
    let days = this.earthAge * 365;
    return days;
  }

  mercury() {
    let days = this.earthAge * 365;
    let mercuryAge = days / 88;
    return mercuryAge;
  }
}