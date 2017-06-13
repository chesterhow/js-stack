import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Nav from '../components/Nav';
import Tool from '../components/Tool';
import Footer from '../components/Footer';

import { fetchTestTools, upvoteTool, downvoteTool } from '../actions/actions';
import { getTestTools } from '../reducers/reducer-tools';

import '../stylesheets/test.scss';

class Test extends Component {
  componentWillMount() {
    if (this.props.tools.length === 0) {
      this.props.fetchTestTools();
    }
  }

  renderTools() {
    return this.props.tools.map((tool) => (
      <Tool
        key={tool.name}
        tool={tool}
        category="test"
        upvote={this.props.upvoteTool}
        downvote={this.props.downvoteTool}
      />
    ));
  }

  render() {
    return (
      <div className="test">
        <Nav pathname={this.props.location.pathname} />
        {this.renderTools()}
        <Footer />
      </div>
    );
  }
}

Test.defaultProps = {
  tools: []
};

Test.propTypes = {
  tools: PropTypes.array,
  location: PropTypes.object.isRequired,
  upvoteTool: PropTypes.func.isRequired,
  downvoteTool: PropTypes.func.isRequired,
  fetchTestTools: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  tools: getTestTools(state)
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    fetchTestTools,
    upvoteTool,
    downvoteTool
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Test);
