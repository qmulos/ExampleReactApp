import React from 'react';

import layout from '@splunk/react-page';
import { getUserTheme, getThemeOptions } from '@splunk/splunk-utils/themes';

import { StyledContainer, StyledGreeting } from './StartStyles';
import QModal from 'components/common/QModal';
import Button from '@splunk/react-ui/Button';
import StartPage from './StartPage';

getUserTheme()
    .then((theme) => {
        const splunkTheme = getThemeOptions(theme);
        layout(
            <StyledContainer>
                <StartPage />
            </StyledContainer>,
            splunkTheme
        );
    })
    .catch((e) => {
        const errorEl = document.createElement('span');
        errorEl.innerHTML = e;
        document.body.appendChild(errorEl);
    });
