import './App.css';
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';
import ChatScreen from './ChatScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/chat/:person">
          <Header BackButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
          <Header BackButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header/>
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;


/* Header */
/* Chats Screen */
/* Image Cards */
/* Buttons */
/* Indivisual Chats */