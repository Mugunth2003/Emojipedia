import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      {emojipedia.map(  emo=>
<Entry
  key={emo.id}
  emoji={emo.emoji}
  name ={emo.name}
  meaning ={emo.meaning}
/>
)}
      </dl>
    </div>
  );
}

export default App;
