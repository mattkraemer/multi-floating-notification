import React, { useState } from 'react';
import './App.css';

function App() {
  const [ open, setOpen ] = useState(true);
  const [ alerts, setAlerts ] = useState([]);
  const [ activeAlert, setActiveAlert ] = useState(1);

  const addAlert = () => {
    let i = alerts.length;
    setAlerts([...alerts, {
      "id": i++,
      "title": "Alert",
      "desc": "This is alert number "+ (i++) + "!"
    },])
  };

  const closeAlerts = () => {
    setOpen(!open);
    setActiveAlert(1);
    setAlerts([]);
  };
  
  return (
    <>
      <button onClick={() => addAlert()} className="add-alert">Add Alert</button>
      {
        alerts.length > 0 && 
        <div className="notification">
          <header>
            Alert {activeAlert} {alerts.length > 1 && <>of {alerts.length}</>}
            <button onClick={() => closeAlerts()}>&times;</button>
          </header>
          {
            alerts.length > 1 &&
              <section className="nav">
                {
                  activeAlert == 1 ? 
                    <button onClick={() => setActiveAlert(activeAlert-1)} disabled>Prev</button>
                  :
                    <button onClick={() => setActiveAlert(activeAlert-1)}>Prev</button>
                }
                {
                  activeAlert == alerts.length ?
                    <button onClick={() => setActiveAlert(activeAlert+1)} disabled>Next</button>
                  :
                    <button onClick={() => setActiveAlert(activeAlert+1)}>Next</button>
                }
              </section>
          }
          <section className="content">
            <p>{alerts[activeAlert-1].desc}</p>
          </section>
        </div>
      }
    </>
  );
}

export default App;
