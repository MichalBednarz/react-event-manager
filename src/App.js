import React from "react";
import "./styles/App.css";
import EventSearchBar from "./components/EventSearchBar";
import EventForm from "./components/EventForm";
import EventList from "./containers/EventList";

const App = () => (
  <div>
    <div className="search-form">
      <EventSearchBar />
      <div className="ml-auto">
        <EventForm />
      </div>
    </div>
    <EventList />
  </div>
);

export default App;
