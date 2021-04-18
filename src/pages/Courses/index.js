import React, {useEffect} from 'react'
import { useParams } from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {getCourseByCategory} from 'src/actions/courses';

export default function Courses() {
  const dispatch = useDispatch();
  const {category} = useParams();
  console.log(category)
  
  const {courses, isLoading, error} = useSelector((state)=> state.courses)
  console.log(courses)

  // Được chạy mỗi khi param category thay đổi, để gọi lại API mới tương ứng với category mới
  useEffect(() => {
    //dispatch action gọi API lấy danh sách khóa học
    dispatch(getCourseByCategory(category))
  }, [category])
  return (
    <div>
      <h1>Courses List By Category</h1>
    </div>
  )
}
