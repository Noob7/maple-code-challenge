import { connect } from 'react-redux';
import {updateSelectedService} from '../../actions/serviceActions';
import {ServicesComponent} from '../../components/service/serviceComponent';
  
  
const mapDispatchToProps = {
  updateSelectedService,
};

const mapStateToProps = state => {
    return { selectedService: state.control.selectedService,
             services: state.app.services,    
     };
  };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ServicesComponent);
