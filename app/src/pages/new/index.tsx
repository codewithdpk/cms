import Page from "@/components/Page";
import useSaveBlog from "@/hooks/saveBlog";
import { Editor } from "novel";
import { useState } from "react";

export default function NewPost() {
  const [content, setContent] = useState(null);

  const { mutate, data } = useSaveBlog();

  function onEditUpdateHandle(updatedContent: any) {
    setContent(updatedContent);
  }

  function saveContent() {
    mutate({
      title: "My new Blog",
      subtitle: "My new Blog",
      userId: "0xdeepak",
      content: content || "",
    });
  }

  console.log(data);

  return (
    <Page title="Home">
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-row justify-between">
          <h3 className="text-2xl font-bold">All Blogs</h3>

          <button
            type="button"
            className="px-3 py-2.5 text-sm font-medium text-white inline-flex items-center bg-indigo-700 hover:bg-indigo-800 focus:outline-none rounded-lg text-center dark:bg-indigo-600 dark:hover:bg-indigo-700"
            onClick={saveContent}
          >
            Publish New
            <svg
              className="w-5 h-5 text-white ml-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2v-6Z"
              />
            </svg>
          </button>
        </div>

        {/* <BlogsTable /> */}
        <Editor
          defaultValue=""
          onUpdate={(s) => onEditUpdateHandle(s?.getHTML())}
        />
      </div>
    </Page>
  );
}
