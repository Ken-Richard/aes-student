import {List, Map} from 'immutable';
import {expect} from 'chai';
import reducer from '../src/reducer';

function testState(page_number) {
  return Map({
    'pages':List([1,2,3]),
    'current_page':page_number
  });
}

describe('reducer', () => {

  describe('initial state', () => {

    it('provides initial state', () => {
      const action = { type: 'SET_STATE', state:{} };
      const nextState = reducer(null, action);
      const unit = nextState.get('unit');
      expect(unit.get('unit_key')).to.equal('HSSTATSCOEX');
    });

  });
});