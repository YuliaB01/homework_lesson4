import React, {useState} from 'react';

export const ReviewInput = React.forwardRef(({onAdd}, ref) => {
    const [value, setInputValue] = useState('');

    const onChange = event => setInputValue(event.target.value);

    const onSubmit = event => {
        event.preventDefault();
        if (!value) return;
        onAdd(value);
        setInputValue('');
    };
    return (
        <form onSubmit={onSubmit}>
            <input className="input"
                   ref={ref}
                   type="text"
                   {...{value}}
                   onChange={onChange}
                   placeholder='Add review...'
            />
        </form>
    );
});