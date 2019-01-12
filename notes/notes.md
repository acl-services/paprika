# Paprika project

## Overview

`acl-ui-3` the precursor of Paprika was released on October 2016 after migrating and refactoring the code base of `acl-ui-2`. ReactJS was select as our main UI library.

The primary goal for acl-ui-3 back then was to distribute JS, CSS and HTML more easily.

We can agree that `acl-ui-3` accomplished the goal. Currently is being used in around nine application in our ecosystem successfully, helping developers to speed up the delivery time for features and apps.

Despite to proved to be relevant and useful for almost three years, some of `acl-ui-3` pain points are related to scalability which needs to be address to help our company to move faster in the incoming years.

## Pain points

The following are the most notable pain point in our library:

### Release process and versioning

Currently `acl-ui-3` use GitHub as a release mechanism, with the help of our CI we distribute our built code into a new repository, which works as our package repository.

One of the issues with this approach is versioning of our components; components don't have a versioning system, they relay in the versioning of the repository.

The previous issue increases the complexity for consuming our library because altering one component code forces the consumer developer to updated and fixes any new addition to the library each time they upgraded to a new version.

Even if the developer only needs to update one specific component, now is forced to fix and deal with the new additions to the library.

To solve this issue, we are planning to use a library named [Lerna](https://github.com/lerna/lerna). Lerna will help us in versioning and distribute each component in their own npm package.
With this, the consumer developer can import what they need from our library, as well use different versions of our components in their app.

### Easiness for reusing components (Controlled and Uncontrolled components)

Currently `acl-ui-3` lacks of support for `Controlled` and `Uncontrolled` components, most of our components are only Controlled components.

To help our consumer developers to build faster apps. Our components should be flexible enough, helping our developers to decide if they want to plug-and-play a component or control all the component props with their app state.

During the Paprika project, our intention is to _redesign_ all our component to behave as Controlled or Uncontrolled Components doing our best to improve the consumer developer experience.

Components to be Refactor

| .           | Implementation | Technical Pitch | A11y | Documentation |
| ----------- | :------------: | :-------------: | :--: | :-----------: |
| Popover     |       ✅       |                 |      |               |
| Sidepanel   |                |                 |      |               |
| Multiselect |                |                 |      |               |
| Button      |                |                 |      |               |
| L10n        |                |                 |      |               |

#### Accessibility as a second class citizen

A11y (Accessibility) was not considered as a first-class citizen when `acl-ui-3` was conceived, this time we are doing things correctly from the beginning.

> Accessibility is like making a good sauce; you have to mix all ingredients correctly from the beginning, not at the end and expected to taste good (like we do with accessibility most of the time)

All our components must have A11y in mind.

### Styling reusability and style pollution

In a complex environment where styles come from legacy code or styling frameworks like bootstrap or foundation, prevent overrides of css is a hard task.

We want to prevent polluting the global css scope with our component or let the global scope affects the look and feel of our component, as well we want to be flexible enough giving the consumer developer the opportunity of override our components in a secure fashion.

To solve the previous issue, we are going to use `Styled-components` for our component.

### Testing and Code Styling

Unified testing suite, `acl-ui-3` lacks a standard suite for testing components, we are fixing this in paprika the following are the selected tools for testing our new components.

- Styling => `Screener.io` replacing jest snapshots
- Interactivity => `Cypress.io` + window handles replacing webdriver.io
- Accessibility => `Axe`
- Performance => to be decide.
- Storybook => `manual` testing.
- Static Analysis => `eslint with React Plugin.`
- Format => `prettier`

### Documentation

`acl-ui-3` Lacks proper documentation, we want to address this issue, as our team grows and our project is going to be open source, documentation is the key for adoptions and transfer knowledge.

Documentation as well speeds up the time for onboarding people and speed up the process for creating apps.

Beautiful documentation is one of our goals!

### Goal

Make Paprika open source.

### Experimenting

One of the ideas for Paprika is consuming our component in designing tools like sketch or framer.

We think we can achieve this with Framer-X.
