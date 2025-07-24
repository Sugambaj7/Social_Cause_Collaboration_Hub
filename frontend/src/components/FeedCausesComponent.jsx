import AllCausesComponent from "./AllCausesComponent";
import MyAddCauseComponent from "./MyAddCauseComponent";

export default function FeedCausesComponent() {
  return (
    <div className= "mx-16">
      <MyAddCauseComponent />
      <AllCausesComponent />
    </div>
  );
}
