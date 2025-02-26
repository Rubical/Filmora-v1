import { userSlice } from "@/libs/user.slice"
import { useDispatch } from "react-redux"
<<<<<<<< HEAD:src/shared/hooks/useActions.ts
import { authSlice } from "@/shared/store/auth.slice"
========
import { useMemo } from "react"
import { bindActionCreators } from "@reduxjs/toolkit"
>>>>>>>> cef56e5721c22fc645066c9ca09d049775649834:src/shared/lib/useActions.ts

const rootActions = {
	...userSlice.actions
}

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
