import BlogsTable from "@/components/BlogsTable";
import Button from "@/components/Button";
import Page from "@/components/Page";
import NextLink from "next/link";

export default function Home() {
  return (
    <Page title="Home">
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-row justify-between">
          <h3 className="text-2xl font-bold">All Blogs</h3>

          <NextLink href="/new">
            <Button
              variant="primary"
              rightIcon={
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
              }
            >
              Publish New
            </Button>
          </NextLink>
        </div>

        <BlogsTable />
      </div>
    </Page>
  );
}
