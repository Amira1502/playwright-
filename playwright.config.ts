import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    testMatch: ["e2e/basic.interaction.spec.ts"],
    use: {
        headless:false,
        screenshot:'only-on-failure',
        video:'retain-on-failure'
    },
    reporter:[["dot"], ["json", {
        outputFile :"jsonReports/jsonReport.json"
    }],["html", {open:"always"}]]

}

export default config