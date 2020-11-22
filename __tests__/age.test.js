import GalacticAge from './../src/age.js';

describe('GalacticAge', () => {

  let galacticAge;

  beforeEach(() => {
    galacticAge = new GalacticAge(80, 331, 129, 42, 7)
  });

test('should correctly create a GalacticAge object', () => {
    expect(galacticAge.earthAge).toEqual(80);
    expect(galacticAge.mercuryAge).toEqual(331);
    expect(galacticAge.venusAge).toEqual(129);
    expect(galacticAge.marsAge).toEqual(42);
    expect(galacticAge.jupiterAge).toEqual(7);
  });

test('should calculate number of Earth days old', () => {
    expect(galacticAge.calcDays()).toEqual(29200);
  });

test('should divide number of Earth days old by 88', () => {
    expect(galacticAge.mercury()).toEqual(331);
  });

test('should divide number of Earth days old by 225', () => {
    expect(galacticAge.venus()).toEqual(129);
  });

test('should divide number of Earth days old by 687', () => {
    expect(galacticAge.mars()).toEqual(42);
  });

test('should divide Earth Age (years) by 11', () => {
    expect(galacticAge.jupiter()).toEqual(7);
  });

test('should return planet ages in a string', () => {
    expect(galacticAge.listAges()).toEqual("Your age on Mercury is 331. Your age on Venus is 129. Your age on Mars is 42. Your age on Jupiter is 7.");
  });

test('should determine if user has surpassed life expectancy on Earth and return how many years they have lived past the expectancy', () => {
    expect(galacticAge.calcRemainder()).toEqual(8);
  });

test('should determine if user has surpassed life expectancy on Mercury and return how many years they have lived past the expectancy', () => {
    expect(galacticAge.mercuryRemainder()).toEqual(33);
  });

test('should determine if user has surpassed life expectancy on Venus and return how many years they have lived past the expectancy', () => {
    expect(galacticAge.venusRemainder()).toEqual(13);
  });

test('should determine if user has surpassed life expectancy on Mars and return how many years they have lived past the expectancy', () => {
    expect(galacticAge.marsRemainder()).toEqual(4);
  });

test('should determine if user has surpassed life expectancy on Jupiter and return how many years they have lived past the expectancy', () => {
    expect(galacticAge.jupiterRemainder()).toEqual(1);
  });

});

  let galacticAge;

  beforeEach(() => {
    galacticAge = new GalacticAge(31, 128, 50, 16, 2)
  });

test('should return a message if user has not surpassed life expectancy on Earth', () => {
    expect(galacticAge.calcRemainder()).toEqual("Keep on keepin on!");
  });

test('should return a message if user has not surpassed life expectancy on Mercury', () => {
    expect(galacticAge.mercuryRemainder()).toEqual("Keep on keepin on!");
  });

test('should return a message if user has not surpassed life expectancy on Venus', () => {
    expect(galacticAge.venusRemainder()).toEqual("Keep on keepin on!");
  });

test('should return a message if user has not surpassed life expectancy on Mars', () => {
    expect(galacticAge.marsRemainder()).toEqual("Keep on keepin on!");
  });

test('should return a message if user has not surpassed life expectancy on Jupiter', () => {
    expect(galacticAge.jupiterRemainder()).toEqual("Keep on keepin on!");
  });