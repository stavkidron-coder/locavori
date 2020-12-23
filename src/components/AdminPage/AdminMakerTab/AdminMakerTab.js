import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import { Card, CardBody, CardTitle, Container, Button } from 'reactstrap';




class Maker extends Component {
    componentDidMount() {
        this.getMaker();
    }

    getMaker = () => {
        this.props.dispatch({ type: 'GET_MAKERS' })
    }
    ViewProfile = () => {
        this.props.history.push("/maker")
    }
    // DeleteProfile = () => {

    // }
    render() {
        return (
            <Container>
                <h1>Makers</h1>
                <Card>
                    {this.props.store.maker.map((maker) => {
                        return <><Card key={maker.id}>
                            <img src={maker.owner_img} width='100px' alt={maker.business_name}/>
                            <CardTitle>{maker.business_name}
                                <CardBody>{maker.story}</CardBody>
                                <Button onClick={this.ViewProfile}>View Profile</Button>
                                <Button onClick={this.DeleteProfile}>Delete Profile</Button>
                            </CardTitle>
                        </Card>
                        </>
                    })}
                </Card>
            </Container>
        );
    }
}


export default withRouter(connect(mapStoreToProps)(Maker));