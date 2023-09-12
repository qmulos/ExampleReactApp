import React, { useState } from 'react';
import { StyledGreeting } from './StartStyles';
import Button from '@splunk/react-ui/Button';
import QModal from 'components/common/QModal';

function StartPage() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <StyledGreeting>Hello, from inside ExampleReactApp!</StyledGreeting>
            <div>Try changing this text in StartPage.jsx!</div>
            <div>This button opens a custom Modal component that was made at Qmulos: </div>
            <Button label={'Press me!'} onClick={() => setModalOpen(true)} />
            <QModal
                show={modalOpen}
                onClose={() => setModalOpen(false)}
                title={'Example Modal'}
                subtitle={'This is an example'}
                body={"here's where your body text goes"}
                secondaryButtonClick={() => setModalOpen(false)}
            />
        </div>
    );
}

export default StartPage;
