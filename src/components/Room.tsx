type Props = {
  name: string;
  imgSrc: string;
  count: number;
  online: boolean;
  to: string;
};

export const Room = ({ name, imgSrc, count, online, to }: Props) => (
  <a href={to} className="list-group-item list-group-item-action border-0">
    {count > 0 && <div className="badge bg-success float-end">{count}</div>}
    <div className="d-flex align-items-start">
      <img
        src={imgSrc}
        className="rounded-circle me-1"
        alt={name}
        width="40"
        height="40"
      />
      <div className="flex-grow-1 ms-3">
        {name}
        <div className="small">
          <span
            className={`fas fa-circle chat-${online ? "online" : "offline"}`}
          ></span>{" "}
          {online ? "Online" : "Offline"}
        </div>
      </div>
    </div>
  </a>
);
