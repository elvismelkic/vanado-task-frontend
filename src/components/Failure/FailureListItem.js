import React, { useState } from "react";
import { Link } from "react-router-dom";
import FailureStatus from "./FailureStatus";

export default function FailureListItem({
  failure: passedFailure,
  showMachine,
}) {
  const [failure, setFailure] = useState(passedFailure);

  return (
    <div className="failure__item">
      <p className="item__text">{failure.name}</p>
      {
        showMachine
        ? <Link className="machine__link" to={`/machines/${failure.machine.id}`}>{failure.machine.name}</Link>
        : null
      }
      <FailureStatus failure={failure} setFailure={setFailure} />
      <p
        className={`item__text item__text--priority item__text--${failure.priority}`}
      >
        {failure.priority}
      </p>
      <Link className="item__text--details" to={`/failures/${failure.id}`}>
        Details
      </Link>
    </div>
  );
}
