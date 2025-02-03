import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ text, sender }) => {
  return (
    <div className={`message ${sender}-message`}>
      <div className="message-content">
        <b>{sender === 'user' ? 'You: ' : 'Gemini: '}</b>
        {text}
      </div>
    </div>
  );
};

Message.propTypes = {
  text: PropTypes.string.isRequired,
  sender: PropTypes.oneOf(['user', 'bot']).isRequired,
};

export default Message;