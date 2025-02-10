import crypto from "crypto";

export default ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", crypto.randomBytes(16).toString("base64")),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", crypto.randomBytes(16).toString("base64")),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT", crypto.randomBytes(16).toString("base64")),
    },
  },
});
