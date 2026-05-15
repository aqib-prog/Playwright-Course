# Playwright Automation Framework 🎭

A modern web automation framework built with Playwright and TypeScript.

## Tech Stack
- Playwright
- TypeScript
- Node.js
- GitHub Actions (CI/CD)

## What This Covers
- Page Object Model (POM)
- Cross browser testing (Chrome, Firefox, Safari)
- API Testing
- File Upload
- Scroll gestures
- Hover actions
- iFrame handling
- Fixtures
- Screenshots on failure
- Video recording
- CI/CD pipeline

## How to Run

### Setup
```bash
npm install
npx playwright install
```

### Run All Tests
```bash
npx playwright test
```

### Run Specific Browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run Headed Mode
```bash
npx playwright test --headed
```

### View Report
```bash
npx playwright show-report
```

## Project Structure
