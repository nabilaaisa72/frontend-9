import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3307", //ganti dengan URL endpoint API anda
});

const apis = {
    getAllMahasiswa: () => api.get('/mahasiswa'),
    getMahasiswaByNim: (nim) => api.get(`/mahasiswa/${nim}`),
    createMahasiswa: (data) => api.post('/mahasiswa', data),
    UpdateMahasiswa: (nim, data) => api.put (`/mahasiswa/${nim}`, data),
    DeleteMahasiswa: (nim) => api.delete(`/mahasiswa/${nim}`)
};

export default apis;
