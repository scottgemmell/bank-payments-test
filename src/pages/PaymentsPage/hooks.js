import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectPayments, fetchPayments } from "../../store/slices/payments/paymentsSlice";

export const usePaymentsPage = () => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		dispatch(fetchPayments()).then(() => setIsLoading(false))
	}, [])

	const paymentsData = useSelector(selectPayments);

	return {
		isLoading,
		paymentsData
	};
};


