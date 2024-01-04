// ExamplePageWithLayout.js

import WebStories from "@/components/webStories/WebStories";
import RootLayout from "../layout";

export default function ExamplePageWithLayout() {
  return (
    <RootLayout includeLayout={false}>
      <WebStories />
    </RootLayout>
  );
}
