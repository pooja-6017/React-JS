import axios from "axios";
import React, { useEffect, useState } from "react";
import "./TeacherViewNew.css";
import Select from "react-select";
import Cookies from 'js-cookie';

// import Select from "react-Select";
function TeacherViewNew(props) {
  const [quizOptions, setQuizOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [data, setData] = useState('');
  const [finalData, setFinalData] = useState({
    description: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
    author: "xyz",
    quiz_id: "",
  });

  let prevData = { ...finalData };
  if (props && props.user_id) prevData.author = props.user_id;
  else prevData.author = "xyz";

  function handleClick(event) {
    if (selectedOption === "") {
      alert("Select a Quiz");
      return;
    }
    event.preventDefault();

    console.log(finalData);
    axios
      .post("http://localhost:5000/questions", finalData)
      .then((res) => {
        alert("Question Added")
        console.log("res", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    require('./AddNewQuiz.css');
    var data = Cookies.get('user');
    setData(data);
    var tmp = finalData;
    tmp.author = data;
    setFinalData(tmp);
    axios
      .get("http://localhost:5000/quiz")
      .then((res) => {
        console.log("Res", res);
        for (let i = 0; i < res.data.length; i++) {
          setQuizOptions((arr) =>
            arr.concat({
              label: res.data[i].quiz_id,
              value: res.data[i].quiz_id,
            })
          );
        }
      })
      .catch((err) => {
        console.log("Err", err);
      });
  }, []);

  return (
    <div className="my-5">
      <h1 style={{ textAlign: "center" , color:"black"}} className="my-5">Add New Question</h1>
      <div className="TeacherView">
        <h3 style={{color:"black"}}>Enter Question </h3>
        <textarea
          className="teacherTextArea"
          name=""
          id=""
          cols="100"
          rows="2"
          onChange={(event) => {
            const temp = { ...finalData };
            temp.description = event.target.value;
            setFinalData(temp);
          }}
        ></textarea>
        <br />
        <br />
        <input
          className="teacherInput"
          type="text"
          placeholder="Option 1"
          onChange={(event) => {
            const temp = { ...finalData };
            temp.option1 = event.target.value;
            setFinalData(temp);
          }}
        />
        <br />
        <input
          className="teacherInput"
          type="text"
          placeholder="Option 2"
          onChange={(event) => {
            const temp = { ...finalData };
            temp.option2 = event.target.value;
            setFinalData(temp);
          }}
        />
        <br />
        <input
          className="teacherInput"
          type="text"
          placeholder="Option 3"
          onChange={(event) => {
            const temp = { ...finalData };
            temp.option3 = event.target.value;
            setFinalData(temp);
          }}
        />
        <br />
        <input
          className="teacherInput"
          type="text"
          placeholder="Option 4"
          onChange={(event) => {
            const temp = { ...finalData };
            temp.option4 = event.target.value;
            setFinalData(temp);
          }}
        />
        <br />
        <input
          className="teacherInput"
          type="text"
          placeholder="Enter answer(option number)"
          onChange={(event) => {
            const temp = { ...finalData };
            temp.answer = event.target.value;
            setFinalData(temp);
          }}
        />
        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <Select
            placeholder="Select a quiz"
            className="ReactSelect"
            options={quizOptions}
            onChange={(e) => {
              console.log(e);
              setSelectedOption(e.value);
              let prevData = { ...finalData };
              prevData.quiz_id = e.value;
              setFinalData(prevData);
            }}
          />
        </div>
        <br />
        <br />
        <button className="TeacherButton btn btn-block btn-secondary" onClick={handleClick}>
          Add
        </button>
      </div>
    </div>
  );
}

export default TeacherViewNew;
