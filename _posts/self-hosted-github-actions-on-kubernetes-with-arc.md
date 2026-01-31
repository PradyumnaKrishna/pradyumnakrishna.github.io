---
title: 'Self-Hosted GitHub Actions on Kubernetes with ARC'
excerpt: 'How NoScrubs runs self-hosted GitHub Actions on Kubernetes with ARC, DinD runners, a local registry, and a cache server.'
date: '2026-01-31'
---

At NoScrubs, CI/CD volume grew quickly and two pain points stood out: slow GitHub cache speeds and rising GitHub Actions costs. We needed tighter control over the build environment and a setup that stayed fast and reliable under load. The result is a self‑hosted GitHub Actions stack on Kubernetes built around ARC (Actions Runner Controller), a local registry, and a local cache server.

This post focuses on how the system works and why it exists. It is not a setup guide.

### The problem we set out to solve

Self‑hosted runners solve cost and control issues, but at scale they often require manual provisioning and capacity planning. As workflow volume rises, that approach struggles to keep up with job concurrency. We wanted elastic runners that scale through containers, while still using GitHub as the control plane.

ARC fits that model: it is a Kubernetes operator that orchestrates and scales self‑hosted runners, and it supports runner scale sets that can be autoscaled based on job demand. Runners can be ephemeral and container‑based, so capacity can expand and contract quickly as jobs arrive and complete.

### Architecture overview

GitHub remains the control plane, while all execution happens inside the cluster. ARC manages runner scale sets and provisions short‑lived runner pods. Each job runs in a clean environment, Docker builds are handled through a DinD sidecar, and all heavy build traffic stays local through the registry and cache server.

![Architecture](/assets/blog/self-hosted-github-actions-on-kubernetes-with-arc/architecture.png)

### Components and how they connect

**ARC** runs in the cluster and manages the runner scale set. When GitHub signals job demand, ARC creates ephemeral runner pods and cleans them up after completion. This keeps the runner fleet elastic and avoids stale state between runs.

**Runner pods (runner + DinD)** include two containers: the GitHub runner container that executes workflow steps, and a DinD sidecar that provides a Docker daemon for image builds. This keeps workflow compatibility high without installing Docker on host nodes or rewriting pipelines.

**Local registry** serves runner images and dependency layers to the runner pods. Keeping image traffic inside the cluster reduces external dependency and speeds up image pulls.

**Actions cache server** receives cache uploads and serves cache downloads for `actions/cache`. The cache server is a drop‑in replacement that works with the official `actions/cache` action without changing workflows. We use a custom runner image to point cache traffic to this server so cache reads and writes stay local.

### End‑to‑end job flow

1. A workflow is triggered in GitHub.
2. ARC creates a short‑lived runner pod for the job.
3. The runner pulls images from the local registry and builds via the DinD sidecar.
4. Cache uploads/downloads go through the local cache server.
5. The job completes and the runner pod is removed.

### What this solves and why it helps

This design keeps the build path local and predictable. It reduces GitHub Actions cost by cutting repeated external cache downloads, speeds up builds through local caching, and improves reliability under heavy usage because critical steps are no longer gated by the public internet. It also keeps runner environments consistent by using ephemeral, single‑job runners and lets us scale job concurrency by spinning up as many runner pods as needed.

### Try it

If you want to explore the manifests and runner image used for this stack, the repository is here:

https://github.com/PradyumnaKrishna/actions-runner-stack
