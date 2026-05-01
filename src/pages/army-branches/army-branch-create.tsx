import { Create, NumberInput, SimpleForm, TextInput } from 'react-admin';

const ArmyBranchCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="slug" />
            <NumberInput source="position" defaultValue={30} />
        </SimpleForm>
    </Create>
);

export default ArmyBranchCreate;