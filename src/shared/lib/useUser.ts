import { useTypedSelector } from "./useTypedSelector"

export const useUser = () => {
	return useTypedSelector((state) => state.user)
}
