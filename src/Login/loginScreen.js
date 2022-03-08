import "../Login/loginScreen.css";
import facebook from "../img/facebook.svg";
import google from "../img/google.svg";



function loginScreen(){
    return(
        <>
            <>
                <main>
                <div class="col-sm-6 offset-md-3 conten mt-4 pt-5">
      
                    <div >
                    <h1><b>Masuk</b></h1>
                    <h2>Belum memiliki akun?  <a href="#">Daftar</a></h2>
                    <form>
                    <div class="form-group">
                        <label for="inputEmail" class="mt-3 mb-3"><b>Email</b></label>
                        <input type="email" class="form-control mt-3 mb-3" id="inputEmail" placeholder="Cth. user@gmail.com" />
                    </div>
                    <div class="form-group">
                        <label for="inputPass"class="mt-3 mb-3"><b>Kata Sandi</b></label>
                        <input type="password" class="form-control" id="inputPass" />
                    </div>
                    </form>

                    <div class="mt-3 mb-3">
                        <a href="" >Lupa Kata Sandi?</a>
                    </div>

                    <a href="" class="nav-link"><button type="button" class="btn1 mt-3"><b>MASUK</b></button></a>
          
                        <div class="mt-3 mb-3">
                            <h3>Atau masuk menggunakan</h3>
                        </div>

                        <div class="d-flex flex-row justify-content-center mt-3 ">
                        <a href=""><button type="button" class="btn btn_4"><img src={facebook} style={width4}/>Facebook</button></a>
                        <a href=""><button type="button" class="btn btn_5 ml-3"><img src={google} />  Google</button></a>                                            </div>
                        </div>
                

                    </div>
                </main>
            </>
        </>

    );
}
export default loginScreen;