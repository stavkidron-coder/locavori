import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Container, Button } from 'reactstrap';



class Maker extends Component {
    componentDidMount(){
        this.getMaker();
    }

    getMaker = () => {
        this.props.dispatch({type: 'GET_MAKERS'})
    }
    ViewProfile = () =>{
        this.props.history.push("/maker")
    }
    render() {
        return (
        <Container>       
            <h1>Makers</h1>
            <Card>
                {this.props.store.maker.map((maker) => {
                    return <><Card key = {maker.id}>
                        <CardTitle>{maker.business_name}</CardTitle>
                        <CardBody>{maker.story}</CardBody>
                    </Card>
                        <Button onClick={this.ViewProfile}>View Profile</Button>
                        <Button>Delete Profile</Button>
                    </>

                })}

            </Card>
        </Container> 
        );
    }
}


export default withRouter(connect(mapStoreToProps)(Maker));