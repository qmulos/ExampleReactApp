import React from 'react';
import Typography from '@splunk/react-ui/Typography';
import { PageHeader, BaselineHR, Sticky } from 'components/ComponentStyles';

/**
Default page header component
* @param {string} title text to be rendered 
* @param {string} variant style to render the text in. Can be any of the following:
 body', 'title1', 'title2', 'title3', 'title4', 'title5', 'title6', 'title7',
  'largeBody', 'smallBody', 'footnote', 'monoBody', or 'monoSmallBody'.
* @param {ReactNode} button button element rendered on the right side of the header
* @param {boolean} sticky determines whether header is pinned to the top when a user scrolls down
*/

function QPageHeader({ title, variant, button, sticky }) {
    const ConditionalWrap = ({ condition, wrap, children }) =>
        condition ? wrap(children) : children;

    return (
        <ConditionalWrap
            condition={sticky}
            wrap={(wrappedChildren) => <Sticky>{wrappedChildren}</Sticky>}
        >
            <div style={{ padding: '0rem 1rem', background: '#FFF' }}>
                <PageHeader>
                    <Typography as="h1" variant={variant}>
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
