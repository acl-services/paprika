import Modal from "./Modal";
import FocusTrap from "./components/FocusTrap";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

Modal.FocusTrap = FocusTrap;
Modal.Header = Header;
Modal.Content = Content;
Modal.Footer = Footer;

export { Modal as default, FocusTrap, Header, Content, Footer };
