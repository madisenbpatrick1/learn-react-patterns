import UsernameList from "./usernamesList";
import PageComponent from "./pageComp";

export default class ListPage extends PageComponent {
    private onUserClick: (username: string) => void;

    constructor(onUserClick: (username: string) => void){
        super();
        this.onUserClick = onUserClick;
    }

    render(): JSX.Element {
        return <UsernameList onUserClick={this.onUserClick} />;
    }
}