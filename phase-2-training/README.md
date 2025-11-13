# Context API
  context api is mainly used to avoid prop drilling.
  normally if we want to pass data from parent to a deeply nested component,
  we have to keep passing it through every component in between even if they don’t use it.
  that becomes messy when the app grows.

  so instead of that, context api lets us create a central store
  where we can provide some value at a higher level and directly access it in any child component,
  without manually passing props.

  it’s like having global data for react components —
  commonly used for things like user info, theme, language, or global filters.
