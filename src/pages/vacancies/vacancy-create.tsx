import { Create, ReferenceInput, SimpleForm, TextInput,RadioButtonGroupInput } from 'react-admin';

const VacancyCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="slug" />
            <TextInput source="description" multiline rows={5} />
            <TextInput source="responsibilities" multiline rows={7} />
            <TextInput source="requirements"multiline rows={7} />
            <TextInput source="conditions" multiline rows={7} />
            <RadioButtonGroupInput source="service_type" choices={[
                { id: 'rear', name: 'Rear' },
                { id: 'combat', name: 'Combat' },
            ]} />
            <ReferenceInput source="army_unit_id" reference="army-units" />
            <ReferenceInput source="rank_group_id" reference="rank-groups" />
        </SimpleForm>
    </Create>
);

export default VacancyCreate;