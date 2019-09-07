import React, { Component } from 'react';
import TwitterLogin from 'react-twitter-auth';
import { TwitterTimelineEmbed} from 'react-twitter-embed';
import { Timeline } from 'react-twitter-widgets';
class App extends Component {

  constructor() {
    super();

    this.state = { isAuthenticated: false, user: null, token: ''};
  }

  onSuccess = (response) => {
    const token = response.headers.get('x-auth-token');
    response.json().then(user => {
      if (token) {
        this.setState({isAuthenticated: true, user: user, token: token});
      }
    });
  };

  onFailed = (error) => {
    alert(error);
  };

  logout = () => {
    this.setState({isAuthenticated: false, token: '', user: null})
  };

  render() {
    let content = !!this.state.isAuthenticated ?
      (

        <div>
          <p>Authenticated</p>
          <div>
            {this.state.user.email}
          </div>
          <div>
            <button onClick={this.logout} className="button" >
              Log out
            </button>
          </div>
        </div>
      ) :
      (
        <TwitterLogin loginUrl="http://localhost:4000/api/v1/auth/twitter"
                      onFailure={this.onFailed} onSuccess={this.onSuccess}
                      requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"/>
      );

    return (
      <div className="App">
        <Timeline 
          dataSource = {{sourceType:"profile", screenName: "reactjs"}}
          options={{username:"reactjs", height : "600"}}
/>
        {content}
      </div>
    );
  }
}

export default App;
