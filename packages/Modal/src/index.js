import Modal from "./Modal";
import Overlay from "./components/Overlay";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

Modal.Overlay = Overlay;
Modal.Header = Header;
Modal.Content = Content;
Modal.Footer = Footer;

export { Modal as default, Overlay, Header, Content, Footer };
