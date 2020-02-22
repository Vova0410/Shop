import React from 'react';
import { Menu } from 'semantic-ui-react';

const MenuHeader = () => {
    return (
        <Menu>
            <Menu.Item
                name='browse'
            >
                Browse
            </Menu.Item>

            <Menu.Item
                name='submit'
            >
                Submit
            </Menu.Item>

            <Menu.Menu position='right'>
                <Menu.Item
                    name='signup'
                >
                    Sign Up
                </Menu.Item>

                <Menu.Item
                    name='help'
                >
                    Help
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
};

export default MenuHeader;