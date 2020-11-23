export const USER_FRAGMENT = `
  fragment UserParts of User{
    id
    name
    email
    firstName
    lastName
    following {
      caption
    }
  }
`