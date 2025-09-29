import CustomFormik from "../../utils/CustomFormik";

function AdminForm() {
  return (
    <>
      <div>
        <button className="ml-auto block">
          <IoMdClose size={20} onClick={onClose} className="" />
        </button>
      </div>
      <div className="flex flex-col gap-1 mb-6">
        <span className="text-xl font-semibold">Add team members</span>
        <span className="text-sm text-merseBorder">
          Each user will receive an email invitation to get them started
        </span>
      </div>
      <CustomFormik
        initialValues={initialValues}
        validationSchema={validationSchema}
        //   onSubmit={handleSubmit}
      >
        <Form className="space-y-4">
          <div className="flex justify-between gap-4 h-full">
            <div className="w-1/2 h-full">
              <Field
                name="emailAddress"
                placeholder="Email address"
                className="w-full h-full text-sm border-2 focus:border-black outline-none px-3 py-2"
              />
              <ErrorMessage
                name="emailAddress"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            <div className="w-1/2 h-full">
              <Field
                name="roles"
                as="select"
                className="w-full h-full text-sm border-2 focus:border-black outline-none px-3 py-2"
              >
                <option value="roles">Select a role</option>
                <option value="admin">Admin</option>
                <option value="operationsManager">Operations Manager</option>
                <option value="financeManager">Finance Manager</option>
                <option value="brandManager">Brand Manager</option>
              </Field>
              <ErrorMessage
                name="roles"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1 border-2 text-sm"
            >
              Cancel
            </button>
            <AppFormButton
              title="Invite Member"
              className="px-3 py-1 text-white bg-black text-sm"
              // type="submit"
              isSubmitting={false}
              disabled={true}
            />
          </div>
        </Form>
      </CustomFormik>
    </>
  );
}

export default AdminForm;
