import React from 'react';
import { Greeter } from '../Greeter/Greeter';
import { WebView } from '../WebView/WebView';
import { HeatMap } from '../HeatMap/HeatMap';
import { ControlBar } from '../ControlBar/ControlBar';

import styles from './app.css';

export class App extends React.Component {
    render(){
        return (
            <div className={styles.app}>
                <ControlBar />
            </div>
        );
    }
}