import React from 'react';
import * as ReactDom from 'react-dom';
import {useHistory} from 'react-router-dom';
import {ROUTES} from '../router/routes';

export const PurchaseModal = ({data, onClose}) => {
    const modalRoot = document.getElementById('modal-root');
    const history = useHistory();

    const onClick = () => {
       history.push(ROUTES.HOME);
    };

    return ReactDom.createPortal(
        <div id='modal' className='modal is-active'>
            <div className='modal-background'/>
            <div id='modal-content' className='modal-content'>
                <div id='box' className='box content-wrapper'>
                    <span>{data}</span>
                    <button onClick={onClick} className='button is-info'>OK</button>
                </div>
            </div>
            <button id='modal-close-btn'
                    className='modal-close is-large'
                    aria-label='close'
                    onClick={onClose}
            />
        </div>,
        modalRoot
    );
};