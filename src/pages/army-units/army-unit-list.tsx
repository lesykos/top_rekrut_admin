import { DataTable, EditButton, List, ReferenceField } from 'react-admin';

const ArmyUnitList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="name" />
            <DataTable.Col source="army_branch_id">
                <ReferenceField source="army_branch_id" reference="army-branches" />
            </DataTable.Col>
            <DataTable.Col label="Edit">
                <EditButton/>
            </DataTable.Col>
        </DataTable>
    </List>
);

export default ArmyUnitList;