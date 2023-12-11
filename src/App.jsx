import { useState } from "react";
import "./App.css";
import CustomFormElement from "./components/CustomFormElement";

const formList = [
  {
    id: "first-name",
    label: "First Name",
    value: "",
    mode: "input",
  },
  {
    id: "last-name",
    label: "Last Name",
    value: "",
    mode: "input",
  },
  {
    id: "sex",
    label: "Sex",
    value: "",
    mode: "radio",
    options: ["m", "f"],
  },
  {
    id: "color",
    label: "Color",
    value: "blue",
    mode: "select",
    options: ["blue", "green", "yellow"],
  },
  {
    id: "newsletter",
    label: "Newsletter",
    value: false,
    mode: "checkbox",
  },
];


function App() {
  const [formData, setFormData] = useState(formList);

  const handleClick = () => {
    return (
      {
        formData.map((obj, ix) => {
          <li key={li${ix}}> { obj.value }</li >;
      })
  });

};

return (
  <>
    <div>
      {formData.map((obj, objIndex) => {
        const onChangeVal = obj.mode === "checkbox" ? "checked" : "value";

        return (
          <CustomFormElement
            key={obj.id}
            mode={obj.mode}
            label={obj.label}
            value={obj.value}
            onChange={(e) => {
              setFormData(() => {
                const newFormData = structuredClone(formData);
                newFormData[objIndex].value = e.target[onChangeVal];
                return newFormData;
              });
            }}
          />
        );
      })}

      <button onClick={handleClick}>Submit</button>
    </div>
  </>
);
}

export default App;