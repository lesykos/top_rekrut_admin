import { Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

const RankGroupEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="slug" />
            <NumberInput source="position" />
        </SimpleForm>
    </Edit>
);

export default RankGroupEdit;