// src/pages/admin/Reports.js

import React, { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';

const Reports = () => {
  const [reportType, setReportType] = useState('monthly');
  const [format, setFormat] = useState('pdf');

  const handleDownload = () => {
    const reportName = `${reportType}_${new Date().toISOString().slice(0, 10)}.${format}`;
    alert(`✅ ${reportName} report generated and downloaded (mocked).`);
    // In real app: generate report via API and trigger file download
  };

  return (
    <div>
      <h3 className="mb-4">📊 Reports & Analytics</h3>

      <Card className="p-4">
        <Form>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Label>Report Type</Form.Label>
              <Form.Select
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
              >
                <option value="monthly">📆 Monthly Summary</option>
                <option value="user_growth">📈 User Growth</option>
                <option value="pickup_efficiency">🚚 Pickup Efficiency</option>
              </Form.Select>
            </Col>

            <Col md={6}>
              <Form.Label>Format</Form.Label>
              <Form.Select
                value={format}
                onChange={(e) => setFormat(e.target.value)}
              >
                <option value="pdf">PDF</option>
                <option value="csv">CSV</option>
              </Form.Select>
            </Col>
          </Row>

          <Button variant="success" onClick={handleDownload}>
            <FaDownload className="me-2" />
            Download Report
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Reports;
