import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link } from 'react-router'

const linkWithState = (text, url, disabled) => disabled ? <span>{text}</span> : <Link to={url}>{text}</Link>

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div className="page-header">

      <h1>Module: {this.props.module_title}</h1>
      <h2>Unit:   {this.props.unit_title}</h2>
      <h3>Lesson: {this.props.lesson_title}</h3>
      <h3>Page:   {this.props.page_number} of {this.props.page_count}</h3>

      <ul>
        <li>{linkWithState('Previous Page',
                "/pages/" + this.props.previous_page_number,
                this.props.previous_disabled)}</li>
        <li>{linkWithState('Next Page',
                "/pages/" + this.props.next_page_number,
                this.props.next_disabled)}</li>
      </ul>

    </div>;
  }
});