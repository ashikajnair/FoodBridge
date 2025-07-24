// src/pages/admin/PickupSchedules.js

import React, { useState } from 'react';
import { Table, Form, Button, Row, Col, Badge } from 'react-bootstrap';

const mockPickups = [
  {
    id: 1,
    date: '2025-07-22',
    donor: 'FreshMart',
    receiver: 'Helping Hands',
    status: 'Scheduled',
  },
  {
    id: 2,
    date: '2025-07-20',
    donor: 'GreenGrocer',
    receiver: 'Hope Foundation',
    status: 'Completed',
  },
  {
    id: 3,
    date: '2025-07-18',
    donor: 'Daily Needs',
    receiver: 'Relief India',
    status: 'Missed',
  },
];

const PickupSchedules = () => {
  const [pickups, setPickups] = useState(mockPickups);
  const [filters, setFilters] = useState({ date: '', donor: '', receiver: '' });

  const updateFilter = (field, value) => {
    setFilters({ ...filters, [field]: value });
  };

  const filteredPickups = pickups.filter(
    (p) =>
      (filters.date === '' || p.date === filters.date) &&
      (filters.donor === '' || p.donor.toLowerCase().includes(filters.donor.toLowerCase())) &&
      (filters.receiver === '' || p.receiver.toLowerCase().includes(filters.receiver.toLowerCase()))
  );

  const handleCancel = (id) => {
    if (window.confirm('Are you sure you want to cancel this pickup?')) {
      setPickups((prev) =>
        prev.map((p) => (p.id === id ? { ...p, status: 'Cancelled' } : p))
      );
    }
  };

  const getStatusVariant = (status) => {
    switch (status) {
      case 'Scheduled':
        return 'info';
      case 'Completed':
        return 'success';
      case 'Missed':
        return 'danger';
      case 'Cancelled':
        return 'secondary';
      default:
        return 'primary';
    }
  };

  return (
    <div>
      <h3 className="mb-4">🚚 Pickup Scheduling Oversight</h3>

      <Form className="mb-3">
        <Row className="g-3">
          <Col md={3}>
            <Form.Control
              type="date"
              value={filters.date}
              onChange={(e) => updateFilter('date', e.target.value)}
            />
          </Col>
          <Col md={3}>
            <Form.Control
              type="text"
              placeholder="Filter by Donor"
              value={filters.donor}
              onChange={(e) => updateFilter('donor', e.target.value)}
            />
          </Col>
          <Col md={3}>
            <Form.Control
              type="text"
              placeholder="Filter by Receiver"
              value={filters.receiver}
              onChange={(e) => updateFilter('receiver', e.target.value)}
            />
          </Col>
          <Col md={3}>
            <Button variant="secondary" onClick={() => setFilters({ date: '', donor: '', receiver: '' })}>
              Clear Filters
            </Button>
          </Col>
        </Row>
      </Form>

      <Table bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Donor</th>
            <th>Receiver</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPickups.length > 0 ? (
            filteredPickups.map((pickup) => (
              <tr key={pickup.id}>
                <td>{pickup.date}</td>
                <td>{pickup.donor}</td>
                <td>{pickup.receiver}</td>
                <td>
                  <Badge bg={getStatusVariant(pickup.status)}>{pickup.status}</Badge>
                </td>
                <td>
                  {pickup.status === 'Scheduled' && (
                    <>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleCancel(pickup.id)}
                        className="me-2"
                      >
                        Cancel
                      </Button>
                      <Button variant="outline-secondary" size="sm">
                        Modify
                      </Button>
                    </>
                  )}
                  {['Completed', 'Missed', 'Cancelled'].includes(pickup.status) && (
                    <span className="text-muted">No actions</span>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No pickup schedules found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default PickupSchedules;
