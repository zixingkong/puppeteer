module.exports = {
    title: "Introduction to Puppeteer",
    tagline: "Puppeteer made it easy",
    url: "https://puppeteer.github.io",
    baseUrl: "/puppeteer/",
    onBrokenLinks: "ignore",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",

    organizationName: "puppeteer",
    projectName: "puppeteer",
    themeConfig: {
        hideableSidebar: true,
        navbar: {
            style:"primary",
            title: "Puppeteer",
            logo: {
                alt: "Realtime Apps Logo",
                src: "img/pptr.png",
            },
            hideOnScroll: true,
            items: [{
                to: "docs/puppeteer.puppeteer",
                // activeBasePath: "docs",
                label: "API",
                position: "left",
            },
            // {
              // to: "/contributing",
              // // activeBasePath: "docs",
              // label: "Contribute",
              // position: "left",
          // },
            {
              type: 'docsVersionDropdown',
            },



            {
                label: "Gitt",
                href: "https://github.com/puppeteer/puppeteer",
                position: "right",
            },
            {
              label: "Stack",
              href: "https://stackoverflow.com/questions/tagged/puppeteer",
              position: "right"
            },
            {
              label: "Version 1.0",
              href: "https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md",
              position: "right"
            }
          ],
        },
        footer: {
          links: [
            {
              title: 'Docs',
              items: [
                {
                  label: 'Style Guide',
                  to: 'docs/',
                },
              ],
            },
            {
              title: 'Community',
              items: [
              ],
            },
          ],
        },
        gtag: {
            trackingID: "G-WT3D2HSL72",
            anonymizeIP: false, // Should IPs be anonymized?
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // routeBasePath: '/',
                    // Please change this to your repo.
                    //editUrl: "https://github.com/facebook/docusaurus/edit/master/website/",
                    //editUrl: null, // set as null to hide edit option
                },
                // blog: {
                //     showReadingTime: true,
                //     // Please change this to your repo.
                //     //editUrl: "https://github.com/facebook/docusaurus/edit/master/website/blog/",
                //     //editUrl: null, // set as null to hide edit option
                // },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
    stylesheets: [
        "https://fonts.googleapis.com/icon?family=Material+Icons",
    ],
};
