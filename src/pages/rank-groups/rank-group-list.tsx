import { DataTable, List, EditButton } from 'react-admin';

const RankGroupList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="name" />
            <DataTable.Col source="slug" label="Slug (unique)"/>
            <DataTable.NumberCol source="position" />
            <DataTable.Col label="Edit">
                <EditButton/>
            </DataTable.Col>
        </DataTable>
    </List>
);

export default RankGroupList;