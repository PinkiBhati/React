import React, { Component ,Suspense} from 'react';
import classes from './blog.module.css';
import { Route, NavLink,Switch,Redirect } from 'react-router-dom'
import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
//import FullPost from './FullPost/FullPost';
import asyncComponent from '../../hoc/asyncComponent'

const AsyncNewPost  = asyncComponent(()=>{
    return import('./NewPost/NewPost');
});
// const Async= React.lazy(()=> import('./NewPost/NewPost'));

class Blog extends Component {

    state={
        auth: true
    }
    render() {
        return (
            <div className={classes.Blog}>
                <header >
                    <nav>
                        <ul >
                            <li><NavLink to="/posts/"
                                         exact 
                                         activeClassName="my-active"
                                         activeStyle={{
                                             color: 'blue',
                                             textDecoration: 'underline'
                                         }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                //pathname: this.props.match.url + '/new-post',
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={()=><Posts/>}/> */}
                <Switch>
                
               {this.state.auth ?<Route path="/new-post" exact  component={AsyncNewPost}/> : null}

{/*                
                                        // render={()=><Suspense fallback={<div>Loading...</div>}>
                                        //             <Async/>
                                        //         </Suspense>} />  : null}  */}
                <Route path="/posts" component={Posts} />
                <Route render={()=><h1>Not Found</h1>}/>
                {/* <Redirect from="/" to="/posts"/> */}
                {/* <Route path="/" component={Posts} /> */}
                
                </Switch>
              
                
            </div>
        );
    }
}

export default Blog;