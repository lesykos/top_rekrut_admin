import { DateField, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';

const ArmyUnitShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="slug" />
            <TextField source="description" />
            <TextField source="website" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <ReferenceField source="army_branch_id" reference="army-branches" />
        </SimpleShowLayout>
    </Show>
);

export default ArmyUnitShow;