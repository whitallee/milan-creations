import React from 'react';
import {bool} from 'prop-types';

const Droppeddown = ({ openD }) => {
    return (
        <ul className='droppeddown' openD={openD} style={{display: openD ? 'block' : 'none'}} >
            <li><a href='#'>Jewelry</a></li>
            <li><a href='#'>Clay Decor</a></li>
        </ul>
    );
};

Droppeddown.propTypes = {
    openD: bool.isRequired
};

export default Droppeddown;