import React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser, faCog } from "@fortawesome/free-solid-svg-icons";

function RightSideMenu() {
  const { projectId } = useParams();
  return (
    <div className="fixed top-0 right-0 h-full w-16 bg-slate-800 text-white flex flex-col items-center py-4 space-y-4">
      <FontAwesomeIcon
        icon={faEnvelope}
        className="text-xl hover:text-gray-400 cursor-pointer"
      />
      <FontAwesomeIcon
        icon={faUser}
        className="text-xl hover:text-gray-400 cursor-pointer"
      />
      <FontAwesomeIcon
        icon={faCog}
        className="text-xl hover:text-gray-400 cursor-pointer"
      />
    </div>
  );
}

export default RightSideMenu;
