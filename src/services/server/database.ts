import pg from "pg";

let connectedClient: pg.Client | undefined = undefined;

async function getPostgresClient(): Promise<pg.Client> {
  if (connectedClient !== undefined) {
    return Promise.resolve(connectedClient);
  }

  const client = new pg.Client({
    connectionString: process.env.POSTGRES_URL,
  });

  await client.connect();
  connectedClient = client;

  return connectedClient;
}

export { getPostgresClient };
