import SecureFetch from "../Auth/ApiConfiguration";
import mainEndPoint from "../mainEndPoint";

const getOrderApi = async (setOrderData) => {
  const request = await SecureFetch(mainEndPoint + "/order", "GET", {
    "content-type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  });
  const response = await request.json();
  if (request.status == 200) {
    setOrderData(response.data);
  } else {
    setOrderData([]);
  }
};
export default getOrderApi;
