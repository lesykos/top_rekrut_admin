import { NumberField, Show, SimpleShowLayout, TextField } from 'react-admin';

const RankGroupShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="slug" />
            <NumberField source="position" />
        </SimpleShowLayout>
    </Show>
);

export default RankGroupShow;