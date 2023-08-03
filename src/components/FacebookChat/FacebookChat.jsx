import React from "react";
import { CustomChat, FacebookProvider } from "react-facebook";

const FacebookChat = () => {
  return (
    <div className="flex items-center justify-end">
      <div>
        <FacebookProvider appId="634151248813872" chatSupport>
          <CustomChat pageId="109120031638783" minimized={false} />
        </FacebookProvider>
      </div>
    </div>
  );
};

export default FacebookChat;
