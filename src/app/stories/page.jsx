"use client";

const Page = () => {
  return (
    <>
      <head>
        <meta charset="utf-8" />
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script
          async
          custom-element="amp-story"
          src="https://cdn.ampproject.org/v0/amp-story-1.0.js"
        ></script>
        <title>Hello, amp-story</title>
        <link
          rel="canonical"
          href="http://example.ampproject.org/my-story.html"
        />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />

        <noscript></noscript>
      </head>

      <body>
        <amp-story
          standalone
          title="Hello Story"
          publisher="The AMP Team"
          publisher-logo-src="https://example.com/logo/1x1.png"
          poster-portrait-src="https://example.com/my-story/poster/3x4.jpg"
        >
          <amp-story-page id="my-first-page">
            <amp-story-grid-layer template="fill">
              <amp-img
                src="https://doc-08-2o-docs.googleusercontent.com/docs/securesc/6hupu8ngbi9hkdrfjvogjveqd46m3c7u/r91o4vlkki1gmhi5lh14arerh30dnm4q/1700893350000/13231586506679862940/03548634406911639706/1-ubtojHgJRUWHBikxDIyRv2xSOL4HPmu?ax=AEqgLxl-VUvDLCsOdwyD7xHfT4nb6NT_BVE6ucVcxt8JKV4GunQuVUqCzS2bAJYfIFaRlYii-OlIs6hrWhqUiVbOR3F7W-8Y8rXvatqbIV8NUUJUgKNSgo76yIi7swvMshIeIYzieHB6uu74C9A02XV0DvIz3fmuhv0hThSpxSH_pfm-bWAF3LVsRPtVyPbGMH8xyVEhf2V9iOjDFeJVkTkgqWh90bSkR97vjNu2Cv8TRXNn89m7n2pbgeJFUSXF37yGJLXiQWU-RWcs3OyloEV-l3YrBNhGcflvbxx4dAy4H1Kfglzwz81GwQ3HPK3dxeRM5T8t5c6v6Gwki__htWBXBb_Z_aT784VZLz66W2-h0Pqz3rMLVR8vwjXgEmORpre5e9Fyk0cIumxCQ_iEcU9CME0D9RmKVX8HxUAO9dRIfLuTO1IbMyOPqpLilpWXdd9X4OcTqiQkAurqc_wjo4bEazpExmrOZcFXv4U944UpA9x32RS1v1oeLo-HYCWMRZrgHZBEV3epHiO35YafQpuK3-Sz5B2_ts2RmKUkvjaOuKPS-qbcj6kAcyOJ8ZZXkBcmt3DibDv8BvwbXLPgrweF1DBXBSkKBEMZc4JSCMrL4RenaFd6A4wawoZBKwuZZf3Lkneg3bQbjkcmmxb9Ky7Lrdc4Occ8BO7q3aqz8eU3ncQ6W4_vKLQoI6rRLsxLR67jM4VQIiYDrjdx0R-vOIy6Jq1OYlK2s4_sBCPU5SIfbTWPLdxhCAxH0RfZ1dkKanGXXTZghPX8ODkUkgUwnDu01j_vXO3Vwf3YXo_pHyKcMdPaPcsOgPlxX173hU7C8VrHWfPJtb1YSS_S4wuqcry8fKrFywkXpFuu_PyvBgetRJBgm6JLjfhlTRdiLglG3ldCVl0gdzfZa4KHvHc&uuid=ea3bc322-dc3c-4e38-9218-71fb9604857b&authuser=0"
                width="900"
                height="1600"
                alt=""
              ></amp-img>
            </amp-story-grid-layer>
            <amp-story-grid-layer template="vertical">
              <h1>Hello, amp-story!</h1>
            </amp-story-grid-layer>
          </amp-story-page>
          <amp-story-page id="my-second-page">
            <amp-story-grid-layer template="fill">
              <amp-img
                src="https://example.ampproject.org/helloworld/bg2.gif"
                width="900"
                height="1600"
                alt=""
              ></amp-img>
            </amp-story-grid-layer>
            <amp-story-grid-layer template="vertical">
              <h1>The End</h1>
            </amp-story-grid-layer>
          </amp-story-page>
        </amp-story>
      </body>
    </>
  );
};

export default Page;
