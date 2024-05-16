import React, { useState } from 'react';

const Forms = () => {
  const [formValue, setFormValue] = useState({
    text: '',
    checkbox: false,
    radiobutton: '',
    selector: '',
  });

  const radioItems = ['A', 'B', 'C'];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
  };

  const handleChangeText = (e) => {
    setFormValue({ ...formValue, text: e.target.value });
  };

  const handleChangeCheckBox = (e) => {
    setFormValue({ ...formValue, checkbox: e.target.checked });
  };

  const handleChangeRadio = (e) => {
    setFormValue({ ...formValue, radiobutton: e.target.value });
  };

  const handleChangeSelect = (e) => {
    setFormValue({ ...formValue, selector: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={formValue.text} onChange={handleChangeText} />
        <br />
        <label>
          CheckBox
          <input type="checkbox" checked={formValue.checkbox} onChange={handleChangeCheckBox} />
        </label>
        <br />
        <label>
          {radioItems.map((el) => (
            <label>
              {el}
              <input
                type="radio"
                onChange={handleChangeRadio}
                checked={formValue.radiobutton === el}
                value={el}
              />
            </label>
          ))}
        </label>
        <br />
        <label>
          <select value={formValue.selector} onChange={handleChangeSelect}>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Forms;
