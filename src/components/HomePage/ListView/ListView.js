import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ListView.css';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import MakerCard from '../MakerCard/MakerCard';

class ListView extends Component {



  render() {
    return (
      <div className="list-body">
        
        {/* When there are actual makers in the DB, this is where we will map through them and create the cards */}
         {/* {JSON.stringify(this.props.store.maker)} */}
         {this.props.store.maker.map((maker) => {
           return(
              <MakerCard maker={maker} key={maker.id}/>
           )
         })}

      </div>
    );
  }
}

export default connect(mapStoreToProps)(ListView);