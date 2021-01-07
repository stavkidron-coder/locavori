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

        if(this.props.store.user.id != null){
            this.props.dispatch({type: 'POST_FAVORITE', payload: makerId});
        }
        else {
            alert('Login or create an account to favorite a maker');
        }
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