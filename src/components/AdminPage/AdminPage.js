import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import AdminTabs from './AdminTabs/AdminTabs';

class AdminPage extends Component {



  render() {
    return (
      <div>
          
          {this.props.store.user.admin ?
         <>
         <h1>View All Makers</h1>
          <AdminTabs/>
          </>
          :
          <h1>Sorry you are not admin you need access to view this page.</h1>
        
        }
          
      </div>
    );
  }
}

export default connect(mapStoreToProps)(AdminPage);
