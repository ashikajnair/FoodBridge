import React from 'react';

function Support() {
  return (
    <div className="container mt-4">
      <h2 className="mb-3">Support</h2>
      <p>If you have any questions or issues, feel free to contact us using the information below.</p>

      <div className="card mt-4 p-3 shadow-sm">
        <h5>📧 Email Support</h5>
        <p>Reach out to us at <a href="mailto:support@foodbridge.org">support@foodbridge.org</a></p>

        <h5 className="mt-3">📞 Phone Support</h5>
        <p>Call us at <strong>+91-98765-43210</strong> between 9AM - 6PM (Mon–Fri)</p>

        <h5 className="mt-3">💬 Live Chat</h5>
        <p>Live chat support is available in the bottom-right corner during business hours.</p>
      </div>
    </div>
  );
}

export default Support;
