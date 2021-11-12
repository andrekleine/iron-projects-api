import * as yup from 'yup';

const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required('Required field')
    .min(3, 'Mimimum of 3 charracters')
    .max(150, 'Maximum of 150 charracters'),
  email: yup.string().required('Required field').email('Invalid format'),
  password: yup
    .string()
    .required('Required field')
    .min(6, 'Mimimum of 6 charracters')
    .max(50, 'Maximum of 50 charracters'),
});

export default registerSchema;
