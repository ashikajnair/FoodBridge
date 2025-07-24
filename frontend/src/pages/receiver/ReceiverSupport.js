import React from 'react';

const ReceiverSupport = () => {
  return (
    <div className="container p-4 mt-5">
      <h2 className="text-success mb-4">💬 Need Help? We're Here!</h2>

      <p className="lead p-4">
        Welcome to the FoodBridge Support Center for Receivers. Whether it's about accepting donations, scheduling pickups, or using the platform — we've got your back! 🌍
      </p>

      {/* Help Topics */}
      <div className="row mt-4">
        <a href="#accepting-donations" className="card-link">
  <div className="support-card">
        <div className="col-md-4 mb-4">
          <div className="p-3 border rounded bg-light">
            <h5 className="text-success">📦 Accepting Donations</h5>
            <p>Learn how to view and accept available food donations safely and efficiently.</p>
          </div>
        </div></div>
</a>

        <div className="col-md-4 mb-4">
          <div className="p-3 border rounded bg-light">
            <h5 className="text-success">🚚 Pickup Scheduling</h5>
            <p>Check steps to schedule pickups and coordinate with donors. Always on time! ⏰</p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="p-3 border rounded bg-light">
            <h5 className="text-success">📄 Track History</h5>
            <p>Access and manage your donation history. Stay organized with all your accepted items.</p>
          </div>
        </div>
      </div>

      <a href="#accepting-donations" className="card-link">
  <div className="support-card">
    <h3>📦 Accepting Donations</h3>
    <p>Learn how to view and accept available food donations safely and efficiently.</p>
  </div>
</a>
<a href="#pickup-scheduling" className="card-link">
  <div className="support-card">
    <h3>🚚 Pickup Scheduling</h3>
    <p>Check steps to schedule pickups and coordinate with donors. Always on time! ⏰</p>
  </div>
</a>
<a href="#track-history" className="card-link">
  <div className="support-card">
    <h3>📄 Track History</h3>
    <p>Access and manage your donation history. Stay organized with all your accepted items.</p>
  </div>
</a>

<div id="accepting-donations" className="support-section">
  <h2>📦 Accepting Donations</h2>
  <p>To accept donations, navigate to the "View Donations" tab. Click on available items to see details and use the "Accept" button. Once accepted, the item will move to your Accepted Donations tab.</p>
</div>

<div id="pickup-scheduling" className="support-section">
  <h2>🚚 Pickup Scheduling</h2>
  <p>After accepting a donation, click the "Schedule Pickup" button. Choose a convenient time slot and confirm. Coordinate with the donor via chat or contact provided.</p>
</div>

<div id="track-history" className="support-section">
  <h2>📄 Track History</h2>
  <p>Visit the "Accepted Donations" section to track all past and current items. View pickup status, dates, and notes left by donors.</p>
</div>


      {/* Contact Info */}
      <div className="mt-5">
        <h4 className="text-success">📩 Contact Support</h4>
        <p>If you have questions not answered above, feel free to reach out:</p>
        <ul className="list-unstyled">
          <li><strong>📧 Email:</strong> <a href="mailto:support@foodbridge.org">support@foodbridge.org</a></li>
          <li><strong>📞 Phone:</strong> +91 98765 43210</li>
          <li><strong>🕒 Working Hours:</strong> 9:00 AM – 6:00 PM (Mon–Sat)</li>
        </ul>
      </div>

      {/* FAQs */}
      <div className="mt-4">
        <h4 className="text-success">🙋 Frequently Asked Questions</h4>
        <div className="accordion mt-3" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="faq1">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1">
                How do I know which donations are still available?
              </button>
            </h2>
            <div id="collapse1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Go to the "View Donations" page. All listed items are currently available unless marked as "Reserved".
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="faq2">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2">
                Can I cancel an accepted donation?
              </button>
            </h2>
            <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Yes, you can cancel it from your "Accepted Donations" page before the scheduled pickup time.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="faq3">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3">
                What if I miss a pickup?
              </button>
            </h2>
            <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Please contact the donor immediately or reach out to our support team for rescheduling.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="alert alert-success mt-5 text-center">
        🌟 Together, we’re reducing food waste and making a difference. Thank you for being a changemaker!
      </div>
    </div>
  );
};

export default ReceiverSupport;

