import * as Yup from 'yup';

const AddAdminSchema = Yup.object().shape({
  username: Yup.string().min(7, "Too Short").max(50, "Too Long").required("Required"),
  password: Yup.string().required("Required").min(7, "Too short").max(20, "too long")
})

export default AddAdminSchema;