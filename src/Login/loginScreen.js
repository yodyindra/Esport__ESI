import "../Login/loginScreen.css";
import { Link } from "react-router-dom";
import facebook from "../img/facebook.svg";
import google from "../img/google.svg";

const width1 = {
  width: 10
};
const width2 = {
  width: 20
};
const width3 = {
  width: 30
};
const width4 = {
  width: 40
};
const width5 = {
  width: 50
};
const width8 = {
  width: 80
};

function loginScreen() {
  return (
    <>
      <>
        <main>
          <div class="col-sm-6 offset-md-3 conten mt-4 pt-5">
            <div>
              <h1>
                <b>Masuk</b>
              </h1>
              <h2>
                Belum memiliki akun? <Link to="/register">Daftar</Link>
              </h2>
              <form>
                <div class="form-group">
                  <label for="inputEmail" class="mt-3 mb-3">
                    <b>Email</b>
                  </label>
                  <input
                    type="email"
                    class="form-control mt-3 mb-3"
                    id="inputEmail"
                    placeholder="Cth. user@gmail.com"
                  />
                </div>
                <div class="form-group">
                  <label for="inputPass" class="mt-3 mb-3">
                    <b>Kata Sandi</b>
                  </label>
                  <input type="password" class="form-control" id="inputPass" />
                </div>
              </form>

              <div class="mt-3 mb-3">
                <Link to="/forgot-password">Lupa Kata Sandi?</Link>
              </div>

              <nav className="text-center">
                <Link to="/homepage">
                  <button style={{ margin: 10 }}>NEXT</button>
                </Link>
              </nav>

              <div class="mt-3 mb-3">
                <h3>Atau masuk menggunakan</h3>
              </div>

              <div class="d-flex flex-row justify-content-center mt-3 ">
                <a href="">
                  <button type="button" class="btn btn_4">
                    <img src={facebook} />
                    Facebook
                  </button>
                </a>
                <a href="">
                  <button type="button" class="btn btn_5 ml-3">
                    <img src={google} /> Google
                  </button>
                </a>
              </div>
            </div>
          </div>
        </main>
      </>
    </>
  );
}
export default loginScreen;
