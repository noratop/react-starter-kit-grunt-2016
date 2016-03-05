import React from 'react';

export default function GithubUser(props) {
  return (
    <div className="github-user">
      <img src={props.avatar_url} alt="" className="github-user__pic"/>
      <div className="github-user__username">
        {props.username}
      </div>
    </div>
  )
}