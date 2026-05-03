import { DateInput, Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

const ArmyUnitEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="slug" />
            <TextInput source="description" />
            <TextInput source="website" />
            <ReferenceInput source="army_branch_id" reference="army-branches" />
        </SimpleForm>
    </Edit>
);

export default ArmyUnitEdit;