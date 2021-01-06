import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ListView.css';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import FilterDropdown from '../../FilterDropdown/FilterDropdown';
import MakerCard from '../MakerCard/MakerCard';

class ListView extends Component {



  render() {
    return (
      <div className="list-body">
        <div className="filter">
          <FilterDropdown/>
        </div>
        
        {/* When there are actual makers in the DB, this is where we will map through them and create the cards */}
         {/* {JSON.stringify(this.props.store.maker)} */}
         {this.props.store.maker.map((maker) => {
           return(
            <>
             {maker.approved_maker ?
              <MakerCard maker={maker} key={maker.id}/>
             :
             <h1></h1>  
            }
            </>
           )
         })}

      </div>
    );
  }
}

export default connect(mapStoreToProps)(ListView);