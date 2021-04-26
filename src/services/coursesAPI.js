import axiosClient from './axiosClient'
const coursesAPI = {
  getCourses: ()=>{
    return axiosClient.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc");
  },

  getCoursesByCategory: (category)=>{
    const params = {
      maDanhMuc: category,
      maNhom: "GP01",
    }
    console.log(params)
    return axiosClient.get("/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc", {params})
  }
}

export default coursesAPI


// Lưu ý nhớ phải dùng await trước khi gọi hàm
// const {data} = await courseAPI.get...