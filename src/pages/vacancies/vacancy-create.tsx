import { Create, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

const VacancyCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="slug" />
            <TextInput source="description" />
            <TextInput source="responsibilities" />
            <TextInput source="requirements" />
            <TextInput source="conditions" />
            <TextInput source="service_type" />
            <ReferenceInput source="army_unit_id" reference="army-units" />
            <ReferenceInput source="rank_group_id" reference="rank-groups" />
        </SimpleForm>
    </Create>
);

export default VacancyCreate;