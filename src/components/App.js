import React, { useRef } from "react";
import "../styles/App.css";

function calculateWordFrequency(text) {
  const wordFrequency = [];
  return wordFrequency;
}

const FrequencyTable = () => {
  return (
    <table id="div-table">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Frequency</th>
          <th>Word</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};

const FrequencyCalculator = ({ setWordFrequency }) => {
  return (
    <>
      <textarea
        name="inputPara"
        id="inputPara"
        placeholder="Paste your text content here!"
      ></textarea>
      <br />
      <button type="button" id="countWords" onClick={handleSubmit}>
        Count Those Words!
      </button>
    </>
  );
};

const App = () => {
  return (
    <div id="main">
      <div className="content">
        <h1>Word Frequency Counter</h1>
        <FrequencyCalculator />
        <FrequencyTable />
      </div>
    </div>
  );
};

export default App;
