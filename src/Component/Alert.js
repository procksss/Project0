import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        {console.log(props.alert.message)}
     <strong>{props.alert.type}! </strong>{props.alert.message}
    </div>
  )
}
