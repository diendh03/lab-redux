import { useSelector } from "react-redux";
import { IResultState } from "../store/result/reduce";

const ShowInfo = () => {
  const resultState: any = useSelector((state: IResultState) => state.result);
  return <div>Kết quả : {resultState.result}</div>;
};

export default ShowInfo;
