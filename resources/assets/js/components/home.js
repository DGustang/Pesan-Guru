import React, {Component} from 'react';
import Tagline from '../../../../public/images/components/tagline.svg';



class Home extends Component {
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row align-items-center data-tagline">
                        <div className="col-7 data-tagline-item">
                            <div className="card">
                                <div className="card-body">
                                    <img src={Tagline} className="mx-auto d-block mb-3" />

                                    <h3 className="tagline">
                                        Cari Guru Privat dengan kualitas terbaik & <br /> berpengalaman!
                                    </h3>

                                    <form className="form-inline mt-5">
                                        <select classID="jenjang" name="" className="form-control mr-sm-2">
                                            <option value="0">
                                                Pilih nominal...
                                            </option>
                                        </select>
                                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="data-mentor">
                        <div className="card data-mentor-cover">
                            <div className="card-header data-mentor-cover-header">
                                <h3 className="mb-0">Rekomendasi Mentor</h3>
                            </div>

                            <div className="row">
                                <div className="col-4">
                                    <a href="" className="card-link">
                                        <div className="card">
                                            <div className="card-header">
                                                <div className="d-flex">
                                                    <div className="p-0">
                                                        <div className="badge-verificated">
                                                            <span className="badge badge-pill badge-primary">Terverifikasi</span>
                                                        </div>
                                                    </div>
                                                    <div className="ml-auto">
                                                        <div className="badge-ratings">
                                                            <span className="badge badge-pill badge-danger">3.2</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card-body">
                                                <div className="media">
                                                    <img src={Tagline} className="align-self-center mr-3" />
                                                    <div className="media-body">
                                                        <h5 className="mb-1">Gustang Zephys</h5>
                                                        <p className="text-uppercase mb-0">
                                                            matematika -sd, fisika, ipa, smp, berenang, main basket
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card-footer tagline-teachers">
                                                <p className="mb-0">
                                                    Saya akan bantu adik dalam belajar fisika, matematika & motivasi, supaya mendapatkan prestasi yang cemerlang agar dapat menggapai cita-cita.
                                                </p>
                                            </div>

                                            <div className="card-footer data-action">
                                                <table className="table table-sm m-0">
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            Makassar & Sekitarnya
                                                        </td>
                                                        <td width={150}>
                                                            <a href="" className="btn btn-block btn-primary">Lihat Detail</a>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;