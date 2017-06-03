import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/tool.scss';

class Tool extends Component {
  constructor(props) {
    super(props);

    this.state = { expand: false };

    this.toggleContent = this.toggleContent.bind(this);
    this.renderBenefits = this.renderBenefits.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  toggleContent() {
    this.setState({ expand: !this.state.expand });
  }

  renderBenefits(benefits) {
    return benefits.map((benefit) => {
      let childBenefits = null;

      if (typeof benefit.children !== 'undefined') {
        childBenefits = (
          <ul className="tool--benefits">
            {this.renderBenefits(benefit.children)}
          </ul>
        );
      }

      return (
        <li key={benefit.id}>
          {benefit.benefit}
          {childBenefits}
        </li>
      );
    });
  }

  renderContent(benefits) {
    if (this.state.expand) {
      return (
        <div className="tool--content">
          <p className="tool--benefits-title">
            <span role="img" aria-label="thumbsup">&#x1f44d;&#x1f3fb;</span>
            &nbsp;&nbsp;What&apos;s good?
          </p>
          <ul className="tool--benefits">
            {this.renderBenefits(benefits)}
          </ul>
        </div>
      );
    }

    return null;
  }

  render() {
    const { tool } = this.props;

    return (
      <div className="tool">
        <div
          onClick={this.toggleContent}
          className="tool--heading"
          role="button"
          tabIndex={0}
        >
          <img
            className="tool--img"
            src={require(`../images/${tool.imgPath}`) || ''}
            alt={tool.name}
          />
          <h3 className="tool--name">{tool.name}</h3>
        </div>

        <div className="tool--information">
          <p className="tool--summary">{tool.summary}</p>
          {this.renderContent(tool.benefits)}
          <a
            href={tool.github}
            className="tool--links"
            rel="noopener noreferrer"
            target="_blank"
          >GitHub</a>
          <a
            href={tool.docs}
            className="tool--links"
            rel="noopener noreferrer"
            target="_blank"
          >Docs</a>
        </div>
      </div>
    );
  }
}

Tool.propTypes = {
  tool: PropTypes.object.isRequired
};

export default Tool;
