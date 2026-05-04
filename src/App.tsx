// ListGuesser, ShowGuesser, EditGuesser
import { Admin, Resource, ListGuesser, ShowGuesser, EditGuesser } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import ArmyBranchList from "./pages/army-branches/army-branch-list";
import ArmyBranchShow from "./pages/army-branches/army-branch-show";
import ArmyBranchEdit from "./pages/army-branches/army-branch-edit";
import ArmyBranchCreate from "./pages/army-branches/army-branch-create";
import RankGroupList from "./pages/rank-groups/rank-group-list";
import RankGroupShow from "./pages/rank-groups/rank-group-show";
import RankGroupEdit from "./pages/rank-groups/rank-group-edit";
import RankGroupCreate from "./pages/rank-groups/rank-group-create";
import ArmyUnitList from "./pages/army-units/army-unit-list";
import ArmyUnitShow from "./pages/army-units/army-unit-show";
import ArmyUnitEdit from "./pages/army-units/army-unit-edit";
import ArmyUnitCreate from "./pages/army-units/army-unit-create";
import VacancyList from "./pages/vacancies/vacancy-list";
import VacancyShow from "./pages/vacancies/vacancy-show";
import VacancyEdit from "./pages/vacancies/vacancy-edit";
import VacancyCreate from "./pages/vacancies/vacancy-create";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource name="vacancies" options={{ label: 'Vacancies' }}
        list={VacancyList} show={VacancyShow} 
        edit={VacancyEdit} create={VacancyCreate} />

    <Resource name="army-units" options={{ label: 'Units' }}
        list={ArmyUnitList} show={ArmyUnitShow} 
        edit={ArmyUnitEdit} create={ArmyUnitCreate} />

    <Resource name="army-branches" options={{ label: 'Branches' }}
        list={ArmyBranchList} show={ArmyBranchShow} 
        edit={ArmyBranchEdit} create={ArmyBranchCreate} />

    <Resource name="rank-groups" options={{ label: 'Rank groups' }}
        list={RankGroupList} show={RankGroupShow} 
        edit={RankGroupEdit} create={RankGroupCreate} />
  </Admin>
);
