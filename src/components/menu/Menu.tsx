import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((it) => (
            <Link to={it.url} className="listItem" key={it.id}>
              <img src={it.icon} alt="" />
              <span className="listItemTitle">{it.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
