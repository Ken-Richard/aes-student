import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div className="page-body">
      <h1>{this.props.page_title}</h1>
      <div className="page-text" dangerouslySetInnerHTML={{__html: this.props.page_text}}></div>
    </div>;
  }
});