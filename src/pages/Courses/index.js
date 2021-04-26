import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getCoursesByCategory } from 'src/actions/courses';

export default function Courses() {
  const dispatch = useDispatch();
  const { category } = useParams();
  console.log(category)

  const { courses, isLoading, error } = useSelector((state) => state.courses)
  console.log(courses)

  // Được chạy mỗi khi param category thay đổi, để gọi lại API mới tương ứng với category mới
  useEffect(() => {
    //dispatch action gọi API lấy danh sách khóa học
    dispatch(getCoursesByCategory(category))
  }, [category])
  return (
    <div>
      <h1>{category} Courses </h1>
      <div className="container d-flex">
        <div class="card-group row">
          {courses.map((course) => {
            return (
              <div className="col-4">


                <div key={course.maKhoaHoc} className="card">
                  <img className="card-img-top w-100" style={{height:"200px"}} src={course.hinhAnh} alt="Card image cap" />
                  <div className="card-body">
                    <h4 className="card-title">{course.tenKhoaHoc}</h4>
                    <p className="card-text">{course.moTa}</p>
                  </div>
                </div>
              </div>



            )
          })
          }
        </div>

      </div>

    </div>
  )
}
