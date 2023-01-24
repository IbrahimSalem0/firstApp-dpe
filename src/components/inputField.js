import { TextInput } from 'react-native';
import { ErrorMessage } from 'formik';
import TextError from './textError';

const InputField = (props) => {
  const { name } = props || {};
  return (
    <>
      <TextInput {...props} />
      {/* <ErrorMessage name={name} component={TextError} /> */}
    </>
  );
};

export default InputField;
