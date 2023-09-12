import React from 'react';
import WaitSpinner from '@splunk/react-ui/WaitSpinner';

function QLoading() {
    return (
        <div
            style={{
                display: 'flex',
                height: '80vh',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <WaitSpinner size="medium" />
        </div>
    );
}

export default QLoading;
