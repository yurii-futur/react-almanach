import React from 'react';
import classes from './Modal.module.css'

const Modal = ({children, visible}) => {
    let rootClasses = [classes.modal];

    rootClasses = visible ? [...rootClasses, classes.visible] : rootClasses

    return (
        <div className={rootClasses.join(' ')}>
            <div className={classes.modalContent}>
                {children}
            </div>
        </div>
    );
};

export default Modal;