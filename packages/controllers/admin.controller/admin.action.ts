import axios from "axios";
import { Request, Response } from "express"; // Assuming you're using Express

import { image_default } from "../../../constants/image.constants";
import conductorModel from "../models/conductorModel";
import locationModel from "../models/locationModel";

interface ConductorData {
	id: string;
	// Add other properties from req.body
}

// Adding conductor to the list
export const addConductor = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const dataObj: ConductorData = req.body;
		console.log("This is data ", dataObj);

		const response = await axios.post(
			`https://api.tomtom.com/locationHistory/1/objects/object?key=${process.env.apiKey}&adminKey=${process.env.adminKey}`,
			{ ...dataObj },
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		const data = response.data;

		if (data) {
			const conductor = await conductorModel.create(data);
			const locationData = await locationModel.create({ id: data.id });

			if (conductor) {
				res.json({
					message: "Conductor Added Successfully",
					data: conductor,
					location: locationData,
					success: true,
				});
			} else {
				res.json({
					message: "Not able to create conductor in conductorModel",
					success: false,
				});
			}
		} else {
			res.json({
				message: "Not able to create conductor in TomTom API",
				success: false,
			});
		}
	} catch (error: any) {
		res.json({
			message: error.message,
			success: false,
		});
	}
};

// Get a conductor data
export const getConductor = async (
	req: Request,
	res: Response
): Promise<void> => {
	const id = req.params.id;
	try {
		const conductor = await conductorModel.find({ id: id });

		if (conductor) {
			res.json({
				message: "Conductor retrieved successfully",
				data: conductor,
				success: true,
			});
		} else {
			res.json({
				message: "Conductor details not found",
				success: false,
			});
		}
	} catch (error) {
		res.json({
			message: error.message,
			success: false,
		});
	}
};

// Delete a conductor
export const deleteConductor = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const id = req.params.id;

		const response = await axios.delete(
			`https://${process.env.baseUrl}/locationHistory/1/objects/${id}?key=${process.env.apiKey}&adminKey=${process.env.adminKey}`
		);
		const data = response.data;

		if (data) {
			const deletedConductor = await conductorModel.findOneAndDelete({
				id: id,
			});

			const deletedLocation = await locationModel.findOneAndDelete({
				id: id,
			});

			if (deletedConductor) {
				res.json({
					message: "Conductor deleted successfully",
					data: deletedConductor,
					lastLocation: deletedLocation,
					success: true,
				});
			} else {
				res.json({
					message: "Conductor not found",
					success: false,
				});
			}
		}
	} catch (error) {
		res.json({
			message: error.message,
			success: false,
		});
	}
};

// Update conductor data
export const updateConductor = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const updatedData: ConductorData = req.body;
		const id = req.params.id;
		const requestOptions = {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			data: JSON.stringify(updatedData),
		};
		const response = await axios.put(
			`https://${process.env.baseUrl}/locationHistory/1/objects/${id}?key=${process.env.apiKey}&adminKey=${process.env.adminKey}`,
			requestOptions.data,
			{ headers: requestOptions.headers }
		);
		const data = response.data;

		if (data) {
			const updatedDataInMongoDb = await conductorModel.findOneAndUpdate(
				{ id: id },
				{ ...updatedData },
				{ new: true }
			);

			res.json({
				message: "Data updated successfully",
				data: updatedDataInMongoDb,
				success: true,
			});
		} else {
			res.json({
				message: "ID not found in MongoDB",
				success: false,
			});
		}
	} catch (error) {
		res.json({
			message: error.message,
			success: false,
		});
	}
};

// Get all conductors
export const getAllConductor = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const allConductors = await conductorModel.find();

		if (allConductors) {
			res.json({
				message: "All conductors data retrieved successfully",
				data: allConductors,
				success: true,
			});
		} else {
			res.json({
				message: "Conductors not found",
				success: false,
			});
		}
	} catch (error) {
		res.json({
			message: error.message,
			success: false,
		});
	}
};
