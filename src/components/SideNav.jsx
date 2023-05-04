import React from 'react';
import Dropdown from './Dropdown';
import Droppeddown from './Droppeddown';
import {bool} from 'prop-types';

const SideNav = ({ open, openD, setOpenD }) => {
    return (
        <nav className='sidenav' open={open} style={{transform: open ? 'translateX(0)' : 'translateX(-100%)'}}>
            <ul>
                <li><a href="#">Home</a></li>
                <li>
                    <Dropdown openD={openD} setOpenD={setOpenD}/>
                </li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">FAQ</a></li>
            </ul>
        </nav>
    );
};

SideNav.propTypes = {
    open: bool.isRequired
};

export default SideNav;