import GalacticAge from './../src/age.js';

describe('GalacticAge', () => {

  let galacticAge;

  beforeEach(() => {
    galacticAge = new GalacticAge(31, 128, 50, 16, 2, 41)
  });

  test('should correctly create a GalacticAge object', () => {
    expect(galacticAge.earthAge).toEqual(31);
    expect(galacticAge.mercuryAge).toEqual(128);
    expect(galacticAge.venusAge).toEqual(50);
    expect(galacticAge.marsAge).toEqual(16);
    expect(galacticAge.jupiterAge).toEqual(2);
    expect(galacticAge.earthSpan).toEqual(41);
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
    expect(galacticAge.mars()).toEqual(16);
  });

  test('should divide Earth Age (years) by 11', () => {
    expect(galacticAge.jupiter()).toEqual(2);
  });

  test('should return planet ages in a string', () => {
    expect(galacticAge.listAges()).toEqual("Your age on Mercury is 128. Your age on Venus is 50. Your age on Mars is 16. Your age on Jupiter is 2.");
  });

  test('should subtract Earth Span from Earth Age (years) to determing remaining years on Earth', () => {
    expect(galacticAge.calcRemainder()).toEqual(41);
  });

  test('should subtract Mercury Expectancy from Mercury Age to determine remaining years on Mercury', () => {
    expect(galacticAge.mercuryRemainder()).toEqual(170);
  });

  test('should subtract Venus Expectancy from Venus Age to determine remaining years on Venus', () => {
    expect(galacticAge.venusRemainder()).toEqual(66);
  });

  test('should subtract Mars Expectancy from Mars Age to determine remaining years on Mars', () => {
    expect(galacticAge.marsRemainder()).toEqual(22);
  });

  test('should sutract Jupiter Expectancy from Jupiter Age to determine remaining years on Jupiter', () => {
    expect(galacticAge.jupiterRemainder()).toEqual(4);
  });

});