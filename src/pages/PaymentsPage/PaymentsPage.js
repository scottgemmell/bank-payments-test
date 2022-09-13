import React from "react";
import Spinner from "../../common/Spinner";
import { usePaymentsPage } from "./hooks";

const PaymentsPage = () => {


	const {
		isLoading,
		paymentsData: { results },
	} = usePaymentsPage();


	return (
		<div className="App-main">
			<div className="App-inner">
				<h1>
					PAYMENTS PAGE
				</h1>

				{isLoading && <Spinner />}


				{!isLoading && <table className="table">
					<thead>
						<tr>
							<th scope="col">Date</th>
							<th scope="col">Type</th>
							<th scope="col">Currency</th>
							<th scope="col">Amount</th>
						</tr>
					</thead>
					<tbody>
						{results && results.map((payment) => (<tr>
							<td scope="row">{payment.paymentDate}</td>
							<td scope="row">{payment.paymentType}</td>
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
