import Form from "../../ui/forms/Form";
import Input from "../../ui/forms/Input";
import FormRow from "../../ui/forms/FormRow";
import Buttons from "../../ui/buttons/Buttons";
import Button from "../../ui/buttons/Button";

function UpdateUserPasswordForm() {
  return (
    <Form type="regular" disabled={""} onSubmit={() => {}}>
      <FormRow type="grid">
        <FormRow type="gridItem" label="New password" error="">
          {/* <Input type="password" value disabled register field id validation /> */}
        </FormRow>
        <FormRow type="gridItem" label="Confirm Password" error="">
          {/* <Input type="password" value disabled register field id validation /> */}
        </FormRow>
      </FormRow>
      <div className="flex justify-end">
        <Buttons>
          <Button type="secondary">Cancel</Button>
          <Button>Update Password</Button>
        </Buttons>
      </div>
    </Form>
  );
}

export default UpdateUserPasswordForm;
