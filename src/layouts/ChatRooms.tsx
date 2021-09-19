import { SearchBox } from "../components/SearchBox";
import { Room } from "../components/Room";

export const ChatRooms = () => (
  <div className="col-12 col-lg-5 col-xl-3 border-end">
    <SearchBox />
    <Room
      name="Vanessa Tucker"
      count={5}
      online={true}
      to="/"
      imgSrc="https://bootdey.com/img/Content/avatar/avatar5.png"
    />
    <Room
      name="William Harris"
      count={2}
      online={true}
      to="/"
      imgSrc="https://bootdey.com/img/Content/avatar/avatar2.png"
    />
    <Room
      name="Sharon Lessman"
      count={0}
      online={true}
      to="/"
      imgSrc="https://bootdey.com/img/Content/avatar/avatar3.png"
    />
    <Room
      name="Christina Mason"
      count={0}
      online={false}
      to="/"
      imgSrc="https://bootdey.com/img/Content/avatar/avatar4.png"
    />
    <Room
      name="Fiona Green"
      count={0}
      online={false}
      to="/"
      imgSrc="https://bootdey.com/img/Content/avatar/avatar8.png"
    />
    <Room
      name="Doris Wilder"
      count={0}
      online={false}
      to="/"
      imgSrc="https://bootdey.com/img/Content/avatar/avatar2.png"
    />
    <Room
      name="Haley Kennedy"
      count={0}
      online={false}
      to="/"
      imgSrc="https://bootdey.com/img/Content/avatar/avatar1.png"
    />
    <Room
      name="Jennifer Chang"
      count={0}
      online={false}
      to="/"
      imgSrc="https://bootdey.com/img/Content/avatar/avatar7.png"
    />

    <hr className="d-block d-lg-none mt-1 mb-0" />
  </div>
);
