import * as yup from 'yup';

const authenticateSchema = yup.object().shape({
  email: yup.string().required('Required field').email('Invalid format'),
  password: yup
    .string()
    .required('Required field')
    .max(150, 'Maximum of 150 charracters'),
});

export default authenticateSchema;
