import { DateField, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';

const VacancyShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="slug" />
            <TextField source="description" />
            <TextField source="responsibilities" />
            <TextField source="requirements" />
            <TextField source="conditions" />
            <TextField source="service_type" />
            <ReferenceField source="army_unit_id" reference="army-units" />
            <ReferenceField source="rank_group_id" reference="rank-groups" />
            <DateField source="updated_at" />
            <DateField source="created_at" />
        </SimpleShowLayout>
    </Show>
);

export default VacancyShow;