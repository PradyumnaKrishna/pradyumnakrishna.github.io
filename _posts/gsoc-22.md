---
title: 'Google Summer of Code 2022'
excerpt: 'My Google Summer of Code experience at in-toto, CNCF.'
coverImage: '/assets/blog/gsoc-22/cover.jpg'
date: '2022-09-12'
ogImage:
  url: '/assets/images/gsoc-22/cover.jpg'
---

Hello everyone. I am Pradyumna Krishna.

During this summer, as part of Google Summer of Code, I contributed to [in-toto](https://in-toto.io), an open source project that comes under the Cloud Native Computing Foundation (CNCF). I am going to share my GSoC experience and project details.

## GSoC Project

### What is in-toto?

in-toto is a framework that protects the software supply chain. It does so by verifying that each task in the chain is carried out as planned, by authorized personnel only, and that the product is not tampered with in transit.

### Project Description

My GSoC project was to **implement DSSE** signature wrapper or envelope for the in-toto project.

**Why DSSE Implementation?**

in-toto framework generates metadata files that are represented inside a signature wrapper or an envelope. in-toto current signature wrapper requires canonicalization, which should be avoided for security reasons.

[**Dead Simple Signing Envelope (DSSE)**](https://github.com/secure-systems-lab/dsse) is a specification for signing methods and formats that removes current dependency on canonicalization and supports more serialization methods.

### Why did I choose this project?

I was looking for a GSoC project that would fit my skill set. I bookmarked several projects, did some research, and gathered information about them.

I chose the DSSE implementation project because it deals with software security and cryptography. I like to work on projects related to cybersecurity. Python programming was a plus for me, which makes me confident about this project.

## Contributions

I am going to summarise my contributions towards in-toto, which I have done during the Google Summer of Code period. I won’t go into much technical detail, and I’ll try to keep it short.

### Community Bonding Period

During my community bonding period, mentors gave me time to understand the codebase and pick up small issues that could be fixed right away. I wrote patches for some of those issues. I planned the DSSE implementation process with mentors and divided it into multiple tasks.

I divided my project into two major phases. These two phases also indicated two GSoC evaluations.

- First Phase: **Implement DSSE Envelope.**
- Second Phase: **Add DSSE support for in-toto.**

### First Phase

I started by adding a container for DSSE Envelope and completed it by implementing the protocol for the creation and verification of DSSE signatures. In the end, we got a working, fully tested, and documented DSSE Signature Wrapper.

I managed to complete some tasks in parallel so that we don’t lose time. I spent some time with the signature wrapper used by the [python-tuf](https://github.com/theupdateframework/python-tuf) project, and used their implementation for signature verification.

#### Pull Requests

**Merged**

- Add DSSE Envelope ([in-toto/securesystemslib#1](https://github.com/in-toto/securesystemslib/pull/1))
- Add SSlibKey Implementation ([in-toto/securesystemslib#4](https://github.com/in-toto/securesystemslib/pull/4))
- Add GPGSignature to Envelope ([in-toto/securesystemslib#5](https://github.com/in-toto/securesystemslib/pull/5))
- Add GPGKey Implementation ([in-toto/securesystemslib#6](https://github.com/in-toto/securesystemslib/pull/6))
- Sign and verify ([in-toto/securesystemslib#2](https://github.com/in-toto/securesystemslib/pull/2))

**Pull Request that couldn't make it**

- Generic Payload Parser for DSSE ([in-toto/securesystemslib#3](https://github.com/in-toto/securesystemslib/pull/3)): A working prototype for DSSE payload deserialization, closed in favour of a different method to deserialize payload.

### Second Phase

I started to add DSSE metadata support, keeping backward compatibility in mind. The implementation was causing a lot of duplication. We decided to hold off, do some research, and play around with the code.

After a lot of prototyping, it all comes to an end when in-toto has abstraction between metadata classes. I was successful in adding DSSE support and transitioning the metadata wrapper in in-toto. But this prototyping took a long time, and GSoC was coming to an end, which left us with a small time frame to review and merge the pull request.

#### Pull Requests

**Merged**

- Add Serialization Module ([in-toto/securesystemslib#9](https://github.com/in-toto/securesystemslib/pull/9))
- Serialization and Metadata API changes ([in-toto/securesystemslib#12](https://github.com/in-toto/securesystemslib/pull/12))

**Under Review**

- Add DSSE support for in-toto ([in-toto/in-toto#503](https://github.com/in-toto/in-toto/pulls))

## Overall Experience

It was an amazing experience, working on a project that could save us from supply chain attacks and be a part of the in-toto community.

### What have I gained?

During this summer, I learned a lot, and here is a quick summary.

- I gained more confidence in contributing to and working on bigger projects.
- Improvement in my communication skills. At the beginning of GSoC, I was very nervous and underconfident. The support of mentors never set me back.
- I improved my programming skills, learned how to write proper documentation and commit messages while making changes.
- I learned more about Python, cryptography, and cybersecurity.

### Thanks to mentors

I would like to thank my mentors, Lukas Pühringer, Aditya Sirish, and Santiago Torres Arias, for supporting me throughout GSoC and sharing their knowledge with me.
