
import { connect } from 'react-redux';
import DetailPage from './DetailPage';
import { setBeersCardT, resetData } from '../../redux/detailReducer';


let mapStateToProps = (state) => {
    return {
        detailBeersData: state.detailPage.detailBeersData,
    }
};


const DetailPageContainer = connect(mapStateToProps, { setBeersCardT, resetData })(DetailPage);

export default DetailPageContainer;