import { useTypedSelector } from "@/shared/lib/useTypedSelector"
import { RootState } from "@/shared/lib/store"

export const useType = () => {
	return useTypedSelector((state: RootState) => state.type)
}
