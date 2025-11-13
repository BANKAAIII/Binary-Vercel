import { createSwaggerSpec } from "next-swagger-doc";
import { OpenAPIRegistry, OpenApiGeneratorV3 } from "@asteasolutions/zod-to-openapi";
import { zodSignupSchema} from "../lib/zodSchemas/zodSignupSchema";

export const getApiDocs = async () => {
  const registry = new OpenAPIRegistry();
  registry.register("User", zodSignupSchema);

  const generator = new OpenApiGeneratorV3(registry.definitions);
  const doc = generator.generateDocument({
    openapi: "3.0.0",
    info: { title: "BinarySea API", version: "1.0.0" },
  });

  return doc;
};
