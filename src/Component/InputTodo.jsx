import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = () => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      setInputText.addTodoProps(inputText.title);
      setInputText({
        title: '',
      });
    } else {
      // eslint-disable-next-line no-alert
      alert('Please enter a valid title');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="What do you need to do?"
        name="title"
        value={inputText.title}
        onChange={onChange}
      />
      <button type="submit" className="input-submit">
        <FaPlusCircle
          style={{ color: 'darkcyan', fontSize: '20px', marginTop: '2px' }}
        />
      </button>
    </form>
  );
};

export default InputTodo;
