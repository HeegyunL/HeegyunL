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
      className="mx-auto"
      style={{ width: "100%", borderBottom: "solid" }}
    >
      <Container className="w-100">
        <Navbar.Brand className="ms-5">
          <Link href="/">
            <img style={{ width: "130px" }} src="/logo.png" alt="logo" />
          </Link>
        </Navbar.Brand>
        <div className=" justify-content-end me-3">
          <div className="d-flex">
            <div>
              <div className="input-group input-group-sm mb-3">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-sm"
                  style={{ width: "80px", height: "20px" }}
                >
                  이름
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="inputGroup-sizing-sm"
                  style={{ width: "100px", height: "20px" }}
                />
              </div>
              <div className="input-group input-group-sm mb-3">
                <span
                  className="input-group-text text-nowrap "
                  id="inputGroup-sizing-sm"
                  style={{ width: "80px", height: "20px" }}
                >
                  사업자번호
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  style={{ width: "100px", height: "20px" }}
                />
              </div>
            </div>
            <button className="ms-3" style={{ height: "56px" }}>
              로그인
            </button>
          </div>
          <div>
            <Nav className="me-auto d-flex">
              <Nav.Link>
                <Link href="/">
                  <a href="/">HOME</a>
                </Link>
                <Link href="/partner/information/list">
                  <a
                    style={{ marginLeft: "1vw" }}
                    href="/partner/information/list"
                  >
                    헬스장 정보
                  </a>
                </Link>
                <Link href="/partner/reservation/list">
                  <a
                    href="/partner/reservation/list"
                    style={{ marginLeft: "1vw" }}
                  >
                    예약 내역
                  </a>
                </Link>
                <Link href="/partner/ptDiary/list">
                  <a href="/partner/ptDiary/list" style={{ marginLeft: "1vw" }}>
                    PT 일지
                  </a>
                </Link>
              </Nav.Link>
            </Nav>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default AppBar;
