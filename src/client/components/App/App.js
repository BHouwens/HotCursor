import React from 'react';
import { Greeter } from '../../containers/greeter';
import { WebViewer } from '../../containers/webView';
import styles from './app.css';

export class App extends React.Component {
    render(){
        return (
            <div className={styles.app}>
                <Greeter />
                <WebViewer />
            </div>
        );
    }
}