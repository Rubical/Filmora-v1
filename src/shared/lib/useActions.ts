import { userSlice } from "@/libs/user.slice"
import { useDispatch } from "react-redux"
import { useMemo } from "react"
import { bindActionCreators } from "@reduxjs/toolkit"

const rootActions = {
	...userSlice.actions
}

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
