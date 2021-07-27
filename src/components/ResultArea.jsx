import React from 'react'
import ResultItem from './ResultItem'

export default function ResultArea({ results, removeItem, handleUpdate }) {
  return (
    <>
      <h4 className="mb-5 text-danger">{ results.length } - Results Found</h4>
      {
        results.map( (result, i) => 
          <ResultItem result={ result } key={ i } removeItem={ removeItem } handleUpdate={ handleUpdate } />
        )
      }
    </>
  )
}
