import React, { useState } from "react"

interface TextInputProps
{
    label: string;
    callback: (str: string) => void;
}

const TextInput: React.FC<TextInputProps> = (props: TextInputProps) =>
{
    let [input, SetInput] = useState("");

    const handleInputChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        SetInput(event.target.value)
    }

    const handleSubmit = () => {
        props.callback(input);
        SetInput("");
    }

    const handleKeyUp = (event : React.KeyboardEvent) => {
        if (event.key === "Enter")
        {
            handleSubmit();
        }
    }

    return <div>
                <label className='textIn'>
                    {props.label + ":  "}
                    <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    onKeyUpCapture={handleKeyUp}
                    />
                    <button onClick={handleSubmit} >Submit</button>
                </label>
            </div>;
}

export default TextInput;