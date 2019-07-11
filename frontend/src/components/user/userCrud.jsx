import React, { Component } from 'react';
import Main from '../template/main';

const headerProps = {
    icon: 'users',
    title: 'Users',
    subtitle: 'User registration: Includ, List, Update and Delete'
};

export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headerProps}>
                User registration
            </Main>
        )
    }
}