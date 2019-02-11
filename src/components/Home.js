import React from "react";
import Axios from "axios";
import Pokeball from "../pokeball.png";

export class Home extends React.Component {
  state = {
    posts: []
  };
  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/posts").then(res =>
      this.setState({
        posts: res.data
      })
    );
  }
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="A pokeball" />
            <div className="card-content">
              <span className="card-title">{post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts yet</div>
    );
    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
}
