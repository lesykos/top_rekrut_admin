// ListGuesser, ShowGuesser, EditGuesser
import { Admin, Resource } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import ArmyBranchList from "./pages/army-branches/army-branch-list";
import ArmyBranchShow from "./pages/army-branches/army-branch-show";
import ArmyBranchEdit from "./pages/army-branches/army-branch-edit";
import ArmyBranchCreate from "./pages/army-branches/army-branch-create";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource name="army-branches" 
        list={ArmyBranchList} show={ArmyBranchShow} 
        edit={ArmyBranchEdit} create={ArmyBranchCreate} /> 
  </Admin>
);
