import Link from "next/link";
import React, { MutableRefObject, useRef, useState } from "react";
import AppLayout from "../components/AppLayouts/AppLayout";
import NotificationModal from "../components/NotificationModal/NotificationModal";
import { NOTIFICATION_TYPES } from "../types/notificationTypes";
import { AUTHORIZATION_PAGES_LINKS } from "../utils/pages";

const LoginPage = () => {
  const usernameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const passwordRef = useRef() as MutableRefObject<HTMLInputElement>;

  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [notificatioMessage, setNotificatioMessage] = useState<string | null>(
    null
  );

  const handleLoginSubmit = () => {
    const usernameValue = usernameRef.current.value || null;
    const passwordValue = passwordRef.current.value || null;

    const formFieldsValues = [usernameValue, passwordValue];

    const isFormInputValid = formFieldsValues.every(value => value !== null);

    if (!isFormInputValid) {
      setNotificatioMessage("All fields must be filled");
      return setShowNotificationModal(true);
    }

    console.log("username: ", usernameValue);
    console.log("password: ", passwordValue);
  };

  return (
    <AppLayout
      title={AUTHORIZATION_PAGES_LINKS.LOGIN.name}
      includeNavbar={false}
      className="w-full"
    >
      <div className="w-full h-screen bg-gradient-to-r from-[#7cc3e6] to-[#abf6f6] flex justify-center items-center px-3 py-5">
        <div className="w-[400px] bg-white rounded-xl p-8 h-fit">
          <div className="flex flex-col items-center">
            <div className="mb-10">
              <h1 className="font-bold text-2xl text-[#1F355E] mb-1 text-center">
                Welcome Back!
              </h1>
              <h3 className="font-medium text-base text-[#95abd4] text-center">
                Login to continue
              </h3>
            </div>

            <div className="mb-10">
              <input
                ref={usernameRef}
                type="username"
                className="cursor-pointer rounded-lg w-full px-5 py-4 bg-[#dbeff9] text-base text-[#1F355E] mb-4"
                placeholder="Enter username"
              />
              <input
                ref={passwordRef}
                type="password"
                className="cursor-pointer rounded-lg w-full px-5 py-4 bg-[#dbeff9] text-base text-[#1F355E]"
                placeholder="Enter password"
              />
            </div>

            <div className="mb-14" onClick={handleLoginSubmit}>
              <button className="cursor-pointer rounded-lg bg-[#9cd8f0] text-[#1F355E] px-8 py-2">
                {AUTHORIZATION_PAGES_LINKS.LOGIN.name}
              </button>
            </div>

            <div className="flex items-center gap-x-2">
              <p className="font-normal text-sm text-[#95abd4] text-center">
                Do not have an account?
              </p>
              <Link href={AUTHORIZATION_PAGES_LINKS.REGISTRATION.path}>
                <p className="cursor-pointer font-medium text-sm text-[#85cbe7] text-center">
                  {AUTHORIZATION_PAGES_LINKS.REGISTRATION.name}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <NotificationModal
        isActive={showNotificationModal}
        setShowNotificationModal={setShowNotificationModal}
        message={notificatioMessage}
        type={NOTIFICATION_TYPES.ERROR}
      />
    </AppLayout>
  );
};

export default LoginPage;
