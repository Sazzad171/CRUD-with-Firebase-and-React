import React from 'react'

export default function ResultItem({ result, removeItem, handleUpdate }) {
  return (
    <>
      <div className="result-block mb-4">
        <h6>Name: { result.name }</h6>
        <h6>Subject: { result.subject }</h6>
        <h6 >Grade: { result.grade }</h6>
        <button className="btn btn-danger" onClick={ () => removeItem(result.id) }>Remove</button>
        <button className="btn btn-primary ml-3" onClick={ () => handleUpdate(result.id) }>Edit</button>
      </div>
    </>
  )
}
