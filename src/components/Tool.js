// @flow

import React, { Component } from 'react';
import '../stylesheets/tool.scss';

type BenefitObj = {
  id: number,
  benefit: string,
  children?: Array<BenefitObj>
}

type ToolObj = {
  name: string,
  summary: string,
  imgPath: string,
  github: string,
  docs: string,
  benefits: Array<BenefitObj>
}

type Props = {
  tool: ToolObj
}

type State = {
  expand: boolean
}

class Tool extends Component<void, Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { expand: false };

    (this: any).toggleContent = this.toggleContent.bind(this);
  }

  state: State

  toggleContent() {
    this.setState({ expand: !this.state.expand });
  }

  renderBenefits(benefits: Array<BenefitObj>): Array<React.Element<*>> {
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

  renderContent(benefits: Array<BenefitObj>): (React.Element<*> | null) {
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

  render(): React.Element<*> {
    const { name, summary, imgPath, benefits, github, docs }: ToolObj = this.props.tool;

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
            src={require(`../images/${imgPath}`) || ''}
            alt={name}
          />
          <h3 className="tool--name">{name}</h3>
        </div>

        <div className="tool--information">
          <p className="tool--summary">{summary}</p>
          {this.renderContent(benefits)}
          <a
            href={github}
            className="tool--links"
            rel="noopener noreferrer"
            target="_blank"
          >GitHub</a>
          <a
            href={docs}
            className="tool--links"
            rel="noopener noreferrer"
            target="_blank"
          >Docs</a>
        </div>
      </div>
    );
  }
}

export default Tool;
