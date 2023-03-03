import { useSelector } from 'react-redux';
import loginSelector from '../../redux/login.selector';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Button from '../../components/Button';


const LoginScreen = () => {

  const isLoggedIn = useSelector(loginSelector.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }

  }, [isLoggedIn]);

  return <div>
    <h1>Willkommen</h1>
    <p>
      Hallo und willkommen beim großen Baggern von ProjektionTV!
    </p>
    <p>
      Natürlich müssen wir erstmal Prüfen, ob du überhaupt befähigt bist, einen Bagger zu steuern. Aber keine Angst, das
      geht schnell und einfach.
    </p>
    <p>
      <ol>
        <li>
          Wir prüfen kurz <b>deine Twitch Daten</b>, damit du eine Verbindung zum Bagger herstellen können.
        </li>
        <li>
          Wir brauchen von dir ein <b>aktuelles Passfoto</b> und
        </li>
        <li>
          eine Kopie deines <b>EU-Führerscheins (Klasse L oder B)</b> um dir deinen Baggerführerschein auszustellen.
        </li>
      </ol>
      <i>Natürlich nur ein Spaß. Meld dich einfach über dein Twitch Konto an und schon kann es losgehen!</i>
    </p>

    <div style={{textAlign: 'center', marginTop: 24,}}>
      <Button size={'large'} type={'raised'} href={'/auth/login'}><img src={require('../../assets/twitch-glitch-48-black.png')}/>Mit Twitch Anmelden</Button>
    </div>
  </div>;
};

export default LoginScreen;