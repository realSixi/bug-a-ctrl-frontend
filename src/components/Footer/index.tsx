import './footer.scss'

const Footer = () => {
  return (
    <footer className={'footer container'}>

      <a target={'_blank'} href={'https://www.projektion.tv/impressum/'}>Impressum</a> |{' '}
      <a target={'_blank'} href={'https://www.projektion.tv/datenschutzerklaerung/'}>Datenschutzerkl√§rung</a>
    </footer>
  );
};

export default Footer;