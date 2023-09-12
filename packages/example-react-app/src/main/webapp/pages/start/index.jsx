import React from 'react';

import layout from '@splunk/react-page';
import ExampleReactApp from '@splunk/example-react-app';
import { getUserTheme, getThemeOptions } from '@splunk/splunk-utils/themes';

import { StyledContainer, StyledGreeting } from './StartStyles';

getUserTheme()
    .then((theme) => {
        const splunkTheme = getThemeOptions(theme);
        layout(
            <StyledContainer>
                <StyledGreeting>Hello, from inside ExampleReactApp!</StyledGreeting>
                <div>Your component will appear below.</div>
                <ExampleReactApp name="from inside ExampleReactApp" />
            </StyledContainer>,
            splunkTheme
        );
    })
    .catch((e) => {
        const errorEl = document.createElement('span');
        errorEl.innerHTML = e;
        document.body.appendChild(errorEl);
    });
