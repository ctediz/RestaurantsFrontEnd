import React from 'react';
import Header from './common/Header';
import MainBody from './common/MainBody';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                <MainBody />
            </div>
        );
    }
}

export default App;