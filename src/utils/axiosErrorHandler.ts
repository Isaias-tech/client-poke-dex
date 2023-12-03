export const axiosErrorHandler = (error: any) => {
	if (error.response) {
		console.log("Data :", error.response.data);
		console.log("Status :" + error.response.status);
	} else if (error.request) {
		console.log(error.request);
	} else {
		console.log("Error", error.message);
	}
};
