import React from 'react';
import './providerComponent.css';

import CardMedia from '@material-ui/core/CardMedia';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  
  media: {
    height: 150,
  },
});


export function ProviderComponent({providers}) {
  const classes = useStyles();
  return (
    <div className="provider">
      <h1>Providers</h1>
        {providers && providers.map((provider, index) => (
          <Card >
          <CardHeader
            
            title={provider.attributes.name || 'DummyName'}
            subheader={provider.attributes.address || 'Some Address'}
          />
          <CardMedia
                    className={classes.media}
                    image={require('../../images/2.jpg')}
                    title="Contemplative Reptile"
          />
          </Card>    
      ))} 

    
    </div>
  );
}






