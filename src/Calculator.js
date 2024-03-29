import React from 'react';

import {Grid, Typography, TextField, FormControlLabel, Checkbox, Divider} from '@material-ui/core';
import Result from "./Result.js";

class Calculator extends React.Component
{
	constructor (props) 
	{
		super(props);

		this.state = {
			visitors: 10000,
			participants: 10,
			personnel: 50,
			female: 50,
			duration: 8,
			alcohol: true
		};

	
		this.handlePeopleChange = this.handlePeopleChange.bind(this);
		this.handleFemaleChange = this.handleFemaleChange.bind(this);
		this.handleDurationChange = this.handleDurationChange.bind(this);
		this.handleAlcoholChange = this.handleAlcoholChange.bind(this);
	}

	
	handlePeopleChange (event) 
	{
		if (!isNaN(parseInt(event.target.value))) 
		{
			this.setState({[event.target.name]: parseInt(event.target.value)});
		}
	}

	handleFemaleChange (event)
	{
		const value = parseInt(event.target.value)

		if (!isNaN(value) && value >= 0 && value <= 100)
		{
			this.setState({female: event.target.value});
		}
	}

	handleDurationChange (event)
	{
		if (!isNaN(parseInt(event.target.value))) 
		{
			this.setState({"duration": parseInt(event.target.value)});
		}
	}

	handleAlcoholChange (event) 
	{
		this.setState({"alcohol": event.target.checked});
	}

	render () 
	{
		const t = this.state.visitors + this.state.participants + this.state.personnel
		const male = t * (100 - this.state.female) * 0.01;
		const female = t * this.state.female * 0.01;

		const aus_duration_modifier = this.state.duration >= 8 ? 1 : 
																	this.state.duration >= 6 ? 0.8 :
																	this.state.duration >= 4 ? 0.75 :
																	0.7;
		const aus_alcohol_modifer = this.state.alcohol ? 1 : 0.5;
		const aus_modifier = aus_duration_modifier * aus_alcohol_modifer;

		let uk_modifier = {};
		if (this.state.duration >= 6 && this.state.alcohol) 
		{
			uk_modifier.wc_male = 400;
			uk_modifier.urinoir_male = 100;
			uk_modifier.wc_female = 75;
		}
		else if (this.state.duration >= 6)
		{
			uk_modifier.wc_male = 425;
			uk_modifier.urinoir_male = 125;
			uk_modifier.wc_female = 85;		
		}
		else 
		{
			uk_modifier.wc_male = 500;
			uk_modifier.urinoir_male = 150;
			uk_modifier.wc_female = 100;
		}

		let australia = {
			name: "Australisch model",
			men_wc: Math.ceil((male / 500) * aus_modifier),
			men_urinoir: Math.ceil(((male / 500) * 3) * aus_modifier),
			men_plasgoot: Math.ceil(((male / 500) * 1.5) * aus_modifier),
			women_wc: Math.ceil((female / 100) * aus_modifier),
			men_wasbak: Math.ceil((male / 500) * aus_modifier),
			women_wasbak: Math.ceil((female / 500) * aus_modifier)
		};

		const uk = {
			name: "UK model",
			men_wc: Math.ceil(male / uk_modifier.wc_male),
			men_urinoir: Math.ceil(male / uk_modifier.urinoir_male),
			men_plasgoot: Math.ceil((male / uk_modifier.urinoir_male) / 2),
			women_wc: Math.ceil(female / uk_modifier.wc_female),
			men_wasbak: Math.ceil((male / uk_modifier.wc_male) / 10),
			women_wasbak: Math.ceil((female / uk_modifier.wc_female) / 10)
		};

		const uk_campsite = {
			name: "UK model kampeerterrein",
			men_wc: Math.ceil(male / 150),
			men_urinoir: Math.ceil(male / 250),
			men_plasgoot: Math.ceil(male / 500),
			women_wc: Math.ceil(female / 75),
			men_wasbak: Math.ceil(male / 1500),
			women_wasbak: Math.ceil(female / 750)
		};

		return (
			<React.Fragment>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Typography variant="h5">WC-Calculator </Typography>
						
					</Grid>
					<Grid item xs={12}>
						<TextField 
							id="visitors"
							name="visitors"
							label='Aantal bezoekers' 
							type="number"
							fullWidth
							value = {this.state.visitors} 
							onChange={this.handlePeopleChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField 
							id="participants"
							name="participants"
							label='Aantal deelnemers' 
							type="number"
							fullWidth
							value = {this.state.participants} 
							onChange={this.handlePeopleChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField 
							id="personnel"
							name="personnel"
							label='Aantal personeel' 
							type="number"
							fullWidth
							value = {this.state.personnel} 
							onChange={this.handlePeopleChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField 
							label = "Totaal mensen"
							fullWidth
							disabled
							value={t}/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							label = "% Vrouw / GN"
							type = "number"
							fullWidth
							value = {this.state.female}
							onChange = {this.handleFemaleChange}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							label = "% Man"
							type = "number"
							fullWidth
							disabled
							value = {100 - this.state.female}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField 
							id="duration"
							name="duration"
							label='Duur van evenement (in uren)' 
							type="number"
							fullWidth
							value = {this.state.duration} 
							onChange={this.handleDurationChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<FormControlLabel
		        	control={
			          <Checkbox
			            checked={this.state.alcohol}
			            onChange={this.handleAlcoholChange}
			            value="checkedB"
			            color="primary"
			          />
			        }
			        label="Redelijk veel drank"
		      	/>
	      	</Grid>
				</Grid>
	      <Divider variant="middle"/>	
	      <Grid container spacing={2}>
	      	<Grid item xs={12}>
	      		<Typography variant="h5">Uitkomst</Typography>

	      		
	      	</Grid>
	      	<Grid item xs={12}>
	      		<Result rows={[australia, uk, uk_campsite]} />
	      	</Grid>
	      </Grid>
	     </React.Fragment>
		)
	}
}

export default Calculator;