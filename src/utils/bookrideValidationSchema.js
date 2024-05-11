import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  flightNumber: yup
    .string()
    .trim()
    .matches(
      /^[A-Z0-9]{2,4}[0-9]{3,5}[A-Z]?$/,
      'Please add a valid flight number like this BA1234A'
    ),
});
