import React from 'react';
import PropTypes from 'prop-types';
import { FaPaperPlane } from 'react-icons/fa';

const SendButton = ({ loading }) => {
  return (
    <button 
      type="submit" 
      className="send-button"
      disabled={loading}
    >
      {loading ? (
        'Loading...'
      ) : (
        <FaPaperPlane className="send-icon" />
      )}
    </button>
  );
};

SendButton.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default SendButton;