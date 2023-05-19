const app = document.querySelector('#app')

fetch('http://localhost:8000')
	.then((response) => {
		return response.json()
	})
	.then((data) => {
		// handle the response
		console.log('success', data)
		app.innerHTML = `
            <div class="hike">${data[0].title}</div>
            <div class="hike">${data[1].title}</div>
        `
	})
	.catch(() => {
		// handle the error
		console.log('fail')
	})
