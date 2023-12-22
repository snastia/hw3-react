import { Statistics } from "./Statistics/Statistics";
import data from "../data.json"
import friends from "../friends.json"
import { FriendList } from "./Friends-list/Friends";

export const App = () => {
  return (
    <div>
     <Statistics title="Upload stats" stats={data} />;
     <Statistics stats={data} />;
     <FriendList friends={friends} />

    </div>
  );
};

