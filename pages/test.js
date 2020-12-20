import React from 'react'
import { Button, Container, FormGroup, FormControlLabel, Switch } from '@material-ui/core'

const Test = () => {
	return (
		<Container maxWidth="xl">
			<FormGroup row>
				<FormControlLabel control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />} label="Secondary" />
				<FormControlLabel control={<Switch checked={state.checkedB} onChange={handleChange} name="checkedB" color="primary" />} label="Primary" />
			</FormGroup>
			<Button variant="contained" color="secondary"></Button>
		</Container>
	)
}

export default Test
