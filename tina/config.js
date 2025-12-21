import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: "bb6c507e-d07b-4c54-a7b0-6ee7891821c7", // الخاص بك
  token: "a8dbdad8f7a4d1cd188b8874d85295f3fb7bc59e", // التوكن الجديد
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "المقالات القانونية",
        path: "blog",
        fields: [
          { type: "string", name: "title", label: "عنوان المقال", isTitle: true, required: true },
          { type: "string", name: "description", label: "وصف مختصر", required: true },
          { type: "image", name: "image", label: "صورة المقال" },
          { type: "rich-text", name: "body", label: "نص المقال", isBody: true },
        ],
      },
    ],
  },
});
