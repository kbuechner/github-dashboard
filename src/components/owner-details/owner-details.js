import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

var OwnerDetails = React.createClass({
  getInitialState: function() {
    return {
      avatar: '',
      name: ''
    };
  },

  componentDidMount: function() {
    $.ajax({
      method: 'GET',
      url: 'https://api.github.com/user',
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': 'token ' +  CREDENTIALS.accessToken
      }
    }).done(response => {
      this.setState({
        avatar: response.avatar_url,
        name: response.login
      });
    });
  },

  render: function() {
    return (
      <div>
        <img class="owner-avatar" src={this.state.avatar}/>
        <h1><span class="owner-name">{this.state.name}</span>'s Repositories</h1>
      </div>
    )
  }
});

ReactDOM.render(
  <OwnerDetails />,
  document.getElementById('owner-details')
);