import React from 'react';
import WaitSpinner from '@splunk/react-ui/WaitSpinner';

/**
Default loading screen
Essentially just a wrapper around WaitSpinner with some styling
*/

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
