const cmd = require('node-cmd')

cmd.get('docker ps -aq', (err, data, stderr) => {
		let ids = data.split('\n')
		ids.forEach(id => {
			if (id) {
				cmd.get(`docker stop ${id}`, (err, data, stderr) => {
					if (!err && !stderr) console.log(`${id} is stopped`)
					else console.log(`${id} is not stopped`)
				})
			}
		})
	}
)