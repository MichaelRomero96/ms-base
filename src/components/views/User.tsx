import { useLayoutEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

// types
type User = {
	name: string;
	age: number;
	occupation: string;
	favoriteBeverage?: string;
};

//interfaces
interface UserAdmin extends User {
	isAdmin: boolean;
}

const nicolas: UserAdmin = {
	name: "Nicolas",
	age: 18,
	occupation: "Developer",
	isAdmin: true,
	favoriteBeverage: "Coca Cola",
};


const User = () => {
	const [isLoaded, setIsLoaded] = useState(false)
	const [user, setUser] = useLocalStorage<UserAdmin>({ initial: nicolas, key: "user" });

	useLayoutEffect(() => {
		setIsLoaded(true)
	}, [])

	if (!isLoaded) return null

	return (
		<form>
			<input
				type="text"
				value={user.name}
				onChange={(e) => setUser({ ...user, name: e.target.value })}
			/>
			<input
				type="number"
				value={user.age}
				onChange={(e) => setUser({ ...user, age: Number(e.target.value) })}
			/>
			<input
				type="text"
				value={user.occupation}
				onChange={(e) => setUser({ ...user, occupation: e.target.value })}
			/>
			<input
				type="text"
				value={user.favoriteBeverage || ""}
				onChange={(e) => setUser({ ...user, favoriteBeverage: e.target.value })}
			/>
			<input
				type="checkbox"
				checked={user.isAdmin}
				onChange={(e) => setUser({ ...user, isAdmin: e.target.checked })}
			/>
			<button type="submit">Submit</button>
		</form>
	)
}

export default User