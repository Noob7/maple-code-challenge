import React from 'react';
import './serviceComponent.css';
import {ButtonGroup, Button} from '@material-ui/core';

export function ServicesComponent({selectedService, services, updateSelectedService}) {
  
  return (
    <div className="Service">
      <h1>Control</h1>
      <h4>Click on any service to view all its providers!</h4>
      <ButtonGroup color="primary" aria-label="outlined primary button group">

        {services && services.map((service, index) => (
        <Button variant={service.id===selectedService?'contained':'outlined'} onClick={()=>updateSelectedService(service.id)}> {service.id}</Button>
      ))}     
    </ButtonGroup>
    </div>
  );
}

