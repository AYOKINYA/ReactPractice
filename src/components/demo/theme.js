
const theme = {
    black: '#302D43',
    darkGrey: '#6F7A92',
    grey: '#ADB4C8',
    lightGrey: '#F9F9F9',
    greyBorder: '#ECECEC',
    blue: '#5887ff',
    purple: '#373063',
    largeFont: '2.2rem',
    middleFont: '1.6rem',
    smallFont: '1.4rem',
    flexMixin: (direction = 'row', align = 'center', justify = 'center') => `
    display:flex;
    flex-direction:${direction};
    align-items:${align};
    justify-content:${justify}
    `,
    title: () => `
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 1.2
    `,
    smallTitle: color => `
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.2;
    color: ${color};
    text-transform: capitalize;
    `,
    navBarFont: () => `
      font-size: 1.6rem;
      font-weight: 300;
      line-height: 2.4rem;
      color: #8F91AA;
    `,
    descFont: () => `
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 2.4rem;
    color: #ADB4C8;
    `,
    buttonFont: () => `
      color: #fff;
      font-size: 1.4rem;
      line-height: 2.1rem;
    `,
    tableFont: () => `
      font-size: 1.4rem;
      color: #6F7A92;
      line-height: 2.1rem;
    `,
    greenBtn: () => `
    background-color: #00d82c;
    box-shadow: 0px 5px 10px rgb(0 216 44 / 30%);
    color: #fff;
    `,
  };

  export default theme;