import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link } from 'react-router'

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div className="page-body">
      <h1>Welcome!</h1>
      <Link to="/pages/1">Let's Get Started!</Link>
    </div>;
  }
});
