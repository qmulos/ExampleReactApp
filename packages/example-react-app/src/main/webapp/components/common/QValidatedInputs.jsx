import React from 'react';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import ControlGroup from '@splunk/react-ui/ControlGroup';
import Text from '@splunk/react-ui/Text';
import RadioList from '@splunk/react-ui/RadioList';

/**
A way to validate input components
* @param {object} inputs required, [{name: foo, rules: {rulesObj}},{...},{...}]
* @param {function} onSubmit required, callback fn to handle the form inputs
*/

function QValidatedInputs({ inputs, onSubmit }) {
    const {
        control,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const renderInput = (input, onChange, errors) => {
        if (input?.type === 'radioList') {
            return (
                <RadioList
                    error={errors.hasOwnProperty(input.name)}
                    onChange={(event) => {
                        onChange(event.target.value);
                    }}
                    defaultValue={input.defaultValue}
                    disabled={input.disabled}
                    data-test={input.name}
                >
                    {input.radioValues.map((value) => (
                        <RadioList.Option
                            key={value.label}
                            value={value.value}
                            data-test={value.label}
                        >
                            {value.label}
                        </RadioList.Option>
                    ))}
                </RadioList>
            );
        } else {
            return (
                <Text
                    error={errors.hasOwnProperty(input.name)}
                    onChange={(event) => {
                        onChange(event.target.value);
                    }}
                    disabled={input.disabled}
                    defaultValue={input.defaultValue}
                    type={input?.type}
                    data-test={input.name}
                />
            );
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} id="form">
                {inputs.map((input) => (
                    <Controller
                        key={input.name}
                        name={input.name}
                        control={control}
                        rules={{ ...input.rules }}
                        defaultValue={input?.defaultValue}
                        type={input?.type}
                        render={({ field: { onChange } }) => (
                            <ControlGroup
                                label={input.label}
                                help={errors ? errors[input.name]?.message : ''}
                                error={errors.hasOwnProperty(input.name)}
                                tooltip={input.tooltip}
                            >
                                {renderInput(input, onChange, errors)}
                            </ControlGroup>
                        )}
                    />
                ))}
            </form>
        </div>
    );
}

export default QValidatedInputs;
