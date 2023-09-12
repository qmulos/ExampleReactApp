import React from 'react';
import Typography from '@splunk/react-ui/Typography';
import { PageHeader, BaselineHR, Sticky } from 'components/ComponentStyles';

function QPageHeader({ title, button, sticky }) {
    const ConditionalWrap = ({ condition, wrap, children }) =>
        condition ? wrap(children) : children;

    return (
        <ConditionalWrap
            condition={sticky}
            wrap={(wrappedChildren) => <Sticky>{wrappedChildren}</Sticky>}
        >
            <div style={{ padding: '0rem 1rem', background: '#FFF' }}>
                <PageHeader>
                    <Typography as="h1" variant="title1">
                        {title}
                    </Typography>
                    <div>{button}</div>
                </PageHeader>
                <BaselineHR />
            </div>
        </ConditionalWrap>
    );
}

export default QPageHeader;
