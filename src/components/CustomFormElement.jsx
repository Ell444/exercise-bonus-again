import { useState } from "react";

export default function ({ mode, label, value, id, options, onChange }) {
    switch (mode) {
        case "input":
            return (
                <label>
                    <input type="text" id={id} value={value} onChange={onChange} />
                    {label}
                </label>
            );
        case "select":
            return (
                <label>
                    <select id={id} value={value} onChange={onChange}>
                        {options.map((elem, i) => (
                            <option key={option${i}} value={elem}>
                        {elem}
                    </option>
             ))}
                </select>
           { label }
         </label >
       );
        case "checkbox":
            return (
                <label>
                    <input type="checkbox" id={id} value={value} onChange={onChange} />
                    {label}
                </label>
            );
        case "radio":
            return (
                <div
                    options={options.map((elem, i) => (
                        <label>
                            <input
                                type="radio"
                                id={radio${i}}
                            value={value}
                            onChange={onChange}
               />
                            {label}
                        </label>
                    ))}
                ></div>
            );
    }
}