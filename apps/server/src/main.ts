import express, { Application, NextFunction, Request, Response } from "express";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./router";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();
app.use(cors());

app.use(
	"/trpc",
	trpcExpress.createExpressMiddleware({
		router: appRouter,
	})
);

const PORT: number = Number(process.env.PORT) || 5000;
app.listen(PORT, () => {
	console.log(`🚀 Server running on Port: ${PORT}`);
});
