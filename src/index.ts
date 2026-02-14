import { createApp } from "./app";
import { env } from "./config/env";

const app = createApp();

app.listen(env.port, () => {
  process.stdout.write(`Backend listening on http://localhost:${env.port}\n`);
});

