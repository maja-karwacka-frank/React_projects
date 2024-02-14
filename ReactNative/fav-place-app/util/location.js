const GOOGLE_API_KEY = '';

export const getMapPreview = (lat, lng) => {
	const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:green%7Clabel:G%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;

	return imagePreviewUrl;
};


