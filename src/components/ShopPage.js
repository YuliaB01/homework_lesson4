import React, {useState} from 'react';
import {PurchaseModal} from './PurchaseModal';

export const ShopPage = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => {
        setShowModal(false);
    };

    const onClick = () => {
        handleShowModal();
    };

    return (
        <div className="shopWrapper centered">
            <h3 className="shopHeader">Welcome to Shop</h3>
            <button className="button is-primary shopBtn" onClick={onClick}>Purchase</button>

            {showModal ? (
                <PurchaseModal onClose={handleCloseModal} data={'There are no products now.'}/>
            ) : null}
        </div>
    );
};