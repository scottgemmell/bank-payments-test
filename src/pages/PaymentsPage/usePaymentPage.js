import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { filterPayments, selectPayments, fetchPayments } from "../../store/slices/payments/paymentsSlice";

export const usePaymentsPage = () => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);
	const [showPending, setShowPending] = useState(null)

	const toggleShowPending = (theName) => {
		setShowPending(!showPending)
		console.log("theName", theName.target.value)
	}

	useEffect(() => {
		dispatch(fetchPayments()).then(() => setIsLoading(false))
	}, [])

	const filteredPaymentsData = !!showPending ? useSelector(filterPayments) : useSelector(selectPayments);

	return {
		isLoading,
		filteredPaymentsData,
		toggleShowPending,
	};
};


