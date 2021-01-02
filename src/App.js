import "./App.css";
import Help from "./Help";

function App() {
  return (
    //BEM Convention
    <div className="app">
      <div className="app__body">
        <h3>Help Center</h3>
        <div className="app__input">
          <input placeholder="Search" type="text" />
        </div>
        <div className="app__help">
          <Help title="Billing and Membership" />
          <Help title="Managing and Organizing" />
          <Help title="Uploading" />
          <Help title="Creators" />
          <Help title="Video Enterprise" />
          <Help title="Enterprise" />
          <Help title="Embeding and Sharing" />
          <Help title="Features" />
          <Help title="Developer" />
        </div>
      </div>
    </div>
  );
}

export default App;
