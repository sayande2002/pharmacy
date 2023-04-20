import { Link } from "react-router-dom";
import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, routes } = category;
  return (
    <Link className="directory-item-container" to={"/shop"}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <h2>{title.toUpperCase()}</h2>
      </div>
    </Link>
  );
};

export default DirectoryItem;
// to={`/shop/${routes}`}
