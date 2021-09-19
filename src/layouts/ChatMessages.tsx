import { ChatHeader } from "../components/ChatHeader";
import { MessageBox } from "../components/MessageBox";
import { InputBox } from "../components/InputBox";

export const ChatMessages = () => (
  <div className="col-12 col-lg-7 col-xl-9">
    <ChatHeader
      userName="Sharon Lessman"
      typing={true}
      imgSrc="https://bootdey.com/img/Content/avatar/avatar3.png"
    />
    <MessageBox />
    <InputBox />
  </div>
);
