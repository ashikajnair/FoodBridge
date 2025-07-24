import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // optional custom styling
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-success px-4">
        <div className="container-fluid">
          <span className="navbar-brand">FoodBridge</span>
          <div>
            <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
            <Link to="/register" className="btn btn-light text-success">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-5 bg-light">
        <h1 className="display-5 fw-bold">Bridge the Gap Between Surplus and Need</h1>
        <p className="lead">Connecting supermarkets with NGOs and volunteers to reduce food waste and help those in need.</p>
        <div className="mt-4">
          <Link to="/register" className="btn btn-success btn-lg me-3">Donate Food</Link>
          <Link to="/register" className="btn btn-outline-success btn-lg">Request Help</Link>
        </div>
      </section>

      {/* About Section */}
      <section className="container my-5 d-flex align-items-center">
        <div className="col-md-6">
          <h2>About FoodBridge</h2>
          <p>
            FoodBridge is a community-driven platform aiming to reduce food wastage by connecting surplus food sources like supermarkets with NGOs and volunteers who distribute food to those in need.
            Our goal is to ensure no food goes to waste when there are people in need.
          </p>
        </div>
        <div className="col-md-6">
          <img src="https://img.freepik.com/free-vector/community-sharing-concept-illustration_114360-8595.jpg" alt="About" className="img-fluid rounded" />
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">How It Works</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">1. Donate</h5>
                  <p className="card-text">Donors list surplus food via their dashboard.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">2. Match</h5>
                  <p className="card-text">Platform connects NGOs and volunteers based on location and availability.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">3. Distribute</h5>
                  <p className="card-text">Food is picked up and distributed to those in need.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Roles */}
      <section className="container py-5">
        <h2 className="text-center mb-4">Who Can Use FoodBridge?</h2>
        <div className="row text-center">
          <div className="col-md-6">
            <div className="border p-4 rounded h-100">
              <h4>Donor</h4>
              <p>Supermarkets or stores that want to donate surplus food items.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="border p-4 rounded h-100">
              <h4>Receiver</h4>
              <p>NGOs and volunteers who collect and distribute food to those in need.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-success text-white text-center py-5">
        <h2>Ready to Make a Difference?</h2>
        <p>Join the movement to reduce food waste and support those in need.</p>
        <Link to="/register" className="btn btn-light mx-2">Join as Donor</Link>
        <Link to="/register" className="btn btn-outline-light mx-2">Join as Receiver</Link>
        
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <small>© 2025 FoodBridge | Empowering food equity.</small>
      </footer>
    </div>
  );
}
