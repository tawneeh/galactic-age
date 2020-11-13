import GalacticAge from './../src/age.js';

describe('GalacticAge', () => {

  let galacticAge;

  beforeEach(() => {
    galacticAge = new GalacticAge("31", "132", "51", "16", "2", "41") // 41 more years
  });

  test('should correctly create a GalacticAge object', () => {
    expect(galacticAge.earthAge).toEqual("31");
    expect(galacticAge.mercuryAge).toEqual("132");
    expect(galacticAge.venusAge).toEqual("51");
    expect(galacticAge.marsAge).toEqual("16");
    expect(galacticAge.jupiterAge).toEqual("2");
    expect(galacticAge.earthExpectancy).toEqual("41");
  });

  test('should calculate number of Earth days old', () => {
    expect(galacticAge.earthDays()).toEqual(11627);
  });

});