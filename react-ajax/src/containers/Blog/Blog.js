import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import classes from './blog.module.css';

class Blog extends Component {

    state={
        posts:[],
        selectedId: null

    }
    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(response=>{
                const posts= response.data.slice(0,4);
                const updatedposts= posts.map(post=>{
                    return{
                        ...post,
                        author: 'Max'
                    }
                })
                this.setState({
                    posts: updatedposts
                })
                console.log(response);
            }); 
    }

    postSelectedHandler=(id)=>{

        this.setState({selectedId: id});
    }
    render () {
        const  posts= this.state.posts.map(post=>{
            return <Post  clicked={this.postselectedHandler(post.id)} key={post.id} title={post.title} author={post.author}/>
        })
        return (
            <div>
                <section className={classes.Posts}>
                   {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;