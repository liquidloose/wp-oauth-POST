document.addEventListener('submit', function (event) {

	var myHeaders = new Headers();
	myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjE2NzAyMTY3NDcifQ.eyJpZCI6Im1kbnhza2pkcmMyaW52dm52d3Rjbmg5aHEwaDc0c3U0amV2bjBzZXMiLCJqdGkiOiJtZG54c2tqZHJjMmludnZudnd0Y25oOWhxMGg3NHN1NGpldm4wc2VzIiwiaXNzIjoiaHR0cHM6XC9cLzE5Mi4xNjguMS4xMzo4MDgwIiwiYXVkIjoiTEdLVk5ZQUJiWW0yckljbk42MENwRlBWVFRtVmpYMDZyakpJTVM1VSIsInN1YiI6IjEiLCJleHAiOjE2NzA4MzA5MjYsImlhdCI6MTY3MDgyNzMyNiwidG9rZW5fdHlwZSI6ImJlYXJlciIsInNjb3BlIjoiYmFzaWMifQ.qsJQdH3W5eOpD_CBHcNtqRTn7QRr3R_yONkZ9Kscuy8URD89khcveu_PqN-YDQN5p-UhyNsjCXjn-nwmRDJ3za3iZPtTLaRr4lEy81atEqDOfu2e8e-HpPYNfiJfr-VPYbeFifkDLRgMvsrFhFkXbec8JG48jib6De-GEoQ-UqN-JjyI9h_qgfkqYxfG4JoDro5JwDRZrwv4lsiVA7mnYing8qJ90Y5Dgs8P-iLviX9sbnghAI_waHy_2EBge4RsVJDqmjoCXTktwzxLdhNchPTzhv5LE3Rp-B7KbO-rs9rDdh_SVLPACPCvbpkZfxzKalKAkK1xNcQd1rgWqXrcsw");
	myHeaders.append("Content-Type", "application/json");	

	var requestOptions = {
	method: 'POST',
	headers: myHeaders,
	body: new FormData(event.target),
	redirect: 'follow'
	};

	event.preventDefault();

	fetch('http://192.168.1.13:8080/wp-json/ibl/v1/receive-callback', requestOptions)
		.then(function (response) {
		if (response.ok) {
			return response.json();
		}
		return Promise.reject(response);
	}).then(function (data) {
		console.log(data);
	}).catch(function (error) {
		console.warn(error);
	});
});














