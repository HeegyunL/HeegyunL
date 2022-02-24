import { bottom } from "@popperjs/core";
import Link from "next/link";
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";
import { useSelector } from "react-redux";
import styles from "../components/layout.module.css";
const AppBar = () => {
  return (
    <Navbar
      bg=""
      expand="lg"
      className=""
      style={{ width: "", borderBottom: "solid" }}
    >
      <Container className="">
        <Navbar.Brand className="">
          <Link href="/">
            <img style={{ width: "135px" }} src="/logo.png" alt="logo" />
          </Link>
        </Navbar.Brand>
        <div className=" " style={{}}>
          <Nav
            className=""
            style={{
              width: "",
              position: "absolute",
              bottom: "0%",
              right: "10%",
            }}
          >
            <Nav.Link className="" style={{}}>
              <a href="/" className="fs-5">
                HOME
              </a>
              <a
                className="fs-5"
                style={{ marginLeft: "1vw" }}
                href="/partner/information/list"
              >
                헬스장 정보
              </a>
              <a
                className="fs-5"
                href="/partner/reservation/list"
                style={{ marginLeft: "1vw" }}
              >
                예약 내역
              </a>
              <a
                className="fs-5"
                href="/partner/ptDiary/list"
                style={{ marginLeft: "1vw" }}
              >
                PT 일지
              </a>
            </Nav.Link>
            <button className="float-end ms-2 mb-2" style={{ height: "" }}>
              로그인
            </button>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

export default AppBar;
