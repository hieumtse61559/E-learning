import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
// Controlled Component : Control tất cả mọi thứ trên giao diện bằng state, props
import { Input, FormGroup, Label, Alert } from 'reactstrap'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

import {useDispatch, useSelector} from 'react-redux'
import {login} from 'src/actions/auth'
// useLocation để lấy query param trên url (?.....)
import {Redirect, useLocation } from 'react-router-dom'
import qs from 'qs';




// Tạo schema validation
const schema = yup.object().shape({
  taiKhoan: yup.string().required("Tài khoản không được để trống").min(5, "Tài khoản phải từ 5 đến 20 kí tự").max(20, "Tài khoản phải từ 5 đến 20 kí tự"),
  matKhau: yup.string().required("Mật khẩu không được để trống"),
})

// Uncontrolled Component: Control giao diện không thông qua state, props
// Cả useState lẫn useRef đều dùng để lưu trữ data
// Khác: khi useState thay đổi component bị render lại, useRef thay đổi component không bị render lại
export default function LoginPage() {
  // const inputTaiKhoan = useRef();
  // const inputMatKhau = useRef();
  const dispatch = useDispatch();
  const {userInfo, isLoading, error} = useSelector(state => state.auth);
  const location = useLocation()


  // register đăng ký key cho một ô input trong form
  const { register, formState: { errors }, handleSubmit } = useForm(
    {resolver: yupResolver(schema)}
    );

  const handleLogin = (values) => {
    // console.log(inputTaiKhoan.current.value);
    // console.log(inputMatKhau.current.value);
    console.log(values)
    //dispactch action Đăng 
    
    dispatch(login(values));
  }

  // userInfo có data => đã đăng nhập sẽ chuyển người dùng về trang Home
  if(userInfo){
    // Line 51-56 xử lí việc đăng nhập Admin redirect đến trang Admin sau khi đăng nhập thành công
    const {redirectTo} = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    })
    if(redirectTo) {
      return <Redirect to={redirectTo}/>
    }
    // Nếu không có gì thì cứ redirect đến trang Home sau khi đăng nhập
    return <Redirect to="/" />
  }
  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <h1>Login Page</h1>
      <div className="form-group">
        <label >Tài khoản</label>
        <input type="text" className="form-control" {...register("taiKhoan", 
        // Sử dụng yup để validate nên đoạn này không cần thiết nữa
        // {
        //   required: {
        //     value: true,
        //     message: "Tài khoản không được để trống",
        //   },
        //   minLength: {
        //     value: 5,
        //     message: "Tài khoản phải từ 5 đến 20 kí tự",
        //   },
        //   maxLength: {
        //     value: 20,
        //     message: "Tài khoản phải từ 5 đến 20 kí tự"
        //   }
        // }
        )} />
        {errors.taiKhoan && (
          <div className="alert alert-danger">
            {errors.taiKhoan.message}
          </div>
        )}
      </div>

      {/* <div className="form-group">
        <label >Mật khẩu</label>
        <input type="text" className="form-control" {...register("matKhau", { required: true })} />
        {errors.matKhau && (
          <div className="alert alert-danger">
            Mật khẩu không được để trống
          </div>
        )}
      </div> */}

      <FormGroup>
        <Label>Mật khẩu</Label>
        <Input type="text" className="form-control" {...register("matKhau", {
          required: {
            value: true,
            message: "Mật khẩu không được để trống"
          }
        })}></Input>
        {errors.matKhau && <Alert color="danger">{errors.matKhau.message}</Alert>}
      </FormGroup>

      {error && <Alert color="danger">{error}</Alert>}

      <button className="btn btn-success">Đăng nhập</button>

    </form>
  )
}
