import PageComponent from "./pageComp";
import UsernameList from "../usernamesList";

// Define a class for the list page
export default class ListPage extends PageComponent {
  private onUserClick: (username: string) => void;

  constructor(onUserClick: (username: string) => void) {
    super();
    this.onUserClick = onUserClick;
  }

  // Implement the render method to display the username list
  render(): JSX.Element {
    return <UsernameList onUserClick={this.onUserClick} />;
  }
}