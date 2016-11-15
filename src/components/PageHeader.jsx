import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link } from 'react-router'

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div className="page-header">

      <h1>Module: {this.props.module_title}</h1>
      <h2>Unit:   {this.props.unit_title}</h2>
      <h3>Lesson: {this.props.lesson_title}</h3>
      <h3>Page:   {this.props.page_number} of {this.props.page_count}</h3>

      <button
        disabled={this.props.previous_disabled}
        onClick={() => this.props.previousPage()} >
        Previous Page</button>
      <button
        disabled={this.props.next_disabled}
        onClick={() => this.props.nextPage()} >
        Next Page</button>

    </div>;
  }
});