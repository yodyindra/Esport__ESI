import { Link } from "react-router-dom";

function CreateNewPassword() {
  return (
    <>
      <main>
        <div className="col-sm-6 mx-auto mt-1">
          <div className="content">
            <div>
              <h1>
                <b>Buat Kata Sandi Baru</b>
              </h1>
              <h2>
                Belum memiliki akun? <Link to="#">Daftar</Link>
              </h2>
              <form>
                <div className="form-group">
                  <label for="inputPass" className="mt-3 mb-3">
                    <b>Kata Sandi</b>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPass"
                  />
                </div>

                <div className="form-group">
                  <label for="inputPass" className="mt-3 mb-3">
                    <b>Konfirmasi Kata Sandi Baru</b>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPass"
                  />
                </div>
              </form>

              <a href="email-notify2" className="nav-link">
                <button type="button" className="btn1 mt-3">
                  <b>ATUR KATA SANDI</b>
                </button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default CreateNewPassword;
