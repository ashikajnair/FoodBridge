// src/pages/admin/ManageUsers.js

import React, { useState, useEffect } from 'react';
import { Button, Table, Form, Dropdown } from 'react-bootstrap';

const mockUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    totalDonations: 5,
    lastActive: '2025-07-20',
    role: 'donor',
    blocked: false,
  },
  {
    id: 2,
    name: 'Hope Foundation',
    email: 'hope@ngo.org',
    totalDonations: 12,
    lastActive: '2025-07-21',
    role: 'receiver',
    blocked: true,
  },
];

const ManageUsers = () => {
  const [users, setUsers] = useState(mockUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('donor');

  const filteredUsers = users.filter(
    (user) =>
      user.role === filterRole &&
      (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const toggleBlock = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, blocked: !user.blocked } : user
      )
    );
  };

  const deleteUser = (id) => {
    if (window.confirm('Are you sure you want to delete this account?')) {
      setUsers((prev) => prev.filter((user) => user.id !== id));
    }
  };

  return (
    <div>
      <h3 className="mb-4">👥 Manage {filterRole === 'donor' ? 'Donors' : 'Receivers'}</h3>

      <div className="d-flex justify-content-between mb-3">
        <div className="d-flex gap-2">
          <Button
            variant={filterRole === 'donor' ? 'primary' : 'outline-primary'}
            onClick={() => setFilterRole('donor')}
          >
            Donors
          </Button>
          <Button
            variant={filterRole === 'receiver' ? 'primary' : 'outline-primary'}
            onClick={() => setFilterRole('receiver')}
          >
            Receivers
          </Button>
        </div>

        <Form.Control
          type="text"
          placeholder="Search by name or email..."
          style={{ width: '250px' }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Total Donations</th>
            <th>Last Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.totalDonations}</td>
                <td>{user.lastActive}</td>
                <td className="d-flex gap-2 flex-wrap">
                  <Button
                    size="sm"
                    variant={user.blocked ? 'warning' : 'secondary'}
                    onClick={() => toggleBlock(user.id)}
                  >
                    {user.blocked ? 'Unblock' : 'Block'}
                  </Button>
                  <Button size="sm" variant="info">
                    {filterRole === 'donor' ? 'View Donations' : 'View History'}
                  </Button>
                  <Button size="sm" variant="danger" onClick={() => deleteUser(user.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageUsers;
