import Page from "../components/Page";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function About() {
  return (
    <Page>
      <p>
        I develop software applications using modern technologies. My journey
        started out with Java and Android development then slowly transitioned
        into web development. Although, I mainly use and love certain
        technologies. I am still a firm believer in "using the right tool for
        the right job", so I always expand my toolset when needed.
      </p>

      <h3>Contact me</h3>
      <p>
        <FontAwesomeIcon icon={faEnvelope} />
        &nbsp;
        <a href="mailto:yli.devs@gmail.com">yli.devs@gmail.com</a>
      </p>
    </Page>
  );
}
