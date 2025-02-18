import React, { useState, useEffect, useContext } from "react";
import "../../styles/login.css";
import { Link } from "react-router-dom";
import recipes from "../../img/recipes.png";

export const Forgot = () => {

	return (
		<div className="container-fluid">
		<div className="row principal">
			{/* Columna izquierda */}


    <div className="col formulario-forgot">
    <div className="row pb-5">
    <div className="col-1">
    </div>
    <div className="col-1">
    <i className="fa-solid fa-chevron-left"></i>
    </div>
    <div className="col-10">
    <div className="back-login"> <Link to="/login">Back to login</Link> </div> 
    </div>
    </div>
	<h3 className="titulo-login">Forgot password</h3>
	<p className="parrafo-login">Enter the email associated with your account and we’ll send an email with instructions to reset your
password.</p>
	<form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="name@example.com" aria-describedby="emailHelp"/>
  </div>
  <button type="submit" className="btn btn-primary">Send Instructions</button>
</form>

	</div>
	{/* Columna derecha */}
    <div className="col muestra" style={{ backgroundImage: `url(${recipes})` }}>
    {/* <img className="cucharas" src={recipes} />
    <h4>Keep track of all your inventory.</h4>
    <p className="p-login">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p> */}
    </div>
	
		</div>
		</div>
	);
};
