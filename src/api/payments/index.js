import { post, get, destroy, patch } from "../helpers";

export const getPayments = async () => {
	const response = await get(`/payments`);
  
	return response.data;
  };

  export const getMorePayments = async (nextPageIndex) => {
	const response = await get(`/payments?pageIndex=${nextPageIndex}`);
  
	return response.data;
  };