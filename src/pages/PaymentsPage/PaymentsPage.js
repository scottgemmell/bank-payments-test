import React from "react";
import Filter from "../../common/Filter";
import Spinner from "../../common/Spinner";
import { usePaymentsPage } from "./usePaymentPage";

const PaymentsPage = () => {


	const {
		isLoading,
		toggleShowPending,
		filteredPaymentsData,
	} = usePaymentsPage();


	return (
		<div className="App-main">
			<div className="App-inner">
				<h1>
					PAYMENTS PAGE
				</h1>

				<Filter toggleShowPending={(e) => toggleShowPending(e)} />

				{isLoading && <Spinner />}


				{!isLoading && <table className="table">
					<thead>
						<tr>
							<th scope="col">Date</th>
							<th scope="col">Type</th>
							<th scope="col">Status</th>
							<th scope="col">Currency</th>
							<th scope="col">Amount</th>
						</tr>
					</thead>
					<tbody>
						{filteredPaymentsData && filteredPaymentsData.map((payment, i) => (<tr key={i}>
							<td scope="row">{payment.paymentDate}</td>
							<td scope="row">{payment.paymentType}</td>
							<td scope="row">{payment.paymentStatus}</td>
							<td scope="row">{payment.paymentCurrency}</td>
							<td scope="row">{payment.paymentAmount}</td>
						</tr>))}
					</tbody>
				</table>}
			</div>
		</div>
	);
};

export default PaymentsPage;
