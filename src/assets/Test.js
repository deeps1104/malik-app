import React, { useState } from 'react';

const Test = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {/* Button to open the modal */}
      <button onClick={handleOpenModal} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Open Modal
      </button>

      {/* Modal */}
      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h2>Sample Modal</h2>
            <p>This is a simple modal example.</p>
            <button onClick={handleCloseModal} style={{ padding: '10px 20px', cursor: 'pointer' }}>
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Styles for the modal
const styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    background: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
};

export default Test;
