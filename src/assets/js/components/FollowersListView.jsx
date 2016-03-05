import React, { Component, PropTypes } from 'react';
import GithubUser from './GithubUser';

function FollowersListView({list}){
  return (
    <ul>{list.map((follower)=>
      <GithubUser key={follower.id} avatar_url={follower.avatar_url} username={follower.login} />
    )}</ul>
  )
}

export default FollowersListView;
