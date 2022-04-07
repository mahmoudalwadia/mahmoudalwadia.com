import Container from './Container';
/**
 * <Layout /> It's a page wrapper which provides every page the styles, navigation,
 * and the main structure.
 */
const Layout: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;
