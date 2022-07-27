
import { connect } from 'react-redux';
import DetailPage from './DetailPage';
import { setElementAC, resetDataAC } from '../redux/detailReducer'


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

        resetData: () => {
            dispatch(resetDataAC())
        }

       
    }
    
}


const DetailPageContainer = connect(mapStateToProps, mapDispatchToProps)(DetailPage);

export default DetailPageContainer;