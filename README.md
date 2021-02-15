<h1 align="center">
  <img src="https://camo.githubusercontent.com/9918e4bb6372060094f6ee90ea0622f59133fa0d693dd3f72b2a33bc4d07aeea/68747470733a2f2f692e696d6775722e636f6d2f65385633464c7a2e706e67" alt="kite" />
</h1>
<div align="center">
  A batteries included React Native boilerplate
</div>

## Why?

<!--- Explain why we made this project -->

We got a lot of value starting off from Infinite Red's [Ignite](https://github.com/infinitered/ignite) boilerplate, but bit by bit stripped pieces of it away, replacing them with patterns/tech we're familiar with here at Tailwind. To prevent duplicating work for future mobile endeavors, this is our approach to a batteries included react native boilerplate.

## Getting Started

<!--- How to fork and set up the project -->

## Tech

<!--- Technologies used -->

- State Management: Redux + Redux Toolkit
- Navigation: React Navigation
- Component Lib: Custom
- CI/CD: Github Actions, Fastlane, & CodePush
- Testing: Jest & Detox

## Anatomy

<!--- Project Organization -->

```yml
- src
  - assets/
    - icons/
    - logo/
    - [domainName]/
  - components/
    - [FolderComponentName]/
      - index.tsx
      - stories.tsx
    - [ComponentName].tsx
  - config/
    - index.ts
  - domains/
    - core/
      App.tsx # App entry point
      screens/
        - ModalNavigator.tsx
        - AppNavigator.tsx
        - BottomTabNavigator.tsx
        - SplashScreen.tsx
    - [domainName]/
      - components/ # Same rules as global components
      - screens/
        - [ScreenName]Screen.tsx
        - [NavigatorName]Navigator.tsx
      - hooks/
        - use[HookName].ts
      - [subDomainName]/ # Same rules as parent
  - hooks/
    - use[HookName].ts
  - state/
    - index.ts
    - rootReducer.ts
    - [sliceName]Slice.ts
  - theme/
    - index.ts
  - @types/
```

## Future

<!--- Future plans for this project -->
