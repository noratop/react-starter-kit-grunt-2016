  import React, { Component, PropTypes } from 'react';
  import FollowersListView from '../components/FollowersListView';
  import {connect} from 'react-redux';
  import {fetchFollowers} from '../redux/actions';

  class Followers extends Component {

     constructor(props) {
        super(props);
        this.state = {};
      }

     componentDidMount() {
         this.props.dispatch(fetchFollowers());
    }

     // componentWillReceiveProps(nextProps) {
     //     this.props.dispatch(fetchRepos());
     // }

    render() {
      return (
        <div>
          <h2>Followers</h2>
          {this.renderFollowers()}
        </div>
      )
    }

    renderFollowers() {
      const {followers} = this.props;

      if (followers.error) {
        return 'An error occurred: ' + JSON.stringify(followers.error);
      }
      else if (followers.isFetching || !followers.result) {
        return 'loading...';
      }
      else if (followers.result.length === 0) {
        return 'no followers...';
      }
      else {
        return <FollowersListView list={followers.result}/>;
      }
    }
  }

  function mapStateToProps(store) {
    return {
      followers: store.followers,
    };
  }

  export default connect(mapStateToProps)(Followers);
