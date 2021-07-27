import React from 'react'
import Loader from 'react-loader-spinner'
import { usePromiseTracker } from 'react-promise-tracker'

export default function Loading() {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress && (<div className="loader">
      <Loader type="ThreeDots" color="#dc3545" height="180" width="180" />
    </div>)
  )
}
