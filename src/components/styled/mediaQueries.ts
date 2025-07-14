const sizes = {
  mobile: '768px',
  tablet: '1024px'
};

export const media = {
  mobile: (styles: string) => `
    @media (max-width: ${sizes.mobile}) {
      ${styles}
    }
  `,
  tablet: (styles: string) => `
    @media (max-width: ${sizes.tablet}) {
      ${styles}
    }
  `,
}