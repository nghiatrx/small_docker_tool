const cmd = require('node-cmd')

cmd.get('docker images -aq', (err, data, stderr) => {
		let ids = data.split('\n')
		ids.forEach(id => {
			if (id) {
				cmd.get(`docker rmi ${id}`, (err, data, stderr) => {
					console.log(`${id} is removed`)
				})
			}
		})
	}
)