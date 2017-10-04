import React from 'react';
import Header from './common/Header';
import Router from './common/Router';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                <Router />
            </div>
        );
    }
}

export default App;