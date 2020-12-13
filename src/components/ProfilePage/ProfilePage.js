import React from 'react';


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'
class InfoPage extends React.Component {



  makerLink = () => {
    // this.props.history.push()
  }
  render() {
    return (
      <>
      <div>
        <h1>Profile Page</h1>
        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} width = '200' />
        <br/>

        <p>User Name</p>
      </div>
      <div>
        <h2>Favorites</h2>
        <div>
          <img></img>
          <button onClick={this.makerLink}>Makers Name</button>
          <p>Makers Description</p>
        </div>
      </div>
      </>
    )
  }
}

export default InfoPage;
