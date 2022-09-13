import { post, get, destroy, patch } from "../helpers";

export const getPayments = async () => {
	const response = await get(`/payments`);
  
	return response.data;
  };