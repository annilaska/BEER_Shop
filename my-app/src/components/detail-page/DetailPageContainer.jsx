
import { connect } from 'react-redux';
import DetailPage from './DetailPage';
import { setElementAC } from '../redux/detailReducer'


let mapStateToProps = (state) => {

    return {
        detailBeersData: state.detailPage.detailBeersData,
    }
};


let mapDispatchToProps = (dispatch) => {
    return {
  
        setElement: (element) => {
            dispatch(setElementAC(element))
        },

       
    }
    
}


const DetailPageContainer = connect(mapStateToProps, mapDispatchToProps)(DetailPage);

export default DetailPageContainer;