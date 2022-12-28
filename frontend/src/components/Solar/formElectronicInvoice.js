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
import { Select } from "formik-material-ui";


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


const FormElectronicInvoice = ({ }) => {
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
										as={Select}
										label={i18n.t("solar.electinvoice.form.user")}
                                        placeholder={i18n.t("solar.electinvoice.form.user")}
                                        labelId="whatsapp-selection-label"
                                        id="whatsappId"
                                        name="whatsappId"
                                        // error={touched.whatsappId && Boolean(errors.whatsappId)}
                                        // disabled={!campaignEditable}
									/>
								</Grid>
								<Grid item xs={6}>
									<Field
										as={Select}
										label={i18n.t("solar.electinvoice.form.ratetype")}
										name="ratetype"
										// error={touched.name && Boolean(errors.name)}
										// helperText={touched.name && errors.name}
										variant="outlined"
										fullWidth
										margin="dense"
									/>
								</Grid>
							</Grid>
						</div>
						<div
						className={classes.multFieldLine}
						>
							<Grid container rowSpacing={1} spacing={2}>
							<Grid item xs={7}>
									<Field
										as={Select}
										label={i18n.t("solar.electinvoice.form.distributor")}
										name="distributor"
										// error={touched.name && Boolean(errors.name)}
										// helperText={touched.name && errors.name}
										variant="outlined"
										fullWidth
										margin="dense"
									/>
								</Grid>
								<Grid item xs={5}>
									<Field
										as={TextField}
										label={i18n.t("solar.electinvoice.form.date")}
										name="date"
										// error={touched.name && Boolean(errors.name)}
										// helperText={touched.name && errors.name}
										variant="outlined"
										fullWidth
										margin="dense"
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

export default FormElectronicInvoice;
