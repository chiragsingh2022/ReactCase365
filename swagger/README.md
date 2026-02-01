# NSwag generation for this project 

This folder contains a sample `nswag.json` configuration to generate TypeScript API clients and DTOs from an OpenAPI/Swagger endpoint using NSwag.

## What I added

- `nswag.json` — example configuration that generates an Axios-based TypeScript client into `src/generated/apiClient.ts`.
- `src/generated/.gitkeep` — placeholder so generated files have a commitable folder.

## How to use 

1. Update the `"url"` field in `swagger/nswag.json` to point to your real OpenAPI/Swagger JSON endpoint (e.g. `https://api.example.com/swagger/v1/swagger.json`).

2. Generate the TypeScript client:
   - `npm run nswag:generate`

3. The generated file will be written to `src/generated/apiClient.ts` (and any DTOs/types will appear in that file based on the configuration).

---

I added a local dotnet tool manifest at `.config/dotnet-tools.json` (which pins `NSwag.ConsoleCore`) and added the `nswag:generate` npm script to `package.json`. Run `npm run nswag:generate` to restore and run the local tool and generate `src/generated/apiClient.ts`.
