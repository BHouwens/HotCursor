import React from 'react';
import { Greeting } from '../Greeting/Greeting';
import styles from './app.css';

export class App extends React.Component {
    render(){
        return (
            <div>
                <Greeting />
            </div>
        );
    }
}