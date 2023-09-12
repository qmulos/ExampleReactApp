import React from 'react';
import Button from '@splunk/react-ui/Button';
import Modal from '@splunk/react-ui/Modal';
import WaitSpinner from '@splunk/react-ui/WaitSpinner';
import { SplunkThemeProvider } from '@splunk/themes';
import PropTypes from 'prop-types';

/**
Default popup modal
* @param {bool} show if true, modal opens, otherwise modal is hidden
* @param {string} title title text
* @param {string} subtitle subtitle text
* @param {object} icon icon shows next to title (??)
* @param {string} primaryButtonLabel text on primary (right) button
* @param {string} secondaryButtonLabel text on secondary (left) button
* @param {object} body content to display in body of modal
* @param {function} onClose function to be called on modal close
* @param {function} primaryButtonClick called onClick of primary button
* @param {function} secondaryButtonClick called onClick of secondary button
* @param {string} secondaryAppearance button style of secondary button
* @param {bool} secondaryDisabled if true secondary is disabled
* @param {string} primaryAppearance button style of primary button
* @param {bool} primaryDisabled if true primary is disabled
* @param {string} width called onClick of secondary button
* @param {bool} loading shows loading icon and disables primary button if true
* @param {bool} isForm sets primary button to submit form
*/

function QModal({
    show,
    title,
    subtitle,
    icon,
    primaryButtonLabel,
    primaryButtonClick,
    primaryAppearance,
    primaryDisabled,
    primaryHidden,
    secondaryButtonLabel,
    secondaryAppearance,
    secondaryDisabled,
    secondaryButtonClick,
    secondaryHidden,
    body,
    onClose,
    width,
    loading,
    isForm,
}) {
    return (
        <div>
            <Modal
                onRequestClose={onClose}
                open={show}
                style={{ width: width || '800px' }}
                data-test={title}
            >
                <Modal.Header
                    onRequestClose={onClose}
                    title={title}
                    subtitle={subtitle}
                    icon={icon}
                />
                <Modal.Body>{body}</Modal.Body>
                <Modal.Footer>
                    {!secondaryHidden && (
                        <Button
                            appearance={secondaryAppearance || 'secondary'}
                            onClick={secondaryButtonClick}
                            label={secondaryButtonLabel || 'Cancel'}
                            disabled={secondaryDisabled}
                        />
                    )}
                    {!primaryHidden && (
                        <Button
                            appearance={primaryAppearance || 'primary'}
                            onClick={primaryButtonClick}
                            label={primaryButtonLabel || 'Submit'}
                            disabled={primaryDisabled}
                            form={isForm ? 'form' : ''}
                            type={isForm ? 'submit' : ''}
                        >
                            {loading && (
                                <SplunkThemeProvider family="enterprise" colorScheme="dark">
                                    <WaitSpinner
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            paddingLeft: '4px',
                                        }}
                                    />
                                </SplunkThemeProvider>
                            )}
                        </Button>
                    )}
                </Modal.Footer>
            </Modal>
        </div>
    );
}

QModal.propTypes = {
    show: PropTypes.bool.isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    icon: PropTypes.object,
    primaryButtonLabel: PropTypes.string,
    secondaryButtonLabel: PropTypes.string,
    body: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    onClose: PropTypes.func.isRequired,
    primaryButtonClick: PropTypes.func,
    secondaryButtonClick: PropTypes.func,
    secondaryAppearance: PropTypes.string,
    secondaryDisabled: PropTypes.bool,
    primaryAppearance: PropTypes.string,
    primaryDisabled: PropTypes.bool,
    width: PropTypes.string,
    loading: PropTypes.bool,
    isForm: PropTypes.bool,
};

export default QModal;
