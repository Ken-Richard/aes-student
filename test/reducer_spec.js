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
      expect(nextState.get('current_page')).to.equal(1);
    });

    it('starts on page 1', () => {
      const action = { type: 'SET_STATE', state:{} };
      const nextState = reducer(null, action);
      expect(nextState.get('current_page')).to.equal(1);
    });

  });


  describe('navigation', () => {

    it('moves to next page', () => {
      const action = { type: 'NEXT_PAGE' };
      const nextState = reducer(testState(1), action);
      expect(nextState.get('current_page')).to.equal(2);
    });

    it('does not move forward when on last page', () => {
      const action = { type: 'NEXT_PAGE' };
      const nextState = reducer(testState(3), action);
      expect(nextState.get('current_page')).to.equal(3);
    });

    it('moves to previous page', () => {
      const action = { type: 'PREVIOUS_PAGE' };
      const nextState = reducer(testState(2), action);
      expect(nextState.get('current_page')).to.equal(1);
    });

    it('does not move back when on first page', () => {
      const action = { type: 'PREVIOUS_PAGE' };
      const nextState = reducer(testState(1), action);
      expect(nextState.get('current_page')).to.equal(1);
    });

  });
});