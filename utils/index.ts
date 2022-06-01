export const cssvars = (vars: {}) => {
  return Object.entries(vars).reduce(
    (vars, [name, value]) => ({ ...vars, [`--${name}`]: value }),
    {}
  )
}
