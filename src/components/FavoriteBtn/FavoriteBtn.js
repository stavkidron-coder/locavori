import React, {useState} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import '../HomePage/MakerCard/MakerCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const heart = <FontAwesomeIcon icon={faHeart} />

// <<<<<<< HEAD
// class FavoriteBtn extends Component {

//     favoriteMaker = (makerId, fav) => {
//         const favbtn = fav;
//         const result = favbtn.filter(function (favorite) {
//             return favorite.maker_id == makerId;
//         });
//         console.log('33333333333333333', result);
//         if (this.props.store.user.id != null) {
//             {
//                 result.length ?
//                     alert('You already have this favorite')
//                     :
//                     this.props.dispatch({ type: 'POST_FAVORITE', payload: makerId });
//             }
//         }
//         else {
//             alert('Login or create an account to favorite a maker');
//         }
//     }

//     render() {
//         console.log('in FAVORITE BTN', this.props.fav);

//         return (
//             <Button color="outline-danger" onClick={() => this.favoriteMaker(this.props.makerId, this.props.fav)}>
//                 {heart}
//             </Button>
//         )
// =======
let favStatus;

const FavoriteBtn = (props) => {
     
    const favoriteChecker = (makerId,fav) => {
        console.log('in fav status in fav CHECKER',favStatus);
        
        const favbtn = fav;
        const result = favbtn.filter(function (favorite) {
            return favorite.maker_id === makerId;         
        });
        if(result.length){
            
            favStatus = true;
            console.log('in 1st fav Status', favStatus);
        }else{
            favStatus = false;
            console.log('in fav Status NOW',favStatus);
            
            favoriteMaker(makerId)
        }
    }
    const favoriteMaker = (makerId) => {
        props.dispatch({ type: 'POST_FAVORITE', payload: makerId });
        toggle();
    }
    //     console.log('33333333333333333', result);
    //     if (this.props.store.user.id != null) {
    //         {
    //             result.length ?
    //             <div>
    //   <Button className="favoriteBtn" onClick={() => favoriteMaker(props.maker.id)}>{heart}</Button>
    //   <Modal isOpen={modal} toggle={toggle}>
    //     <ModalHeader toggle={toggle} className="favModalHeader">Add {props.maker.business_name} to your favorites</ModalHeader>
    //     <ModalBody>
    //         {props.maker.business_name} Is already added to your favorites!
    //     </ModalBody>
    //     <ModalFooter className="favModalFooter">
    //       <Button className="modalBtns" onClick={toggle}>OK!</Button>{' '}
    //     </ModalFooter>
    //   </Modal>
    // </div>
    //             :
    //             this.props.dispatch({ type: 'POST_FAVORITE', payload: makerId });
    //         }
    //     }
    //     else {
    //      return(
    //      <div>
    //   <Button color="danger" className="favoriteBtn" onClick={toggle}>{heart}</Button>
    //   <Modal isOpen={modal} toggle={toggle}>
    //     <ModalHeader toggle={toggle} className="favModalHeader">Want to add "{props.maker.business_name}" to your favorites?</ModalHeader>
    //     <ModalBody>
    //         Login or create an account to save your favorite makers!
    //     </ModalBody>
    //     <ModalFooter className="favModalFooter">
    //       <Button className="modalBtns" onClick={() => login()}>Login</Button>{' '}
    //       <Button className="modalBtns" onClick={() => register()}>Register</Button>{' '}
    //     </ModalFooter>
    //   </Modal>
    // </div>)
    //     }
    // }

    const login = () => {
        props.history.push('/login');
        toggle();
    }

    const register = () => {
        props.history.push('/register-options');
        toggle();
    }

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
<>
    {props.store.user.id ?

    <div>
      <Button className="favoriteBtn" onClick={() => favoriteChecker(props.maker.id,props.fav)}>{heart}</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className="favModalHeader">Add {props.maker.business_name} to your favorites</ModalHeader>
        <ModalBody>
            {favStatus === true ?
           <p> Already a favorite</p>
        :
           <p> {props.maker.business_name} was successfully added to your favorites!</p>
        }       
        </ModalBody>
        <ModalFooter className="favModalFooter">
          <Button className="modalBtns" onClick={toggle}>OK!</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
    :
    <div>
      <Button color="danger" className="favoriteBtn" onClick={toggle}>{heart}</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className="modalHeader">Want to add "{props.maker.business_name}" to your favorites?</ModalHeader>
        <ModalBody>
            Login or create an account to save your favorite makers!
        </ModalBody>
        <ModalFooter className="modalFooter">
          <Button className="modalBtns" onClick={() => login()}>Login</Button>{' '}
          <Button className="modalBtns" onClick={() => register()}>Register</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>

    }
</>
  );
}


export default withRouter(connect(mapStoreToProps)(FavoriteBtn));