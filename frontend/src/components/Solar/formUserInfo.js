import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

import { i18n } from "../../translate/i18n";
import { Formik, Form, Field } from "formik";

import {
	DialogContent,
	Button,
	DialogActions,
	TextField,
	Grid,
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
	},

	multFieldLine: {
		display: "flex",
		"& > *:not(:last-child)": {
			marginRight: theme.spacing(1),
		},
	},

	btnWrapper: {
		position: "relative",
	},

	buttonProgress: {
		color: green[500],
		position: "absolute",
		top: "50%",
		left: "50%",
		marginTop: -12,
		marginLeft: -12,
	},
}));

const FormUserInformation = ({ }) => {
	const classes = useStyles();

	return (
		<>
			<Formik
				// initialValues={whatsApp}
				enableReinitialize={true}
			// validationSchema={SessionSchema}
			// onSubmit={(values, actions) => {
			// 	setTimeout(() => {
			// 		handleSaveWhatsApp(values);
			// 		actions.setSubmitting(false);
			// 	}, 400);
			// }}
			>
				<Form>
					<DialogContent dividers>
						<div
							className={classes.multFieldLine}
						>
							<Grid container rowSpacing={1} spacing={2}>
								<Grid item xs={6}>
									<Field
										as={TextField}
										label={i18n.t("solar.userinfo.form.firstname")}
										autoFocus
										name="firstname"
										// error={touched.name && Boolean(errors.name)}
										// helperText={touched.name && errors.name}
										variant="outlined"
										fullWidth
										margin="dense"
										className={classes.textField}
									/>
								</Grid>
								<Grid item xs={6}>
									<Field
										as={TextField}
										label={i18n.t("solar.userinfo.form.lastname")}
										name="lastname"
										// error={touched.name && Boolean(errors.name)}
										// helperText={touched.name && errors.name}
										variant="outlined"
										fullWidth
										margin="dense"
										className={classes.textField}
									/>
								</Grid>
							</Grid>
						</div>
						<div
							className={classes.multFieldLine}
						>
							<Grid container rowSpacing={1} spacing={2}>
								<Grid item xs={6}>
									<Field
										as={TextField}
										label={i18n.t("solar.userinfo.form.nationalid")}
										name="nationalid"
										// error={touched.name && Boolean(errors.name)}
										// helperText={touched.name && errors.name}
										variant="outlined"
										fullWidth
										margin="dense"
										className={classes.textField}
									/>
								</Grid>
								<Grid item xs={6}>
									<Field
										as={TextField}
										label={i18n.t("solar.userinfo.form.email")}
										autoFocus
										name="email"
										// error={touched.name && Boolean(errors.name)}
										// helperText={touched.name && errors.name}
										variant="outlined"
										fullWidth
										margin="dense"
										className={classes.textField}
									/>
								</Grid>
							</Grid>
						</div>
						<div
							className={classes.multFieldLine}
						>
							<Grid container rowSpacing={1} spacing={2}>

								<Grid item xs={6}>
									<Field
										as={TextField}
										label={i18n.t("solar.userinfo.form.phone")}
										name="phone"
										// error={touched.name && Boolean(errors.name)}
										// helperText={touched.name && errors.name}
										variant="outlined"
										fullWidth
										margin="dense"
										className={classes.textField}
									/>
								</Grid>
								<Grid item xs={6}>
									<Field
										as={TextField}
										label={i18n.t("solar.userinfo.form.phoneopt")}
										autoFocus
										name="phoneopt"
										// error={touched.name && Boolean(errors.name)}
										// helperText={touched.name && errors.name}
										variant="outlined"
										fullWidth
										margin="dense"
										className={classes.textField}
									/>
								</Grid>
							</Grid>
						</div>
						<div
							className={classes.multFieldLine}
						>
							<Grid container rowSpacing={1} spacing={2}>
								<Grid item xs={6}>
									<Field
										as={TextField}
										label={i18n.t("solar.userinfo.form.country")}
										autoFocus
										name="county"
										// error={touched.name && Boolean(errors.name)}
										// helperText={touched.name && errors.name}
										variant="outlined"
										fullWidth
										margin="dense"
										className={classes.textField}
									/>
								</Grid>
								<Grid item xs={6}>
									<Field
										as={TextField}
										label={i18n.t("solar.userinfo.form.city")}
										name="city"
										// error={touched.name && Boolean(errors.name)}
										// helperText={touched.name && errors.name}
										variant="outlined"
										fullWidth
										margin="dense"
										className={classes.textField}
									/>
								</Grid>

							</Grid>
						</div>
						<div
							className={classes.multFieldLine}
						>
							<Grid container	>
								<Field
									as={TextField}
									label={i18n.t("solar.userinfo.form.street")}
									name="street"
									// error={touched.name && Boolean(errors.name)}
									// helperText={touched.name && errors.name}
									variant="outlined"
									fullWidth
									margin="dense"
									className={classes.textField}
								/>
							</Grid>
						</div>
						<div
							className={classes.multFieldLine}
						>
							<Grid container rowSpacing={1} spacing={2}>
								<Grid item xs={4}>
									<Field
										as={TextField}
										label={i18n.t("solar.userinfo.form.lat")}
										autoFocus
										name="lat"
										// error={touched.name && Boolean(errors.name)}
										// helperText={touched.name && errors.name}
										variant="outlined"
										fullWidth
										margin="dense"
										className={classes.textField}
									/>
								</Grid>
								<Grid item xs={4}>
									<Field
										as={TextField}
										label={i18n.t("solar.userinfo.form.lgn")}
										name="lgn"
										// error={touched.name && Boolean(errors.name)}
										// helperText={touched.name && errors.name}
										variant="outlined"
										fullWidth
										margin="dense"
										className={classes.textField}
									/>
								</Grid>
								<Grid item md={4}>
									<Field
										as={TextField}
										label={i18n.t("solar.userinfo.form.clienttype")}
										name="clientype"
										// error={touched.name && Boolean(errors.name)}
										// helperText={touched.name && errors.name}
										variant="outlined"
										fullWidth
										margin="dense"
										className={classes.textField}
									/>
								</Grid>
							</Grid>
						</div>
					</DialogContent>
					<DialogActions>
						<Button
							// onClick={handleClose}
							color="secondary"
							// disabled={isSubmitting}
							variant="outlined"
						>
							{i18n.t("solar.buttons.cancel")}
						</Button>
						<Button
							type="submit"
							color="primary"
							// disabled={isSubmitting}
							variant="contained"
							className={classes.btnWrapper}
						>
							{i18n.t("solar.buttons.submit")}
						</Button>
					</DialogActions>
				</Form>
			</Formik>
		</>
	);
};

export default FormUserInformation;
