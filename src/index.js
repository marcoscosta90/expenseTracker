import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider} from '@speechly/react-client'

import  {Provider } from './context/context'

import App from './App';
import './index.css'

ReactDOM.render(
    <SpeechProvider appId="0bc63ca0-42ca-44ce-8075-5c77e3eab043" language="en-US">
        <Provider>
    <App />
        </Provider>
    </SpeechProvider>, 
document.getElementById('root'));
