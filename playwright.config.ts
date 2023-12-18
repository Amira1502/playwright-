import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    testMatch: ["e2e/login.spec.ts"]

}

export default config