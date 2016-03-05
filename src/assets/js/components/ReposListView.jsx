import React, { Component, PropTypes } from 'react';
import Repo from './Repo';

function ReposListView({list}){
  return (
    <ul>{list.map((repo)=>
      <Repo key={repo.id} repo={repo}/>
    )}</ul>
  )
}

export default ReposListView;
