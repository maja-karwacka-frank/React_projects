class Place {
	constructor(title, imageUri, address, location) {
		this.title = title;
		this.imageUri = imageUri;
		this.address = address;
		this.location = location; // {lat: 0.155, lng: 1.555}
		this.id = new Date().toString() + Math.random().toString();
	}
}
