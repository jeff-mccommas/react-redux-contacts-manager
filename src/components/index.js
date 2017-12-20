import React from 'react';
import ReactDOM from 'react-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/toastr/build/toastr.min.css'
import registerServiceWorker from './registerServiceWorker';
import App from './components/App'
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


