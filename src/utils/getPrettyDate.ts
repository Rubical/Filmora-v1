export default function getFullDate(date: Date) {
	const day = date.getDate()
	const month = date.toLocaleString("en", { month: "short" })
	const year = date.getFullYear()
	return `${day} ${month} ${year}`
}
