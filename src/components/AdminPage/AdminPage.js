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
          <p>Sorry you are not admin you need access to view this page.</p>
        
        }
          
      </div>
    );
  }
}

export default connect(mapStoreToProps)(AdminPage);
