import { ChatRooms } from "./ChatRooms";
import { ChatMessages } from "./ChatMessages";

export const ChatBody = () => (
  <main className="content">
    <div className="container p-0">
      <h1 className="h3 mb-3">Messages</h1>
      <div className="card">
        <div className="row g-0">
          <ChatRooms />
          <ChatMessages />
        </div>
      </div>
    </div>
  </main>
);
