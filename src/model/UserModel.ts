import { getPostgresClient } from "@/services/server/database";
import { User, UserProfile } from "@/services/types";

type DB_User = Omit<User, "fullName"> & {
  full_name: string;
};

async function selectUserById(id: number): Promise<User | undefined> {
  const client = await getPostgresClient();
  let response = await client.query(`SELECT * FROM Users WHERE id = $1`, [id]);

  if (response.rowCount === 0) {
    return undefined;
  } else {
    const user = decodeUserFromDB(response.rows[0]);
    return user;
  }
}
async function selectUser(email: string): Promise<User | undefined> {
  const client = await getPostgresClient();
  let response = await client.query(`SELECT * FROM Users WHERE email = $1`, [
    email,
  ]);

  if (response.rowCount === 0) {
    return undefined;
  } else {
    const user = decodeUserFromDB(response.rows[0]);
    return user;
  }
}

async function insertUser(email: string, password: string, fullName: string) {
  const client = await getPostgresClient();
  await client.query(
    `
    INSERT INTO Users (
      email,
      password,
      full_name
    )
    VALUES ($1, $2, $3)`,
    [email, password, fullName]
  );
}

async function updateUser(id: number, profile: UserProfile) {
  const client = await getPostgresClient();

  const fieldsToUpdate = Object.entries(profile)
    .filter(([key, value]) => value !== undefined)
    .map(([key], index) => `${key} = $${index + 1}`);

  const valuesToUpdate = Object.entries(profile)
    .filter(([key, value]) => key !== "id" && value !== undefined)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return JSON.stringify(value);
      }
      return value;
    });

  await client.query(
    `UPDATE Users 
     SET ${fieldsToUpdate.join(",")}
     WHERE id = ${id}
  `,
    [...valuesToUpdate]
  );
}

async function updateUserFullName(full_name: string, id: number) {
  const client = await getPostgresClient();

  await client.query(
    `UPDATE Users
     SET full_name = $1
     WHERE id = $2
     RETURNING full_name
  `,
    [full_name, id]
  );
}

async function updateUserEmail(email: string, id: number) {
  const client = await getPostgresClient();

  await client.query(
    `UPDATE Users
     SET email = $1
     WHERE id = $2
     RETURNING email
  `,
    [email, id]
  );
}

async function userAlreadyExists(email: string): Promise<boolean> {
  const client = await getPostgresClient();
  let response = await client.query(`SELECT * FROM Users WHERE email = $1`, [
    email,
  ]);
  if (response.rowCount === 0) {
    return false;
  }
  return true;
}

function sanitizeUser(user: User) {
  let newUser = { ...user } as Partial<User>;
  delete newUser.password;
  return newUser;
}

function decodeUserFromDB(dbUser: DB_User): User {
  const copyDbUser: Omit<DB_User, "full_name"> & { full_name?: string } = {
    ...dbUser,
  };
  const fullName = dbUser.full_name;
  delete copyDbUser.full_name;

  return {
    ...copyDbUser,
    fullName,
  };
}

export {
  selectUser,
  insertUser,
  userAlreadyExists,
  sanitizeUser,
  selectUserById,
  updateUser,
  updateUserFullName,
  updateUserEmail,
};
