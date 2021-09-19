type Props = {
  name: string;
  body: string;
  sentAt: string;
  imgSrc: string;
  my: boolean;
};

export const Message = ({ imgSrc, sentAt, name, body, my }: Props) => (
  <div className={`chat-message-${my ? "right mb-4" : "left pb-4"} `}>
    <div>
      <img
        src={imgSrc}
        className="rounded-circle me-1"
        alt={name}
        width="40"
        height="40"
      />
      <div className="text-muted small text-nowrap mt-2">{sentAt}</div>
    </div>
    <div
      className={`flex-shrink-1 bg-light rounded py-2 px-3 ${
        my ? "me-3" : "ms-3"
      }`}
    >
      <div className="fw-bold mb-1">{name}</div>
      {body}
    </div>
  </div>
);
