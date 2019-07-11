import React, { Fragment } from 'react';

export default props => 
    <Fragment>
        <a href={props.url}>
            <i className={`fa fa-${props.icon}`}></i> { props.title }
        </a>
    </Fragment>