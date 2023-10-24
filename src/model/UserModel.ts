import { getPostgresClient } from "@/services/server/database";
import { User } from "@/services/types";

async function selectUser(email: string): Promise<User | undefined> {
  const client = await getPostgresClient();
  let response = await client.query(`SELECT * FROM Users WHERE email = $1`, [
    email,
  ]);

  if (response.rowCount === 0) {
    return undefined;
  } else {
    return response.rows[0] as User;
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

export { selectUser, insertUser, userAlreadyExists, sanitizeUser };
