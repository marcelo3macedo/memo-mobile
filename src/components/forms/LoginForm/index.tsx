import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';

import { Field } from '@components/elements/forms/Field';
import { PrimaryButton } from '@components/elements/buttons/PrimaryButton';
import { LoginFormProps } from '@interfaces/components/forms/LoginFormProps';
import { initialValues, schema } from '@services/Validation/signIn.schema';

import { style } from './styles';

export function LoginForm({ onSubmit }:LoginFormProps) {
    const {t} = useTranslation();

    return (        
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={schema}>
            {({ handleChange, handleSubmit, values }) => (
                <View style={style.container}>                    
                    <Field
                        title={t('auth.fields.title.email')}
                        type="text"
                        placeholder={t('auth.fields.placeholder.email')}
                        onChangeText={handleChange('email')}
                        value={values.email}
                    />
                    <Field
                        title={t('auth.fields.title.password')}
                        type="password"
                        placeholder={t('auth.fields.placeholder.password')}
                        onChangeText={handleChange('password')}
                        value={values.password}
                    />
                    
                    <View style={style.fields}>
                        <PrimaryButton
                            onPress={handleSubmit} 
                            title={t('auth.login')} />
                    </View>
                </View>
            )}
        </Formik>
    )
}
