import {connect} from 'react-redux';
import BasicComponent from '../components/BasicComponent';

const mapStateToProps = (state) => ({
	// Modify this to only include the required properties
	...state
});


const ReduxContainer = connect(mapStateToProps)(BasicComponent);

export default ReduxContainer;
