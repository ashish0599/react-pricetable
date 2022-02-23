import React from "react";
import "./App.css"
import "./style.css"

import Card from "./Card";

function App() {
  return (
        <div className="App">
          <div className="Cardss">
            <Card
              cardType="FREE"
              price="$0"
              user="Single User"
              storage="5GB Storage"
              private={false}
              phone={false}
              domain={false}
              report={false}
            />
            <Card
              cardType="PLUS"
              price="$9"
              user="5 Users"
              storage="50GB Storage"
              private={true}
              phone={true}
              domain={true}
              report={false}
            />
            <Card
              cardType="PRO"
              price="$49"
              user="Unlimited Users"
              storage="150GB Storage"
              private={true}
              phone={true}
              domain="Unlimited"
              report={true}
            />
          </div>
        </div>
      );
}

export default App;