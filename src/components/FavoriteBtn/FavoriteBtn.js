import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'reactstrap';

const heart = <FontAwesomeIcon icon={faHeart} />

class FavoriteBtn extends Component {

    
    
    
    favoriteMaker = (makerId,fav) => {
        console.log(fav);
        

        const favbtn = fav;
        const result = favbtn.filter(function(favorite){
            return favorite.maker_id == makerId;
        });
            console.log('33333333333333333',result);
        if (this.props.store.user.id != null) {
            
            {result.length ?
                alert('You already have this favorite')
                
                :
             this.props.dispatch({ type: 'POST_FAVORITE', payload: makerId });
                }
            }           
        
        else {
            alert('Login or create an account to favorite a maker');
        }
    }
    
    render() {
        console.log('in FAVORITE BTN',this.props.fav);
        
        return (
            <Button color="outline-danger" onClick={() => this.favoriteMaker(this.props.makerId,this.props.fav)}>
                {heart}
            </Button>
        )
    }
}

export default connect(mapStoreToProps)(FavoriteBtn);