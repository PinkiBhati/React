import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import classes from './blog.module.css';

class Blog extends Component {

    state = {
        posts: [],
        selectedId: null,
        error: false
    }
    componentDidMount() {
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

            }).catch(error =>{
                
                this.setState({error: true});
            });
    }

    postselectedHandler = (id) => {

        this.setState({ selectedId: id });
    }
    render() {
        let posts=<p style={{textAlign :'center'}}>Something went wrong</p>;
        console.log('inside render')
        console.log(this.state.error);
        if(!this.state.error){
            posts = this.state.posts.map(post => {

                return <Post clicked={() => this.postselectedHandler(post.id)}
                             key={post.id} 
                             title={post.title}
                              author={post.author} />
            });
        }
       
        
        return (
            <div>
                <section className={classes.Posts}>
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;