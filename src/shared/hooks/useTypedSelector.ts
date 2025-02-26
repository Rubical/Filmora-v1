import { TypedUseSelectorHook, useSelector } from "react-redux"
import type { RootState } from "@/shared/store/store"

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
