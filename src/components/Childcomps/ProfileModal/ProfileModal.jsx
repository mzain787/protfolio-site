import React from "react";
import "./ProfileModal.css";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import YouTube from "react-youtube";

const ProfileModal = ({ isOpen, closeModal }) => {
  const videoId = "PYuPmNFHTog"; // Extract video ID from your YouTube link

  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Profile Modal"
      className="profile-modal z-30"
      overlayClassName="profile-modal-overlay"
    >
      <div className="modal-content">

       <YouTube videoId={videoId} opts={opts} />
        

        <div className="close-icon" onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} className="text-3xl text-orange-300 font-bold"/>
        </div>
      </div>
    </Modal>
  );
};

export default ProfileModal;
