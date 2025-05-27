function welcome(name: string | null) {
  if (name === null) {
    return `Welcome!`;
  }
  return `Welcome, ${name}!`;
}
