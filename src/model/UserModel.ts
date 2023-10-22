import { getPostgresClient } from "@/services/server/database";

type User = {
  email: string;
  id: number;
  password: string;
};

async function selectUser(email: string): Promise<User | undefined> {
  const client = await getPostgresClient();
  let response = await client.query(`SELECT * FROM Users WHERE email = $1`, [
    email,
  ]);

  if (response.rowCount === 0) {
    return undefined;
  } else {
    return response.rows[0] as {
      id: number;
      email: string;
      password: string;
    };
  }
}

async function insertUser(email: string, password: string) {
  const client = await getPostgresClient();
  await client.query(
    `
    INSERT INTO Users (
      email,
      password
    )
    VALUES ($1, $2)`,
    [email, password]
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
