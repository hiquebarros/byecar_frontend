import { IClient } from "../../pages/UserPage";
import { formatCellphone } from "../../utils";
import "./styles.css";

interface ICardProps {
  data: IClient;
}

const Card = ({ data }: ICardProps) => {
  return (
    <div className="card-container">
      <div className="card-icon">{data.name[0]}</div>
      <div className="card-info--primary">
        <h3>{data.name}</h3>
        <h5>{formatCellphone(data.cellphone)}</h5>
      </div>
      <h5 className="card-info--primary">{data.email}</h5>
    </div>
  );
};

export default Card;
