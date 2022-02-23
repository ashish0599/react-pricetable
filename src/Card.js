import React from "react";

import "./style.css"

function Card(props) {
    let user = (
      <p>
        <i class="fa fa-check"></i>
        {props.user}
      </p>
    );
    let storage = (
      <p>
        <i class="fa fa-check"></i>
        {props.storage}
      </p>
    );
    let projects = (
      <p>
        <i class="fa fa-check"></i>Unlimited Public Projects
      </p>
    );
    let access = (
      <p>
        <i class="fa fa-check"></i>Community access
      </p>
    );
    let privateProject;
    if (props.private)
    privateProject = (
        <p>
          <i class="fa fa-check"></i>Unlimited Private Projects
        </p>
      );
    else
    privateProject = (
        <p class="muted">
          <i class="fa fa-times"></i>Unlimited Private Projects
        </p>
      );
    let phone;
    if (props.phone)
      phone = (
        <p>
          <i class="fa fa-check"></i>Dedicated Phone Support
        </p>
      );
    else
      phone = (
        <p class="muted">
          <i class="fa fa-times"></i>Dedicated Phone Support
        </p>
      );
    let domain = props.domain;
    if (props.domain)
      domain = (
        <p>
          <i class="fa fa-check"></i>
          {domain} Free Subdomain
        </p>
      );
    else
      domain = (
        <p class="muted">
          <i class="fa fa-times"></i>Free Subdomain
        </p>
      );
    let report;
    if (props.report)
      report = (
        <p>
          <i class="fa fa-check"></i>Monthly Status Reports
        </p>
      );
    else
      report = (
        <p class="muted">
          <i class="fa fa-times"></i>Monthly Status Reports
        </p>
      );
    return (
      <div className="card">
        <div className="header">
          <p>{props.cardType}</p>
        </div>
        <div className="price">
          <h1>
            {props.price}
            <span className="month">/month</span>
          </h1>
        </div>
        <hr />
        <ul>
          <li>{user}</li>
          <li>{storage}</li>
          <li>{projects}</li>
          <li>{access}</li>
          <li>{privateProject}</li>
          <li>{phone}</li>
          <li>{domain}</li>
          <li>{report}</li>
        </ul>
        <button className="button">BUTTON</button>
      </div>
    );
  }

  export default Card;