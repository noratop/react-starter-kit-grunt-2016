import React, { Component, PropTypes } from 'react';
import ReposListView from '../components/ReposListView';
import {connect} from 'react-redux';
import {fetchRepos} from '../redux/actions';

class Repos extends Component {
  constructor(props) {
     super(props);
     this.state = {};
   }

  componentDidMount() {
      this.props.dispatch(fetchRepos());
  }

  // componentWillReceiveProps(nextProps) {
  //     this.props.dispatch(fetchRepos());
  // }

  render() {
    return (
      <div>
        <h2>Repos</h2>
        {this.renderRepos()}
      </div>
    )
  }

  renderRepos() {
    const {repos} = this.props;

    if (repos.error) {
      return 'An error occurred: ' + JSON.stringify(repos.error);
    }
    else if (repos.isFetching || !repos.result) {
      return 'loading...';
    }
    else if (repos.result.length === 0) {
      return 'no repos...';
    }
    else {
      return <ReposListView list={repos.result}/>;
    }
  }
}


function mapStateToProps(store) {
  return {
    repos: store.repos,
  };
}

export default connect(mapStateToProps)(Repos);
