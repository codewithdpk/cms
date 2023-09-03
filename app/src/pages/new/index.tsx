import Button from "@/components/Button";
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

  return (
    <Page title="Home">
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-row justify-between">
          <h3 className="text-2xl font-bold">All Blogs</h3>

          <Button
            variant="primary"
            leftIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="none" fill-rule="evenodd">
                  <path d="M24 0v24H0V0h24ZM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                  <path
                    fill="currentColor"
                    d="M15.586 3A2 2 0 0 1 17 3.586L19.414 6A2 2 0 0 1 20 7.414V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10.586ZM8 5H5v14h2v-5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5h2V7.414L15.586 5H15v2.5A1.5 1.5 0 0 1 13.5 9h-4A1.5 1.5 0 0 1 8 7.5V5Zm6 9H9v5h5v-5Zm-1-9h-3v2h3V5Z"
                  />
                </g>
              </svg>
            }
            // onClick={saveContent}
          >
            Save
          </Button>
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
