import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema:
    "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clxk1jypa021007w4qaitldj7/master",
  documents: ["./hygraph/**/*.ts"],
  generates: {
    "./codegen/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
};

export default config;
