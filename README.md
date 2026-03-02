# Automation Architecture Lab  
_A Modernization & Operational Decision Framework_

![CI](https://github.com/MIBoy54/automation-architecture-lab/actions/workflows/ci.yml/badge.svg)

---

## Executive Summary

This repository contains a structured automation architecture lab designed to evaluate multiple automation frameworks under identical validation conditions.

The objective is not feature comparison.  
The objective is operational maturity evaluation.

Rather than analyzing syntax or developer preference, this lab examines architectural behavior and enterprise impact across:

- Execution model design  
- CI/CD integration readiness  
- Licensing and governance implications  
- Parallelization and scalability considerations  
- Dev ecosystem alignment  
- Long-term modernization trajectory  

Frameworks evaluated:

- **Katalon Studio** — Selenium-based execution model  
- **Cypress** — In-browser runtime execution model  
- **Playwright** — Browser-isolated execution model  

---

## Evaluation Design

Each framework implementation validates the same controlled smoke scenario to eliminate feature bias and isolate execution behavior.

### Controlled Scenario

- Target: LinkedIn public guest landing page  
- Validation: Primary call-to-action visibility  
- Assertions:
  - "Sign in" element visible  
  - "Join now" element visible  
- Deterministic pass/fail logic  
- Suite-level orchestration  

No advanced framework features were leveraged to prevent architectural skew or optimization bias.

---

## Repository Structure
automation-architecture-lab/
├── automation-architecture-katalon/
├── cypress-project/
├── playwright-project/
└── .github/

Each project is self-contained and independently executable.

---

## Execution Capability Matrix

| Capability        | Katalon           | Cypress   | Playwright |
|------------------|-------------------|-----------|------------|
| Local Execution  | Supported         | Supported | Supported  |
| Suite Execution  | Supported         | Supported | Supported  |
| CLI Execution    | Requires KRE      | Native    | Native     |
| CI Integration   | License-dependent | Native    | Native     |
| Parallel Scaling | License-dependent | Limited   | Native     |

---

## Katalon Baseline Considerations

The Katalon implementation provides Selenium-based baseline validation under Studio execution.

CLI execution requires Katalon Runtime Engine (KRE) entitlement.  
This introduces licensing and governance considerations when scaling CI/CD execution across environments.

This constraint is documented to reflect enterprise operational realities, not tooling limitations.

---

## CI/CD Implications

Cypress and Playwright provide native CLI execution and integrate directly into CI pipelines without additional licensing requirements.

Katalon requires Runtime Engine licensing for CLI-based pipeline execution, which should be considered in modernization and standardization planning.

---

## Strategic Intent

This lab supports enterprise discussion around:

- Sustainable automation architecture  
- Governance-aware CI scaling  
- Dev-aligned tooling strategy  
- Migration economics  
- Modernization decision frameworks  

The findings are intended to inform architecture and operational decisions rather than promote specific tooling.

---

**Author**  
Bruce R. Lewis  
Enterprise Quality Modernization & Automation Architecture