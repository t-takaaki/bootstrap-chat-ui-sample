import { Message } from "./Message";

export const MessageBox = () => (
  <div className="position-relative">
    <div className="chat-messages p-4">
      <Message
        my={true}
        name="You"
        sentAt="2:33 am"
        body="Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix."
        imgSrc="https://bootdey.com/img/Content/avatar/avatar1.png"
      />
      <Message
        my={false}
        name="Sharon Lessman"
        sentAt="2:34 am"
        body="Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo."
        imgSrc="https://bootdey.com/img/Content/avatar/avatar3.png"
      />
      <Message
        my={true}
        name="You"
        sentAt="2:35 am"
        body="Cum ea graeci tractatos."
        imgSrc="https://bootdey.com/img/Content/avatar/avatar1.png"
      />
      <Message
        my={false}
        name="Sharon Lessman"
        sentAt="2:36 am"
        body="Sed pulvinar, massa vitae interdum pulvinar, risus lectus porttitor magna, vitae commodo lectus mauris et velit. Proin ultricies placerat imperdiet. Morbi varius quam ac venenatis tempus."
        imgSrc="https://bootdey.com/img/Content/avatar/avatar3.png"
      />
      <Message
        my={false}
        name="Sharon Lessman"
        sentAt="2:37 am"
        body="Cras pulvinar, sapien id vehicula aliquet, diam velit elementum orci."
        imgSrc="https://bootdey.com/img/Content/avatar/avatar3.png"
      />
      <Message
        my={true}
        name="You"
        sentAt="2:38 am"
        body="Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix."
        imgSrc="https://bootdey.com/img/Content/avatar/avatar1.png"
      />
      <Message
        my={false}
        name="Sharon Lessman"
        sentAt="2:39 am"
        body="Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo."
        imgSrc="https://bootdey.com/img/Content/avatar/avatar3.png"
      />
      <Message
        my={true}
        name="You"
        sentAt="2:40 am"
        body="Cum ea graeci tractatos"
        imgSrc="https://bootdey.com/img/Content/avatar/avatar1.png"
      />
      <Message
        my={false}
        name="Sharon Lessman"
        sentAt="2:41 am"
        body="Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo."
        imgSrc="https://bootdey.com/img/Content/avatar/avatar3.png"
      />
      <Message
        my={true}
        name="You"
        sentAt="2:42 am"
        body="Cum ea graeci tractatos"
        imgSrc="https://bootdey.com/img/Content/avatar/avatar1.png"
      />
      <Message
        my={true}
        name="You"
        sentAt="2:42 am"
        body="Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix."
        imgSrc="https://bootdey.com/img/Content/avatar/avatar1.png"
      />
      <Message
        my={false}
        name="Sharon Lessman"
        sentAt="2:44 am"
        body="Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo."
        imgSrc="https://bootdey.com/img/Content/avatar/avatar3.png"
      />
    </div>
  </div>
);
