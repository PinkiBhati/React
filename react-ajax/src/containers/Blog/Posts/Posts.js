import React, { Component } from 'react'
import Post from '../../../components/Post/Post';
import axios from '../../../axios'
import {Route} from 'react-router-dom'
// import { Link } from 'react-router-dom'
import classes from './posts.module.css'
import FullPost from '../FullPost/FullPost';
class Posts extends Component {

    state = {
        posts: []
    }

    postselectedHandler = (id) => {

        this.props.history.push({pathname: '/posts/'+ id})
        // this.setState({ selectedId: id });
    }

    componentDidMount() {
        console.log(this.props)
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedposts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Pinki'
                    }
                })
                this.setState({
                    posts: updatedposts
                });

            }).catch(error => {
                console.log(error)
                //this.setState({error: true});
            });
    }
    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {

                return (
                // <Link to={'/' + post.id} key={post.id} >
                    <Post clicked={() => this.postselectedHandler(post.id)}
                      title={post.title}
                      key={post.id}
                        author={post.author} />
                // </Link>
                )
            });
        }


        return (

            <div>
                <section className={classes.Posts}>
                {posts}
            </section>
            <Route path={this.props.match.url +"/:id"} exact component={FullPost} />
            </div>
            

        )
    }
}

export default Posts
