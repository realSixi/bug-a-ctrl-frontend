import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { useEffect, useState } from 'react';
import loginSlice from '../../redux/login.redux';
import { useNavigate } from 'react-router-dom';
import loginSelector from '../../redux/login.selector';
import Button from '../../components/Button';

const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  const username = useSelector(loginSelector.getUsername);
  const apikey = useSelector(loginSelector.getApikey);

  const [apiKeyCopied, setApiKeyCopied] = useState(false);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setApiKeyCopied(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [apiKeyCopied]);

  useEffect(() => {
    dispatch(loginSlice.checkLoginOrLogin(navigate));
  }, []);


  return <div>
    <h1>Willkommen</h1>
    <div>
      <p>
        Hey {username}, herzlichen Glückwunsch zu <b>deinem Baggerführerschein!</b>
      </p>

      <h3>Web-Steuerung benutzen</h3>
      <p>
        Wenn du schon total hibbelig bist und am liebsten sofort mit dem Baggern loslegen möchtest, dann kannst du dafür
        einfach unsere Web-Steuerung für den Bagger benutzen.
      </p>

      <div style={{textAlign: 'center', margin: 32,}}>
        <Button type={'raised'} size={'large'} target={'_blank'} href={`/demo/?apikey=${apikey}`}>
          Bagger-Demo App öffnen
        </Button>
      </div>

      <h3>Einen eigenen Controller entwickeln</h3>
      <p>
        Du willst dir mit einem Arduino / ESP einen eigenen Controller bauen, mit dem du per Gesten den Bagger steuern
        möchtest? Oder gibst du gerne Kommandos und willst Amazons Digitaler Assistentin die Steuerung des ProjektionTV
        Baggers beibringen?
      </p>
      <p>
        Mega! Informationen zu diesem Projekt und bald auch zu den Schnittstellen findest du im <Button
        href={'https://github.com/ProjektionTV/BugACtrl'}
        target={'_blank'}>Github</Button>.
      </p>
      <p>
        Um den Bagger über die REST-Schnittstelle zu steuern, benötigst du einen API-Key. Diesen bekommst du hier. Gib
        ihn nicht weiter, denn es ist ein persönlicher API-Key der mit <b>deinem Twitch-Account</b> und deinem
        "Baggerguthaben" verknüpft ist! <Button type={'raised'} onClick={() => {
        navigator.clipboard.writeText(apikey!!);
        setApiKeyCopied(true);
      }}>{apiKeyCopied ? 'Wurde kopiert' : 'API-Key in Zwischenablage kopieren'}</Button>
      </p>

    </div>

  </div>;
};

export default HomeScreen;