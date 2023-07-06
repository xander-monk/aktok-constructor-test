import { defineConfig } from "tinacms";
import type { TinaTemplate } from 'tinacms'
// Your hosting provider likely exposes this as an environment variable
const branch = "main"; // process?.env.HEAD || process?.env.VERCEL_GIT_COMMIT_REF || 

const heroBlock: TinaTemplate = {
  name: 'hero',
  label: 'Hero',
  ui: {
    defaultItem: {
      tagline: "Here's some text above the other text",
      headline: 'This Big Text is Totally Awesome',
      text: 'Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.',
    },
  },
  fields: [
    {
      type: 'string',
      label: 'Tagline',
      name: 'tagline',
    },
    {
      type: 'string',
      label: 'Headline',
      name: 'headline',
    },
    {
      type: 'string',
      label: 'Text',
      name: 'text',
      ui: {
        component: 'textarea',
      },
    },
  ],
}

export default defineConfig({
  branch,
  clientId: "904ed158-4108-4ec1-8483-4a1fd785d41b", // Get this from tina.io
  token: "3a1096d978ab4fd18ac874cab87bf8e1a1033c6f", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "pages",
        label: "Pages",
        path: "content/pages",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            isBody: false,
          },
          {
            type: 'object',
            list: true,
            name: 'blocks',
            label: 'Sections',
            ui: {
              visualSelector: true,
           },
            templates: [heroBlock],
          },
        ],
      },
    ],
  },
});
