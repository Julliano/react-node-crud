import React, { Fragment } from 'react';
import './main.css';
import Header from './header';

export default props => 
    <Fragment>
        <Header {...props} />
        <main className="content container-fluid">
            <div className="p-3 mt-3 mb-3">
                { props.children }
            </div>
        </main>
    </Fragment>