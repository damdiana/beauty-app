import { db } from "@vercel/postgres";

type User = {
  email: string;
  id: number;
  password: string;
};

async function selectUser(email: string): Promise<User | undefined> {
  const client = await db.connect();
  let response = await client.sql`SELECT * FROM Users WHERE email = ${email}`;

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
  const client = await db.connect();
  await client.sql`
          INSERT INTO Users (
            email,
            password
          )
          VALUES (${email}, ${password});
        `;
}

async function userAlreadyExists(email: string): Promise<boolean> {
  const client = await db.connect();
  let response = await client.sql`SELECT * FROM Users WHERE email = ${email}`;
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
