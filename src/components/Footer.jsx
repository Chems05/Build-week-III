import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoMdSettings } from "react-icons/io";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { IoShieldHalf } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="text-black mt-5 p-4">
      <Container>
        <Row>
          <Col style={{ color: 'grey', textDecoration: 'none' }} md={2} className="d-none d-md-block">
          
            <ul className="list-unstyled">
            <li className="competence-link">
                <a style={{ color: 'grey', textDecoration: 'none', fontSize: '12px' }} href="#">
                <p className="competence-link ">  Informazioni </p>
                </a>
              </li>
              <li className="competence-link">
                <a style={{ color: 'grey', textDecoration: 'none', fontSize: '12px' }} href="#">
                <p className="competence-link "> Linee guida della community </p>
                </a>
              </li>
              <li className="competence-link">
                <a href="#" style={{ color: 'grey', textDecoration: 'none', fontSize: '12px' }}>
                <p className="competence-link ">  Privacy e condizioni </p>
                </a>
              </li>
              <li className="competence-link">
                <a href="#" style={{ color: 'grey', textDecoration: 'none', fontSize: '12px' }}>
                <p className="competence-link "> Sales Solutions </p>
                </a>
              </li>
              <li >
                <a className="text-secondary " href="#" style={{ textDecoration: 'none', fontSize: '12px' }}>
                 <p className="competence-link ">  Centro sicurezza</p>
                </a>
              </li>
            </ul>
            <p style={{ color: 'grey', textDecoration: 'none', fontSize: '12px' }}>LinkedIn Corporation © 2024</p>
          </Col>
          <Col style={{ color: 'grey' }} md={2} className="d-none d-md-block">
            
            <ul className="list-unstyled">
            <li className="competence-link">
                <a href="#" style={{ color: 'grey', textDecoration: 'none', fontSize: '12px' }}>
                <p className="competence-link "> Accessibilità </p>
                </a>
              </li>
              <li className="competence-link">
                <a  href="#" style={{ color: 'grey', textDecoration: 'none', fontSize: '12px' }}>
                <p className="competence-link "> Carriera </p>
                </a>
              </li>
              <li className="competence-link">
                <a href="#" style={{ color: 'grey', textDecoration: 'none', fontSize: '12px' }}>
                <p className="competence-link ">  Opzioni per gli annunci pubblicitari </p>
                </a>
              </li>
              <li className="competence-link">
                <a href="#" style={{ color: 'grey', textDecoration: 'none', fontSize: '12px' }}>
                <p className="competence-link ">  Mobile </p>
                </a>
              </li>
            </ul>
          </Col>
          <Col style={{ color: 'grey', textDecoration: 'none', fontSize: '12px' }} md={2} className="d-none d-md-block">
            
            <ul className="list-unstyled">
            <li className="my-1 competence-link">
                <a href="#" style={{ color: 'grey', textDecoration: 'none', fontSize: '12px' }}>
                <p className="competence-link "> Talent Solutions </p>
                </a>
              </li>
              <li className="my-1 competence-link">
                <a href="#" style={{ color: 'grey', textDecoration: 'none', fontSize: '12px' }}>
                <p className="competence-link "> Soluzioni di marketing </p>
                </a>
              </li>
              <li className="my-1 competence-link">
                <a href="#" style={{ color: 'grey', textDecoration: 'none', fontSize: '12px' }}>
                <p className="competence-link ">  Pubblicità </p>  
                </a>
              </li>
              <li className="my-1 competence-link">
                <a href="#" style={{ color: 'grey', textDecoration: 'none', fontSize: '12px' }}>
                <p className="competence-link ">Piccole imprese </p>  
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className="d-flex aling-items-center competence-link" style={{ color: 'grey', textDecoration: 'none', fontSize: '12px' }}>
              {" "}
              <HiQuestionMarkCircle  /> Domande?
            </h5>
            <p className="competence-link" style={{ color: 'grey', textDecoration: 'none', fontSize: '12px' }}>Visita il nostro Centro assistenza.</p>
            <h5 className="d-flex aling-items-center competence-link" style={{ color: 'grey', textDecoration: 'none', fontSize: '12px' }}>
              {" "}
              <IoMdSettings /> Gestisci il tuo account e la tua privacy
            </h5>
            <p className="competence-link" style={{ color: 'grey', textDecoration: 'none', fontSize: '12px' }}>Vai alle impostazioni</p>
            <h5 className="d-flex aling-items-center competence-link" style={{ color: 'grey', textDecoration: 'none', fontSize: '12px' }}>
              {" "}
              <IoShieldHalf />
              Trasparenza sui contenuti consigliati
            </h5>
            <p className="competence-link"style={{ color: 'grey', textDecoration: 'none', fontSize: '12px' }}>Scopri di più sui contenuti consigliati.</p>
          </Col>
          <Col md={3}>
            <h5 style={{ color: 'grey',  fontSize: '12px' }} >Seleziona lingua</h5>
            <select style={{ color: 'grey', textDecoration: 'none',  }}>
            <option value="en">English</option>
              <option value="es">Español (Spanish)</option>
              <option value="fr">Français (French)</option>
              <option value="de">Deutsch (German)</option>
              <option value="it">Italiano (Italian)</option>
              <option value="pt">Português (Portuguese)</option>
              <option value="zh">中文 (Chinese)</option>
              <option value="ja">日本語 (Japanese)</option>
              <option value="ko">한국어 (Korean)</option>
              <option value="ru">Русский (Russian)</option>
              <option value="ar">العربية (Arabic)</option>
              <option value="hi">हिन्दी (Hindi)</option>
              <option value="bn">বাংলা (Bengali)</option>
              <option value="tr">Türkçe (Turkish)</option>
              <option value="nl">Nederlands (Dutch)</option>
              <option value="vi">Tiếng Việt (Vietnamese)</option>
              <option value="th">ไทย (Thai)</option>
              <option value="pl">Polski (Polish)</option>
              <option value="sv">Svenska (Swedish)</option>
              <option value="cs">Čeština (Czech)</option>
              <option value="el">Ελληνικά (Greek)</option>
              <option value="hu">Magyar (Hungarian)</option>
              <option value="fi">Suomi (Finnish)</option>
              <option value="da">Dansk (Danish)</option>
              <option value="no">Norsk (Norwegian)</option>
              <option value="id">Bahasa Indonesia (Indonesian)</option>
              <option value="ms">Bahasa Melayu (Malay)</option>
              <option value="fa">فارسی (Persian)</option>
              <option value="he">עברית (Hebrew)</option>
              <option value="ro">Română (Romanian)</option>
              <option value="sk">Slovenčina (Slovak)</option>
             
            </select>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
