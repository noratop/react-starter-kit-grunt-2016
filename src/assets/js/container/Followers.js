  import React, { Component, PropTypes } from 'react';
  import GithubUser from '../components/GithubUser';
  import {connect} from 'react-redux';
  import {fetchFollowers} from '../redux/actions';

  class Followers extends Component {

     constructor(props) {
        super(props);
        this.state = {};
      }

     componentDidMount() {
         this.props.dispatch(fetchFollowers());
       // this.setState({
       //   loading: true
       // });
       //
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
        return (<ul>{this.props.followers.result.map(this.renderFollower)}</ul>);
      }
    }

    renderFollower(follower) {
      return (
        <GithubUser key={follower.id} avatar_url={follower.avatar_url} username={follower.login} />
      )
    }
  }

  function mapStateToProps(store) {
    return {
      followers: store.followers,
    };
  }

  export default connect(mapStateToProps)(Followers);
