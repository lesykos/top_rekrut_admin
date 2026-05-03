import { Create, NumberInput, SimpleForm, TextInput } from 'react-admin';

const RankGroupCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" required />
            <TextInput source="slug" />
            <NumberInput source="position" />
        </SimpleForm>
    </Create>
);

export default RankGroupCreate;