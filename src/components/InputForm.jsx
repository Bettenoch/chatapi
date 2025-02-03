import React from 'react';
import PropTypes from 'prop-types';
import SendButton from './SendButton';

const InputForm = ({ input, setInput, loading, onSend }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSend();
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        disabled={loading}
      />
      <SendButton loading={loading} />
    </form>
  );
};

InputForm.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  onSend: PropTypes.func.isRequired,
};

export default InputForm;