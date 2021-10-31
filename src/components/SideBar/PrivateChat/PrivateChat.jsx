import React from 'react';

import { Menu, Icon } from 'semantic-ui-react';

const PrivateChat = () => {

    

    return <Menu.Menu style={{ marginTop: '35px' }}>
        <Menu.Item style={{ fontSize: '17px' }}>
            <span>
                <Icon name="mail" /> Chat
            </span>
        </Menu.Item>
    </Menu.Menu>
}


export default (PrivateChat);