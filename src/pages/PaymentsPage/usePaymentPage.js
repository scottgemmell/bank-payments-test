import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { filteredPayments, selectedPayments, fetchPayments, fetchMorePayments, paymentsData } from "../../store/slices/payments/paymentsSlice";

export const usePaymentsPage = () => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);
	const [showPending, setShowPending] = useState(null)

	const toggleShowPending = (theName) => {
		setShowPending(!showPending)
	}

	const showMoreElements = (more) => {
		dispatch(fetchMorePayments(more)).then(() => setIsLoading(false))
	}

	useEffect(() => {
		dispatch(fetchPayments()).then(() => setIsLoading(false))
	}, [])

	const filteredPaymentsData = !!showPending ? useSelector(filteredPayments) : useSelector(selectedPayments);
	const allData = useSelector(paymentsData);

	return {
		allData,
		isLoading,
		filteredPaymentsData,
		toggleShowPending,
		showMoreElements,
	};
};


