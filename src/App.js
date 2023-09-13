import {useState} from "react";
import {marked} from "marked";
import React from "react";
import './App.css';

function App() {

  const [text, setText] = useState("# Welcome to my React Markdown Previewer!\n" +
      "\n ## This is a sub-heading... \n" +
      "\n Heres some code, `<div></div>`, between 2 backticks. \n" +
      "1. First item\n" +
      "2. Second item\n" +
      "3. Third item \n" +
      "\n **bold text** \n" +
      "\n ![alt text](image.jpg) \n" +
      "\n [instagram](https://www.instagram.com/le.hoang.huy/) \n" +
      "\n > blockquote \n" +

      "```\n" +
      " function anotherExample(firstLine, lastLine) { \n" +
      "\n" +
      "   if (firstLine == '```' && lastLine == '```') {` \n" +
      "\n" +
      "    return multiLineCode;` \n" +
      "\n" +
      "  } \n" +
      "\n" +
      " }  \n" +
      "```"
  );
  marked.setOptions({
      breaks: true
  })




  const [isClicked, setIsClicked] = useState(true);
  const [toClicked, setToClicked] = useState(true);
  const [isElementVisible, setElementVisibility] = useState(true);
  const [toElementVisible, toElementVisibility] = useState(true);

  const handleIcon = () => {
      setToClicked(!toClicked);
      toElementVisibility(!toElementVisible);
  };


  const handleClick = () => {
      setIsClicked(!isClicked);
      setElementVisibility(!isElementVisible);
  };

  const boxStyle = {


      minHeight: isClicked ? '200px' : '100vh',
  };

  const preStyle = {


      minHeight: toClicked ? '550px' : '100vh',
  };
  const marstyle = {
      marginTop: toClicked ? "3%" : "1%",
  };
  const iconStyle = isClicked ? "fa-solid fa-arrows-up-down-left-right fa-rotate-90" : "fa-solid fa-arrows-left-right";
  const previewStyle = toClicked ? "fa-solid fa-arrows-up-down-left-right fa-rotate-90" : "fa-solid fa-arrows-left-right";

  return (
    <div className="App">
        {toElementVisible ? (
            <div id="textarea1">
                <div id="bar">
                    <p><strong>Editor</strong><i className="fa-solid fa-screwdriver-wrench"></i></p>
                    <div onClick={handleClick}><i className={iconStyle}></i></div>
                </div>
                <textarea id="editor" style={boxStyle} onChange={(event) => setText(event.target.value)} value={text}></textarea>
            </div>) : null
        }
        {isElementVisible ? (
            <div id="textarea2" style={marstyle}>
                <div id="bar2">
                    <p><strong>Previewer</strong><i className="fa-solid fa-magnifying-glass"></i></p>
                    <div onClick={handleIcon}><i className={previewStyle}></i></div>
                </div>
                <div id="preview" style={preStyle} dangerouslySetInnerHTML={{
                    __html: marked(text),
                }}></div>
            </div>) : null
        }
    </div>
  );
}

export default App;
