import logo_white from '../image/logo_white.png';
import Typewriter from 'typewriter-effect';

export default function App() {
  return (
    <div>
      <img src={logo_white} style={{
        height: '75vh'
      }}alt="BigCo Inc. logo"/>
      <Typewriter id="HeaderFont"
        options={{
          strings: ['We Should Create Wave in Software'],
          autoStart: true,
          loop: true,
          wrapperClassName: "typeWriterText",
        }}
      />
    </div>
  );
}
