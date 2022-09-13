import React from 'react'

export default function Filter({ toggleShowPending }) {
	return (
	  <button onClick={toggleShowPending} type="button" className="btn btn-link mt-4 mb-2">Toggle Pending Approval</button>
	)
}
