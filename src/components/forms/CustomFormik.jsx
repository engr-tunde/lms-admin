import { Formik, Form } from 'formik';

const CustomFormik = ({ children, initialValues, validationSchema, onSubmit }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {() => (
              <Form>
                {children}
              </Form>
            )}
        </Formik>
    );
};

export default CustomFormik;
