import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Nav from '../components/Nav';
import Tool from '../components/Tool';
import Footer from '../components/Footer';

import { fetchDevTools, upvoteTool, downvoteTool } from '../actions/actions';
import { getDevTools } from '../reducers/reducer-tools';

import '../stylesheets/dev.scss';

class Dev extends Component {
  componentWillMount() {
    if (this.props.tools.length === 0) {
      this.props.fetchDevTools();
    }
  }

  renderTools() {
    return this.props.tools.map((tool) => (
      <Tool
        key={tool.name}
        tool={tool}
        category="dev"
        upvote={this.props.upvoteTool}
        downvote={this.props.downvoteTool}
      />
    ));
  }

  render() {
    return (
      <div className="dev">
        <Nav pathname={this.props.location.pathname} />
        {this.renderTools()}
        <Footer />
      </div>
    );
  }
}

Dev.defaultProps = {
  tools: []
};

Dev.propTypes = {
  tools: PropTypes.array,
  location: PropTypes.object.isRequired,
  upvoteTool: PropTypes.func.isRequired,
  downvoteTool: PropTypes.func.isRequired,
  fetchDevTools: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  tools: getDevTools(state)
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    fetchDevTools,
    upvoteTool,
    downvoteTool
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Dev);
