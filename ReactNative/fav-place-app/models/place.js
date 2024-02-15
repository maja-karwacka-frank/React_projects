export class Place {
	constructor(title, imageUri, location, id) {
		this.title = title;
		this.imageUri = imageUri;
		this.address = location.address || 'No address available';
		this.location = { lat: location.lat, lng: location.lng };
		this.id = id;
	}
}
