import {expect} from 'chai';
import {fixtures} from '../src/fixtures';

describe('fixtures', () => {
  it('has data', () => {
    const data = fixtures;
    expect(data['mod']['module_key']).to.equal('HSSTATSCO');
  });
});