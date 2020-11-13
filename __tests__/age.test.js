import GalacticAge from './../src/age.js';

describe('GalacticAge', () => {

  let galacticAge;

  beforeEach(() => {
    galacticAge = new GalacticAge(31, 128, 50, 16, 2, 41) // 41 more years
  });

  test('should correctly create a GalacticAge object', () => {
    expect(galacticAge.earthAge).toEqual(31);
    expect(galacticAge.mercuryAge).toEqual(128);
    expect(galacticAge.venusAge).toEqual(50);
    expect(galacticAge.marsAge).toEqual(16);
    expect(galacticAge.jupiterAge).toEqual(2);
    expect(galacticAge.earthExpectancy).toEqual(41);
  });

  test('should calculate number of Earth days old', () => {
    expect(galacticAge.calcDays()).toEqual(11315);
  });

  test('should divide number of Earth days old by 88', () => {
    expect(galacticAge.mercury()).toEqual(128);
  });

  test('should divide number of Earth days old by 225', () => {
    expect(galacticAge.venus()).toEqual(50);
  });

  test('should divide number of Earth days old by 687', () => {
    expect(galacticAge.mars()).toEqual(17);
  });

});