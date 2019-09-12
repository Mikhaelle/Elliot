import React from 'react';
import { Timeline } from 'react-twitter-widgets'

const timeline = props =>(
    
        <div> 
            <Timeline
    dataSource={{
      sourceType: 'profile',
      screenName: 'twitterdev'
    }}
    options={{
      username: 'TwitterDev',
      height: '400'
    }}
    onLoad={() => console.log('Timeline is loaded!')}
  />
        </div>
        
);

export default timeline;