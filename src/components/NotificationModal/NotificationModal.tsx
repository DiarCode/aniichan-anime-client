import React, { useCallback, useEffect, useState } from "react";
import { NOTIFICATION_TYPES } from "../../types/notificationTypes";

interface NotificationModalProps {
  isActive: boolean;
  setShowNotificationModal: (state: boolean) => void;
  type: NOTIFICATION_TYPES;
  message: string | null;
}

const ERROR_MODAL_STYLE = "bg-[#ECC5BB] border-2 border border-[#ECC5BB]";
const SUCCESS_MODAL_STYLE = "bg-[#E4FCE9] border-2 border border-[#C5E4CA]";
const NOTIFICATION_EXPIRATION_INTERVAL = 3000;

const NotificationModal = ({
  type,
  message,
  isActive,
  setShowNotificationModal,
}: NotificationModalProps) => {
  const handleModal = useCallback(() => {
    setShowNotificationModal(false);
  }, [setShowNotificationModal]);

  useEffect(() => {
    const closeModal = setTimeout(() => {
      handleModal();
    }, NOTIFICATION_EXPIRATION_INTERVAL);
    return () => clearTimeout(closeModal);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  const styleDependsOnType = `${
    isActive ? "flex" : "hidden"
  } fixed justify-center items-center bottom-10 right-10 max-w-[350px] min-w-[300px] bg-opacity-50 py-4 px-8 rounded-xl ${
    type === NOTIFICATION_TYPES.ERROR && ERROR_MODAL_STYLE
  } ${type === NOTIFICATION_TYPES.SUCCESS && SUCCESS_MODAL_STYLE}`;
  return (
    <div className={styleDependsOnType}>
      <div className="w-full flex justify-between items-center">
        <h3 className="text-base text-[#2b416b] truncate text-ellipsis overflow-x-hidden">
          {message}
        </h3>

        <div className="flex justify-center items-center ml-4">
          <button onClick={handleModal}>
            <svg
              className="w-5 h-5 cursor-pointer"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#1F355E"
                d="M5.3,18.7C5.5,18.9,5.7,19,6,19s0.5-0.1,0.7-0.3l5.3-5.3l5.3,5.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3   c0.4-0.4,0.4-1,0-1.4L13.4,12l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L12,10.6L6.7,5.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4   l5.3,5.3l-5.3,5.3C4.9,17.7,4.9,18.3,5.3,18.7z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
