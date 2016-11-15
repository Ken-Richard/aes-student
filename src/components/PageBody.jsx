import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const PageImage = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
  }
});

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    let pageImage;
    if (this.props.page_image) {
      pageImage = <img src={'https://s3.amazonaws.com/aes-media-dev' + this.props.page_image}/>
    } else {
      pageImage = "";
    }
    return <div className="page-body">
      <h1>{this.props.page_title}</h1>
      <div className="page-text" dangerouslySetInnerHTML={{__html: this.props.page_text}}></div>
      {pageImage}
    </div>;
  }
});