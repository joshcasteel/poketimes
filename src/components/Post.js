import React from "react";
import Axios from "axios";

class Post extends React.Component {
  state = {
    id: null
  };
  componentDidMount() {
    let id = this.props.match.params.post_id;
    this.setState({
      id: id
    });
  }
  render() {
    return (
      <div className="container">
        <h4>route params</h4>
        <p>route id: {this.state.id}</p>
      </div>
    );
  }
}
export default Post;
