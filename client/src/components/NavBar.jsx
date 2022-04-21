import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Title } from '@mantine/core';

const NavBar = () => {
	return (
	  <>
	  <Title order={1} style={{ marginBottom: '10px' }}>Task Dashboard</Title>
	  <Link to='/'>
		  <Button type="Submit" variant="light" size="sm" style={{ marginRight: '10px' }}>Home</Button>
	  </Link>
	  <Link to='/add-task'>
		  <Button type="Submit" variant="light" size="sm">Add New</Button>
	  </Link>
	  </>
  )
}

export default NavBar