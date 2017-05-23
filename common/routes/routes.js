import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from '../components/Main';
import HomePageContainer from '../containers/HomePageContainer';
import LoginPageContainer from '../containers/LoginPageContainer';
import PostPageContainer from '../containers/PostPageContainer';
//import CheckAuth from '../components/CheckAuth';

export default (
  <Route path='/' component={Main}>
  	<IndexRoute component={HomePageContainer} />
  	<Route path="/post" component={PostPageContainer}/>
  	<Route path="/login" component={LoginPageContainer}/>
  </Route>
);