import * as ActionTypes from './constants';
import fetch from 'isomorphic-fetch';

// Github examples
const apiURL = 'https://api.github.com/users/ziad-saab';

//Repos actions
function requestRepos(){
  return {
    type: 'REQUEST_REPOS'
  }
}

function receivedRepos(result){
  return {
    type: 'SUCCESS_REPOS',
    result
  }
}

function failedFetchingRepos(error){
  return {
    type: 'FAILURE_REPOS',
    error
  }
}

export function fetchRepos() {
  return (dispatch) => {
    dispatch(requestRepos())
    return fetch(`${apiURL}/repos`).
      then((response) => response.json()).
      then((result) => dispatch(receivedRepos(result))).
      catch((error) => dispatch(failedFetchingRepos(error)));
  };
}


//Followers actions
function requestFollowers(){
  return {
    type: 'REQUEST_FOLLOWERS'
  }
}

function receivedFollowers(result){
  return {
    type: 'SUCCESS_FOLLOWERS',
    result
  }
}

function failedFetchingFollowers(error){
  return {
    type: 'FAILURE_FOLLOWERS',
    error
  }
}

export function fetchFollowers() {
  return (dispatch) => {
    dispatch(requestFollowers())
    return fetch(`${apiURL}/followers`).
      then((response) => response.json()).
      then((result) => dispatch(receivedFollowers(result))).
      catch((error) => dispatch(failedFetchingFollowers(error)));
  };
}



// MERN examples
// const baseURL = typeof window === 'undefined' ? process.env.BASE_URL || (`http://localhost:${(process.env.PORT || 8000)}`) : '';
//
// export function addPost(post) {
//   return {
//     type: ActionTypes.ADD_POST,
//     name: post.name,
//     title: post.title,
//     content: post.content,
//     slug: post.slug,
//     cuid: post.cuid,
//     _id: post._id,
//   };
// }
//
// export function changeSelectedPost(slug) {
//   return {
//     type: ActionTypes.CHANGE_SELECTED_POST,
//     slug,
//   };
// }
//
// export function addPostRequest(post) {
//   return (dispatch) => {
//     fetch(`${baseURL}/api/addPost`, {
//       method: 'post',
//       body: JSON.stringify({
//         post: {
//           name: post.name,
//           title: post.title,
//           content: post.content,
//         },
//       }),
//       headers: new Headers({
//         'Content-Type': 'application/json',
//       }),
//     }).then((res) => res.json()).then(res => dispatch(addPost(res.post)));
//   };
// }
//
// export function addSelectedPost(post) {
//   return {
//     type: ActionTypes.ADD_SELECTED_POST,
//     post,
//   };
// }
//
// export function getPostRequest(post) {
//   return (dispatch) => {
//     return fetch(`${baseURL}/api/getPost?slug=${post}`, {
//       method: 'get',
//       headers: new Headers({
//         'Content-Type': 'application/json',
//       }),
//     }).then((response) => response.json()).then(res => dispatch(addSelectedPost(res.post)));
//   };
// }
//
// export function deletePost(post) {
//   return {
//     type: ActionTypes.DELETE_POST,
//     post,
//   };
// }
//
// export function addPosts(posts) {
//   return {
//     type: ActionTypes.ADD_POSTS,
//     posts,
//   };
// }
//
// export function fetchPosts() {
//   return (dispatch) => {
//     return fetch(`${baseURL}/api/getPosts`).
//       then((response) => response.json()).
//       then((response) => dispatch(addPosts(response.posts)));
//   };
// }
//
// export function deletePostRequest(post) {
//   return (dispatch) => {
//     fetch(`${baseURL}/api/deletePost`, {
//       method: 'post',
//       body: JSON.stringify({
//         postId: post._id,
//       }),
//       headers: new Headers({
//         'Content-Type': 'application/json',
//       }),
//     }).then(() => dispatch(deletePost(post)));
//   };
// }
