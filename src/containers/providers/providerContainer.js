import { connect } from 'react-redux';
import {ProviderComponent} from '../../components/provider/providerComponent';
  
  

const mapStateToProps = state => {
    const allProviders = [...state.app.providers];
    const filter =state.control.selectedService.replace(/-/g, ' ');
    
    console.log(filter);
    let res =[];
    if(filter===''){
         res=allProviders;
    } else {
    res= allProviders.filter(provider=>provider.attributes.service && provider.attributes.service.toLowerCase() === filter) 
    }

    return {providers:res}
};

export default connect(
  mapStateToProps,
  null,
)(ProviderComponent);
