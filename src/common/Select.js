import React from 'react'

export default function Select({ handleFilterChange }) {
	return (
		<select onChange={handleFilterChange} className="form-select mt-4 mb-2" aria-label="Filter by Payment Type">
			<option defaultValue>All</option>
			<option value="A">Approved</option>
			<option value="C">Cancelled</option>
			<option value="P">Pending Approval</option>
	  </select>
	)
}
