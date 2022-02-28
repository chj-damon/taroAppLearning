import { useRef } from 'react';
import { BaseEventOrig, FormProps } from '@tarojs/components';
import { FormInstance } from '@taroify/core/form/form.shared';
import { createShareModel } from '../../services/createShareModel';

function useLocalModelService() {
  const formRef = useRef<FormInstance>();
  const onSubmit = (event: BaseEventOrig<FormProps.onSubmitEventDetail>) => {
    console.log(event.detail.value);
  };

  const validatePassword = async () => {
    try {
      const result = await formRef.current?.validate('password');
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    formRef,
    onSubmit,
    validatePassword,
  };
}

export default createShareModel(useLocalModelService);
