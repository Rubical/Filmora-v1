export const downloadFileUrl = async (urlToDownload: string): Promise<string> => {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await fetch(urlToDownload)

			if (!response.ok) {
				return reject(`Failed to download: ${response.statusText}`)
			}

			const blob = await response.blob()
			const url = window.URL.createObjectURL(blob)

			const link = document.createElement("a")
			link.href = url
			link.setAttribute("download", `poster_${new Date().getTime()}.jpg`)
			document.body.appendChild(link)
			link.click()

			// Cleanup
			document.body.removeChild(link)
			window.URL.revokeObjectURL(url)

			resolve("Download successful.")
		} catch (error: unknown) {
			reject(`Failed to download: ${error}`)
		}
	})
}
