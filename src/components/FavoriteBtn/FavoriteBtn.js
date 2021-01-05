import React, {Component} from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'reactstrap';

const heart = <FontAwesomeIcon icon={faHeart} />

class FavoriteBtn extends Component{

    favoriteMaker = (makerId) => {
        console.log('ID for favorite Btn:', makerId);
        // this.props.dispatch({type: 'SET_FAVORITE', payload: makerId});
    }

    render(){
        return(
            <Button color="outline-danger" onClick={() => this.favoriteMaker(this.props.makerId)}>
                {heart}
            </Button>
        )
    }
}

export default connect(mapStoreToProps)(FavoriteBtn);