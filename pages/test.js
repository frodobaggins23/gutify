import React, { useState } from 'react'
import { Button, Container, FormGroup, FormControlLabel, Switch, Slider, Snackbar, Typography } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'
import s from '../styles/Home.module.css'
import m from '../styles/Main.module.css'

const Test = () => {
	const [state, setState] = useState({ nuceni: false, stav: 2, bricho: false, stres: 1 })
	const [notification, openNotification] = useState(false)
	const handleChange = e =>
		setState(prevState => {
			return { ...prevState, [`${e.currentTarget.name}`]: !prevState[`${e.currentTarget.name}`] }
		})
	const handleSlider = (name, value) => setState({ ...state, [`${name}`]: value })
	const handleSubmit = async () => {
		const response = await fetch('/api/get-sheet', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(state),
		})
		const { status } = await response.json()
		if (status === 'saved') {
			openNotification(true)
		}
	}
	const handleNotificationClose = () => openNotification(false)
	return (
		<Container maxWidth="lg" classes={{ root: s.container }}>
			<FormGroup row classes={{ root: m.formLabels }}>
				<FormControlLabel control={<Switch checked={state.checkedA} onChange={handleChange} name="nuceni" />} label="Nuceni" />
				<FormControlLabel control={<Switch checked={state.checkedB} onChange={handleChange} name="bricho" />} label="Bricho" />
				<Typography id="discrete-slider-small-steps" gutterBottom>
					Stav
				</Typography>
				<Slider
					value={state.stav}
					onChange={(e, value) => {
						handleSlider('stav', value)
					}}
					min={1}
					max={5}
					step={1}
					valueLabelDisplay="on"
					name="stav"
				/>
				<Typography id="discrete-slider-small-steps" gutterBottom>
					Stres
				</Typography>
				<Slider
					value={state.stres}
					onChange={(e, value) => {
						handleSlider('stres', value)
					}}
					min={1}
					max={5}
					step={1}
					valueLabelDisplay="on"
					name="stav"
				/>
			</FormGroup>
			<Button variant="contained" color="secondary" onClick={handleSubmit}>
				Uloz
			</Button>
			<Snackbar open={notification} autoHideDuration={6000} onClose={handleNotificationClose}>
				<MuiAlert elevation={6} variant="filled" severity="success">
					Saved!
				</MuiAlert>
			</Snackbar>
		</Container>
	)
}

export default Test
