import React from "react";

function AlertList ({alerts}) {
    return (
    <div>
      <h4>Alerts</h4>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Message</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map(alert => (
            <tr key={alert.id}>
              <td>{alert.bookId}</td>
              <td>{alert.bookTitle}</td>
              <td>{alert.message}</td>
              <td>{alert.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
}

export default AlertList;