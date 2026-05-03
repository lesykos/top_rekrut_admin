import { DateInput, Create, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

const ArmyUnitCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="slug" />
            <TextInput source="description" />
            <TextInput source="website" />
            {/* <ReferenceInput source="army_branch_id" reference="army_branches" /> */}
        </SimpleForm>
    </Create>
);

export default ArmyUnitCreate;