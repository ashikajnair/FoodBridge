// src/pages/admin/SystemSettings.js

import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

const SystemSettings = () => {
  const [donationTimeLimit, setDonationTimeLimit] = useState(48);
  const [categories, setCategories] = useState('Fruits,Vegetables,Cooked Food,Dairy');
  const [faqs, setFaqs] = useState('Q: How to donate?\nA: Go to the Donor Panel and click "Add Donation".');

  const handleSave = () => {
    alert('✅ Settings saved successfully (mocked)');
    // In a real app: Save to database via API call
  };

  return (
    <div>
      <h3 className="mb-4">🧰 System Settings</h3>

      <Card className="p-4">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>⏱️ Donation Time Limit (in hours)</Form.Label>
            <Form.Control
              type="number"
              value={donationTimeLimit}
              onChange={(e) => setDonationTimeLimit(e.target.value)}
              min={1}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>🏷️ Manage Categories / Tags</Form.Label>
            <Form.Control
              type="text"
              value={categories}
              onChange={(e) => setCategories(e.target.value)}
              placeholder="Comma-separated values"
            />
            <Form.Text className="text-muted">e.g., Fruits, Vegetables, Baked Goods</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>📄 Edit FAQs (Optional)</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              value={faqs}
              onChange={(e) => setFaqs(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" onClick={handleSave}>
            Save Settings
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default SystemSettings;
