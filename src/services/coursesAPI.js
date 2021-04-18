import axiosClient from './axiosClient'
const coursesAPI = {
  getCourses: ()=>{
    return axiosClient.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc");
  },

  getCourseByCategory: (category)=>{
    const params = {
      maDanhMuc: category,
      maNhom: "GP01",
    }
    return axiosClient.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc", {params})
  }
}

export default coursesAPI


// Lưu ý nhớ phải dùng await trước khi gọi hàm
// const {data} = await courseAPI.get...