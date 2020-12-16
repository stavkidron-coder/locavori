import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import AdminMakerTab from '../AdminMakerTab/AdminMakerTab';
import AdminPARTab from '../AdminPARTab/AdminParTab';



const AdminTabs = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Business
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Products
          </NavLink>
        </NavItem>        
      </Nav>
        <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
                <AdminMakerTab/>
            </TabPane>
            <TabPane tabId="2">
                <AdminPARTab/>
            </TabPane>
        </TabContent>
    </div>
  );
}

export default AdminTabs;