import React, {Component} from 'react';
import Tagline from '../../../../public/images/components/tagline.svg';

import  $ from "jquery"
import "select2"

class Home extends Component {
    componentDidMount(){
        $("#jenjang").select2({
            theme: "bootstrap"
        });
    }
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row align-items-center data-tagline">
                        <div className="col-10 data-tagline-item">
                            <div className="card">
                                <div className="card-body">
                                    <img src={Tagline} className="mx-auto d-block mb-3" />

                                    <h3 className="tagline">
                                        Cari Guru Privat dengan kualitas terbaik & <br /> berpengalaman!
                                    </h3>

                                    <table className="table table-sm mb-0 mt-5">
                                        <tbody>
                                        <tr>
                                            <td width={300}>
                                                <select id="jenjang" name="" className="form-control">
                                                    <option value="0">
                                                        Pilih Jenjang Pendidikan
                                                    </option>
                                                </select>
                                            </td>
                                            <td>
                                                <input className="form-control form-control-lg" type="search" placeholder="Coba 'Guru Matematika' " aria-label="Search" />
                                            </td>
                                            <td width={150}>
                                                <a href="" className="btn btn-lg btn-block btn-primary">Cari</a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="data-mentor mb-5">
                        <div className="card data-mentor-cover">
                            <div className="card-header data-mentor-cover-header">
                                <h3 className="mb-3">Rekomendasi Mentor</h3>
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
                                                        <td className="data-city">
                                                            Makassar & Sekitarnya
                                                        </td>
                                                        <td width={150} className="btn-action">
                                                            <a href="" className="btn btn-block btn-success">Lihat Detail</a>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </a>
                                </div>

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
                                                        <td className="data-city">
                                                            Makassar & Sekitarnya
                                                        </td>
                                                        <td width={150} className="btn-action">
                                                            <a href="" className="btn btn-block btn-success">Lihat Detail</a>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </a>
                                </div>

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
                                                        <td className="data-city">
                                                            Makassar & Sekitarnya
                                                        </td>
                                                        <td width={150} className="btn-action">
                                                            <a href="" className="btn btn-block btn-success">Lihat Detail</a>
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