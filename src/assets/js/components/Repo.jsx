import React, { Component, PropTypes } from 'react';

function Repo(props) {
  const {repo} = props;
  return (
    <li>
      <a href={repo.html_url}>{repo.name}</a>
    </li>
  )
}

export default Repo;
