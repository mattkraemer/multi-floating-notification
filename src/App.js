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
      <button onClick={() => addAlert()} className="add-alert">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Add Alert
      </button>
      {
        alerts.length > 0 && 
        <div className="notification">
          <header>
            Alert {activeAlert} {alerts.length > 1 && <>of {alerts.length}</>}
            <button onClick={() => closeAlerts()}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </header>
          {
            alerts.length > 1 &&
              <section className="nav">
                {
                  activeAlert == 1 ? 
                    <button onClick={() => setActiveAlert(activeAlert-1)} disabled>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </button>
                  :
                    <button onClick={() => setActiveAlert(activeAlert-1)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </button>
                }
                {
                  activeAlert == alerts.length ?
                    <button onClick={() => setActiveAlert(activeAlert+1)} disabled>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  :
                    <button onClick={() => setActiveAlert(activeAlert+1)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
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
