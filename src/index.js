import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { useState } from "react";
//used event props slider to create app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

function Header() {
  return <header>QUIZ APP</header>;
}
function Footer() {
  return <footer>ATTEMPT ALL QUESTIONS ALL THE BEST :)</footer>;
}

function Content() {
  const [marks, setMarks] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({
    q1: null,
    q2: null,
    q3: null,
    q4: null,
    q5: null,
    q6: null,
    q7: null,
    q8: null,
    q9: null,
    q10: null,
  });

  function getResult(event) {
    event.preventDefault();

    // Define correct answers
    const correctAnswers = {
      q1: "C. 8",
      q2: "A. 32 and 64",
      q3: "A. Byte to Int",
      q4: "B. char[] ch = new char[5]",
      q5: "A. The reference of the array",
      q6: "B. int[] A = {1,2,3}",
      q7: "A. Object references",
      q8: "A. At run time",
      q9: "B. Static",
      q10: "C. an int value",
    };

    // Initialize marks
    let newMarks = 0;

    // Loop through each question to check answers and update marks
    for (let i = 1; i <= 10; i++) {
      const questionName = `q${i}`;
      if (selectedOptions[questionName] === correctAnswers[questionName]) {
        newMarks++;
      }
    }

    setMarks(newMarks);
    alert(`You scored ${newMarks}/10`);

    // Reset selected options and currentQuestion
    setSelectedOptions({
      q1: null,
      q2: null,
      q3: null,
      q4: null,
      q5: null,
      q6: null,
      q7: null,
      q8: null,
      q9: null,
      q10: null,
    });
    setCurrentQuestion(1);
  }

  function handleNext() {
    if (currentQuestion < 10) {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  function handlePrev() {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  return (
    <form onSubmit={getResult}>
      <Question
        que={
          currentQuestion === 1
            ? "1. Number of primitive data types in Java are?"
            : currentQuestion === 2
            ? "2. What is the size of float and double in java?"
            : currentQuestion === 3
            ? "3. Automatic type conversion is possible in which of the possible cases?"
            : currentQuestion === 4
            ? "4. Select the valid statement"
            : currentQuestion === 5
            ? "5. When an array is passed to a method, what does the method receive?"
            : currentQuestion === 6
            ? "6. Select the valid statement to declare and initialize an array"
            : currentQuestion === 7
            ? "7. Arrays in java are-"
            : currentQuestion === 8
            ? "8. When is the object created with new keyword?"
            : currentQuestion === 9
            ? "9. Identify the keyword among the following that makes a variable belong to a class, rather than being defined for each instance of the class"
            : "10. compareTo() returns"
        }
        options={[
          "A. 6",
          "B. 7",
          "C. 8",
          "D. 9",
          "A. 32 and 64",
          "B. 32 and 32",
          "C. 64 and 64",
          "D. 64 and 32",
          "A. Byte to Int",
          "B. Int to Long",
          "C. Long to Int",
          "D. Short to Int",
          "A. char[] ch = new char(5)",
          "B. char[] ch = new char[5]",
          "C. char[] ch = new char()",
          "D. char[] ch = new char[]",
          "A. The reference of the array",
          "B. A copy of the Array",
          "C. Length of the Array",
          "D. Copy of first element",
          "A. int[] A = {}",
          "B. int[] A = {1,2,3}",
          "C. int[] A = (1,2,3}",
          "D. int[][] A = {1,2,3}",
          "A. Object references",
          "B. Objects",
          "C. Primitive Data Types",
          "D. None",
          "A. At run time",
          "B. At compile time",
          "C. Depends on the code",
          "D. None",
          "A. Final",
          "B. Static",
          "C. Volatile",
          "D. None",
          "A. True",
          "B. False",
          "C. an int value",
          "D. None",
        ].slice((currentQuestion - 1) * 4, currentQuestion * 4)}
        name={`q${currentQuestion}`}
        selectedOption={selectedOptions[`q${currentQuestion}`]}
        setSelectedOption={(value) =>
          setSelectedOptions({
            ...selectedOptions,
            [`q${currentQuestion}`]: value,
          })
        }
      />
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button className="pre" type="button" onClick={handlePrev}>
          Previous
        </button>
        <button className="next" type="button" onClick={handleNext}>
          Next
        </button>
      </div>
      <br />
      <br />
      {currentQuestion === 10 && (
        <input className="sub" type="submit" value="Submit" />
      )}
    </form>
  );
}

function Question({ que, options, name, selectedOption, setSelectedOption }) {
  return (
    <div>
      <p>
        <h4>{que}</h4>
        {options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              name={name}
              value={option}
              checked={selectedOption === option}
              onChange={() => setSelectedOption(option)}
            />
            {option}
            <br />
          </label>
        ))}
      </p>
    </div>
  );
}
