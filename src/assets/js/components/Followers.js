import React from 'react';
import request from 'superagent';
import GithubUser from './GithubUser';

var Followers = React.createClass({
  getInitialState() {
    return {};
  },
  componentWillMount() {
    this.setState({
      loading: true
    });

    request
      .get('https://api.github.com/users/ziad-saab/followers')
      .end((err, res) => {
        this.setState({
          loading: false
        });

        if (err) {
          this.setState({
            error: err
          });
        }
        else {
          this.setState({
            followers: res.body
          });
        }
      });
  },
  render() {
    return (
      <div>
        <h2>Followers</h2>
        {this.renderFollowers()}
      </div>
    )
  },
  renderFollowers() {
    if (this.state.error) {
      return 'An error occurred: ' + JSON.stringify(this.state.error);
    }
    else if (this.state.loading || !this.state.followers) {
      return 'loading...';
    }
    else if (this.state.followers.length === 0) {
      return 'no followers...';
    }
    else {
      return (<ul>{this.state.followers.map(this.renderFollower)}</ul>);
    }
  },
  renderFollower(follower) {
    return (
      <GithubUser key={follower.id} avatar_url={follower.avatar_url} username={follower.login} />
    )
  }
});

export default Followers;
