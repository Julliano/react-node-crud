import React, { Fragment } from 'react';
import './main.css';
import Header from './header';

export default props => 
    <Fragment>
        <Header {...props} />
        <main className="content">
            Content
        </main>
    </Fragment>