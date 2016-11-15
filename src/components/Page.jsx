import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import PageHeader from './PageHeader';
import PageBody from './PageBody';
import * as actionCreators from '../action_creators';

export const Page = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div>
        <h1>Hello World!</h1>
        <PageHeader {...this.props} />
        <PageBody {...this.props} />
    </div>;
  }
});

function mapStateToProps(state, ownProps) {
  const page_number = Number.parseInt(ownProps.params.page_number);
  const page_from_state = state.get('current_page_number');
  console.log('mapStateToProps PageFromParam:' + page_number + ' PageFromState:' + page_from_state);
  console.log(state.toJS());

  const page = state.get('pages').get(page_number-1);
  const page_count = state.get('pages').size;
  return {
    module_title:         state.getIn(['mod','title']),
    unit_title:           state.getIn(['unit','title']),
    lesson_title:         state.getIn(['lesson','title']),
    page_title:           page.get('page_heading'),
    page_text:            page.get('page_text'),
    page_image:           page.get('page_image'),
    page_number:          page_number,
    page_count:           page_count,
    previous_disabled:    (page_number<=1),
    next_disabled:        (page_number >= page_count),
    next_page_number:     (page_number + 1),
    previous_page_number: (page_number - 1)
  };
}

export const PageContainer = connect(mapStateToProps,actionCreators)(Page);
