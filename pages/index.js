import { NextSeo, } from "next-seo";
import DefaultLayout from "../components/DefaultLayout";
import {Heading1,} from "../components/layout/Typography";

export default function Home() {
  return (
      <>
          <NextSeo
              title="Home"
              description="A short description goes here."
          />
          <Heading1>BachMacintosh</Heading1>
      </>
  );
}

Home.getLayout = function getLayout(page) {
    return(
        <DefaultLayout>
            {page}
        </DefaultLayout>
    );
};
