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

const Nicolas: UserAdmin = {
  name: "Nicolas",
  age: 18,
  occupation: "Developer",
  isAdmin: true,
  favoriteBeverage: "Coca Cola",
};

const Pedro: User = {
  name: "Pedro",
  age: 18,
  occupation: "Developer",
};

// Partial
type PartialUser = Partial<User>;

const partialNicolas: PartialUser = {};

//Omit
type NoOccupationUser = Omit<User, "occupation">;

const noOccupationNicolas: NoOccupationUser = {
  name: "Nicolas",
  age: 18,
  favoriteBeverage: "Coca Cola",
};
