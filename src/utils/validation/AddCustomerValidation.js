import * as Yup from 'yup'

const AddCustomerSchema = Yup.object().shape({
  firstName: Yup.string(),
  lastName: Yup.string(),
  address: Yup.string(),
  city: Yup.string(),
  country: Yup.string(),
  entity: Yup.string()
})

export default AddCustomerSchema;