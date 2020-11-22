import GalacticAge from './../src/age.js';

describe('GalacticAge', () => {

  let galacticAge;

  beforeEach(() => {
    galacticAge = new GalacticAge(73, 302, 118, 38, 6)
  });

  test('should correctly create a GalacticAge object', () => {
    expect(galacticAge.earthAge).toEqual(73);
    expect(galacticAge.mercuryAge).toEqual(302);
    expect(galacticAge.venusAge).toEqual(118);
    expect(galacticAge.marsAge).toEqual(38);
    expect(galacticAge.jupiterAge).toEqual(6);
  });

  test('should calculate number of Earth days old', () => {
    expect(galacticAge.calcDays()).toEqual(26645);
  });

  test('should divide number of Earth days old by 88', () => {
    expect(galacticAge.mercury()).toEqual(302);
  });

  test('should divide number of Earth days old by 225', () => {
    expect(galacticAge.venus()).toEqual(118);
  });

  test('should divide number of Earth days old by 687', () => {
    expect(galacticAge.mars()).toEqual(38);
  });

  test('should divide Earth Age (years) by 11', () => {
    expect(galacticAge.jupiter()).toEqual(6);
  });

  test('should return planet ages in a string', () => {
    expect(galacticAge.listAges()).toEqual("Your age on Mercury is 302. Your age on Venus is 118. Your age on Mars is 38. Your age on Jupiter is 6.");
  });

  test('should determine if user has surpassed life expectancy on Earth and return how many years they have lived past the expectancy', () => {
    expect(galacticAge.calcRemainder()).toEqual(1);
  });

  test('should determine if user has surpassed life expectancy on Mercury and return how many years they have lived past the expectancy', () => {
    expect(galacticAge.mercuryRemainder()).toEqual(4);
  });

  test('should determine if user has surpassed life expectancy on Venus and return how many years they have lived past the expectancy', () => {
    expect(galacticAge.venusRemainder()).toEqual(2);
  });

  test('should determine if user has surpassed life expectancy on Mars and return how many years they have lived past the expectancy', () => {
    expect(galacticAge.marsRemainder()).toEqual();
  });

});

  let galacticAge;

  beforeEach(() => {
    galacticAge = new GalacticAge(31, 128, 50, 16, 2)
  });
test('should return a message if user has not surpassed life expectancy on Earth', () => {
    expect(galacticAge.calcRemainder()).toEqual("Keep on keepin on!");
  });