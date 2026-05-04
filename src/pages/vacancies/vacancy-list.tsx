import { DataTable, DateField, List, EditButton, ReferenceField } from 'react-admin';

const VacancyList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="name" />
            <DataTable.Col source="army_unit_id" label="Unit">
                <ReferenceField source="army_unit_id" reference="army-units" />
            </DataTable.Col>
            <DataTable.Col source="rank_group_id" label="Rank">
                <ReferenceField source="rank_group_id" reference="rank-groups" />
            </DataTable.Col>
            <DataTable.Col source="created_at">
                <DateField source="created_at" />
            </DataTable.Col>
            <DataTable.Col label="Edit">
                <EditButton/>
            </DataTable.Col>
        </DataTable>
    </List>
);

export default VacancyList;