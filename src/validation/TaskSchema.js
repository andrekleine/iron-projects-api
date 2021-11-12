import * as yup from 'yup';

const taskSchema = yup.object().shape({
  title: yup
    .string()
    .required('Required field')
    .min(6, 'Mimimum of 6 characters')
    .max(50, 'Maximum of 50 characters'),
  description: yup
    .string()
    .required('Required field')
    .min(15, 'Mimimum of 15 characters')
    .max(150, 'Maximum of 150 characters'),
});

export default taskSchema;
