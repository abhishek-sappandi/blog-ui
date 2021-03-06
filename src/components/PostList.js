import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

 class PostList extends Component {
     constructor(){
         super()
         this.state={
             posts:[]
         }
     }
     componentDidMount(){
       axios.get('https://jsonplaceholder.typicode.com/posts')
       .then((response)=>{
           const posts = response.data
           this.setState({posts})
       })
     }
    render() {
        return (
            <div>
              <h1>Total posts:{this.state.posts.length}</h1>
              <ul>
                  {
                      this.state.posts.map(e =><li key={e.id}><Link to={`/posts/${e.id}`}>{e.title}</Link></li>)
                  }
              </ul>
            </div>
        )
    }
}
export default PostList  