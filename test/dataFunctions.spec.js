import { example, anotherExample } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';
import {sortData} from '../src/dataFunctions.js';

const mockData = [
  { name: 'Charlie' },
  { name: 'Alice' },
  { name: 'Bob' },
];

describe('sortData function', () => {
  it('should sort data in ascending order', () => {
    const result = sortData([...mockData], 'name', 'asc');
    const expected = [
      { name: 'Alice' },
      { name: 'Bob' },
      { name: 'Charlie' },
    ];
    expect(result).toEqual(expected);
  });

  it('should sort data in descending order', () => {
    const result = sortData([...mockData], 'name', 'desc');
    const expected = [
      { name: 'Charlie' },
      { name: 'Bob' },
      { name: 'Alice' },
    ];
    expect(result).toEqual(expected);
  });

  // Puedes agregar más pruebas para otros casos de clasificación o ajustes
});














console.log(fakeData);

describe('example', () => {

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});

describe('anotherExample', () => {

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
