import { supabase } from "@/shared/libs/supabase/client"
import { Provider } from "@supabase/supabase-js"
import { PostgrestSingleResponse } from "@supabase/supabase-js"
<<<<<<<< HEAD:src/shared/supabase/supabase.ts
import { IFilmInfo } from "@/shared/types/supabaseFilmInfo.types"
import { useActions } from "@/shared/hooks/useActions"
import { LOCAL_STORAGE_AUTH_TOKEN, REDIRECT_URI } from "@/shared/constants/constants"
========
import { LOCAL_STORAGE_AUTH_TOKEN, REDIRECT_URI } from "@/constants/constants"
import { FilmInfo } from "@/types/types"
>>>>>>>> cef56e5721c22fc645066c9ca09d049775649834:src/shared/lib/supabase.ts

export async function getCurrentUser() {
	try {
		if (localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN)) {
			const {
				data: { user }
			} = await supabase.auth.getUser()

			let favFilmsList

			if (user) {
				const { data }: PostgrestSingleResponse<{ film: FilmInfo }[]> = await supabase
					.from("FavFilm")
					.select("film")
					.eq("userId", user.id)

				favFilmsList = data
				return { user, favFilmsList }
			} else return false
		}
	} catch (error) {
		console.log(error)
	}
}

export async function createUser({
	email,
	password,
	name
}: {
	email: string
	password: string
	name: string
}) {
	try {
		const { data, error } = await supabase.auth.signUp({
			email: email,
			password: password,
			options: {
				data: {
					name: name
				}
			}
		})
		if (error) console.log(error)

		if (data.session && data.user) {
			return {
				session: data.session,
				user: data.user
			}
		}
	} catch (error) {
		console.log(error)
	}
}

export async function signIn({ email, password }: { email: string; password: string }) {
	try {
		const { data, error } = await supabase.auth.signInWithPassword({
			email: email,
			password: password
		})
		if (error) {
			console.log(error)
		}

		if (data.session && data.user) {
			return {
				session: data.session,
				user: data.user
			}
		}
	} catch (error) {
		console.log(error)
	}
}

export async function signInWithOAuth(provider: Provider) {
	try {
		const { data } = await supabase.auth.signInWithOAuth({
			provider: provider,
			options: {
				redirectTo: REDIRECT_URI
			}
		})
		if (data) {
			return data
		}
	} catch (error) {
		console.log(error)
	}
}

export async function signOut() {
	try {
		const { error } = await supabase.auth.signOut()
		if (!error) {
			return true
		} else console.log(error)
	} catch (error) {
		console.log(error)
	}
}
