import React from 'react';
import { Greeting } from '../Greeting/Greeting';
import { WebViewer } from '../../containers/webView';
import styles from './app.css';

export class App extends React.Component {
    render(){
        return (
            <div className={styles.app}>
                <Greeting />
                <WebViewer />
            </div>
        );
    }
}